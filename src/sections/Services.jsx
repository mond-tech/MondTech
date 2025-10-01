import React, { useState } from "react";
import { CiCloudOn } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaMicrochip } from "react-icons/fa6";
import { IoIosLaptop } from "react-icons/io";
import { DiAndroid } from "react-icons/di";
import { SlRefresh } from "react-icons/sl";
import { FaCogs } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      icon: <FaMicrochip />,
      title: "Machine Learning Development",
      text: "We engineer bespoke AI solutions, from Large Language Models (LLMs) to Machine Learning (ML) applications, helping you explore new opportunities for automation, insights, and innovation.",
    },
    {
      icon: <IoIosLaptop />,
      title: "Enterprise Software Solutions",
      text: "From custom development to system upgrades, we ensure AI-Native Development and an AI-Augmented SDLC to craft software that enhances operational efficiency and drives innovation.",
    },
    {
      icon: <FaGlobe />,
      title: "Digital Transformation",
      text: "We help businesses stay competitive by transforming legacy systems with AI-driven automation, modern digital-first solutions, and Intelligent Process Automation.",
    },
    {
      icon: <SlRefresh style={{ transform: "rotate(90deg)" }} />,
      title: "CI/CD Pipeline Implementation",
      text: "We implement Continuous Integration and Continuous Deployment pipelines to accelerate release cycles, ensure code quality, and automate deployments for faster and more reliable software delivery.",
    },
    {
      icon: <FaCogs />,
      title: "DevOps as a Service",
      text: "We enable seamless collaboration between development and operations teams with Infrastructure as Code (IaC), automated monitoring, and scalable CI/CD workflows to drive agility and efficiency.",
    },
    {
      icon: <DiAndroid />,
      title: "iOS and Android App Development",
      text: "We build intelligent mobile apps with Generative UX Design and AI-Powered Personalization to enhance user engagement.",
    },
    {
      icon: <CiCloudOn />,
      title: "AWS Azure GCP Solution",
      text: "From cloud migration to cloud-native application development, we leverage AWS, Azure, and GCP to deliver secure, scalable, and cost-optimized cloud solutions tailored to your business needs.",
    },
    {
      icon: <FaServer />,
      title: "IT Infrastructure Optimization",
      text: "We provide expert IT consulting to help businesses modernize their tech stack, improve processes, reduce costs, and align IT strategies with long-term business goals.",
    },
  ];

  return (
    <div id="services" style={styles.section}>
      <h1 style={styles.heading}>How We Can Help</h1>
      <div style={styles.container}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(hoveredIndex === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.icon}>{card.icon}</div>
            <h2 style={styles.title}>{card.title}</h2>
            <p style={styles.text}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: "#000",
    padding: "50px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#fff",
    letterSpacing: "1px",
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
    transition: "all 0.3s ease-in-out",
    textAlign: "left",
  },
  cardHover: {
    transform: "translateY(-10px)",
    border: "1px solid #f6d13bff",
    boxShadow: "0px 8px 20px rgba(246, 212, 59, 0.7)",
  },
  icon: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "12px",
    fontFamily: "'Poppins', sans-serif",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#ddd",
  },
};
