import React from 'react';
import classes from './About.module.scss';
import sockbot01 from '../../images/sockbot-01.jpg';
import sockbot02 from '../../images/sockbot-02.jpg';
import sockbot03 from '../../images/sockbot-03.jpg';
import sockbot04 from '../../images/sockbot-04.jpg';
import sockbot0x from '../../images/sockbot-0x.jpg';

interface NFTCard {
  image?: string;
  title: string;
  desc: string;
}

interface Props {
    nftcards?: NFTCard[] | any;
}

const RandomImages:React.FunctionComponent<Props> = (
  {
    nftcards
  }
) => {

  return (
    <div>
      <img src={nftcards.image} alt = "Sockbot" />
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
      image: sockbot01 ,
      title: "SOCKBOT 101",
      desc: "Don't step out of line or bear the wrath of flying footwear."
    },
    {
      image: sockbot02 ,
      title: "SOCKBOT 201",
      desc: "Armed with an RPG and your favorite sword...SockBot is ready for battle."
    },
    {
      image: sockbot03 ,
      title: "SOCKBOT 301",
      desc: "Float like a butterfly and sting like a bee."
    },
    {
      image: sockbot04 ,
      title: "SOCKBOT 401",
      desc: "Float like a butterfly and sting like a bee."
    },
    {
      image: sockbot0x ,
      title: "SOCKBOT 001",
      desc: "Golden SockBot...His Final Form."
    },
  ]

  const random = Math.floor(Math.random() * preloadSrcList.length);
  const selectedImage = preloadSrcList[random];
  const selectedImage2 = preloadSrcList[4];

  return (
    <div id = "about" className = {classes.about_wrapper}>

      <div className = {classes.about_content}>
        <div className = {classes.about_content__left}>
          <h2>About</h2>
          <p>
            SockBot is a collection of 2,222 NFTs minted on Algorand.
          </p>
          <p>
            This NFT collection combines crisp 3D art and 175+ unique traits for maximum coolness. Every SockBot is outfitted and ready for war as he searches for his long-lost creator.
          </p>
          <p>
            The mint price for the public sale will be set at 100 Algo.  There will be a presale for Genesis Coin NFT holders as well as select partner communities sold at 75 Algo.  
            Genesis Holders also qualify to mint an NFT with a special trait.
          </p>

          <p>
            For every SockBot NFT sold, 10% of the proceeds will go to supporting the SOCKS/ALGO liquidity pool, 5% to the community wallet, and 5% to St. Jude Children's Research Hospital.
            St. Jude wants to cure childhood cancer, and so do we.  Our donations will be auditable from our NFD profile 
            <a href="https://app.nf.domains/name/sockbot.algo" target="_blank" rel="noreferrer noopener">"sockbot.algo"</a>. 
            <br />
            <br />
            View more info at <a href="https://www.stjude.org/" target="_blank" rel="noopener noreferrer">stjude.org</a>.
          </p>

          <p>
            122 NFTs from this collection will be reserved to cover the staff and strategic partners (22x), $SOCKS Auctions (25x), Collabs (25x), Genesis Holder Giveaways (25x), and General Giveaways (25x). 
            <br />
            <br /> 
            100 Physically-Backed NFTs with Base SockBot traits will be sold as a limited run on our webshop at <a href="https://shop.sockhodler.com" target="_blank" rel="noopener noreferrer">shop.sockhodler.com</a>.  These NFT Socks will allow the user to participate in daily scan rewards in "The SockVault".
          </p>

          <hr className={classes.rule} />


          <p>
            SockBot is brought to you by your dear friends at <a href="https://www.sockhodler.com" target="_blank" rel="noopener noreferrer">SockHodler</a>.
          </p>

          <a href="https://discord.gg/8zD6BnTup2" className = {classes.about_content__button}>Join Discord</a>

        </div>
        <div className = {classes.about_content__right}>
          <div className = {classes.card1}>
            <RandomImages nftcards={selectedImage}/>
          </div>

          <div className = {classes.card2}>
            <RandomImages nftcards={selectedImage2} />
          </div>

        </div>
      </div>
    </div>
  )
}
