import React from 'react';
import './About.css';

const About = () => (
  <div className="About">
      <h1>About Me</h1>
      <p>I'm just like... a guy, my dude.</p>

      <ul>
          <li><a href={'https://gitlab.com/alloba'}> Fullstack Developer</a></li>
          <li><a href={'https://anilist.co/user/alloba/'}>Enjoyer of Trash Anime</a></li>
          <li><a href={'https://open.spotify.com/user/alloba0'}>Garbage Music Connoisseur</a></li>
      </ul>

      <p>All of these titles are appropriate, as are many others.</p>
  </div>
);

export default About;
