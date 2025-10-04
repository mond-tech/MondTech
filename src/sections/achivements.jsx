import React from "react";

export default function StatsSection() {
  return (
    <>
      <div className="intro-section">
        <div className="intro-container">
          <div className="intro-left">
            <h1>
              Transforming Businesses with AI-Driven Technology That
              Transcends Geographies and Platforms
            </h1>
          </div>
          <div className="intro-right">
            <p>
              Appinventiv is one of the world’s largest AI-led IT service
              providers helping companies redefine their digital possibilities
              for nearly a decade now. With our team of 1600+ tech evangelists,
              we are building the digital infrastructure of our clients using
              intelligent, AI-native solutions, positioning them to be the
              market leaders of their respective industries.
            </p>
          </div>
        </div>
      </div>

      {/* Existing stats section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stats-card">
            <h2 className="stats-number">35+</h2>
            <h3 className="stats-title">Industries Mastered</h3>
            <p className="stats-text">
              With our agility & engineering expertise, we equip your critical
              business functions with customized tech, and expand digital
              capabilities.
            </p>
          </div>

          <div className="stats-card">
            <h2 className="stats-number">1600+</h2>
            <h3 className="stats-title">Tech Evangelists</h3>
            <p className="stats-text">
              We are a dynamic team of certified cloud architects, data
              scientists, and AI/ML specialists passionately driven to achieve
              the best results for our clients.
            </p>
          </div>

          <div className="stats-card">
            <h2 className="stats-number">150+</h2>
            <h3 className="stats-title">AI Models Deployed</h3>
            <p className="stats-text">
              From predictive analytics to generative AI, we've implemented
              intelligent models that drive measurable ROI.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Intro Section */
        .intro-section {
          background-color: #000;
          color: #fff;
          padding: 0rem 0rem;
        }

        .intro-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .intro-left h1 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 50px;
        }

        .intro-right p {
          font-size: 1rem;
          color: #d1d5db;
          line-height: 1.6;
          margin-top: 50px;
        }

        @media (max-width: 768px) {
          .intro-container {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .intro-left h1 {
            font-size: 2rem;
          }

          .intro-right p {
            margin-top: 1.5rem;
          }
        }

        /* Stats Section */
        .stats-section {
          background-color: #000;
          color: #fff;
          padding: 4rem 1rem;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .stats-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stats-card {
          text-align: center;
          padding-left: 1rem;
          border-left: 1px solid #f6d73bff;
        }

        @media (min-width: 768px) {
          .stats-card {
            text-align: left;
          }
        }

        .stats-number {
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffd500ff;
          margin-bottom: 0.5rem;
        }

        .stats-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .stats-text {
          color: #d1d5db;
        }
      `}</style>
    </>
  );
}
