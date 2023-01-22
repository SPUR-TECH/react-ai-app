import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Immerse yourself <br /> into the future.</h1>
      <p>Artificial intelligence is shaping the future of humanity across nearly every industry. It is already the main driver of emerging technologies like big data, robotics and IoT, and it will continue to act as a technological innovator for the foreseeable future.</p>
      <h4>Request Early Access</h4>
    </div>
  </div>
);

export default Possibility;