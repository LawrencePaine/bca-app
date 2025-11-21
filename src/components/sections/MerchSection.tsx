import React from 'react';
import './MerchSection.css';

const MerchSection: React.FC = () => {
    return (
        <section id="merch" className="section merch-section">
            <div className="container">
                <h2>Merchandise</h2>
                <p className="section-subtitle">Get your BCA gear here.</p>

                <div className="merch-embed">
                    <h3>Shop Online</h3>
                    {/* GymDesk Store Embed Placeholder */}
                    <div className="gymdesk-placeholder">
                        <p>GymDesk Store Embed Loading...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MerchSection;
