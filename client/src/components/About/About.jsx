import React from 'react';
import './about.css';
import Feature from '../../containers/Feature/Feature';

const About = () => {
  return (
    <div className="wgpt3 section__margin" id='gpt3'>
    <div className="wgpt3-feature section__padding">
      <Feature title="What is Cohortify" text="Cohortify is a collaborative learning platform that connects individuals and groups with similar interests. Find study partners, form groups, and engage in tailored learning experiences. Join us to foster collaboration and achieve collective growth."/>
    </div>
    <div className="wgpt3-heading section__padding">
      <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>
    <div className="wgpt3-container section__padding">
    <Feature title="Chatbots" text="Cohortify's chatbots offer instant assistance, personalized recommendations, and seamless communication within study groups." />
    <Feature title="Knowledge" text="Cohortify enhances knowledge acquisition and fosters collaborative learning within study groups for continuous personal and professional development." />
    <Feature title="Education" text="Cohortify facilitates collaborative education, connecting learners with similar interests for enhanced learning experiences and knowledge sharing" />
    </div>
</div>
  )
}

export default About