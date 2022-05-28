import * as React from 'react';
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';
import classes from './Footer.module.scss';
import SHFullLogo from "../../images/sockbot-logo-wht.svg";
import RedditIcon from '../../images/SH-Reddit.svg';
import DiscordIcon from '../../images/SH-Discord.svg';
import TwitterIcon from '../../images/SH-Twitter.svg';

function Data(props:any) {
  return (
    <a href = {props.url}><img src={props.img} className = {classes.social} alt = {props.alt} /></a>
  );
}

const Footer = () => {
  return (
    <div className = {classes.footer_wrapper}>
      <div className = {classes.footer_content}>
        <img src = {SHFullLogo} className = {classes.footer_content__logo} alt = "SockBot Logo" />

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
          <Data url="#" img={TwitterIcon} alt = "Twitter Icon" />
          <Data url="#" img={RedditIcon} alt = "Reddit Icon" />
          <Data url="#" img={DiscordIcon} alt = "Discord Icon" />
        </div>

      </div>
    </div>
  )
}

export default Footer
