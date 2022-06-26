import React from 'react'
// import MyAlgoConnect from '@randlabs/myalgo-connect';
import classes from './ConnectWallet.module.scss';
// import { Dialog, Button, Classes, HTMLSelect, Intent } from '@blueprintjs/core'
// import { IconName } from '@blueprintjs/icons'

export const ConnectWallet:React.FunctionComponent = () => {

  return (
    <div className={classes.connect_button_wrapper}>
      <button
        className = {classes.connect_button_wrapper__btn}
        >
        Connect Wallet
      </button>
      <p></p>
    </div>
  );

}
