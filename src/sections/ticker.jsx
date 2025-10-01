import React from "react";
import { FaStar } from "react-icons/fa";

export default function Ticker() {
  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        <span>
          <FaStar /> Building innovative software solutions &nbsp;&nbsp;
          <FaStar /> Crafting responsive web & mobile apps &nbsp;&nbsp;
          <FaStar /> Leveraging cloud, AI & DevOps &nbsp;&nbsp;
          <FaStar /> Delivering secure, scalable & efficient systems &nbsp;&nbsp;
          <FaStar /> Driving digital transformation worldwide &nbsp;&nbsp;
        </span>
        {/* duplicate for seamless scroll */}
        <span>
          <FaStar /> Building innovative software solutions &nbsp;&nbsp;
          <FaStar /> Crafting responsive web & mobile apps &nbsp;&nbsp;
          <FaStar /> Leveraging cloud, AI & DevOps &nbsp;&nbsp;
          <FaStar /> Delivering secure, scalable & efficient systems &nbsp;&nbsp;
          <FaStar /> Driving digital transformation worldwide &nbsp;&nbsp;
        </span>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, #FFD700, #FFC107, #FFA000); /* gold gradient background */
          padding: 10px 0;
        }

        .ticker {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
          color: #1a1a1a; /* dark text for contrast */
          font-weight: bold;
          font-size: 1rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .ticker span {
          display: inline-block;
          padding-right: 60px; /* spacing between repeats */
        }

        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
