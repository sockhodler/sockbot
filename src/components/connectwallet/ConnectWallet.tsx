import { useState, useEffect } from 'react'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import classes from './ConnectWallet.module.scss';
// import { Dialog, Button, Classes, HTMLSelect, Intent } from '@blueprintjs/core'
// import { IconName } from '@blueprintjs/icons'

// const peraWallet = new PeraWalletConnect();

const myAlgoConnect = new MyAlgoConnect();
const CONNECT_WALLET = "CONNECT_WALLET"
const DISCONNECT_WALLET = "DISCONNECT_WALLET"

export const ConnectWallet:React.FunctionComponent = () => {

  const [isConnected, setWalletConnected] = useState('Connect Wallet');

  async function connectToMyAlgo() {
    try {
        const accounts = await myAlgoConnect.connect()


        const accountInfo = accounts[0];

        if (accountInfo) {
            localStorage.setItem("myAlgoAddress", accountInfo.address)
            localStorage.setItem("Name", accountInfo.name)
            setWalletConnected('Disconnect')
        }



    } catch (err) {
        console.error(err);
    }

  }



  return (
    <div className={classes.connect_button_wrapper}>
      <button
        className = {classes.connect_button_wrapper__btn}
        onClick={connectToMyAlgo}>
        {isConnected}
      </button>
      <p></p>
    </div>
  );

}
