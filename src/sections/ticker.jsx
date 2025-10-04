import React from "react";
import { FaStar } from "react-icons/fa";

export default function Ticker() {
  const phrases = [
    "Building innovative software solutions and Leveraging cloud, AI & DevOps",
    "Crafting responsive web & mobile apps and Empowering businesses with technology",
    "Delivering secure, scalable & efficient systems and Designing delightful user experiences",
    "Driving digital transformation worldwide and Automating workflows with intelligence",
    "Innovating for a smarter future and Engineering excellence every step of the way",
  ];

  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        <div className="ticker-track">
          {phrases.map((p, i) => (
            <span className="phrase" key={i}>
              <FaStar /> {p}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, #ffd700, #ffc107, #ffa000);
          padding: 10px 0;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2002;
        }

        .ticker {
          width: 100%;
          overflow: hidden;
        }

        .ticker-track {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          flex-shrink: 0;
          color: #1a1a1a;
          font-weight: bold;
          font-size: 1rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          animation: scroll 4s linear infinite; /* adjust speed here */
          gap: 60px;
        }

        .phrase {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          gap: 8px;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(calc(-100% - 100vw));
          }
        }

        @media (max-width: 768px) {
          .ticker-track {
            font-size: 0.9rem;
            gap: 40px;
            animation-duration: 35s; /* slower for mobile */
          }
        }
      `}</style>
    </div>
  );
}
