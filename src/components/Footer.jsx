import React, { useState } from "react";
import logo from "../assets/logo.png"
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";

const sections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "All Services", href: "#services" },
      { name: "Pricing", href: "#pricing" },
      { name: "Case Studies", href: "#cases" },
      { name: "Consulting", href: "#consulting" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "#faq" },
      { name: "Help Desk", href: "#helpdesk" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
  },
    {
    title: "Support",
    links: [
      { name: "FAQ", href: "#faq" },
      { name: "Help Desk", href: "#helpdesk" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
  },
];

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo">
            <img className="logo-img" src={logo} alt="MondTech Logo" />
            <span className="logo-text">MondTech</span>
          </div>
          <p className="tagline">
            Building modern software solutions that scale globally.
          </p>
        </div>


        {/* Desktop Links */}
        <div className="footer-links desktop">
          {sections.map((section, idx) => (
            <div className="link-section" key={idx}>
              <h4>{section.title}</h4>
              {section.links.map((link, i) => (
                <a href={link.href} key={i}>
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="footer-links mobile">
          {sections.map((section, idx) => (
            <div className="accordion-section" key={idx}>
              <div
                className="accordion-header"
                onClick={() => toggleSection(idx)}
              >
                <h4>{section.title}</h4>
                {activeIndex === idx ? <FiMinus /> : <FiPlus />}
              </div>
              <div
                className={`accordion-content ${
                  activeIndex === idx ? "active" : ""
                }`}
              >
                {section.links.map((link, i) => (
                  <a href={link.href} key={i}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} MONDTECH. All rights reserved.
        </p>
        <div className="social-icons">
          <a href="#email" aria-label="Email">
            <CgMail size={"26px"}/>
          </a>
          <a href="#whattsap" aria-label="WhattsApp">
            <FaWhatsapp size={"26px"}/>
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram size={"26px"}/>
          </a>
          <a href="#twitter" aria-label="Twitter">
            <FaXTwitter size={"26px"}/>
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer {
          background: #000000ff;
          color: #e0e0e0;
          padding: 60px 20px 20px;
          font-family: "Inter", sans-serif;
        }
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: auto;
          gap: 40px;
        }
        .footer-brand {
          flex: 1 1 250px;
          min-width: 250px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .logo {
          font-size: 28px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 2px;
        }

        .logo-img {
          height: 40px; /* adjust as needed */
          width: auto;
        }

        .logo-text {
          font-size: 28px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 2px;
        }
        .tagline {
          margin-top: 10px;
          font-size: 14px;
          color: #b0b0b0;
          line-height: 1.6;
        }

        /* Desktop Links */
        .footer-links.desktop {
          display: flex;
          flex: 2 1 500px;
          gap: 50px;
        }
        .link-section h4 {
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
        }
        .link-section a {
          display: block;
          margin-bottom: 8px;
          color: #e0e0e0;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }
        .link-section a:hover {
          color: #ffffff;
        }

        /* Mobile Accordion */
        .footer-links.mobile {
          display: none;
          flex-direction: column;
          width: 100%;
        }
        .accordion-section {
          border-top: 1px solid #2a2a2a;
        }
        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 12px 0;
        }
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .accordion-content.active {
          max-height: 500px; /* enough to show links */
        }
        .accordion-content a {
          padding: 6px 0;
          color: #e0e0e0;
          text-decoration: none;
          font-size: 14px;
        }
        .accordion-content a:hover {
          color: #ffffff;
        }

        /* Bottom strip */
        .footer-bottom {
          margin-top: 40px;
          border-top: 1px solid #2a2a2a;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        .footer-bottom p {
          font-size: 12px;
          color: #888;
          margin: 0;
        }
        .social-icons a {
          margin-left: 12px;
          font-size: 18px;
          color: #b0b0b0;
          transition: color 0.3s;
          display: inline-block;
        }
        .social-icons a:hover {
          color: #ffffff;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-links.desktop {
            display: none;
          }
          .footer-links.mobile {
            display: flex;
          }
        }
      `}</style>
    </footer>
  );
}
