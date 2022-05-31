import React, { useEffect, useCallback, useRef } from "react";
import MyAlgoConnect from '@randlabs/myalgo-connect';

const CONNECT_WALLET = "CONNECT_WALLET"
const DISCONNECT_WALLET = "DISCONNECT_WALLET"
const myAlgoConnect = new MyAlgoConnect();
let defaultState = null;
let address = null;

interface Props {
  address?: any;
  name?: string;
  addresses?: [];
}

if (localStorage.getItem("myAlgoAddress") !== null){
  defaultState = {
    address: localStorage.getItem("myAlgoAddress")
  }
}

export const ConnectWallet: React.FunctionComponent<Props> = (account) => {

  async function connectToMyAlgo() {
    try {

    const accounts = await myAlgoConnect.connect();
    const addresses = accounts.map(account => account.address);

    if (addresses) {
      ConnectWallet(addresses[0]);
      localStorage.setItem("myAlgoAddress", addresses[0])
    }

    } catch (err) {
      console.error(err);
    }
  }

    return(
      <div>
        <div>
          
        </div>
      </div>
    )

}
