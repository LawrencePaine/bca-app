import React from 'react';


const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="section-container">
            <div className="section-content" style={{ display: 'block' }}>
                <div className="text-content" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2>Contact Us</h2>
                    <h3>Social</h3>
                    <p>
                        <a href="https://www.instagram.com/beverley_combat_academy/" target="_blank" rel="noopener noreferrer">Instagram</a> |
                        <a href="https://www.facebook.com/profile.php?id=100090130692056" target="_blank" rel="noopener noreferrer"> Facebook</a> |
                        <a href="https://play.google.com/store/apps/details?id=com.fitnessmobileapps.beverleycombatacademy39461&hl=en_US&gl=US&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnRMLSuNP75gquhyT2_ivqVTb-6aU_RH_tiSaZ48yzsxgQA6WISKe8loeEuSs_aem_wEnencquuECnwYTiXDqZjg" target="_blank" rel="noopener noreferrer"> Play Store</a>
                    </p>
                </div>
                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', width: '100%' }}>
                    <div className="form-wrapper" style={{ minHeight: '400px' }}>
                        <iframe
                            src="https://go.ziplinks.com.au/widget/form/nSmVmU5QAHNIdmXZxFMY"
                            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                            id="inline-nSmVmU5QAHNIdmXZxFMY"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Website Contact Us Form"
                            data-height="400"
                            data-layout-iframe-id="inline-nSmVmU5QAHNIdmXZxFMY"
                            data-form-id="nSmVmU5QAHNIdmXZxFMY"
                            title="Website Contact Us Form"
                        >
                        </iframe>
                    </div>
                    <div className="map-wrapper" style={{ minHeight: '400px' }}>
                        <iframe
                            src="https://maps.google.com/maps?q=Unit+C,+Waltham+House,+Riverview+Rd,+Beverley+HU17+8DY&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px', borderRadius: '4px' }}
                            allowFullScreen
                            loading="lazy"
                            title="BCA Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
