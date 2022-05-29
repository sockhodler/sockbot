import * as React from 'react';
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import classes from './Header.module.scss';
import Logo from "../../images/logo.png";

const Header = () => {

  return (
    <div className= {classes.header}>
      <div className={classes.logo}>
        <img
          src= {Logo}
          alt= "SockBot Submark"
        />
      </div>

      <nav className={classes.navigation}>

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

    </div>
  )
}

export default Header
