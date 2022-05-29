import * as React from 'react';
// import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import classes from './About.module.scss';

const About = () => {
// ***** Finish Formatting This Section **** //

  return (
    <div id = "about" className = {classes.about_wrapper}>

      <div className = {classes.about_content}>
        <div className = {classes.about_content__left}>
          <h2>About</h2>
          <p>
            Lost SockBot is a collection of x,xxx NFTs minted on Algorand.
          </p>
          <p>
            This NFT collection combines crisp 3D art and 170+ unique traits for maximum coolness.
          </p>
          <p>
            The mint price will be set at xxA and the first batch is set to release on XXXX xx/22.  From there, weekly drops will be made until x,xxx are in circulation.
            The remaining xxx are reserved for collabs, giveaways, and rewards.
          </p>
          <p>
            SockBot is brought to you by your dear friends at SockHodler.
          </p>

          <a href="https://discord.gg/8zD6BnTup2" className = {classes.about_content__button}>Join Discord</a>

        </div>
        <div className = {classes.about_content__right}>
          <div className = {classes.card1}>
            gggg
          </div>
          <div className = {classes.card2}>
            gggg
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
