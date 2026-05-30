import { agencyConfig } from "../data/agencyConfig";
import { Player } from '@lottiefiles/react-lottie-player';
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        
        <div className="landing-media fade-in" data-cursor="disable">
          <Player
            autoplay
            loop
            src="/animat.json"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>

        <div className="landing-intro">
          <div className="agency-badge fade-in">
            <span className="badge-dot"></span>
            {agencyConfig.brand.name}
          </div>

          <h1 className="fade-in" style={{ marginBottom: 0 }}>Elevate Your</h1>
          <h1 className="gradient-text fade-in fade-delay-1">Digital Presence.</h1>

          <p className="landing-desc fade-in fade-delay-2">
            We craft immersive, high-performance web experiences that turn visitors into clients. Launch your premium identity today.
          </p>

          <div className="landing-ctas fade-in fade-delay-3">
            <a href="#work" className="glow-btn-primary" data-cursor="disable">
              View Our Work
            </a>
            <a href="#contact" className="glow-btn-secondary" data-cursor="disable">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
