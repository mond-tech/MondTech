import React from "react";
import { SiMongodb, SiDocker, SiGit, SiAmazonaws, SiPostgresql, SiAngular, SiDotnet, SiCsharp, SiMicrosoftazure, SiGithubactions, SiJenkins, SiKubernetes, SiGooglecloud, SiPrometheus, SiGrafana, SiTerraform, SiAnsible, SiCircleci, SiTravisci, SiElastic, SiHelm } from "react-icons/si";
import { FaReact, FaJava, FaNode, FaPhp } from "react-icons/fa6";

// Data
// Data with brand colors
const boxData = [
  { id: 1, title: "Mongodb", logo: <SiMongodb size={70} color="#47A248" /> },
  { id: 2, title: "React", logo: <FaReact size={70} color="#61DAFB" /> },
  { id: 3, title: "Java", logo: <FaJava size={70} color="#007396" /> },
  { id: 4, title: "Python", logo: <SiDocker size={70} color="#3776AB" /> }, // If Python logo used, color #3776AB
  { id: 5, title: "Node.js", logo: <FaNode size={70} color="#339933" /> },
  { id: 6, title: "PHP", logo: <FaPhp size={70} color="#777BB4" /> },
  { id: 7, title: "Docker", logo: <SiDocker size={70} color="#2496ED" /> },
  { id: 8, title: "Git", logo: <SiGit size={70} color="#F05032" /> },
  { id: 9, title: "AWS", logo: <SiAmazonaws size={70} color="#FF9900" /> },
  { id: 10, title: "PostgreSQL", logo: <SiPostgresql size={70} color="#336791" /> },
  { id: 11, title: ".NET", logo: <SiDotnet size={70} color="#512BD4" /> },
  { id: 12, title: "Angular", logo: <SiAngular size={70} color="#DD0031" /> },
  { id: 13, title: "C#", logo: <SiCsharp size={70} color="#9B4993" /> },
  { id: 14, title: "Azure", logo: <SiMicrosoftazure size={70} color="#0089D6" /> },
  { id: 15, title: "GitHub Actions", logo: <SiGithubactions size={70} color="#2088FF" /> },
  { id: 16, title: "Jenkins", logo: <SiJenkins size={70} color="#D24939" /> },
  { id: 17, title: "Kubernetes", logo: <SiKubernetes size={70} color="#326CE5" /> },
  { id: 18, title: "Elastic", logo: <SiElastic size={70} color="#005571" /> },
  { id: 19, title: "Google Cloud", logo: <SiGooglecloud size={70} color="#4285F4" /> },
  { id: 20, title: "Helm", logo: <SiHelm size={70} color="#0F8B8D" /> },
  { id: 21, title: "CircleCI", logo: <SiCircleci size={70} color="#343434" /> },
  { id: 22, title: "Grafana", logo: <SiGrafana size={70} color="#F46800" /> },
  { id: 23, title: "Prometheus", logo: <SiPrometheus size={70} color="#E6522C" /> },
  { id: 24, title: "Terraform", logo: <SiTerraform size={70} color="#623CE4" /> },
  { id: 25, title: "Ansible", logo: <SiAnsible size={70} color="#EE0000" /> },
];


const LogoTechStack = () => {
  const styles = {
    sliderContainer: {
      overflow: "hidden",
      width: "100%",
      backgroundColor: "#000",
    },
    slider: {
      display: "flex",
      gap: "10px",
      animation: "scroll 7s linear infinite", // faster scroll
    },
    box: {
      minWidth: "150px",
      height: "150px",
      backgroundColor: "#000",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2rem",
      borderRadius: "15px",
      flexShrink: 0,
      padding: "1px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    },
    keyframes: `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); } /* move full width of first set */
      }
    `,
  };

  // Duplicate the array for smooth infinite scroll
  const duplicatedBoxes = [...boxData, ...boxData];

  return (
    <div style={styles.sliderContainer}>
      <style>{styles.keyframes}</style>
      <div style={styles.slider}>
        {duplicatedBoxes.map((box, index) => (
          <div key={index} style={styles.box}>
            {box.logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTechStack;
