import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What services does MondTech offer?",
    answer:
      "MondTech offers AI, Cloud Solutions, Cybersecurity, Data Analytics, IoT, AR/VR, Blockchain, and Custom Software Development.",
  },
  {
    question: "How can I get started with a project?",
    answer:
      "You can start by contacting us through the 'Innovate With Us' button, sharing your idea, and our experts will guide you through the process.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, MondTech offers ongoing maintenance, monitoring, and support to ensure your solutions remain efficient and up-to-date.",
  },
  {
    question: "Can you handle enterprise-level projects?",
    answer:
      "Absolutely. MondTech has experience with large-scale, global projects and can scale solutions to meet enterprise requirements.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We follow strict cybersecurity protocols, encryption, and best practices to ensure your data and systems are always secure.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="icon">
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .faq-container {
          width: 96vw;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #000;
          color: #fff;
          border-radius: 12px;
        }
        .faq-container h2 {
          text-align: center;
          font-size: 28px;
          margin-bottom: 30px;
        }
        .faq-item {
          border-bottom: 1px solid #222;
          padding: 15px 0;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 18px;
          font-weight: 500;
        }
        .faq-question:hover {
          color: #ffd700;
        }
        .faq-answer {
          margin-top: 10px;
          font-size: 15px;
          color: #ccc;
          line-height: 1.6;
          transition: all 0.3s ease;
        }
        .icon {
          font-size: 20px;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .faq-container {
            padding: 30px 15px;
          }
          .faq-container h2 {
            font-size: 24px;
          }
          .faq-question {
            font-size: 16px;
          }
          .faq-answer {
            font-size: 14px;
          }
          .icon {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
