import * as React from 'react';
import { Link } from "react-router-dom";
import classes from './Footer.module.scss';
import SHFullLogo from "../../images/sockbot-logo-wht.svg";
import RedditIcon from '../../images/SH-Reddit.svg';
import DiscordIcon from '../../images/SH-Discord.svg';
import TwitterIcon from '../../images/SH-Twitter.svg';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
const SimpleForm = () => <MailchimpSubscribe url={url}/>


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

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div>
              <SimpleForm onSubmitted={formData => subscribe(formData)} />
              {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
              {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
              {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
            </div>
          )}
        />

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
