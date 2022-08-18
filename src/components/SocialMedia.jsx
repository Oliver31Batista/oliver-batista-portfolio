import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { VscGithubInverted } from 'react-icons/vsc';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/batista-oliver-henriquez-7888481a6/"
        target="_blank"
        rel="noreferrer"
      >
        <GrLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/Oliver31Batista"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithubInverted />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/oliver31batista/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/oliver.mhbatista/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
