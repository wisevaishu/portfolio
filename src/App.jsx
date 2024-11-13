import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import photo from '../assets/oneformal.jpg';

function App() {
  return (
    <div className="portfolio-container">
      {/* Name Animation */}
      <div className="name-animation">
        {'Vaishnavi Devi B D'.split('').map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

        <div className="profile-photo-container">
        <img src={photo} alt="Your Profile" className="profile-photo" />
        </div>
        
        <div className="left-side">
        {/* Resume Button */}
        <div className="experience-section">
          <a href="/resume.pdf" download="Vaishnavi_Devi_Resume" className="resume-button">
            Resume
          </a>
        </div>

        {/* Social Media Buttons */}
        <div className="social-buttons">
          <a href="mailto:vaishnavidevibd@gmail.com" className="social-button" aria-label="Gmail">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/vaishnavidevibd" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://medium.com/@vpm.win" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="Medium">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a href="https://github.com/wisevaishu" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

        

      <div className="right-side">
        <div className="content-section">
          <h2>Projects</h2>
          <ul>
            <li><a href="#project1">Project 1</a></li>
            <li><a href="#project2">Project 2</a></li>
          </ul>
          <h2>Skills</h2>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
          </ul>
        </div>
      </div>

      {/* Your Name */}
      <div className="name-animation">
        {'Vaishnavi Devi B D'.split('').map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
