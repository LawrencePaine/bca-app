import React from 'react';
import './home.css';

const Store: React.FC = () => {
  return (
    <>
      <img
        src="/images/banner.jpg"
        alt="Large Image"
        className="full-width-image"
      />
      <div className="overlay-text">
        <h1>Welcome to My Website</h1>
        <p>This is some overlay text</p>
        <button className="transparent-button">Click Here</button>
      </div>
      <div className="section-container">
        <div className="section-content">
          <div className="image-wrapper">
            <img src="/images/about1.jpg" alt="About 1" className="section-image" />
          </div>
          <div className="text-content">
            <h2>Section Title 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ipsum id nulla tristique tincidunt. Cras vel condimentum sapien, id faucibus quam.</p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content">
          <div className="image-wrapper">
            <img src="/images/about2.jpg" alt="About 2" className="section-image" />
          </div>
          <div className="text-content">
            <h2>Section Title 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ipsum id nulla tristique tincidunt. Cras vel condimentum sapien, id faucibus quam.</p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content">
          <div className="image-wrapper">
            <img src="/images/about3.jpg" alt="About 3" className="section-image" />
          </div>
          <div className="text-content">
            <h2>Section Title 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ipsum id nulla tristique tincidunt. Cras vel condimentum sapien, id faucibus quam.</p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content">
          <div className="image-wrapper">
            <img src="/images/about4.jpg" alt="About 4" className="section-image" />
          </div>
          <div className="text-content">
            <h2>Section Title 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ipsum id nulla tristique tincidunt. Cras vel condimentum sapien, id faucibus quam.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
