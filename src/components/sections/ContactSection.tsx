import React from 'react';


const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="section-container">
            <div className="section-content">
                <div className="text-content">
                    <h2>Contact Us</h2>
                    <h3>Location</h3>
                    <p>123 Main St, Anytown, USA</p>
                    <h3>Hours</h3>
                    <p>Mon-Fri: 6am - 9pm</p>
                    <p>Sat: 9am - 2pm</p>
                    <p>Sun: Closed</p>
                    <h3>Social</h3>
                    <p>
                        <a href="#">Instagram</a> | <a href="#">Facebook</a>
                    </p>
                </div>
                <div className="text-content">
                    <h3>Get in Touch</h3>
                    {/* GymDesk Contact Form Embed Placeholder */}
                    <div className="gymdesk-placeholder" style={{ padding: '20px', backgroundColor: 'var(--secondary-bg)', marginTop: '20px', borderRadius: '4px' }}>
                        <p>GymDesk Contact Form Embed Loading...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
