import { useState } from "react";
import { createPortal } from "react-dom";
import { agencyConfig, Service } from "../data/agencyConfig";
import {
  FaGraduationCap,
  FaBriefcase,
  FaBuilding,
  FaRocket,
  FaWindowMaximize,
  FaArrowsRotate,
  FaCode,
  FaXmark,
  FaArrowRight
} from "react-icons/fa6";
import "./styles/Services.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "graduation":
        return <FaGraduationCap />;
      case "briefcase":
        return <FaBriefcase />;
      case "building":
        return <FaBuilding />;
      case "rocket":
        return <FaRocket />;
      case "layout":
        return <FaWindowMaximize />;
      case "sparkles":
        return <FaArrowsRotate />;
      case "code":
        return <FaCode />;
      default:
        return <FaCode />;
    }
  };

  return (
    <div className="services-section" id="services">
      <div className="services-container section-container">
        
        <div className="services-header-block">
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            OUR SERVICES
          </div>
          <h2 className="section-title">
            Tailored Solutions For <br />
            <span className="gradient-text">Every Digital Need</span>
          </h2>
          <p className="services-header-desc">
            We craft pixel-perfect, highly responsive, and blazing fast websites specifically tailored to attract recruiters, clients, and investors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {agencyConfig.services.map((service) => (
            <div 
              key={service.id} 
              className="service-card glass-panel"
              data-cursor="disable"
            >
              <div className="service-icon-wrapper">
                {getIcon(service.icon)}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <button 
                className="service-learn-more"
                onClick={() => setSelectedService(service)}
              >
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        {/* Immersive Slide-out Drawer */}
        {createPortal(<div className={`services-drawer-overlay ${selectedService ? "active" : ""}`} onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedService(null);
            }
          }}>
          <div className={`services-drawer glass-panel`}>
            <button className="drawer-close-btn" onClick={() => setSelectedService(null)} aria-label="Close details">
              <FaXmark />
            </button>
            
            {selectedService && (
              <div className="drawer-content">
                <div className="drawer-icon-header">
                  <div className="drawer-icon-wrapper">
                    {getIcon(selectedService.icon)}
                  </div>
                  <span className="drawer-badge">Core Service</span>
                </div>

                <h2>{selectedService.title}</h2>
                <div className="drawer-divider"></div>
                
                <h3>Description</h3>
                <p className="drawer-description">{selectedService.longDescription}</p>
                
                <h3>Key Features Included</h3>
                <ul className="drawer-features-list">
                  <li>Custom responsive UI/UX mockups</li>
                  <li>Sleek hover micro-animations</li>
                  <li>Clean semantic HTML structure</li>
                  <li>Fast production ready React/Vite builds</li>
                  <li>Integrated forms & analytical metrics</li>
                </ul>

                <a href="#contact" className="glow-btn-primary drawer-cta" onClick={() => {
                  setSelectedService(null);
                  window.dispatchEvent(
                    new CustomEvent("prefillContact", {
                      detail: `Hi, I am interested in building a ${selectedService.title}. Let's discuss the project!`,
                    })
                  );
                }}>
                  Discuss This Project
                </a>
              </div>
            )}
          </div>
        </div>, document.body)}

      </div>
    </div>
  );
};

export default Services;
