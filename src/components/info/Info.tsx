import React from 'react';
import classes from './Info.module.scss';


export const Info:React.FunctionComponent = () => {

  return (
    <div id = "info" className = {classes.info_wrapper}>

      <div className = {classes.info_content}>
        <h2>Info</h2>

        <h3>
          Drop Schedule
        </h3>

        <div className={classes.drops}>
          <div className={classes.drop_schedule}>
            <h3>Drop #1 - Genesis Holders Super Secret Shuffle</h3>
            <hr className={classes.rule} />
            <h4>Date: TBD</h4>
            <p className={classes.nomargin}>
              <strong>Description:</strong> <br />
              Mint Price - 75 Algo <br /><br />
              This will be a private shuffle for SockBot NFTs with a special trait.<br /><br />

              Genesis Holders must be registered on Discord to qualify and are automatically allowlisted in the presale.

            </p>
          </div>

          <div className={classes.drop_schedule}>
            <h3>Drop #2 - Allowlist Presale Shuffle</h3>
            <hr className={classes.rule} />
            <h4>Date: TBD</h4>
            <p className={classes.nomargin}>
              <strong>Description:</strong> <br />
              Mint Price - 75 Algo <br /><br />
              250 members of partner communities will be invited into the Presale along with Genesis Holders. <br /><br />
              5 Algorand NFT projects will be selected.<br /><br />
              The allowed wallets will be collected from each respective project beforehand.  There is no max limit on the NFTs that can be purchased.

            </p>
          </div>

          <div className={classes.drop_schedule}>
            <h3>Drop #3 - Public Sale Shuffle #1</h3>
            <hr className={classes.rule} />
            <h4>Date: TBD</h4>
            <p className={classes.nomargin}>
              <strong>Description:</strong> <br />
              Mint Price - 100 Algo.<br /><br />
              Open to everyone.

            </p>
          </div>

          <div className={classes.drop_schedule}>
            <h3>Drop #4 - Public Sale Shuffle #2</h3>
            <hr className={classes.rule} />
            <h4>Date: TBD</h4>
            <p className={classes.nomargin}>
            <strong>Description:</strong> <br />
            Mint Price - 100 Algo.<br /><br />
            Open to everyone.
              Any remaining unsold NFTs will be shuffled here.
            </p>
          </div>
        </div>

        <hr className={classes.spacer10} />
        <h2>
          Utility
        </h2>
        <div className={classes.utility}>
          <h3>Whale Club</h3>
          <p className={classes.nomargin}>
          Purchase 10 SockBot NFTs and stake for at least 1 month to claim a free pair of Physically-Backed NFT Socks that are linked to what will be the next evolution of SockBot. <br /><br />
          
          Members of our Whale Club will have first access to SockBot2.0, which will be an upgradeable ARC-19 NFTs that allow users to level up their NFTs through the use of Spare Parts and daily use of the NFT Scanning feature on the socks. These will be the only Legendary Traits given out.  
          These socks are linked to the blockchain by using Near Field Communication tags embedded in the cuff of the sock and your NFT will be upgradeable in the future.  
          </p>
          <p>
          These limited edition socks will be printed as one-offs and no additional ones will be created for the corresponding NFTs that are submitted.  
          Owners of NFT Socks will have access to the “SOCK VAULT”; a dApp that allows you to claim rewards for daily scans, as well as NFT Staking.
          </p>
        </div>

        <div className={classes.utility}>
          <h3>NFT License for Copyright</h3>
          <p className={classes.nomargin}>
            We are adopting the <a href="https://www.nftlicense.org/" target="_blank" rel="noopener noreferrer">“NFT License”</a> commonly used for Ethereum NFTs.<br /><br />
            Owners of SockBot NFTs will have the broad rights to use the art for personal uses as well as commercial uses for up to $100,000 a year in revenue. <br /><br />
            We want to encourage the #algofam to create spin-offs and expand on the story and utility of SockBot.
          </p>
        </div>

        <div className={classes.utility}>
          <h3>NFT Staking</h3>
          <p className={classes.nomargin}>
            Every SockBot NFT qualifies for weekly staking rewards on the “SOCK Vault”. <br /><br/>
            Rewards are given in the form of SOCKS Tokens that may be used in the SockHodler ecosystem.
          </p>
        </div>

        <div className={classes.utility}>
          <h3>Airdrops</h3>
          <p className={classes.nomargin}>
            Holders who stake their SockBot NFTs also qualify for periodic airdrops.  Some will integrate with the future of the project; some will be as a staker perk.  <br /><br/>
            We’ve got some cool plans for the future of SockBot utility, but we’ll make announcements once our current initiatives are finished being implemented.
          </p>
        </div>



        <a href="" className = {classes.info_content__button}>Mint Coming Soon</a>


      </div>
    </div>
  )
}
