import React from 'react';
import "./tutorial.css";

const Tutorial = () => {
  return (
    <div id="tutorial" className='tut section__padding'>
      <h1 className="gradient-text tut-heading">How It Works?</h1>
      <div className="tut-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5Vt7QvMdsNA"
          // https://www.youtube.com/watch?v=
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default Tutorial;
