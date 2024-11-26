import React from "react";

interface FaucetDirectProps {
    publicKeyBase58: string;
}

const FaucetDirect = ({publicKeyBase58} : FaucetDirectProps) => {
    const faucetLink =
      `https://faucet.minaprotocol.com/?address='${publicKeyBase58}`;
    return(
        <div>
            <span style={{ paddingRight: '1rem' }}>Account does not exist.</span>
            <a href={faucetLink} target="_blank" rel="noreferrer">
            Visit the faucet to fund this fee payer account
            </a>
      </div>
    );
}

export default FaucetDirect;