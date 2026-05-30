import { useState } from "react";
import { agencyConfig } from "../data/agencyConfig";
import { FaChevronDown } from "react-icons/fa6";
import "./styles/FAQ.css";

const FAQ = () => {
  const faqs = agencyConfig.faqs;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="faq-section" id="faq">
      <div className="faq-container section-container">
        
        <div className="faq-header-block">
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            COMMON QUESTIONS
          </div>
          <h2 className="section-title">
            Frequently Asked <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="faq-header-desc">
            Got questions about how we design, build, host, and hand over our custom portfolio sites? Here are some quick answers.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item glass-panel ${isOpen ? "faq-open" : ""}`}
                data-cursor="disable"
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <h3>{faq.question}</h3>
                  <span className={`faq-arrow-icon ${isOpen ? "rotate" : ""}`}>
                    <FaChevronDown />
                  </span>
                </button>
                
                <div className={`faq-answer-wrapper ${isOpen ? "active" : ""}`}>
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
