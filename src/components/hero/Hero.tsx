import * as React from 'react';
import { Link } from "react-router-dom";
import classes from './Hero.module.scss';
import classNames from "classnames";
import FullLogo from '../../images/sockbot-logo-wht.svg';

const Hero = () => {
// ***** Finish Formatting This Section **** //
  return (
    <div className = {classes.hero_wrapper}>
      <div className = {classes.hero_wrapper__good_bot}></div>
      <div className = {classes.hero_right}>
        <p>2,222 Premium NFTs Minted on Algorand</p>
        <img src={FullLogo} />
        <div className = {classes.bubble}>
          <div>
          Coming Soon
          </div>
          <div>
          On Algorand
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
