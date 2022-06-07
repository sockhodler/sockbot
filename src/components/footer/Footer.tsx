import * as React from 'react';
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';
import classes from './Footer.module.scss';
import SHFullLogo from "../../images/sockbot-logo-wht.svg";
import RedditIcon from '../../images/SH-Reddit.svg';
import DiscordIcon from '../../images/SH-Discord.svg';
import TwitterIcon from '../../images/SH-Twitter.svg';

const shurl = "https://www.sockhodler.com";

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

export const Footer: React.FunctionComponent = () => {
  return (
    <div className = {classes.footer_wrapper}>
      <div className = {classes.footer_content}>
        <a href = {shurl} className = {classes.footer_content__logo} target="_blank" rel="noreferrer">
          <img src = {SHFullLogo} alt = "SockBot Logo" />
        </a>

        <nav className = {classes.footer_content__menu}>
          <Link
            className = {classes.navigation__link}
            to="home"
            spy={true}
            offset={50}
            duration={500}
            >
            Home
          </Link>
          <Link
            className = {classes.navigation__link}
            to="about"
            spy={true}
            offset={50}
            duration={750}
            >
            About
          </Link>
          <Link
            className = {classes.navigation__link}
            to="story"
            spy={true}
            offset={50}
            duration={750}
            >
            Story
          </Link>
          <Link
            className = {classes.navigation__link}
            to="faq"
            spy={true}
            offset={50}
            duration={750}
            >
            FAQ
          </Link>
          <Link
            className = {classes.navigation__link}
            to="thebrand"
            spy={true}
            offset={50}
            duration={750}
            >
            The Brand
          </Link>
        </nav>

        <div className = {classes.footer_content__social} >
          <Data url={twitterUrl} img={TwitterIcon} alt = {twitterAlt} />
          <Data url={redditUrl} img={RedditIcon} alt = {redditAlt} />
          <Data url={discordUrl} img={DiscordIcon} alt = {discordAlt} />
        </div>

      </div>
    </div>
  )
}
