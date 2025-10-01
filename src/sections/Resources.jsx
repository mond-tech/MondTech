import React from "react";

const Resources = () => {
  return (
    <div style={styles.container}>
      {/* Background Blur Circles */}
      <div style={styles.circlePurple}></div>
      <div style={styles.circleBlue}></div>

      <h1 style={styles.title}>The ROI of Intelligence</h1>

      <div style={styles.cardsWrapper}>
        {/* Card 1 */}
        <div style={styles.card}>
          <div style={styles.badge}>🚀 EFFICIENCY</div>
          <h2 style={styles.cardTitle}>Automate Processes</h2>
          <p style={styles.cardText}>
            Cut operational costs by up to <strong>30%</strong> with AI-driven workflow automation.
          </p>
        </div>

        {/* Card 2 */}
        <div style={styles.card}>
          <div style={styles.badge}>📈 GROWTH</div>
          <h2 style={styles.cardTitle}>Personalize Experiences</h2>
          <p style={styles.cardText}>
            Increase customer LTV (lifetime value) by <strong>25%</strong> through ML-powered personalization.
          </p>
        </div>

        {/* Card 3 */}
        <div style={styles.card}>
          <div style={styles.badge}>💡 INNOVATION</div>
          <h2 style={styles.cardTitle}>Accelerate Discovery</h2>
          <p style={styles.cardText}>
            Reduce R&amp;D cycles by <strong>50%</strong> using Generative AI for prototyping and simulation.
          </p>
        </div>
      </div>

      <button style={styles.button}>Talk to our Expert</button>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    backgroundColor: "#0e0e1f", // dark background instead of gold
    minHeight: "100vh",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    overflow: "hidden", // ensures circles don't create scrollbars
  },
  circlePurple: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(128, 0, 255, 0.5)",
    filter: "blur(100px)",
    top: "-50px",
    left: "-50px",
    zIndex: 0,
  },
  circleBlue: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "rgba(0, 128, 255, 0.5)",
    filter: "blur(120px)",
    bottom: "-80px",
    right: "-80px",
    zIndex: 0,
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
    position: "relative",
    zIndex: 1, // make text appear above blur circles
  },
  cardsWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "40px",
    position: "relative",
    zIndex: 1,
  },
  card: {
    backgroundColor: "#ffffff",
    color: "#000",
    borderRadius: "12px",
    padding: "25px",
    width: "300px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#000",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "6px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "15px",
    lineHeight: "1.5",
  },
  button: {
    background: "linear-gradient(90deg, #FFD700, #FFC107, #FFA000)",
    border: "none",
    color: "#000",
    padding: "12px 25px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    position: "relative",
    zIndex: 1,
  },
};

export default Resources;
