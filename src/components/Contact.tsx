import BrandLogo from "./BrandLogo";
import { agencyConfig } from "../data/agencyConfig";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot 
} from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const { brand } = agencyConfig;

  return (
    <footer className="footer-section">
      <div className="footer-container section-container">
        
        <div className="footer-main-grid">
          {/* Brand Info Col */}
          <div className="footer-brand-col">
            <a href="#landingDiv" className="footer-logo" data-cursor="disable">
              <BrandLogo />
            </a>
            <p className="footer-brand-desc">
              {brand.description}
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#landingDiv">Home</a></li>
              <li><a href="#about">Overview</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#featured">Featured Work</a></li>
              <li><a href="#pricing">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Services categories Col */}
          <div className="footer-links-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Student Portfolio</a></li>
              <li><a href="#services">Professional Portfolio</a></li>
              <li><a href="#services">Business Website</a></li>
              <li><a href="#services">Startup Website</a></li>
              <li><a href="#services">Landing Pages</a></li>
              <li><a href="#services">Custom Web Apps</a></li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="footer-contact-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact-items">
              <li>
                <FaEnvelope className="footer-icon" />
                <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
              </li>
              <li>
                <FaPhone className="footer-icon" />
                <a href={`tel:${brand.contact.phone}`}>{brand.contact.phone}</a>
              </li>
              <li>
                <FaLocationDot className="footer-icon" />
                <span>{brand.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-divider"></div>

        {/* Legal Row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            <MdCopyright /> {new Date().getFullYear()} <strong>{brand.name}</strong>. All Rights Reserved.
          </p>
          <div className="legal-links">
            <a href="#about">Privacy Policy</a>
            <a href="#about">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
