import React from "react";
import { FiMail, FiMessageCircle, FiMap, FiCode, FiCheckCircle, FiUploadCloud } from "react-icons/fi";

export default function ConsultancyProcess() {
    const features = [
        {
            icon: (
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <FiMail size={40} />
                </div>
            ),
            title: "Client Contact",
            text: "Clients reach out via Email or WhatsApp, sharing their requirements and ideas.",
        },
        {
            icon: <FiMessageCircle size={40} />,
            title: "Requirement Analysis & Consultation",
            text: "We discuss the project in detail, clarify objectives, and suggest the best approach.",
        },
        {
            icon: <FiMap size={40} />,
            title: "Planning & Roadmap",
            text: "We create a project plan, define milestones, and decide on the technology stack.",
        },
        {
            icon: <FiCode size={40} />,
            title: "Design & Development",
            text: "UI/UX designs and prototypes are created, followed by development using best practices.",
        },
        {
            icon: <FiCheckCircle size={40} />,
            title: "Testing & Quality Assurance",
            text: "Rigorous testing ensures a bug-free, reliable, and high-performing software product.",
        },
        {
            icon: <FiUploadCloud size={40} />,
            title: "Delivery & Support",
            text: "Final product is delivered, deployed, and supported with maintenance and updates as needed.",
        },
    ];

    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div style={styles.container} className="container">
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

            {/* Left Side (Heading + CTA) */}
            <div style={styles.left} className="left">
                <h1 style={styles.heading}>
                    Our Process: From Your Request to Delivered Solution
                </h1>

                <div style={styles.ctaBox}>
                    <h2 style={styles.ctaTitle}>Get Started with Your Project Today</h2>
                    <p style={styles.ctaSubtitle}>Reach out to us via Email or WhatsApp, share your requirements, and we’ll guide you through our streamlined process to deliver exceptional results.</p>
                    <button style={styles.ctaButton} onClick={scrollToContact}>Contact Us</button>
                </div>
            </div>

<style>{`
.scrollArea {
    max-height: calc(3 * 120px); /* 3 features * approximate height (including margin/padding) */
    overflow-y: auto;
    position: relative;
}

/* Hide default scrollbar */
.scrollArea::-webkit-scrollbar {
    display: none;
}
.scrollArea {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
}

/* Vertical line indicator */
.scrollArea::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: #444;
    border-radius: 1px;
}

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
            max-height: 60vh;
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
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
    },
    left: {
        padding: "40px",
        borderRight: "1px solid #222",
    },
    heading: {
        fontSize: "32px",
        fontWeight: "bold",
        lineHeight: "1.3",
        marginBottom: "40px",
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
        marginBottom: "50px",
        color: "#ccc",
    },
    ctaButton: {
        background: "linear-gradient(90deg, #FFD700, #FFC107, #FFA000)",
        color: "#434040ff",
        border: "none",
        padding: "12px 20px",
        borderRadius: "8px",
        fontSize: "14px",
        cursor: "pointer",
        fontWeight: "bold",
    },
    right: {
        padding: "40px",
    },
    feature: {
        display: "flex",
        alignItems: "flex-start",
        gap: "15px",
        borderBottom: "1px solid #222",
        paddingBottom: "20px",
        marginBottom: "20px",
        minHeight: "120px", // fixed height for each feature
    },
    icon: {
        fontSize: "28px",
        marginTop: "5px",
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
