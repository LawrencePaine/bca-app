import React from 'react';

const TimetableSection: React.FC = () => {
    return (
        <section id="timetable" className="section-container">
            <div className="section-content" style={{ display: 'block' }}>
                <div className="text-content" style={{ textAlign: 'center', padding: 0 }}>
                    <h2>Timetable</h2>
                    <p className="section-subtitle">Check our weekly schedule for adults and youth classes.</p>
                </div>
                <div className="schedule-container" style={{ marginTop: '40px', width: '100%', height: '800px' }}>
                    <iframe
                        src="https://beverleycombatacademy.pushpress.com/landing/calendar?framed=1"
                        title="BCA Timetable"
                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px', backgroundColor: '#fff' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default TimetableSection;
