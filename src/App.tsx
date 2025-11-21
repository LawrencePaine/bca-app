import React from 'react';
import Navbar from './components/navbar/navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ClassesSection from './components/sections/ClassesSection';
import YouthSection from './components/sections/YouthSection';
import FacilitiesSection from './components/sections/FacilitiesSection';
import TeamSection from './components/sections/TeamSection';
import MerchSection from './components/sections/MerchSection';
import ContactSection from './components/sections/ContactSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/images/HorizontalLogo.png" alt="BCA Logo" className="flagpole-logo" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <YouthSection />
        <FacilitiesSection />
        <TeamSection />
        <MerchSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
