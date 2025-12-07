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
                    <p>A Community-Driven Academy Built For Real Progress
 BCA is more than a gym- it's a place where people grow mentally and physically.
 From complete beginners to competitive athletes, we coach every member with intention, respect and a focus on long-term
 development.</p>
                    <h3>Our Culture</h3>
                    <p>Our team combines decades of experience across MMA, boxing, wrestling and strength conditioning.
 But what sets us apart is our culture: supportive, disciplined, and designed to help you feel confident on and off the mats.
 You don't need to be fit, strong or experienced to start — you just need to walk through the door.
 We'll guide you through the rest.</p>
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
