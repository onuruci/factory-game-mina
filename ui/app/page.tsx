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
  const [publicKeyBase58, setPublicKeyBase58] = useState('');
  const [creatingTransaction, setCreatingTransaction] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [transactionlink, setTransactionLink] = useState('');
  
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
          displayStep('Done loading web worker')

          await zkappWorkerClient.loadContract();


          await zkappWorkerClient.setActiveInstanceToLocal();



          const currentNum = await zkappWorkerClient.getHash();
          console.log(`Current state in zkApp: ${currentNum}`);

          
          setHasBeenSetup(true);
          setHasWallet(true);
          setDisplayText(currentNum.toString());
        }
      } catch (error: any) {
        displayStep(`Error during setup: ${error.message}`);
      }
    };

    setup();
  }, []);

  // -------------------------------------------------------
  // Send a transaction

//   const onSendTransaction = async () => {
//     setCreatingTransaction(true);
//     displayStep('Creating a transaction...');
   
//     console.log('publicKeyBase58 sending to worker', publicKeyBase58);
//     await zkappWorkerClient!.fetchAccount(publicKeyBase58);

//     await zkappWorkerClient!.createUpdateTransaction();

//     displayStep('Creating proof...');
//     await zkappWorkerClient!.proveUpdateTransaction();

//     displayStep('Requesting send transaction...');
//     const transactionJSON = await zkappWorkerClient!.getTransactionJSON();

//     displayStep('Getting transaction JSON...');
//     const { hash } = await (window as any).mina.sendTransaction({
//       transaction: transactionJSON,
//       feePayer: {
//         fee: transactionFee,
//         memo: '',
//       },
//     });

//     const transactionLink = `https://minascan.io/devnet/tx/${hash}`;
//     setTransactionLink(transactionLink);
//     setDisplayText(transactionLink);

//     setCreatingTransaction(true);
//   };

  // -------------------------------------------------------
  // Refresh the current state

//   const onRefreshCurrentNum = async () => {
//     try {
//       displayStep('Getting zkApp state...');
//       await zkappWorkerClient!.fetchAccount(ZKAPP_ADDRESS);
//       const currentNum = await zkappWorkerClient!.getNum();
//       setCurrentNum(currentNum);
//       console.log(`Current state in zkApp: ${currentNum}`);
//       setDisplayText('');
//     } catch (error: any) {
//       displayStep(`Error refreshing state: ${error.message}`);
//     }
//   };


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
        </div>

        <div className="lg:w-2/3 w-full min-h-screen bg-white p-6 border-l-2 border-black mt-8 lg:mt-0">
          <TabPanel child1={<Game/>}/>
        </div>
      </div>
    </div>
  );
}
