import * as React from 'react';
import classes from './TheBrand.module.scss';
import Bot from '../../images/sockbot-zen.png';
import BotShadow from '../../images/sockbot-zen-shadow.png';
import RedditIcon from '../../images/SH-Reddit.svg';
import DiscordIcon from '../../images/SH-Discord.svg';
import TwitterIcon from '../../images/SH-Twitter.svg';

const shurl = "https://www.sockhodler.com";
const shname = "sockhodler.com";

const twitterUrl = "https://twitter.com/SockHodler";
const twitterAlt = "SockHodler Twitter";

const redditUrl = "https://www.reddit.com/r/sockHODLER/";
const redditAlt = "SockHodler Subreddit";

const discordUrl = "https://discord.gg/8zD6BnTup2";
const discordAlt = "SockHodler Discord";

function Data(props:any) {
  return (
    <a href = {props.url} target="_blank" rel="noreferrer"><img src={props.img} className = {classes.social} alt = {props.alt} /></a>
  );
}


export const TheBrand: React.FunctionComponent = () => {
  return (
    <div id = "thebrand" className = {classes.thebrand_wrapper}>
      <div className = {classes.thebrand_content}>
        <div className = {classes.thebrand_content__left}>
          <img src = {Bot} className = {classes.bot}  alt = "Robot" />
          <img src = {BotShadow} className = {classes.bot__shadow}  alt = "Robot Shadow" />
        </div>

        <div className = {classes.thebrand_content__right}>
          <h2>The Brand</h2>
          <div className = {classes.capsule}>
            <a href = {shurl} target="_blank" rel="noreferrer">{shname}</a>
          </div>
          <div className = {classes.social_links}>
            <Data url={twitterUrl} alt={twitterAlt} img={TwitterIcon} />
            <Data url={redditUrl} alt={redditAlt} img={RedditIcon} />
            <Data url={discordUrl} alt={discordAlt} img={DiscordIcon} />
          </div>
        </div>

      </div>
    </div>
  )
}
