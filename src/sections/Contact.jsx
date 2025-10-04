import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919760434722";
    const text = `✨ New Form Submission ✨%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-wrapper">
          {/* LEFT: Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="form-title">Contact Us</h2>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={inputStyle}
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ ...inputStyle, minHeight: "100px" }}
            />

            <button type="submit" className="submit-button">
              ✨ Send Message
            </button>
          </form>

          {/* RIGHT: Contact Info */}
          <div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 variants={itemVariants} className="contact-heading">
              Get in Touch with MondTech
            </h1>

            <div variants={itemVariants} className="contact-vertical">
              <div className="inline-item">
                <FaEnvelope className="inline-icon" />
                <a href="mailto:support@mondtech.in" className="inline-link">
                  support@mondtech.in
                </a>
              </div>

              <div className="inline-item">
                <FaPhone className="inline-icon" />
                <a href="tel:+919760434722" className="inline-link">
                  +91 9760434722
                </a>
              </div>

              <div className="inline-item">
                <FaMapMarkerAlt className="inline-icon" />
                <span className="inline-link">Greater Noida, India</span>
              </div>
            </div>

            <div variants={itemVariants} className="contact-bottom">
              <FaStar className="contact-star" />
              <p className="contact-paragraph">
                We welcome your inquiries and suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .contact-section {
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #000, #111);
        }

        .contact-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        /* LEFT: Form */
        .contact-form {
          background: #0d0d0d;
          padding: 30px;
          height: 550px;
          border-radius: 12px;
          flex: 1;
          min-width: 300px;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.15);
          border: 1px solid rgba(255, 215, 0, 0.2);
        }

        .form-title {
          color: #ffd700;
          text-align: center;
          margin-bottom: 10px;
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 1px;
        }

        /* RIGHT: Contact Info */
        .contact-info {
          flex: 1;
          gap: 50px;
          min-width: 300px;
          max-width: 500px;

          /* Vertically center to align with form height */
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 1rem;
        }

        .contact-heading {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #fff;
          background: linear-gradient(90deg, #ffd700, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }

        /* Vertical list of contact items */
        .contact-vertical {
          display: flex;
          flex-direction: column;
          gap: 5rem;
          margin-bottom: 2rem;
        }

        /* Each contact line with icon and text */
        .inline-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Icon size & color */
        .inline-icon {
          font-size: 1.6rem;
          color: #ffd700;
          flex-shrink: 0;
        }

        /* Link and text styles */
        .inline-link {
          font-size: 1.1rem;
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
          line-height: 1.4;
        }

        .inline-link:hover {
          color: #ffd700;
        }

        /* Bottom message styling */
        .contact-bottom {
          border-top: 1px solid #222;
          padding-top: 1.5rem;
          position: relative;
          text-align: center;
        }

        .contact-star {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 2.5rem;
          color: #ffd700;
          background: #0e0e0e;
          padding: 0 0.5rem;
        }

        .submit-button {
          background: linear-gradient(90deg, #ffd700, #ffc107, #ffa000);
          color: #0d0d0d;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 30px;
          font-size: 16px;
        }

        .submit-button:hover {
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .contact-wrapper {
            flex-direction: column;
            align-items: stretch;
          }

          .contact-info {
            padding-left: 0;
            max-width: 100%;
            justify-content: flex-start;
            margin-top: 2rem;
          }

          .contact-heading {
            font-size: 1.8rem;
          }

          .contact-vertical {
            gap: 1.8rem;
          }

          .inline-icon {
            font-size: 1.4rem;
          }

          .inline-link {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

// Input style for cleaner reuse
const inputStyle = {
  background: "#1a1a1a",
  color: "#ffffffff",
  marginTop: "12px",
  border: "1px solid #333",
  padding: "12px",
  borderRadius: "6px",
  outline: "none",
};

export default Contact;
