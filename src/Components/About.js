import React from 'react';
import '../Styles/Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className='contact'>
      <h3>Checkout my project's via the Github Link below</h3>
      <a href='https://github.com/vinaypanchal007' target='_blank' rel='noopener noreferrer'>
        <button className='github-btn'>
          <FaGithub className='git' />
          <p className='pgit'>GitHub</p>
        </button>
      </a>
      <h3>Checkout my LinkedIn Profile from the link below</h3>
      <a href='https://www.linkedin.com/in/vinaypanchal1206' target='_blank' rel='noopener noreferrer'>
        <button className='linkedin-btn'>
          <FaLinkedin className='linkedin-icon' />
          <p className='plink'>LinkedIn</p>
        </button>
      </a>
    </div>
  );
}

export default About;