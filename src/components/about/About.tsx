import React, {useEffect, useState } from 'react';
import useImagePreloader from '../../hooks/useImagePreloader'
import classes from './About.module.scss';

import Image1 from '../../images/image1.jpg'
import Image2 from '../../images/image2.jpg'
import Image3 from '../../images/image3.jpg'
import Image4 from '../../images/image4.jpg'
import Image5 from '../../images/image5.jpg'

const preloadSrcList: string[] = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5
]

let index = Math.floor(Math.random() * preloadSrcList.length);

export const About: React.FunctionComponent = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)

  if (!imagesPreloaded) {
    return <p>Preloading Assets</p>
  }

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
            <img src= {preloadSrcList[index]} alt = "test nft" />
            <div className = {classes.card1__content}>
              <h3>
                SockBot #1112
              </h3>
              <p>
                This is a description.
              </p>
            </div>
          </div>

          <div className = {classes.card2}>
            <img src= { Image2 } alt = "test nft"/>
            <div className = {classes.card1__content}>
              <h3>
                SockBot #1112
              </h3>
              <p>
                This is a description.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
