import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Trusted professionals',
    text: 'Check any pro’s work samples, client reviews, and identity verification.',
  },
  {
    title: 'Elite AI programmers',
    text: 'Our developers deliver a test project to completion, demonstrating their skills across ideating, scoping, implementation, and problem-solving.',
  },
  {
    title: 'Customer Support',
    text: 'Customer support software that goes beyond ticketing, giving customers and teams the support experience they deserve.',
  },
  {
    title: '100% Reliability',
    text: 'Assessing the consistency of results across items within all tests carried out every hour.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;