import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ClassesPage from './components/pages/classes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
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
        </div>
        {/* TODO: about us section */}
        <div className="section-container">
          <div className="section-content">
            {/* Left side: Images */}
            <div className="image-wrapper">
              <img src="/images/image1.jpg" alt="Image 1" className="section-image" />
              <img src="/images/image2.jpg" alt="Image 2" className="section-image" />
              <img src="/images/image3.jpg" alt="Image 3" className="section-image" />
            </div>
            {/* Right side: Text */}
            <div className="text-content">
              <h2>Section Title</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ipsum id nulla tristique tincidunt. Cras vel condimentum sapien, id faucibus quam.</p>
            </div>
          </div>
        </div>
        {/* Define routes */}
        <Routes>
          <Route path="/classes" element={<ClassesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
