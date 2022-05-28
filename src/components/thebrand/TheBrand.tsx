import * as React from 'react';
// import { Link } from "react-router-dom";
import classes from './TheBrand.module.scss';
import RedditIcon from '../../images/SH-Reddit.svg';
import DiscordIcon from '../../images/SH-Discord.svg';
import TwitterIcon from '../../images/SH-Twitter.svg';
import SHSubmark from '../../images/SH-Submark.svg';
import Bot from '../../images/bot.png';

const shurl = "https://www.sockhodler.com";
const shname = "sockhodler.com";

function Data(props:any) {
  return (
    <a href = {props.url}><img src={props.img} className = {classes.social} alt = {props.alt} /></a>
  );
}


const TheBrand = () => {
// ***** Finish Formatting This Section **** //
  return (
    <div id = "thebrand" className = {classes.thebrand_wrapper}>
      <div className = {classes.thebrand_content}>
        <div className = {classes.thebrand_content__left}>
          <img src = {SHSubmark} className = {classes.thebrand_content__shsubmark} />
          <img src = {Bot} className = {classes.thebrand_content__bot} />
        </div>

        <div className = {classes.thebrand_content__right}>
          <h2>The Brand</h2>
          <div className = {classes.capsule}>
            <a href = {shurl}>{shname}</a>
          </div>
          <div className = {classes.social_links}>
            <Data url="#" alt="" img={TwitterIcon} />
            <Data url="#" alt="" img={RedditIcon} />
            <Data url="#" alt="" img={DiscordIcon} />
          </div>
        </div>



      </div>
    </div>
  )
}

export default TheBrand
