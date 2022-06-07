import * as React from 'react';
// import { Link } from "react-router-dom";
import classes from './Faq.module.scss';
import useCollapse from 'react-collapsed';

function Section(props:any) {
    const config = {
      duration: 750,
    };
    const { getCollapseProps, getToggleProps } = useCollapse(config);
return (
    <div className = {classes.collapsible}>
        <div className={classes.header} {...getToggleProps()}>
            <div className = {classes.title}>
              {props.title}
            </div>
        </div>
        <div {...getCollapseProps()}>
            <div className = {classes.content}>
                {props.children}
            </div>
        </div>
    </div>
    );
}
export const Faq: React.FunctionComponent = () => {
    return (
      <div id = "faq" className = {classes.faq_wrapper}>
        <div className = {classes.faq_circles}>

        </div>
        <div className = {classes.faq_content}>
          <h2>FAQ</h2>

          <Section title="What is SockBot?" defaultExpanded="false">
            Created by the team at SockHodler, SockBot is a series of x,xxx NFT Collectibles that provide access to a whole new realm of utility and experiences.
            Every SockBot is unique and has various traits and accessories.
          </Section>

          <Section title="Will there be a public sale?" defaultExpanded="false">
            fgfff
          </Section>

          <Section title="Will there be a Welcome List?" defaultExpanded="false">
            ffff
          </Section>

          <Section title="When will information be shared about the launch?" defaultExpanded="false">
            ffff
          </Section>

          <Section title="Wen Utility?" defaultExpanded="false">
            ffff
          </Section>

          <Section title="Who are the team behind SockBot?" defaultExpanded="false">
            ffff
          </Section>

     </div>
    </div>
    );
}
