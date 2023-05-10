import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ching-cheng/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/chingcheng" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://gitlab.com/mschingcheng" target="_blank" rel="noreferrer" ><FaGitlab /></a>
    </div>
  )
}

export default HeaderSocials
