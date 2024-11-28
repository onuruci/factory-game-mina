'use client';
import { Field, PrivateKey } from 'o1js';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import './reactCOIServiceWorker';
import ZkappWorkerClient from './zkappWorkerClient';


import FaucetDirect from './components/FaucetDirect';
import Setup from './components/Setup';
import TabPanel from './components/TabPanel';
import Game from './components/Game/Game';

let transactionFee = 0.1;
const ZKAPP_ADDRESS = 'B62qpXPvmKDf4SaFJynPsT6DyvuxMS9H1pT4TGonDT26m599m7dS9gP';

export default function Home() {
  const [zkappWorkerClient, setZkappWorkerClient] = useState<null | ZkappWorkerClient>(null);
  const [hasWallet, setHasWallet] = useState<null | boolean>(null);
  const [hasBeenSetup, setHasBeenSetup] = useState(false);
  const [accountExists, setAccountExists] = useState(false);
  const [currentNum, setCurrentNum] = useState<null | Field>(null);
  const [creatingTransaction, setCreatingTransaction] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [transactionlink, setTransactionLink] = useState('');
  const [currentHash, setCurrentHash] = useState<String | undefined>('');
  const [currentCoins, setCurrentCoins] = useState<String | undefined>('');
  const [ready, setReady] = useState(false);

  const [gameMap, setGameMap] = useState(
    [
        7, 1, 0, 0, 0, 0, 0,
        3, 2, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
    ]
);

  
  const displayStep = (step: string) => {
    setDisplayText(step)
    console.log(step)
  }

  // -------------------------------------------------------
  // Do Setup

  useEffect(() => {
    const setup = async () => {
      try {
        if (!hasBeenSetup) {
          displayStep('Loading web worker...')
          const zkappWorkerClient = new ZkappWorkerClient();
          setZkappWorkerClient(zkappWorkerClient);
          await new Promise((resolve) => setTimeout(resolve, 5000));
          displayStep('Done loading web worker, loading the contract')
          await zkappWorkerClient.loadContract();
          displayStep('Done loading the contract, starting local network')
          await zkappWorkerClient.setActiveInstanceToLocal();
          displayStep('Local network is working and contract is deployed!')

          setTimeout(() => {
            displayStep('Game is ready you can start playing');
            setReady(true);
          }, 1000);



          const hash = await zkappWorkerClient.getHash();
          setCurrentHash(hash);

          const coins = await zkappWorkerClient?.getCoins();
          setCurrentCoins(coins);

          
          setHasBeenSetup(true);
          setHasWallet(true);
          //setDisplayText(currentNum.toString());
        }
      } catch (error: any) {
        displayStep(`Error during setup: ${error.message}`);
      }
    };

    setup();
  }, []);


  let mainContent;
  if (hasBeenSetup && accountExists) {
    mainContent = (
      <div style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div className={styles.center} style={{ padding: 0 }}>
          Current state in zkApp: {currentNum?.toString()}{' '}
        </div>
        <button
          className={styles.card}
          onClick={() => {}}
          disabled={creatingTransaction}
        >
          Send Transaction
        </button>
        <button className={styles.card} onClick={()=>{}}>
          Get Latest State
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="lg:flex">
        <div className="lg:w-1/3 w-full bg-white p-6 h-screen">
            <Setup hasWallet={hasWallet} transactionlink={transactionlink} displayText={displayText}/>
            {mainContent}
            Current Hash of the map:  {currentHash?.slice(0,10)+"..."+currentHash?.slice(70)}
            <br/>
            Current coins:  {currentCoins}

        </div>

        <div className="lg:w-2/3 w-full min-h-screen bg-white p-6 border-l-2 border-black mt-8 lg:mt-0">
          <TabPanel child1={
            <Game zkappWorkerClient={zkappWorkerClient} 
              gameMap={gameMap} setGameMap={setGameMap} 
              setCurrentHash={setCurrentHash} 
              setCurrentCoins={setCurrentCoins} 
              ready={ready}
              setReady={setReady}
              displayStep={displayStep}
              />
            }/>
        </div>
      </div>
    </div>
  );
}
