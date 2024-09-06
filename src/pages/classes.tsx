import React, { useState } from 'react';
import '../App.css';
import './classes.css';

type ImagesByDay = {
  [key: string]: string[];
};

const imagesByDay: ImagesByDay = {
  Monday: ['/images/Monday.jpg'],
  Tuesday: ['/images/Tuesday.jpg'],
};

const Classes: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? imagesByDay[selectedDay]?.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imagesByDay[selectedDay]?.length);
    if (selectedImageIndex + 1 === imagesByDay[selectedDay]?.length) {
      setSelectedDay((prevDay) => {
        const days = Object.keys(imagesByDay);
        const currentIndex = days.indexOf(prevDay);
        return currentIndex === days.length - 1 ? days[0] : days[currentIndex + 1];
      });
    }
  };

  const changeDay = (day: string) => {
    setSelectedDay(day);
    setSelectedImageIndex(0); // Reset image index to display the first image when the day changes
  };

  return (
    <div className="container">
      <h1 className="centered-title">Classes</h1>
      <div className="image-display">
        <button className="arrow-button left-arrow" onClick={prevImage}>
          {'<'}
        </button>
        <img src={imagesByDay[selectedDay]?.[selectedImageIndex]} alt={selectedDay} className="class-image" />
        <button className="arrow-button right-arrow" onClick={nextImage}>
          {'>'}
        </button>
      </div>
      <div className="day-selector">
        {Object.keys(imagesByDay).map((day) => (
          <button key={day} className={`day-button ${selectedDay === day ? 'active' : ''}`} onClick={() => changeDay(day)}>
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Classes;
