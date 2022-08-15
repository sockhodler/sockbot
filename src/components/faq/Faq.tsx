import * as React from 'react';
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
        {
          // <div className = {classes.faq_circles}>

          // </div>
        }
        <div className = {classes.faq_content}>
          <h2>FAQ</h2>

          <Section title="Why is a crypto apparel brand selling PFP NFTs?" defaultExpanded="true">
            We’ve heard numerous times that people would like to not only purchase a PFP NFT from us but also to have the opportunity to get unique one-off physically-backed nft apparel.<br /><br />
            SockBot is near and dear to us, and we will be expanding on his story and providing additional utility along the way.
          </Section>

          <Section title="Will there be a public sale?" defaultExpanded="false">
            Yes!  After the presale is completed, a public sale will commence the following day.  Any unsold NFTs from the collection will be available for purchase in a second public shuffle the week following.
          </Section>

          <Section title="Will there be an Allow List?" defaultExpanded="false">
            Yep, we gotta take care of the existing communities so we will be automatically providing an Allowlist opportunity for Sockhodler Genesis NFT holders, as well as spots for partner communities.<br /><br />
            Stay tuned on Discord.
          </Section>

          <Section title="How much do they cost?" defaultExpanded="false">
            The public sale will sell for 100 Algo, and the presale will sell for 75 Algo.
          </Section>

          <Section title="What utility does this have?" defaultExpanded="false">
          Please read the <a href="#info">Info section</a> for more details, but here’s the sum of it…for now.  A litepaper will be released prior to launch with more information. <br /><br />
          - Sock Force One - Exclusive free 1/1 physically-backed NFT Socks using NFC Tags.<br />
          - Expanded NFT Ownership Rights<br />
          - NFT Staking<br />
          - Airdrops
          </Section>

          <Section title="What are the technical specs for SockBot NFTs?" defaultExpanded="false">
            Each SockBot is minted as a 1/1 ARC69-formatted NFT on Algorand.  The artwork is hosted on IPFS.
          </Section>

          <Section title="Who is the team behind SockBot?" defaultExpanded="false">
            <a href="https://www.sockhodler.com" target="_blank" rel="noopener noreferrer">SockHodler!</a><br />
            We are a small team of creators, ALGO-philes, and internet lurkers that are creating crypto apparel for the most diamond-handed of hodlers.  <br /><br />
            Additionally, we are developing the world’s first blockchain-enabled physically-backed sock using Near Field Communication to link NFTs to the real world.
          </Section>

     </div>
    </div>
    );
}
