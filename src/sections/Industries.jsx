import React from "react";
import { AiOutlineCloud, AiOutlineHome, AiOutlineBank } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { MdFlight } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";

const industries = [
  {
    icon: <AiOutlineCloud size={40} />,
    title: "SaaS (Software as a Service)",
    description:
      "Delivering scalable, secure, and innovative cloud-based solutions to streamline business operations efficiently.",
  },
  {
    icon: <FaWallet size={40} />,
    title: "FinTech & Banking",
    description:
      "Developing secure, user-friendly financial platforms enhancing transactions, analytics, and digital banking experiences.",
  },
  {
    icon: <GiCircuitry size={40} />,
    title: "IoT & Smart Devices",
    description:
      "Connecting devices intelligently, enabling automation, monitoring, and real-time data insights across industries.",
  },
  {
    icon: <RiShieldKeyholeLine size={40} />,
    title: "Cybersecurity Solutions",
    description:
      "Safeguarding digital assets with proactive threat detection, secure architecture, and compliance-focused protection strategies.",
  },
  {
    icon: <FiShoppingCart size={40} />,
    title: "E-Commerce & Retail",
    description:
      "Building engaging, seamless online shopping experiences with robust platforms, analytics, and payment solutions.",
  },
  {
    icon: <AiOutlineHome size={40} />,
    title: "Real Estate & PropTech",
    description:
      "Transforming property management, buying, and renting experiences through innovative digital solutions.",
  },
  {
    icon: <MdFlight style={{ transform: "rotate(40deg)" }} size={40} />,
    title: "Travel & Hospitality",
    description:
      "Creating digital solutions that enhance booking, guest management, and personalized travel experiences.",
  },
  {
    icon: <RiGovernmentLine size={40} />,
    title: "Government & Public Sector",
    description:
      "Developing secure, efficient digital solutions to enhance public services and citizen engagement.",
  },
];

const IndustriesSection = () => {
  return (
    <div id="industries" style={styles.container}>
      {industries.map((industry, index) => (
        <div key={index} style={styles.card} className="industry-card">
          <div style={styles.icon}>{industry.icon}</div>
          <h3 style={styles.title}>{industry.title}</h3>
          <p style={styles.description}>{industry.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    padding: "50px",
    backgroundColor: "#0a0a0a",
  },
  card: {
    backgroundColor: "#000000ff",
    border: "1px solid #222",
    borderRadius: "15px",
    padding: "40px 20px",
    textAlign: "center",
    color: "#fff",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s ease-in-out",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    fontSize: "14px",
    marginTop: "15px",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "all 0.3s ease-in-out",
    textAlign: "center",
  },
};

// Extra CSS hover effect
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  .industry-card {
    transition: background 0.9s ease, transform 0.3s ease, box-shadow 0.3s ease;
  }

  .industry-card:hover {
    background: linear-gradient(135deg, #a88513d2, #000000ff);
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }

  .industry-card:hover p {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(styleSheet);

export default IndustriesSection;
