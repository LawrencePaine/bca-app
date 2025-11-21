import React from 'react';


const YouthSection: React.FC = () => {
    return (
        <section id="youth" className="section-container">
            <div className="section-content" style={{ display: 'block' }}>
                <div className="text-content" style={{ textAlign: 'center', padding: 0 }}>
                    <h2>Youth Programs</h2>
                    <p className="section-subtitle">Building confidence, discipline, and fitness in our future leaders.</p>
                </div>

                <div className="grid-container">
                    <div className="card">
                        <h3>Little Champs (4-7 yrs)</h3>
                        <p>Fun and engaging introduction to martial arts.</p>
                    </div>
                    <div className="card">
                        <h3>Juniors (8-12 yrs)</h3>
                        <p>Developing technique, focus, and self-defense skills.</p>
                    </div>
                    <div className="card">
                        <h3>Teens (13-17 yrs)</h3>
                        <p>Advanced training for competition and real-world application.</p>
                    </div>
                </div>

                <div className="schedule-embed" style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3>Youth Schedule</h3>
                    {/* GymDesk Youth Schedule Embed Placeholder */}
                    <div className="gymdesk-placeholder" style={{ padding: '20px', backgroundColor: 'var(--secondary-bg)', marginTop: '20px' }}>
                        <p>GymDesk Youth Schedule Embed Loading...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YouthSection;
