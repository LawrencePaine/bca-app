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
                        <img src="/images/Sam.jpeg" alt="Sam Wilkinson" style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px', borderRadius: '8px' }} />
                        <h3>Sam Wilkinson</h3>
                        <p className="role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Head Coach / Owner</p>
                        <p className="bio">Sam Wilkinson is a former professional mixed martial artist, amateur boxer, kickboxing and BJJ athlete.
                            He holds a black belt in BJJ, has had 34 competitive fights, national level grappling medals and a degree in sports science.
                            Since his transition to coaching he has worked internationally from Australia to the Middle East, at UFC gym and Bones MMA before settling in Beverley and founding BCA.</p>
                    </div>
                    <div className="card">
                        <img src="/images/lawrencepaine.jpg" alt="Lawrence Paine" style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px', borderRadius: '8px' }} />
                        <h3>Lawrence Paine</h3>
                        <p className="role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>No Gi & Wrestling Coach</p>
                        <p className="bio">Lawrence is a BJJ purple belt coach and active competitor, known for his clear instruction and modern, pressure-tested approach to developing confident, well-rounded athletes. He has medalled at multiple tournaments and won several superfights, bringing practical competitive insight to his teaching.</p>
                    </div>
                    <div className="card">
                        <img src="/images/Ernest.jpeg" alt="Ernest" style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px', borderRadius: '8px' }} />
                        <h3>Ernest</h3>
                        <p className="role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>No Gi & Wrestling Coach</p>
                        <p className="bio">Ernest is a lifelong martial artist with an unwaivering passion for combat sports.
                            His patient and analytical approach to teaching, as well as his appreciation of basic fundamentals makes him an excellent coach for beginners and novices.</p>
                    </div>
                    <div className="card">
                        <img src="/images/Andy.jpeg" alt="Andy" style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px', borderRadius: '8px' }} />
                        <h3>Andy</h3>
                        <p className="role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>No Gi & Wrestling Coach</p>
                        <p className="bio">Andy is a Mixed Martial Artist, who has trained, competed and coached various forms of martial arts; BJJ, Muay Thai, MMA, Kickboxing, Boxing, and even Kung Fu!
                            With over 20 years in game, Andy’s experience and presence as an active competitor, and a coach, helps to shape athletes for success.</p>
                    </div>
                    <div className="card">
                        <img src="/images/Paulina.jpeg" alt="Paulina" style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '20px', borderRadius: '8px' }} />
                        <h3>Paulina</h3>
                        <p className="role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>No Gi & Wrestling Coach</p>
                        <p className="bio">Paulina is a BJJ purple belt and a very accomplished competitor.
                            She has won plenty of tournaments, including 2x ADCC gold and 1x British Open gold, amongst many others.
                            Her wealth of competition experience and knowledge, as well as her kind and approachable nature makes her a tremendous asset to her students and teammates alike.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
