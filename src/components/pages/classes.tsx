import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import '../../App.css';

// Define the type for the imagesByDay object
type ImagesByDay = {
  [key: string]: string[];
};

// Define the images for each day of the week
const imagesByDay: ImagesByDay = {
  monday: ['/images/monday1.jpg', '/images/monday2.jpg', '/images/monday3.jpg'],
  tuesday: ['/images/tuesday1.jpg', '/images/tuesday2.jpg', '/images/tuesday3.jpg'],
  wednesday: ['/images/wednesday1.jpg', '/images/wednesday2.jpg', '/images/wednesday3.jpg'],
  thursday: ['/images/thursday1.jpg', '/images/thursday2.jpg', '/images/thursday3.jpg'],
  friday: ['/images/friday1.jpg', '/images/friday2.jpg', '/images/friday3.jpg'],
};

const ClassesPage: React.FC = () => {
  // State to keep track of the selected day and image index
  const [selectedDay, setSelectedDay] = useState<string>('monday');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Function to handle clicking on the previous image
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? imagesByDay[selectedDay].length - 1 : prevIndex - 1));
  };

  // Function to handle clicking on the next image
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === imagesByDay[selectedDay].length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {/* Title */}
        <h1 className="centered-title">Classes</h1>
        {/* Image collection display */}
        <div className="image-display">
          {/* Image */}
          <img src={imagesByDay[selectedDay][selectedImageIndex]} alt={selectedDay} className="class-image" />
          {/* Left arrow */}
          <button className="arrow-button" onClick={prevImage}>
            {'<'}
          </button>
          {/* Right arrow */}
          <button className="arrow-button" onClick={nextImage}>
            {'>'}
          </button>
        </div>
      </div>
    </>
  );
};

export default ClassesPage;
