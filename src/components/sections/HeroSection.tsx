import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="section hero-section">
            <div className="hero-content">
                <h1>Welcome to BCA</h1>
                <p>World Class Brazilian Jiu Jitsu & MMA in the heart of the city.</p>
                <a href="#contact" className="cta-button">Start Your Journey</a>
            </div>
        </section>
    );
};

export default HeroSection;
