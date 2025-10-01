import React from "react";
import { FaCode, FaCloud, FaDatabase, FaMobileAlt, FaLaptopCode, FaRobot, FaShieldAlt } from "react-icons/fa";
import { SiFigma, SiSlack, SiJira, SiTrello, SiGithub } from "react-icons/si";

const sliderData = [
  { id: 1, title: "Web Dev", logo: <FaCode size={40} color="#4CAF50" /> },
  { id: 2, title: "Cloud", logo: <FaCloud size={40} color="#2196F3" /> },
  { id: 3, title: "Database", logo: <FaDatabase size={40} color="#FF5722" /> },
  { id: 4, title: "Mobile", logo: <FaMobileAlt size={40} color="#9C27B0" /> },
  { id: 5, title: "UI/UX", logo: <SiFigma size={40} color="#F24E1E" /> },
  { id: 6, title: "DevOps", logo: <SiGithub size={40} color="#24292F" /> },
  { id: 7, title: "Project Mgmt", logo: <SiJira size={40} color="#0052CC" /> },
  { id: 8, title: "Communication", logo: <SiSlack size={40} color="#4A154B" /> },
  { id: 9, title: "AI/Automation", logo: <FaRobot size={40} color="#FFC107" /> },
  { id: 10, title: "Security", logo: <FaShieldAlt size={40} color="#FF0000" /> },
  { id: 11, title: "Collaboration", logo: <SiTrello size={40} color="#0079BF" /> },
];

const TechStackSlider = () => {
  const styles = {
    sliderContainer: {
      overflow: "hidden",
      width: "100%",
      backgroundColor: "#000",
      padding: "5px 0",
      marginBottom: "20px",
    },
    slider: {
      display: "flex",
      gap: "20px",
      animation: "scroll 8s linear infinite",
    },
    box: {
      minWidth: "100px",
      height: "100px",
      backgroundColor: "transparent",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.8rem",
      borderRadius: "10px",
      flexShrink: 0,
      padding: "3px",
      boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
    },
    keyframes: `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `,
  };

  const duplicatedBoxes = [...sliderData, ...sliderData];

  return (
    <div style={styles.sliderContainer}>
      <style>{styles.keyframes}</style>
      <div style={styles.slider}>
        {duplicatedBoxes.map((box, index) => (
          <div key={index} style={styles.box}>
            {box.logo}
            <p style={{ marginTop: "5px", fontSize: "0.7rem", textAlign: "center" }}>{box.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSlider;
