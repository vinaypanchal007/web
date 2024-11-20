import React from 'react';
import '../Styles/Education.css';
import tenth from '../Files/10th.jpg'
import twelve from '../Files/12th.jpg'
import grad from '../Files/Graduation.jpg'
import cert from '../Files/FSD.jpg'

function Education() {
  return (
    <div className="edu">
      <div className="edbox">
        <div className="first">
          <h3>GRADUATION</h3>
          <p>Full Stack Developer Certificate</p>
          <p>Imarticus Learning Institute</p>
          <img 
            src={cert} 
            alt="Full Stack Developer Certificate" 
            className="certificate-image"
          />
        </div>
        <div className="one">
          <h3>GRADUATION</h3>
          <p>Bachelor's in Information Technology (B.Sc.I.T)</p>
          <p>From Mumbai University (2021)</p>
          <img 
            src={grad} 
            alt="Bachelor's in Information Technology Certificate" 
            className="grad-image"
          />
        </div>
        <div className="two">
          <h3>HIGHER SECONDARY</h3>
          <p>12th Board (H.S.C)</p>
          <p>From Maharashtra Board (2018)</p>
          <img 
            src={twelve} 
            alt="12th (H.S.C) Certificate" 
            className="certificate-image"
          />
        </div>
        <div className="three">
          <h3>SECONDARY</h3>
          <p>S.S.C</p>
          <p>From Maharashtra Board (2016)</p>
          <img 
            src={tenth}
            alt="S.S.C Certificate" 
            className="certificate-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
