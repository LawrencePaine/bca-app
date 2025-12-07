import React from 'react';
import '../App.css';
import './classes.css';

const Classes: React.FC = () => {
  const classTypes = [
    {
      name: 'BJJ',
      levels: ['Beginners', 'Intermediate', 'Advanced', 'Competition']
    },
    {
      name: 'Muay Thai',
      levels: ['Beginners', 'Intermediate', 'Advanced', 'Competition']
    },
    {
      name: 'MMA',
      levels: ['Beginners', 'Intermediate', 'Advanced', 'Competition']
    },
    {
      name: 'Strength and Conditioning',
      levels: ['Beginners', 'Intermediate', 'Advanced']
    },
    {
      name: 'Female Only Muay Thai and BJJ',
      levels: ['Beginners', 'Intermediate', 'Advanced']
    },
    {
      name: 'Private Training',
      levels: ['All Levels']
    }
  ];

  return (
    <div className="container">
      <h1 className="centered-title">Classes</h1>
      <div className="classes-grid">
        {classTypes.map((classType) => (
          <div key={classType.name} className="class-card">
            <h2>{classType.name}</h2>
            <ul className="levels-list">
              {classType.levels.map((level) => (
                <li key={level}>{level}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
