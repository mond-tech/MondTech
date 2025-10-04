import React from "react";
import { IoIosGitBranch } from "react-icons/io";
import { LuBrain } from "react-icons/lu";
import { HiPaperAirplane } from "react-icons/hi";
import { LuDatabase } from "react-icons/lu";
import { MdImageSearch } from "react-icons/md";
import { MdOutlineSensors } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaAws } from "react-icons/fa6";
import { CiCloudRainbow } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { GiVrHeadset } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { GiBreakingChain } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function TechSolutions() {
const features = [
  {
    icon: <MdOutlineSecurity size={100} />,
    title: "Cybersecurity",
    text: "Protecting digital systems, networks, and data from threats through encryption, firewalls, monitoring, secure protocols, authentication, prevention strategies, ensuring privacy, trust, compliance, and risk mitigation globally.",
  },
  {
    icon: <FaAws size={100} />,
    title: "AWS (Amazon Web Services)",
    text: "Comprehensive cloud platform offering computing power, storage, databases, AI, and developer tools, supporting scalable, reliable, cost-effective solutions, global infrastructure, seamless integration, and advanced enterprise services.",
  },
  {
    icon: <GiArtificialIntelligence size={100} />,
    title: "Machine Learning",
    text: "Subset of AI enabling systems to learn from data patterns, adapt automatically, make predictions, optimize operations, enhance personalization, support automation, and drive innovation in diverse industries.",
  },
  {
    icon: <IoIosGitBranch size={100} />,
    title: "Version Controlling",
    text: "System managing code changes collaboratively, tracking revisions, enabling collaboration, branching, merging, maintaining historical software development records efficiently, improving productivity, and ensuring project version stability.",
  },
  {
    icon: <MdOutlineAnalytics size={100} />,
    title: "Data Science and Analytics",
    text: "Extracting insights from structured and unstructured data using statistical analysis, machine learning, visualization, predictive modeling for decision-making, improving business strategies, and enabling evidence-based innovation.",
  },
  {
    icon: <MdOutlineSensors size={100} />,
    title: "Internet of Things (IoT)",
    text: "Network of interconnected physical devices collecting, exchanging, and analyzing data, enabling smarter decision-making, automation, real-time monitoring, predictive maintenance, and innovative applications across industries worldwide.",
  },
  {
    icon: <LuDatabase size={100} />,
    title: "Big Data",
    text: "Massive volumes of structured and unstructured information processed for insights, optimizing business operations, predictive analytics, customer experiences, market strategies, scientific research, and data-driven decision-making.",
  },
  {
    icon: <LuBrain size={100} />,
    title: "Artificial Intelligence (AI)",
    text: "Simulating human intelligence in machines to perform tasks, analyze data, recognize patterns, automate decisions, improve efficiency across industries, and revolutionize automation, innovation, and intelligent digital transformation.",
  },
  {
    icon: <MdImageSearch size={100} />,
    title: "Image Analysis",
    text: "Processing and interpreting digital images using algorithms to detect patterns, identify objects, enhance visual data, support automation, enable recognition, healthcare diagnostics, and intelligent security systems.",
  },
  {
    icon: <SiHiveBlockchain size={100} />,
    title: "Blockchain",
    text: "A decentralized, secure, and immutable ledger enabling transparent transactions, cryptocurrency, smart contracts, data integrity, trustless peer-to-peer networks, and empowering next-generation digital financial ecosystems globally.",
  },
  {
    icon: <GiBreakingChain size={100} />,
    title: "Kubernetes",
    text: "Open-source container orchestration platform automating deployment, scaling, and management of containerized applications across distributed computing environments efficiently, ensuring resilience, scalability, and flexible resource optimization.",
  },
  {
    icon: <GiVrHeadset size={100} />,
    title: "AR/VR (Augmented and Virtual Reality)",
    text: "Immersive technologies enhancing or simulating real-world experiences, enabling interactive gaming, training, simulations, marketing, experiential applications, product design, healthcare solutions, and advanced remote collaboration.",
  },
  {
    icon: <CiCloudRainbow size={100} />,
    title: "Cloud",
    text: "On-demand computing resources delivered via internet including storage, applications, networking, and services, enabling scalability, cost-efficiency, accessibility, collaboration, agility, disaster recovery, and enterprise digital transformation.",
  },
];


  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.container} className="container">
      {/* Left Side (Heading + CTA) */}
      <div style={styles.left} className="left">
        <h1 style={styles.heading}>
          We Create New Solutions and Transform Existing Ones with Technologies
          That Beat Industry-Best Timelines
        </h1>

        <div style={styles.ctaBox}>
          
          <h2 style={styles.ctaTitle}><HiPaperAirplane style={{ transform: "rotate(45deg)" }} size={30} /> Fuel Your Digital-First Idea</h2>
          <p style={styles.ctaSubtitle}>With 1600+ Transformation Experts</p>
          <button style={styles.ctaButton} onClick={scrollToContact}>Innovate With Us</button>
        </div>
      </div>

      {/* Right Side (Scrollable) */}
      <div style={styles.right} className="scrollArea right">
        {features.map((feature, index) => (
          <div key={index} style={styles.feature}>
            <div style={styles.icon}>{feature.icon}</div>
            <div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureText}>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS for responsiveness + hiding scrollbar */}
      <style>{`
        .scrollArea {
          scrollbar-width: none; /* Firefox */
          min-height: calc(4 * 130px); /* Show 3 features approximately */
        }
        .scrollArea::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }

        /* 📱 Mobile Styles */
        @media (max-width: 768px) {
          .container {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
          }
          .left {
            border-right: none !important;
            border-bottom: 1px solid #222;
            height: auto !important;
            padding: 20px !important;
          }
          .right {
            height: auto !important;
            max-height: 60vh; /* scroll only on features */
            overflow-y: auto !important;
            padding: 20px !important;
          }
          h1 {
            font-size: 24px !important;
            line-height: 1.35 !important;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    width: "100%",
    maxWidth: "100vw",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  left: {
    padding: "40px",
    borderRight: "1px solid #222",
    height: "100vh",
    overflow: "hidden",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    lineHeight: "1.3",
    marginBottom: "60px",
  },
  ctaBox: {
    backgroundColor: "#111",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
    textAlign: "left",
  },
  ctaTitle: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  ctaSubtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#ccc",
  },
  ctaButton: {
    background: "linear-gradient(90deg, #FFD700, #FFC107, #FFA000)",
    color: "#292929ff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  right: {
    padding: "40px",
    height: "100vh",
    overflowY: "scroll",
  },
  feature: {
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    borderBottom: "1px solid #222",
    paddingBottom: "20px",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  featureTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  featureText: {
    fontSize: "14px",
    color: "#ccc",
    lineHeight: "1.6",
  },
};
