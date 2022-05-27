import * as React from 'react';
import { Link } from "react-router-dom";
import classes from './TheBrand.module.scss';
import classNames from "classnames";

const URL = "https://www.sockhodler.com";
const BRANDNAME = "sockhodler.com";

function Data(props:any) {
  return (

      );
  }


const TheBrand = () => {
// ***** Finish Formatting This Section **** //
  return (
    <div className = {classes.thebrand_wrapper}>
      <div className = {classes.thebrand_content}>

          <h2>The Brand</h2>
          <div className = {classes.capsule}>
            <a href = {props.URL}>{props.BRANDNAME}</a>
          </div>
          <div className = {classes.social_links}>
            <Data name="Reddit" url="#" img="#" />

          </div>

      </div>
    </div>
  )
}

export default TheBrand
