import { Mina, PublicKey, fetchAccount, PrivateKey, AccountUpdate, Struct, Field } from 'o1js';
import * as Comlink from "comlink";
import { Factory } from '../../contracts/src/Factory';
import { stat } from 'fs';

type Transaction = Awaited<ReturnType<typeof Mina.transaction>>;

const state = {
  FactoryInstance: null as null | typeof Factory,
  zkappInstance: null as null | Factory,
  transaction: null as null | Transaction,
  Mina: null as null | any,
};

class Line extends Struct({
  values: [Field, Field, Field, Field, Field, Field, Field],
}) {}

class Gamemap extends Struct({
  gamemap: [Line, Line, Line, Line, Line, Line, Line],
}) {}

const gameStruct = new Gamemap({
  gamemap : [
      new Line({
          values: [Field(7), Field(1), Field(0), Field(0), Field(0), Field(0), Field(0)]
      }),
      new Line({
          values: [Field(3), Field(2), Field(0), Field(0), Field(0), Field(0), Field(0)]
      }),
      new Line({
          values: [Field(0), Field(0), Field(0), Field(0), Field(0), Field(0), Field(0)]
      }), 
      new Line({
          values: [Field(0), Field(0), Field(0), Field(0), Field(0), Field(0), Field(0)]
      }), 
      new Line({
          values: [Field(0), Field(0), Field(0), Field(0), Field(0), Field(0), Field(0)]
      }),
      new Line({
          values: [Field(0), Field(0), Field(0), Field(0), Field(0), Field(0), Field(0)]
      }),
      new Line({
          values: [Field(0), Field(0), Field(0), Field(0), Field(0), Field(0), Field(0)]
      })
  ]
});

export const api = {
  async setActiveInstanceToLocal() {
    const useProof = false;

    const Local = await Mina.LocalBlockchain({ proofsEnabled: useProof });
    console.log('Local network instance configured');
    Mina.setActiveInstance(Local);
    state.Mina = Local;

    const deployerAccount = Local.testAccounts[0];
    const deployerKey = deployerAccount.key;

    const zkAppPrivateKey = PrivateKey.random();
    const zkAppAddress = zkAppPrivateKey.toPublicKey();
    console.log("1");

    // create an instance of Square - and deploy it to zkAppAddress
    const zkAppInstance = new Factory(zkAppAddress);
    console.log("2");

    state.zkappInstance = zkAppInstance;

    const deployTxn = await Mina.transaction(deployerAccount, async () => {
        AccountUpdate.fundNewAccount(deployerAccount);
        await zkAppInstance.deploy();
    });
    console.log("3");

    await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();
  },
  async loadContract() {
    const { Factory } = await import('../../contracts/build/src/Factory.js');
    state.FactoryInstance = Factory;
  },
  async compileContract() {
    await state.FactoryInstance!.compile();
  },
  async getHash() {
    const currentHash = await state.zkappInstance?.hash_of_array.fetch();
    return currentHash?.toString();
  },

  async getCoins() {
    const currentCoins = await state.zkappInstance?.coins.get();
    return currentCoins?.toString();
  },

  async work(gameArr : Array<number>) {
    const senderAccount = state.Mina.testAccounts[1];
    const senderKey = senderAccount.key;

    for(let i= 0; i < 49;i++) {
      gameStruct.gamemap[parseInt((i/7).toString())].values[i%7] = Field(gameArr[i]);
    }

    const txn1 = await Mina.transaction(senderAccount, async () => {
      await state.zkappInstance?.work(gameStruct);
    });

    await txn1.prove();
    console.log("Proven");
    await txn1.sign([senderKey]).send();

  },

  async changeMap(i: number, j:number, value: number, gameArr : Array<number>) {
    const senderAccount = state.Mina.testAccounts[1];
    const senderKey = senderAccount.key;

    const txn1 = await Mina.transaction(senderAccount, async () => {
      await state.zkappInstance?.changeMap(Field(i),Field(j),Field(value),gameStruct);
    });

    await txn1.prove();
    console.log("Proven");
    await txn1.sign([senderKey]).send();
    console.log("map hash has changed");

    for(let i= 0; i < 49;i++) {
      gameStruct.gamemap[parseInt((i/7).toString())].values[i%7] = Field(gameArr[i]);
    }
  }
};

// Expose the API to be used by the main thread
Comlink.expose(api);
