import React, {useEffect, useState } from 'react';
import useImagePreloader from '../../hooks/useImagePreloader'
import classes from './About.module.scss';

interface NFTCard {
  image?: any;
  title?: string;
  desc?: string;
}

interface Props {
    nftcards?: NFTCard[];
}

const RandomImages:React.FunctionComponent<Props> = (
  {
    nftcards
  }
) => {

  return (
    <div>
      <img src={nftcards.image} alt = "test nft" />
      <div className = {classes.card1__content}>
        <h3>
          {nftcards.title}
        </h3>
        <p>
          {nftcards.desc}
        </p>
      </div>
    </div>
  )
}

export const About:React.FunctionComponent = () => {
  const preloadSrcList = [
    {
      image: '/images/image1.jpg',
      title: "SOCKBOT 101",
      desc: "This is the first description"
    },
    {
      image: '/images/image2.jpg' ,
      title: "SOCKBOT 201",
      desc: "This is the second description"
    },
    {
      image: '/images/image3.jpg' ,
      title: "SOCKBOT 301",
      desc: "This is the third description"
    },
  {
      image: '/images/image4.jpg' ,
      title: "SOCKBOT 401",
      desc: "This is the fourth description"
    },
  {
      image: '/images/image5.jpg',
      title: "SOCKBOT 501",
      desc: "This is the fifth description"
    }
  ]

  let random = Math.floor(Math.random() * preloadSrcList.length);
  const selectedImage = preloadSrcList[random];


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
          <RandomImages nftcards={selectedImage}/>
          </div>

          <div className = {classes.card2}>
            <RandomImages nftcards={selectedImage}/>
          </div>

        </div>
      </div>
    </div>
  )
}
