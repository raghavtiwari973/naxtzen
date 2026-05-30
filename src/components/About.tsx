import { agencyConfig } from "../data/agencyConfig";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container section-container">
        <div className="about-grid">
          {/* Text Content Block */}
          <div className="about-content-block">
            <div className="section-subtitle">
              <span className="subtitle-line"></span>
              COMPANY OVERVIEW
            </div>
            
            <h2 className="section-title">
              Who We Are & <br />
              <span className="gradient-text">What We Deliver</span>
            </h2>
            
            <p className="about-intro-para">
              At <strong>{agencyConfig.brand.name}</strong>, we are a passionate team of developers, designers, and digital strategists. We specialize in building custom, high-speed, and conversion-focused web solutions.
            </p>
            
            <div className="about-features-list">
              <div className="about-feature-item">
                <div className="feature-dot-wrapper">
                  <span className="feature-dot"></span>
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To empower professionals, startups, and enterprises with premium, state-of-the-art web products that build instant credibility and turn visitors into active clients.</p>
                </div>
              </div>
              
              <div className="about-feature-item">
                <div className="feature-dot-wrapper">
                  <span className="feature-dot"></span>
                </div>
                <div>
                  <h4>Our Method</h4>
                  <p>Combining high-fidelity responsive layouts, search engine optimization (SEO), and ultra-fast React delivery to ensure maximum visual impact and smooth performance.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Illustration Block */}
          <div className="about-visual-block">
            <div className="visual-shapes-container">
              <div className="shape-blur-glow"></div>
              
              <div className="illustration-card card-top glass-panel">
                <span className="card-tag">Premium UI</span>
                <h3>High Fidelity</h3>
                <p>Curated color systems, custom typography, and stunning dark modes.</p>
                <div className="card-bar primary-bar"></div>
              </div>
              
              <div className="illustration-card card-bottom glass-panel">
                <span className="card-tag">Speed & SEO</span>
                <h3>Optimized Core</h3>
                <p>Lightning fast loading speeds and search crawler friendly structures.</p>
                <div className="card-bar secondary-bar"></div>
              </div>
              
              <div className="illustration-badge glass-panel">
                <span className="badge-big">100%</span>
                <span className="badge-lbl">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
