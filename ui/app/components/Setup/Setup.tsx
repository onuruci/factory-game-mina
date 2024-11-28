import React from "react";

import CheckWallet from "../CheckWallet";

import styles from '../../../styles/Home.module.css';

interface SetupProps {
    hasWallet: boolean | null;
    transactionlink: string;
    displayText: string;
}

const Setup = ({hasWallet, transactionlink, displayText} : SetupProps) => {
    const stepDisplay = transactionlink ? (
        <a
          href={transactionlink}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          View transaction
        </a>
      ) : (
        displayText
      );
    return(
        <div
            className={styles.start}
            style={{ fontWeight: 'bold', fontSize: '1.5rem', paddingBottom: '5rem' }}
        >
            {stepDisplay}
        </div>
    );
}

export default Setup;