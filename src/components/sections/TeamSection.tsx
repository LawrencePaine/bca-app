import React from 'react';


const TeamSection: React.FC = () => {
    return (
        <section id="team" className="section-container">
            <div className="section-content" style={{ display: 'block' }}>
                <div className="text-content" style={{ textAlign: 'center', padding: 0 }}>
                    <h2>Meet the Team</h2>
                </div>
                <div className="grid-container">
                    <div className="card">
                        <div className="member-image-placeholder" style={{ height: '250px', backgroundColor: '#333', marginBottom: '20px' }}>Sam Wilkinson</div>
                        <h3>Sam Wilkinson</h3>
                        <p className="role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Head Coach / Owner</p>
                        <p className="bio">Black Belt in Brazilian Jiu Jitsu. Over 15 years of experience.</p>
                    </div>
                    <div className="card">
                        <div className="member-image-placeholder" style={{ height: '250px', backgroundColor: '#333', marginBottom: '20px' }}>Coach 2</div>
                        <h3>Future Coach</h3>
                        <p className="role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Striking Coach</p>
                        <p className="bio">Expert in Muay Thai and Boxing.</p>
                    </div>
                    <div className="card">
                        <div className="member-image-placeholder" style={{ height: '250px', backgroundColor: '#333', marginBottom: '20px' }}>Coach 3</div>
                        <h3>Future Coach</h3>
                        <p className="role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Kids Coach</p>
                        <p className="bio">Dedicated to teaching the next generation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
