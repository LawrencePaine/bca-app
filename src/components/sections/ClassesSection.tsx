import React from 'react';


const ClassesSection: React.FC = () => {
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
        <section id="classes" className="section-container">
            <div className="section-content" style={{ display: 'block' }}>
                <div className="text-content" style={{ textAlign: 'center', padding: 0 }}>
                    <h2>Our Classes</h2>
                    <p className="section-subtitle">
                        Every class is coached with intention: clear teaching, proper technique, and real progression.
                    </p>
                </div>
                <div className="grid-container">
                    {classTypes.map((classType) => (
                        <div key={classType.name} className="card">
                            <h3>{classType.name}</h3>
                            <ul className="levels-list">
                                {classType.levels.map((level) => (
                                    <li key={level}>{level}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ClassesSection;
