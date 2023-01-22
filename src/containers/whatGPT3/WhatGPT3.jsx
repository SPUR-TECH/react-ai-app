import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="More than 3 million people are already using DALL·E to extend their creativity and speed up their workflows, generating over 4 million images a day. Get started with this same technology in a matter of minutes." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="AI chatbots support and empower agents with valuable information during live customer interactions." />
      <Feature title="Knowledgebase" text="Faster answers for customers, fewer questions for your team
Deliver help content to customers – and scale your support – with our integrated knowledge base." />
      <Feature title="Education" text="Taught by a team of internationally recognised AI experts with extensive research and commercial experience that is drawn upon in a research-led teaching experience." />
    </div>
  </div>
);

export default WhatGPT3;