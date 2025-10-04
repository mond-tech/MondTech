import React from "react";
import { FaStar } from "react-icons/fa";

export default function Ticker() {
  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        <div className="ticker-content">
          <span className="ticker-item">
            <FaStar /> Building innovative software solutions &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Crafting responsive web & mobile apps &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Leveraging cloud, AI & DevOps &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Delivering secure, scalable & efficient systems &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Driving digital transformation worldwide &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Building innovative software solutions &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Crafting responsive web & mobile apps &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          {/* <span className="ticker-item">
            <FaStar /> Building innovative software solutions &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Crafting responsive web & mobile apps &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Leveraging cloud, AI & DevOps &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Delivering secure, scalable & efficient systems &nbsp;&nbsp;&nbsp;&nbsp;
            <FaStar /> Driving digital transformation worldwide &nbsp;&nbsp;&nbsp;&nbsp;
          </span> */}
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, #FFD700, #FFC107, #FFA000); /* gold gradient background */
          padding: 10px 0;
          max-width: 100vw;
          box-sizing: border-box;
        }

        .ticker {
          width: 100%;
          overflow: hidden;
        }

        .ticker-content {
          display: flex;
          animation: scroll 4s linear infinite;
          will-change: transform;
        }

        .ticker-item {
          display: inline-block;
          white-space: nowrap;
          color: #1a1a1a; /* dark text for contrast */
          font-weight: bold;
          font-size: 1rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          padding-right: 100px; /* spacing between duplicates */
        }

        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .ticker-item {
            font-size: 0.9rem;
            padding-right: 60px;
          }
        }
      `}</style>
    </div>
  );
}
