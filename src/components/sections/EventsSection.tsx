import React from 'react';


const EventsSection: React.FC = () => {
    const events = [
        {
            title: 'In House Tournaments',
            description: 'Compete with your training partners in friendly competitions that test your skills and build experience.'
        },
        {
            title: 'Grading for BJJ and MMA',
            description: 'Regular grading sessions to help you progress through the belt levels and achieve your martial arts goals.'
        },
        {
            title: 'Watch Parties',
            description: 'Gather with the community to watch major fight events and celebrate the sport we love.'
        },
        {
            title: 'In House Recovery Support',
            description: 'Access guidance and resources for injury prevention and optimal physical recovery.'
        },
        {
            title: 'Mental Health Support',
            description: 'Dedicated support and advice to help you build mental resilience and overall well-being.'
        }
    ];

    return (
        <section id="events" className="section-container">
            <div className="section-content" style={{ display: 'block' }}>
                <div className="text-content" style={{ textAlign: 'center', padding: 0 }}>
                    <h2>What's Going On</h2>
                </div>
                <div className="grid-container">
                    {events.map((event, index) => (
                        <div key={index} className="card">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EventsSection;
