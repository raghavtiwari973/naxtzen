import { useState } from "react";
import { createPortal } from "react-dom";
import { agencyConfig, PricingPlan } from "../data/agencyConfig";
import { FaCircleCheck, FaStar, FaXmark, FaArrowRight } from "react-icons/fa6";
import "./styles/Pricing.css";

const Pricing = () => {
  const plans = agencyConfig.pricing;
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  // Dynamically assign a beautiful theme color to each plan
  const getPlanTheme = (name: string) => {
    if (name.toLowerCase().includes("student")) return "#60a5fa"; // Blue
    if (name.toLowerCase().includes("professional")) return "#2dd4bf"; // Teal
    if (name.toLowerCase().includes("corporate")) return "#c084fc"; // Purple
    if (name.toLowerCase().includes("maintenance")) return "#fbbf24"; // Amber
    return "#2dd4bf"; // Default fallback
  };

  // Dynamically assign a custom badge text to each plan
  const getPlanBadge = (name: string) => {
    if (name.toLowerCase().includes("student")) return "STARTER";
    if (name.toLowerCase().includes("professional")) return "MOST POPULAR";
    if (name.toLowerCase().includes("corporate")) return "PREMIUM";
    if (name.toLowerCase().includes("maintenance")) return "ESSENTIAL";
    return "RECOMMENDED";
  };

  return (
    <div className="pricing-section" id="pricing">
      <div className="pricing-container section-container">
        
        <div className="pricing-header-block">
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            PRICING PLANS
          </div>
          <h2 className="section-title">
            Transparent Pricing <br />
            <span className="gradient-text">Built to Grow With You</span>
          </h2>
          <p className="pricing-header-desc">
            No hidden commissions. Pick a professional baseline plan that fits your current operational status, or request custom features.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`pricing-card glass-panel ${plan.isPopular ? "popular-card" : ""}`}
              data-cursor="disable"
              onClick={() => setSelectedPlan(plan)}
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                height: "100%", 
                cursor: "pointer",
                borderTop: `4px solid ${getPlanTheme(plan.name)}`
              }}
            >
              <div className="popular-badge" style={{ background: getPlanTheme(plan.name), color: "#050810" }}>
                <FaStar className="star-icon" /> {getPlanBadge(plan.name)}
              </div>

              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <p className="plan-audience">{plan.suitableFor}</p>
                <div className="plan-price-wrapper">
                  <span className="price-val" style={{ color: getPlanTheme(plan.name) }}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <div className="pricing-card-footer" style={{ marginTop: "auto" }}>
                <button 
                  className={`pricing-cta-btn ${plan.isPopular ? "glow-btn-primary" : "glow-btn-secondary"}`}
                  onClick={() => setSelectedPlan(plan)}
                  style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", border: "none", cursor: "pointer", padding: "12px 24px", borderRadius: "30px", fontWeight: 600, fontSize: "16px" }}
                >
                  View Details <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Modal Overlay */}
        {createPortal(<div 
          className={`pricing-modal-overlay ${selectedPlan ? "active" : ""}`} 
          onClick={() => setSelectedPlan(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(5, 8, 16, 0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: selectedPlan ? 1 : 0,
            pointerEvents: selectedPlan ? "auto" : "none",
            transition: "opacity 0.3s ease"
          }}
        >
          <div 
            className="pricing-modal glass-panel" 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "400px",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "1.25rem 1.5rem",
              transform: selectedPlan ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.3s ease",
              textAlign: "left",
              borderTop: selectedPlan ? `4px solid ${getPlanTheme(selectedPlan.name)}` : "none"
            }}
          >
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedPlan(null)} 
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "var(--textColor, #fff)",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
            >
              <FaXmark />
            </button>
            
            {selectedPlan && (
              <div className="modal-inner">
                <div className="pricing-card-header" style={{ marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div className="popular-badge" style={{ position: 'relative', top: 0, left: 0, transform: 'none', display: 'inline-flex', marginBottom: '12px', background: getPlanTheme(selectedPlan.name), color: "#050810" }}>
                    <FaStar className="star-icon" /> {getPlanBadge(selectedPlan.name)}
                  </div>
                  <h2 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>{selectedPlan.name}</h2>
                  <p className="plan-audience" style={{ margin: 0, opacity: 0.8, fontSize: "0.9rem" }}>{selectedPlan.suitableFor}</p>
                  <div className="plan-price-wrapper" style={{ marginTop: "10px", justifyContent: "center", marginBottom: 0 }}>
                    <span className="price-val" style={{ fontSize: "1.5rem", fontWeight: "bold", color: getPlanTheme(selectedPlan.name) }}>{selectedPlan.price}</span>
                  </div>
                </div>

                <div className="pricing-divider" style={{ width: "100%", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.1)", margin: "15px 0" }}></div>

                <h3 style={{ marginBottom: "10px", fontSize: "1.05rem", fontWeight: "600" }}>What's included:</h3>
                <ul className="plan-features-list" style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", margin: 0 }}>
                  {selectedPlan.features.map((feat, fidx) => (
                    <li key={fidx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13.5px" }}>
                      <FaCircleCheck className="feat-check-icon" style={{ color: getPlanTheme(selectedPlan.name), marginTop: "4px", flexShrink: 0 }} /> 
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pricing-card-footer" style={{ marginTop: "20px", padding: 0 }}>
                  <a 
                    href="#contact" 
                    className={`pricing-cta-btn ${selectedPlan.isPopular ? "glow-btn-primary" : "glow-btn-secondary"}`}
                    style={{ width: "100%", display: "block", textAlign: "center", padding: "12px 24px", borderRadius: "30px", fontWeight: 600, textDecoration: "none", boxSizing: "border-box" }}
                    onClick={() => {
                      setSelectedPlan(null);
                      window.dispatchEvent(
                        new CustomEvent("prefillContact", {
                          detail: `Hi, I am interested in the ${selectedPlan.name} (${selectedPlan.price}). Please share more details!`,
                        })
                      );
                    }}
                  >
                    {selectedPlan.ctaText}
                  </a>
                  
                  {selectedPlan.note && (
                    <p className="plan-enterprise-note" style={{ marginTop: "10px", fontSize: "0.8rem", opacity: 0.7, textAlign: "center", lineHeight: 1.3 }}>
                      {selectedPlan.note}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>, document.body)}

      </div>
    </div>
  );
};

export default Pricing;
