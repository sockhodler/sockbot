import * as React from 'react';
// import { Link } from "react-router-dom";
import classes from './Story.module.scss';

const Story = () => {
// ***** Finish Formatting This Section **** //
  return (
    <div id = "story" className = {classes.story_wrapper}>
      <div className = {classes.lines}></div>
      
      <div className = {classes.story_content}>

          <h2>Story</h2>
          <h3>Chapter 1 - The Reboot</h3>
          <p>
            <strong>Rebooting… Booting Process Complete.  System Updates…Location unknown.</strong>
          </p>
          <p>
            Re-energized in an unrecognizable place, SockBot awakens to find the world around him in ruin.  His creator is nowhere in sight.
            He tries to stand up but the weight of the soot-colored sand keeps pulling him down. After soaking in the sun, he was able to gain enough energy to stand up and look around.
            Unfortunately, not too far from SockBot, was the remains of a city. He began taking a few steps forward. All of a sudden, a flood of memories swept over SockBot.
          </p>
          <p>
            <strong>Loading Memory Data.  Data corrupted.  Loading Blockchain ASA Entry #452047208-2.</strong><br />
            A vision of his creator hands him a prized pair of socks before the feed glitches out.
          </p>
          <p>
            <em>“Where is Professor?”</em>
          </p>
          <p>
            He starts to panic.  Another vision loads.
          </p>
          <p>
            <strong>Loading ASA Entry #452047208-00</strong><br />
            <em>“Please take care of these.  I won’t be around for much longer.”</em>
          </p>
          <p>
            The feed cuts out.
          </p>
          <p>
            <em>“What is the significance of these socks?”</em>
          </p>
          <p>
            Compiling himself, he realized that his socks, which the creator had woven, were missing.
          </p>
          <p>
            <strong>Objective Added: Locate Socks.</strong><br />
            <strong>Objective Added: Locate Professor Warden</strong>
          </p>
          <p>
            SockBot slowly makes his way toward the decimated city to find the missing socks...and his creator.
          </p>

      </div>
    </div>
  )
}

export default Story
