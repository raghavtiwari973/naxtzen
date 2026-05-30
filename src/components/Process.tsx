import { agencyConfig } from "../data/agencyConfig";
import "./styles/Process.css";

const Process = () => {
  const steps = agencyConfig.process;

  return (
    <div className="process-section" id="process">
      <div className="process-container section-container">
        
        <div className="process-header-block">
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            OUR WORKFLOW
          </div>
          <h2 className="section-title">
            The Complete 7-Step <br />
            <span className="gradient-text">Development Process</span>
          </h2>
          <p className="process-header-desc">
            We follow a rigorous, high-speed, and structured development lifecycle to deliver flawless code quality and pixel-perfect design results.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="process-timeline-layout">
          <div className="process-timeline-line">
            <div className="process-timeline-glow"></div>
          </div>
          
          <div className="process-steps-list">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="process-step-card glass-panel"
                data-cursor="disable"
              >
                <div className="step-badge-number">{step.step}</div>
                <div className="step-card-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Process;
