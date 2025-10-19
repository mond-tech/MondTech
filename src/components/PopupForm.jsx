import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoMail, IoCall, IoPerson } from 'react-icons/io5';
import img from '../assets/popup.jpg';

// Popup Form Styles
const popupStyles = `
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
}

.popup-content {
  background: linear-gradient(135deg, #111, #000);
  border-radius: 20px;
  padding: 0;
  max-width: 800px;
  width: 100%;
  height: 95%;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: auto;
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
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.popup-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.popup-left {
  flex: 1;
  padding: 0;
  position: relative;
  overflow: hidden;
}

.popup-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popup-right {
  flex: 1;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.popup-right h2 {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  text-align: center;
}

.popup-right p {
  margin: 0 0 24px;
  color: #ccc;
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
  color: #ccc;
  z-index: 1;
}

.popup-form input,
.popup-form textarea {
  width: 100%;
  padding: 14px 14px 14px 44px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 15px;
  transition: all 0.3s ease;
  outline: none;
}

.popup-form input:focus,
.popup-form textarea:focus {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.15);
}

.popup-form input::placeholder,
.popup-form textarea::placeholder {
  color: #ccc;
}

.popup-submit {
  background: #000;
  border: 2px solid #fff;
  padding: 16px 24px;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.popup-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  background: #111;
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
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #000;
  font-size: 32px;
  font-weight: bold;
}

.popup-success h3 {
  margin: 0 0 8px;
  font-size: 24px;
  color: #fff;
}

.popup-success p {
  margin: 0;
  color: #ccc;
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
  color: #ccc;
  font-size: 14px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #ccc;
}

.popup-skip {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ccc;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 12px;
}

.popup-skip:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .popup-content {
    flex-direction: column;
  }
  
  .popup-right {
    padding: 30px 20px;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .popup-content {
    margin: 5px;
    max-width: calc(100vw - 10px);
  }
  
  .popup-right {
    padding: 20px 15px;
  }
}
`;

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = popupStyles;
    document.head.appendChild(styleElement);
    return () => document.head.removeChild(styleElement);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVisible) closePopup();
    };
    if (isVisible) document.addEventListener('keydown', handleEscape), document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Submitted from: ${window.location.href}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919760434722?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
      setIsVisible(false);
    }, 2000);
    setIsSubmitting(false);
  };

  const closePopup = () => setIsVisible(false);

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
            <button className="popup-close" onClick={closePopup}><IoClose size={24} /></button>

            <div className="popup-left">
              <img src={img} alt="Popup Visual" />
            </div>

            <div className="popup-right">
              <h2>Get in Touch!</h2>
              <p>We'll respond within 24 hours</p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="popup-form">
                  <div className="form-group">
                    <div className="input-icon"><IoPerson size={16} /></div>
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
                    <div className="input-icon"><IoMail size={16} /></div>
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
                    <div className="input-icon"><IoCall size={16} /></div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="popup-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="popup-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </motion.div>
              )}

              <div className="popup-footer">
                <p>Or contact us directly:</p>
                <a href="tel:+919760434722" className="contact-link"><IoCall size={16} />+91 97604 34722</a>
                <button className="popup-skip" onClick={closePopup}>Skip for now</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
