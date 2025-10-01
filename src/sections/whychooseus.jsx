import React from "react";

const chooseUsData = [
  {
    id: "001",
    title: "Seasoned Experts",
    description:
      "With a dedicated team of IT service consultants, we ensure maximum value for your engagement, resulting in a long-lasting partnership.",
  },
  {
    id: "002",
    title: "Attention to Every Detail",
    description:
      "Our IT support and project management experts pay attention to every minor requirement and assemble solutions effectively.",
  },
  {
    id: "003",
    title: "Transparency Paramount",
    description:
      "We believe in an open work culture, keeping clients updated about developments, ideas, and strategies.",
  },
  {
    id: "004",
    title: "Enhanced Security",
    description:
      "Our consultants specialize in identifying and mitigating security threats, implementing robust measures to ensure continuous protection.",
  },
  {
    id: "005",
    title: "Scalable Solutions",
    description:
      "We design systems and software that grow with your business, ensuring performance, reliability, and adaptability to future needs.",
  },
  {
    id: "006",
    title: "Customer-Centric Approach",
    description:
      "Our team prioritizes client satisfaction, delivering projects on time while maintaining transparency, communication, and quality at every step.",
  },
];

export default function WhyChooseUs() {
  return (
    <div style={styles.container} className="whychooseus-container">
      <h1>Why MondTech Is Your Ideal Tech Partner</h1>
      <p>
        MondTech delivers innovative, reliable, and scalable technology solutions,
        empowering businesses to achieve growth, efficiency, and lasting success.
      </p>

      <div className="whychooseus-scroll">
        {chooseUsData.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.number}>{item.id}</div>
            <div style={styles.content}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        /* Mobile-only scroll container */
        @media (max-width: 768px) {
          .whychooseus-container {
            padding: 24px !important;
          }
          .whychooseus-scroll {
            max-height: 60vh;
            overflow-y: auto;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
          .whychooseus-scroll::-webkit-scrollbar {
            display: none;             /* Chrome, Safari */
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "40px",
    backgroundColor: "#000",
    color: "#fff",
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
  },
  number: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#FFD700",
    minWidth: "50px",
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: "1.2rem",
    marginBottom: "5px",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#ccc",
  },
};
