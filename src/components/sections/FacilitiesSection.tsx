import React from 'react';


const FacilitiesSection: React.FC = () => {
    return (
        <section id="facilities" className="section-container">
            <div className="section-content" style={{ display: 'block' }}>
                <div className="text-content" style={{ textAlign: 'center', padding: 0 }}>
                    <h2>Our Facilities</h2>
                </div>
                <div className="grid-container">
                    <div className="card">
                        <div className="facility-image-placeholder" style={{ height: '200px', backgroundColor: '#333', marginBottom: '20px' }}>Mat Area</div>
                        <h3>Spacious Mat Area</h3>
                        <p>Over 2000 sq ft of premium grappling mats.</p>
                    </div>
                    <div className="card">
                        <div className="facility-image-placeholder" style={{ height: '200px', backgroundColor: '#333', marginBottom: '20px' }}>Weights</div>
                        <h3>Strength & Conditioning</h3>
                        <p>Full weight room with squat racks, free weights, and cardio equipment.</p>
                    </div>
                    <div className="card">
                        <div className="facility-image-placeholder" style={{ height: '200px', backgroundColor: '#333', marginBottom: '20px' }}>Sauna</div>
                        <h3>Recovery Sauna</h3>
                        <p>Relax and recover in our infrared sauna.</p>
                    </div>
                    <div className="card">
                        <div className="facility-image-placeholder" style={{ height: '200px', backgroundColor: '#333', marginBottom: '20px' }}>Wellness Room</div>
                        <h3>Wellness Room</h3>
                        <p>A quiet space for meditation, stretching, and mental recovery.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
