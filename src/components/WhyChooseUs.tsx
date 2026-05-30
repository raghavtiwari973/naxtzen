import { agencyConfig } from "../data/agencyConfig";
import {
  FaPalette,
  FaBolt,
  FaMobileScreenButton,
  FaMagnifyingGlass,
  FaCreditCard,
  FaHeart,
  FaShieldHalved,
  FaSliders,
  FaAward,
  FaArrowTrendUp
} from "react-icons/fa6";
import "./styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const benefits = agencyConfig.benefits;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "palette":
        return <FaPalette />;
      case "zap":
        return <FaBolt />;
      case "smartphone":
        return <FaMobileScreenButton />;
      case "search":
        return <FaMagnifyingGlass />;
      case "credit-card":
        return <FaCreditCard />;
      case "heart":
        return <FaHeart />;
      case "shield":
        return <FaShieldHalved />;
      case "sliders":
        return <FaSliders />;
      case "award":
        return <FaAward />;
      case "trending-up":
        return <FaArrowTrendUp />;
      default:
        return <FaAward />;
    }
  };

  return (
    <div className="benefits-section">
      <div className="benefits-container section-container">
        
        <div className="benefits-header-block">
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            BENEFITS
          </div>
          <h2 className="section-title">
            Why Successful Clients <br />
          <span className="gradient-text">Choose Nextzee</span>
          </h2>
          <p className="benefits-header-desc">
            We don't just build websites; we design interactive digital extensions of your professional identity engineered to drive conversions and build trust.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="benefit-card glass-panel"
              data-cursor="disable"
            >
              <div className="benefit-icon-wrapper">
                {getIcon(benefit.icon)}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
