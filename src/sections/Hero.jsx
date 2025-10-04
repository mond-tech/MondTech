import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div className="pill">New</div>
              <div className="muted">Now offering fixed-price MVPs</div>
            </div>
            <motion.h1 initial={{y:8,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.1}}>
              We build modern software that powers growth
            </motion.h1>
            <p className="lead">
              Aurea Software helps startups and enterprises ship fast — product design, 
              engineering, and cloud operations with proven processes and measurable outcomes.
            </p>
            <div style={{display:'flex',gap:12,marginTop:18}}>
              <a className="cta" href="#contact">Get a Proposal</a>
              <a className="muted" href="#cases" style={{alignSelf:'center'}}>See Case Studies →</a>
            </div>
            <div className="kpis">
              <div className="kpi"><h3>6–12w</h3><p className="muted">Typical MVP</p></div>
              <div className="kpi"><h3>99.9%</h3><p className="muted">Uptime SLAs</p></div>
              <div className="kpi"><h3>+23%</h3><p className="muted">Avg conversion lift</p></div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="hero-slider">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

// Image Slider with Arrows
function ImageSlider(){
  const slides = [slide1, slide2, slide3];
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto play
  useEffect(() => {
    const timer = setInterval(nextSlide, 2000); // change every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      width: "100%",
      height: "300px", // bigger height for desktop
      maxWidth: "600px",
      position: "relative",
      overflow: "hidden",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      boxSizing: "border-box"
    }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index]}
          alt="slide"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AnimatePresence>

      {/* Arrows */}
      <button 
        onClick={prevSlide} 
        style={arrowStyle("left")}
      >
        <FaArrowLeft />
      </button>
      <button 
        onClick={nextSlide} 
        style={arrowStyle("right")}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

// Arrow styling
const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "12px",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.5)",
  border: "none",
  borderRadius: "50%",
  padding: "10px",
  cursor: "pointer",
  color: "white",
  fontSize: "18px",
  zIndex: 2
});
