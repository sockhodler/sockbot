import * as React from 'react';
// import { Link } from "react-router-dom";
import classes from './Hero.module.scss';
// import classNames from "classnames";
import FullLogo from '../../images/sockbot-logo-wht.svg';

const Hero = () => {
// ***** Finish Formatting This Section **** //
  return (
    <div className = {classes.hero_wrapper}>
      <div className = {classes.hero_content}>
        <div className = {classes.hero_content__left}>
          <div className = {classes.hero_content__good_bot}></div>
        </div>

        <div className = {classes.hero_content__right}>
          <p>2,222 Premium NFTs Minted on Algorand</p>
          <img src={FullLogo} className = {classes.logo} alt="SockBot Logo"/>
          <div className = {classes.bubble}>
            <div className = {classes.bubble__text}>
              Coming Soon
            </div>
            <div className = {classes.bubble__algorand}>
              On Algorand
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
