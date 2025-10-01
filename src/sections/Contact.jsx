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

  return (
    <>
      <section id="contact" className="contact-section">
        <div
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 variants={itemVariants} className="contact-heading">
            Get in Touch with MondTech
          </h1>

          <div className="contact-grid">
            {/* Email */}
            <div variants={itemVariants} className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h2 className="contact-subheading">Email</h2>
              <a href="mailto:support@mondtech.in" className="contact-link">
                support@mondtech.in
              </a>
            </div>

            {/* Phone */}
            <div variants={itemVariants} className="contact-card">
              <FaPhone className="contact-icon" />
              <h2 className="contact-subheading">Phone</h2>
              <a href="tel:+919760434722" className="contact-link">
                +91 9760434722
              </a>
            </div>

            {/* Address */}
            <div variants={itemVariants} className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h2 className="contact-subheading">Address</h2>
              <p className="contact-paragraph">Greater Noida, India</p>
            </div>
          </div>

          {/* Bottom Note */}
          <div variants={itemVariants} className="contact-bottom">
            <FaStar className="contact-star" />
            <p className="contact-paragraph">
              We welcome your inquiries and suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .contact-section {
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #000000ff 0%, #000000ff 100%);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #fff;
          background: linear-gradient(90deg, #ffd700, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-grid {
          display: grid;
          gap: 2.5rem;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .contact-card {
          background: #111;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7);
          border: 1px solid #ffd700;
        }

        .contact-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #ffd700;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .contact-card:hover .contact-icon {
          transform: rotate(15deg) scale(1.1);
          color: #ff8c00;
        }

        .contact-subheading {
          font-size: 1.3rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .contact-link {
          color: #ccc;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: #ffd700;
        }

        .contact-paragraph {
          color: #ccc;
          font-size: 1rem;
          line-height: 1.6;
        }

        .contact-bottom {
          margin-top: 4rem;
          border-top: 1px solid #222;
          padding-top: 2rem;
          position: relative;
        }

        .contact-star {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 3rem;
          color: #ffd700;
          background: #0e0e0e;
          padding: 0 0.5rem;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .contact-heading {
            font-size: 2rem;
          }
          .contact-card {
            padding: 2rem 1.5rem;
          }
          .contact-icon {
            font-size: 2rem;
          }
          .contact-subheading {
            font-size: 1.1rem;
          }
          .contact-paragraph {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
