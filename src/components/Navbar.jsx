import React from 'react';
import logo from "../assets/logo.png";

export default function Navbar(){
  return (
    <header className="nav" role="navigation">
      <div className="nav-inner">
        <div className="brand">
          <img className="logo" src={logo} alt="MONDTECH Logo" />
          <div>
            <div style={{fontWeight:800}}>MondTech</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>Modern products • Trusted delivery</div>
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#cases">Case Studies</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#resources">Resources</a>
          <a href="#team">Team</a>
          <a href="#contact" className="nav-cta">Get a Proposal</a>
        </nav>
      </div>
      <hr />
    </header>
  );
}
