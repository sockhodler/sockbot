import * as React from 'react';
import { Link } from "react-router-dom";
import classes from './Header.module.scss';
import classNames from "classnames";
import Logo from "../../images/logo.png";

const navLinks = [
  {
    text: "Home",
    url: "#home"
  },
  {
    text: "About",
    url: "#about"
  },
  {
    text: "Story",
    url: "#story"
  },
  {
    text: "Gallery",
    url: "/gallery"
  },
  {
    text: "FAQ",
    url: "#faq"
  },
  {
    text: "The Brand",
    url: "#brand"
  },
]

interface Props {
  className?: string;
}

const Header = () => {

  return (
    <div className= {classes.header}>
      <div className={classes.logo}>
        <img
          src= {Logo}
        />
      </div>

      <nav className={classes.navigation}>
        {navLinks.map(link => (
          <a
            href={link.url}
            className = {classes.navigation__link}
            >
            {link.text}
          </a>
        ))}
      </nav>

    </div>
  )
}

export default Header
