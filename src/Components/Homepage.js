import React from 'react';
import pic from '../Images/PIC.png';
import '../Styles/Homepage.css';
import html from '../Images/html.png';
import css from '../Images/css.png';
import js from '../Images/javascript.png';
import mongo from '../Images/mongo.png';
import express from '../Images/express.png';
import react from '../Images/react.png';
import node from '../Images/node.png';

function Homepage() {
  return (
    <div id="home">
      <div id="box">
        <div id="pic">
          <img src={pic} alt="Profile" id="pic-img" />
        </div>
        <div id="intro">
          <p id="name">Hi, I'm Vinay Panchal</p>
          <br />
          <p>
            I'm a Full Stack Developer from Mumbai, with a focus on building modern and
            efficient web applications. I work with technologies like React,
            Node.js, Express, and MongoDB to create solutions that are both
            user-friendly and scalable. I enjoy tackling both front-end and
            back-end challenges, and I'm always looking for ways to improve my
            skills and stay up-to-date with the latest tech. Check out my
            projects below to see what I’ve been working on!
          </p>
        </div>
      </div>
      <div id='skill'>
        <div id='one'>
          <img src={html} alt='html' id='html'/>
          <img src={css} alt='css' id='css'/>
          <img src={js} alt='js' id='js'/>
          <img src={mongo} alt='mongo' id='mongo'/>
          <img src={express} alt='express' id='express'/>
          <img src={react} alt='react' id='react'/>
          <img src={node} alt='node' id='node'/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;