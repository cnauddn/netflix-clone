import React, { useState, useEffect } from 'react';
import './Hero.scss';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="hero">
      <div className="hero__background">
        <video
          autoPlay
          muted
          loop
          className="hero__video"
          poster="/poster.jpg"
        >
          <source src="/trailer.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <h1 className="hero__title">Movie Title</h1>
        <p className="hero__description">
          A brief description of the movie that captures attention and provides
          context about the story.
        </p>
        <div className="hero__buttons">
          <button className="hero__button hero__button--play">
            <i className="fas fa-play"></i> Play
          </button>
          <button className="hero__button hero__button--more">
            <i className="fas fa-info-circle"></i> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
