import React from 'react';


const ClassesSection: React.FC = () => {
    return (
        <section id="classes" className="section-container">
            <div className="section-content" style={{ display: 'block' }}>
                <div className="text-content" style={{ textAlign: 'center', padding: 0 }}>
                    <h2>Our Classes</h2>
                </div>
                <div className="grid-container">
                    <div className="card">
                        <h3>Striking</h3>
                        <p>Muay Thai and Boxing fundamentals for all levels.</p>
                    </div>
                    <div className="card">
                        <h3>Grappling</h3>
                        <p>Brazilian Jiu Jitsu (Gi and No-Gi) and Wrestling.</p>
                    </div>
                    <div className="card">
                        <h3>MMA</h3>
                        <p>Integrate striking and grappling for complete fighting skills.</p>
                    </div>
                </div>
                <div className="schedule-embed" style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3>Class Schedule</h3>
                    {/* GymDesk Embed Placeholder */}
                    <div className="gymdesk-placeholder" style={{ padding: '20px', backgroundColor: 'var(--secondary-bg)', marginTop: '20px' }}>
                        <p>GymDesk Schedule Embed Loading...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassesSection;
