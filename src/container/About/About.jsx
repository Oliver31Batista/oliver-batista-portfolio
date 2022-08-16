import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Web Development',
    description: `I'm a good web developer, I'm always looking for ways to clean, automate and reuse my code.`,
    imgUrl: images.about01,
  },
  {
    title: 'Web Design',
    description: `I am learning about the architectures of web pages in order to find the most convenient design when creating them.`,
    imgUrl: images.about02,
  },
  {
    title: 'UI/UX',
    description: `It's an area that I haven't touched much yet but I'm dying to study and apply, since I believe that the user's experience on a site is everything.`,
    imgUrl: images.about03,
  },
  {
    title: 'Web Animations',
    description: `I'm good at integrating animations into my sites.`,
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        {' '}
        I know That
        <span> Good Design </span>
        and  <span>Development </span>
        <br />
        Means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="bold-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
