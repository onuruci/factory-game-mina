import { Field, Struct } from 'o1js';
import * as Comlink from "comlink";

class Line extends Struct({
  values: [Field, Field, Field, Field, Field, Field, Field],
}) {}

class Gamemap extends Struct({
  gamemap: [Line, Line, Line, Line, Line, Line, Line],
}) {}

export default class ZkappWorkerClient {
  // ---------------------------------------------------------------------------------------
  worker: Worker;
  // Proxy to interact with the worker's methods as if they were local
  remoteApi: Comlink.Remote<typeof import('./zkappWorker').api>;

  constructor() {
    // Initialize the worker from the zkappWorker module
    const worker = new Worker(new URL('./zkappWorker.ts', import.meta.url), { type: 'module' });
    // Wrap the worker with Comlink to enable direct method invocation
    this.remoteApi = Comlink.wrap(worker);
  }

  async setActiveInstanceToLocal() {
    return this.remoteApi.setActiveInstanceToLocal();
  }

  async loadContract() {
    return this.remoteApi.loadContract();
  }

  async compileContract() {
    return this.remoteApi.compileContract();
  }

  async getHash(): Promise<String | undefined> {
    const result = await this.remoteApi.getHash();
    return result;
  }

  async getCoins(): Promise<String | undefined> {
    const result = await this.remoteApi.getCoins();
    return result;
  }

  async work(gameMap : Array<number>): Promise<String | undefined> {
    await this.remoteApi.work(gameMap);

    const result = await this.remoteApi.getCoins();
    return result;
  }

  async changeMap(i: number, j: number, value: number, gameArr : Array<number>) {
    await this.remoteApi.changeMap(i, j, value, gameArr);
  }

}
