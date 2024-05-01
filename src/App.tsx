import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/pages/home';
import Team from './components/pages/team';
import Classes from './components/pages/classes';
import Signup from './components/pages/sign-up';
import Store from './components/pages/store';
import Contact from './components/pages/contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
