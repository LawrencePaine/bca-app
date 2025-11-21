import React from 'react';


const AboutSection: React.FC = () => {
    return (
        <section id="about" className="section-container">
            <div className="section-content">
                <div className="text-content">
                    <h2>
                        <span style={{ color: '#45A7BB' }}>Believe.</span> <span style={{ color: '#EB6336' }}>Commit.</span> <span style={{ color: '#F2CC47' }}>Achieve.</span>
                    </h2>
                    <h3>Our Mission</h3>
                    <p>To provide the highest quality martial arts instruction in a safe, positive, and inclusive environment.</p>
                    <h3>Our Culture</h3>
                    <p>We believe in hard work, respect, and community. Everyone is welcome on the mats.</p>
                    <a href="#contact" className="secondary-button">Learn More</a>
                </div>
                <div className="image-wrapper">
                    <img src="/images/about1.jpg" alt="About BCA" className="section-image" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
