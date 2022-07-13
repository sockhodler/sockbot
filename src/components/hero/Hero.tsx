import * as React from 'react';
import classes from './Hero.module.scss';
import FullLogo from '../../images/sockbot-logo-wht.svg';

export const Hero: React.FunctionComponent = () => {

  return (
    <div id = "home" className = {classes.hero_wrapper}>
      <div className = {classes.hero_content}>
        <div className = {classes.hero_content__left}>
          <div className = {classes.hero_wrapper__good_bot}></div>
        </div>
        <div className = {classes.hero_content__right}>
          <p>2,222 Premium NFT Collection</p>
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
