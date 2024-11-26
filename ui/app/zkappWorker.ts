import { Mina, PublicKey, fetchAccount, PrivateKey, AccountUpdate } from 'o1js';
import * as Comlink from "comlink";
import { Factory } from '../../contracts/src/Factory';

type Transaction = Awaited<ReturnType<typeof Mina.transaction>>;

const state = {
  FactoryInstance: null as null | typeof Factory,
  zkappInstance: null as null | Factory,
  transaction: null as null | Transaction,
};

export const api = {
  async setActiveInstanceToLocal() {
    const useProof = false;

    const Local = await Mina.LocalBlockchain({ proofsEnabled: useProof });
    console.log('Local network instance configured');
    Mina.setActiveInstance(Local);

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
    const currentHash = await state.zkappInstance!.hash_of_array.get();
    return currentHash.toString();
  },
};

// Expose the API to be used by the main thread
Comlink.expose(api);
