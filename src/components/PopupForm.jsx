import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoMail, IoCall, IoPerson, IoChatbubble } from 'react-icons/io5';

// Popup Form Styles
const popupStyles = `
/* Popup Form Styles */

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
}

.popup-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0;
  max-width: 800px;
  width: 100%;
  height: 95%;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: row;
}

.popup-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
}

.popup-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.popup-left {
  flex: 1;
  background: linear-gradient(135deg, var(--panel), var(--gold));
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.popup-left::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.4;
}

.popup-left-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.popup-image-icon {
  font-size: 48px;
  margin-bottom: 16px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.popup-image-text {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.popup-image-subtitle {
  font-size: 14px;
  opacity: 0.9;
  font-weight: 500;
}

.popup-right {
  flex: 1;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.popup-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--panel), var(--gold));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  color: var(--white);
}

.popup-right h2 {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
  color: var(--white);
  text-align: center;
}

.popup-right p {
  margin: 0 0 24px;
  color: var(--muted);
  font-size: 16px;
  text-align: center;
}

.popup-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  z-index: 1;
}

.popup-form input,
.popup-form textarea {
  width: 100%;
  padding: 14px 14px 14px 44px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
  font-size: 15px;
  transition: all 0.3s ease;
  outline: none;
}

.popup-form input:focus,
.popup-form textarea:focus {
  border-color: var(--panel);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(172, 130, 7, 0.2);
}

.popup-form input::placeholder,
.popup-form textarea::placeholder {
  color: var(--muted);
}

.popup-submit {
  background: linear-gradient(135deg, var(--panel), var(--gold));
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
  box-shadow: 0 4px 12px rgba(172, 130, 7, 0.3);
}

.popup-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(172, 130, 7, 0.3);
}

.popup-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.popup-success {
  text-align: center;
  padding: 20px 0;
}

.success-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 32px;
  font-weight: bold;
}

.popup-success h3 {
  margin: 0 0 8px;
  font-size: 24px;
  color: var(--white);
}

.popup-success p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
}

.popup-footer {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
}

.popup-footer p {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 14px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--panel);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--gold);
}

.popup-skip {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--muted);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 12px;
}

.popup-skip:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .popup-overlay {
    padding: 10px;
  }
  
  .popup-content {
    flex-direction: column;
    max-width: calc(100vw - 20px);
    margin: 10px;
  }
  
  .popup-left {
    padding: 30px 20px;
  }
  
  .popup-right {
    padding: 30px 20px;
  }
  
  .popup-image-icon {
    font-size: 36px;
    margin-bottom: 12px;
  }
  
  .popup-image-text {
    font-size: 16px;
    margin-bottom: 6px;
  }
  
  .popup-image-subtitle {
    font-size: 12px;
  }
  
  .popup-right h2 {
    font-size: 24px;
  }
  
  .popup-right p {
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  .popup-form input,
  .popup-form textarea {
    padding: 12px 12px 12px 40px;
    font-size: 14px;
  }
  
  .popup-submit {
    padding: 14px 20px;
    font-size: 14px;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .popup-content {
    margin: 5px;
    max-width: calc(100vw - 10px);
  }
  
  .popup-left {
    padding: 20px 15px;
  }
  
  .popup-right {
    padding: 20px 15px;
  }
  
  .popup-image-icon {
    font-size: 28px;
    margin-bottom: 8px;
  }
  
  .popup-image-text {
    font-size: 14px;
    margin-bottom: 4px;
  }
  
  .popup-image-subtitle {
    font-size: 11px;
  }
  
  .popup-right h2 {
    font-size: 20px;
  }
  
  .popup-right p {
    font-size: 12px;
    margin-bottom: 16px;
  }
  
  .popup-form input,
  .popup-form textarea {
    padding: 10px 10px 10px 36px;
    font-size: 13px;
  }
  
  .popup-submit {
    padding: 12px 16px;
    font-size: 13px;
  }
}
`;

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Inject styles into document head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = popupStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle Escape key to close popup
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVisible) {
        closePopup();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `New Contact Form Submission:
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Submitted from: ${window.location.href}`;

      // Encode message for WhatsApp
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919760434722?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitted(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsVisible(false);
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popup-overlay"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="popup-close" onClick={closePopup}>
              <IoClose size={24} />
            </button>

            {/* Left Side - Image */}
            <div className="popup-left">
              <div className="popup-left-content">
                <div className="popup-image-icon">🚀</div>
                <div className="popup-image-text">Let's Connect!</div>
                <div className="popup-image-subtitle">Start Your Project Today</div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="popup-right">
              <h2>Get in Touch!</h2>
              <p>We'll respond within 24 hours</p>

            {/* Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="popup-form">
                <div className="form-group">
                  <div className="input-icon">
                    <IoPerson size={16} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <div className="input-icon">
                    <IoMail size={16} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <div className="input-icon">
                    <IoCall size={16} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* <div className="form-group">
                  <div className="input-icon">
                    <IoChatbubble size={16} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="1"
                    required
                  />
                </div> */}

                <button 
                  type="submit" 
                  className="popup-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="popup-success"
              >
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </motion.div>
            )}

              {/* Footer */}
              <div className="popup-footer">
                <p>Or contact us directly:</p>
                <a href="tel:+919760434722" className="contact-link">
                  <IoCall size={16} />
                  +91 97604 34722
                </a>
                <button className="popup-skip" onClick={closePopup}>
                  Skip for now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
