import React from 'react';
import '../Styles/Resume.css';

function Resume() {
  return (
    <div id='r'>
      <p id='rp'>Here is my resume. Click to download.</p>
      <a href={require('../Files/Vinay Panchal.pdf')} download="Vinay Panchal.pdf">
        <button id='rs'>Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
