import * as React from 'react';
import { Link } from "react-scroll";
import classes from './Header.module.scss';
import Logo from "../../images/logo.png";
import {ConnectWallet} from "../connectwallet/ConnectWallet";
// import { Alignment, AnchorButton, Button, Callout, Card, Elevation, Navbar, ProgressBar } from '@blueprintjs/core';
// import { Classes, Dialog } from "@blueprintjs/core";


export const Header: React.FunctionComponent = () => {

  return (
    <div className= {classes.header}>

      <div className={classes.logo}>
        <a href = "https://www.sockhodler.com" target = "_blank">
          <img
            src= {Logo}
            alt= "SockBot Submark"
          />
        </a>
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

      <ConnectWallet
        // isConnected = {false}
        // address = {addresses}
        />

    </div>
  )
}
