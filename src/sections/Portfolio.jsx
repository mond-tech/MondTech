import React from "react";
import ai from "../assets/ai.png";

export default function Portfolio() {
  return (
    <>
      <div id="portfolio" className="portfolio-container">
        <div className="portfolio-card">
          {/* Left Content */}
          <div className="text-section">
            <h1 className="title">
              <span className="icon">✦</span> InventivAI
            </h1>
            <p className="description">
              The future of business is intelligent. But navigating AI, from
              Large Language Models to MLOps, is complex. Explore our resources,
              talk to our certified AI specialists, and build your roadmap for
              an AI-native future.
            </p>
            <button className="cta-button">Book AI Advisory Session</button>
          </div>

          {/* Right Image */}
          <div className="image-section">
            <img src={ai} alt="AI Illustration" />
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .portfolio-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          margin-bottom: 30px;
          background-color: #000;
          padding: 20px;
          box-sizing: border-box;
        }

        .portfolio-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          background: #000;
          color: #fff;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.8);
          width: 100%;      /* Full width */
          max-width: 100%;  /* Ensure no overflow */
          height: 300px;    /* Fixed small height */
          gap: 30px;
          transition: all 0.3s ease;
          overflow: hidden; /* Crop overflowing content */
        }

        .text-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .title {
          font-size: 28px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .icon {
          background: #fff;
          color: #000;
          padding: 5px 10px;
          border-radius: 8px;
          font-size: 18px;
        }

        .description {
          color: #ccc;
          line-height: 1.5;
          margin-bottom: 20px;
          overflow: hidden;
        }

        .cta-button {
          background: linear-gradient(90deg, #FFD700, #FFC107, #FFA000);;
          color: #000;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: background 0.3s ease;
          align-self: flex-start;
        }

        .cta-button:hover {
          background: #e5e5e5;
        }

        .image-section {
          flex: 1;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 15px;
        }

        .image-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;       /* Cover container */
          object-position: center; /* Show middle part */
        }

        @media (max-width: 768px) {
          .portfolio-card {
            flex-direction: column;
            height: 400px; /* Slightly taller for stacked layout */
            text-align: center;
            padding: 20px;
            gap: 20px;
          }

          .title {
            justify-content: center;
            font-size: 24px;
          }

          .description {
            font-size: 16px;
          }

          .cta-button {
            width: 80%;
            max-width: 250px;
            align-self: center;
          }

          .image-section {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
    </>
  );
}
