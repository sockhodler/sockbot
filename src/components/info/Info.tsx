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
            <h3>Drop #1 - Genesis NFT Holders Allowlist</h3>
            <hr className={classes.rule} />
            <h4>Date: 07/xx/22</h4>
            <p className={classes.nomargin}>
              <strong>Description:</strong> <br />
              Mint Price - xA. 50 Allowlist Slots reserved for special trait.<br />
              Genesis Holders must be registered on Discord to qualify.
            </p>
          </div>

          <div className={classes.drop_schedule}>
            <h3>Drop #2 - Partner Projects Allowlist</h3>
            <hr className={classes.rule} />
            <h4>Date: 07/xx/22</h4>
            <p className={classes.nomargin}>
              <strong>Description:</strong> <br />
              Mint Price - xA. 250 Allowlist Slots reserved across 5 projects.  <br />
              The allowed wallets will be collected from each respective project beforehand.  FFA - 1,000 NFTs Available.
            </p>
          </div>

          <div className={classes.drop_schedule}>
            <h3>Drop #3 - Public Sale</h3>
            <hr className={classes.rule} />
            <h4>Date: 07/xx/22</h4>
            <p className={classes.nomargin}>
              <strong>Description:</strong> <br />
              Mint Price - xA.<br />
              Open to everyone.  <br />
              FFA
            </p>
          </div>

          <div className={classes.drop_schedule}>
            <h3>Drop #4 - Public Sale</h3>
            <hr className={classes.rule} />
            <h4>Date: 07/xx/22</h4>
            <p className={classes.nomargin}>
              <strong>Description:</strong> <br />
              Mint Price - xA.<br />
              Open to everyone.  <br />
              Any remaining unsold NFTs will be shuffled here.
            </p>
          </div>
        </div>

        <a href="" className = {classes.info_content__button}>Mint Coming Soon</a>


      </div>
    </div>
  )
}
