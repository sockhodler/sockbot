import * as React from 'react';
import { Link } from "react-router-dom";
import classes from './Footer.module.scss';
import SHFullLogo from "../../images/sockbot-logo-wht.svg";
import RedditIcon from '../../images/SH-Reddit.svg';
import DiscordIcon from '../../images/SH-Discord.svg';
import TwitterIcon from '../../images/SH-Twitter.svg';

const menuItems = [
  {
    page: "Home",
    url: "#home"
  },
  {
    page: "About",
    url: "#about"
  },
  {
    page: "Story",
    url: "#story"
  },
  {
    page: "FAQ",
    url: "#faq"
  },
  {
    page: "Brand",
    url: "#brand"
  }
];

function Data(props:any) {
  return (
    <a href = {props.url}><img src={props.img} className = {classes.social} /></a>
  );
}

const Footer = () => {
  return (
    <div className = {classes.footer_wrapper}>
      <div className = {classes.footer_content}>
        <img src = {SHFullLogo} className = {classes.footer_content__logo} />

        <nav className = {classes.footer_content__menu}>
          {menuItems.map(link => (
            <a
              href={link.url}
              className = {classes.navigation__link}
              >
              {link.page}
            </a>
          ))}
        </nav>

        <div className = {classes.footer_content__social} >
          <Data url="#" img={TwitterIcon} />
          <Data url="#" img={RedditIcon} />
          <Data url="#" img={DiscordIcon} />
        </div>

      </div>
    </div>
  )
}

export default Footer
