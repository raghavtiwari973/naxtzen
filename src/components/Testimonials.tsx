import { useState, useEffect, useRef, useCallback } from "react";
import { agencyConfig } from "../data/agencyConfig";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaCircleCheck } from "react-icons/fa6";
import "./styles/Testimonials.css";

const Testimonials = () => {
  const reviews = agencyConfig.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideTimer = useRef<any | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  }, [reviews.length]);

  // Set up auto sliding
  useEffect(() => {
    if (isHovered) {
      if (slideTimer.current) clearInterval(slideTimer.current);
      return;
    }

    slideTimer.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (slideTimer.current) clearInterval(slideTimer.current);
    };
  }, [handleNext, isHovered]);

  return (
    <div className="reviews-section" id="reviews">
      <div className="reviews-container section-container">
        
        <div className="reviews-grid">
          {/* Summary Box on Left/Top */}
          <div className="reviews-summary-card glass-panel" data-cursor="disable">
            <div className="section-subtitle">
              <span className="subtitle-line"></span>
              REVIEWS
            </div>
            
            <h2 className="section-title">
              What Our <br />
              <span className="gradient-text">Clients Say</span>
            </h2>
            
            <div className="reviews-rating-stats">
              <div className="stats-score-box">
                <span className="score-num">4.8</span>
                <span className="score-den">/ 5</span>
              </div>
              <div className="stars-wrapper">
                {"★".repeat(4)}
                {"½"}
              </div>
              <p className="rating-desc">
                Average Rating based on multiple verified client reviews.
              </p>
            </div>
            
            <div className="verified-badge-pill">
              <FaCircleCheck className="check-icon" /> 100% Verified Feedback
            </div>
          </div>

          {/* Sliding Testimonial Slider */}
          <div 
            className="reviews-slider-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slider track */}
            <div className="reviews-slider-viewport">
              <div 
                className="reviews-slider-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, idx) => (
                  <div key={idx} className="review-slide">
                    <div className="review-card glass-panel" data-cursor="disable">
                      <FaQuoteLeft className="review-quote-icon" />
                      
                      <div className="review-stars">
                        {"★".repeat(Math.floor(review.rating))}
                        {review.rating % 1 !== 0 && "½"}
                      </div>
                      
                      <p className="review-quote-text">
                        "{review.text}"
                      </p>
                      
                      <div className="review-client-meta">
                        <div>
                          <h4>{review.name}</h4>
                          <p>{review.role}, <strong>{review.company}</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="slider-controls-row">
              {/* Dot Indicators */}
              <div className="slider-dots">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    data-cursor="disable"
                  ></button>
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="slider-arrows">
                <button 
                  className="slider-arrow-btn" 
                  onClick={handlePrev}
                  aria-label="Previous review"
                  data-cursor="disable"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  className="slider-arrow-btn" 
                  onClick={handleNext}
                  aria-label="Next review"
                  data-cursor="disable"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
