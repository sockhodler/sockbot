import { useState } from 'react'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { useSelector, useDispatch } from "react-redux";
// import { PeraWalletConnect } from "@perawallet/connect";
import classes from './ConnectWallet.module.scss';
// import { Dialog, Button, Classes, HTMLSelect, Intent } from '@blueprintjs/core'
// import { IconName } from '@blueprintjs/icons'

// const peraWallet = new PeraWalletConnect();

const myAlgoConnect = new MyAlgoConnect();
const CONNECT_WALLET = "CONNECT_WALLET"
const DISCONNECT_WALLET = "DISCONNECT_WALLET"

// interface Props {
//   isConnected: boolean
//   // address: string;
// }

export const ConnectWallet:React.FunctionComponent = () => {

  const [isConnected, setWalletConnected] = useState('Connect Wallet');

  async function connectToMyAlgo() {
    try {
        const accounts = await myAlgoConnect.connect()
        setWalletConnected('Disconnect')

        const addresses = accounts.map(account => account.address);

        if (addresses) {
            localStorage.setItem("myAlgoAddress", addresses[0])
            console.log(localStorage);
        }

        console.log(addresses)

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
    </div>
  );

}
