import React, { useState } from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const [showMembersDropdown, setShowMembersDropdown] = useState(false);

  const toggleMembersDropdown = () => {
    setShowMembersDropdown(!showMembersDropdown);
  };

  const handleMembersOptionClick = () => {
    setShowMembersDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Left side navigation items */}
        <a href="/" className="navbar-item">Home</a>
        <a href="/team" className="navbar-item">Team</a>
        <a href="/classes" className="navbar-item">Classes</a>
      </div>
      {/* Centered logo */}
      <div className="navbar-logo">
        <img src="/images/logo.jpg" alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-right">
        {/* Right side navigation items */}
          <a href="/memberships" className="navbar-item">Memberships</a>
          <a href="/signup" className="navbar-item">Sign-up</a>
          <a href="/contact" className="navbar-item">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
