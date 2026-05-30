import { useMemo } from "react";
import { agencyConfig } from "../data/agencyConfig";
import { FaArrowTrendUp, FaQuoteLeft } from "react-icons/fa6";
import "./styles/FeaturedProjects.css";

const FeaturedProjects = () => {
  const featured = useMemo(() => {
    return agencyConfig.portfolio.filter((project) => project.featured);
  }, []);

  if (featured.length === 0) return null;

  return (
    <div className="featured-section" id="featured">
      <div className="featured-container section-container">
        
        <div className="featured-header-block">
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            FEATURED WORK
          </div>
          <h2 className="section-title">
            Widescreen Highlights of <br />
            <span className="gradient-text">Our Signature Projects</span>
          </h2>
          <p className="featured-header-desc">
            Deep dive into our top commercial solutions built with bespoke layouts, customized backends, and flawless conversion metrics.
          </p>
        </div>

        {/* Featured Projects Lists */}
        <div className="featured-list">
          {featured.map((project, idx) => (
            <div 
              key={project.id} 
              className={`featured-row ${idx % 2 === 1 ? "reverse-row" : ""}`}
            >
              {/* Image side */}
              <div className="featured-image-panel glass-panel" data-cursor="disable">
                <img src={project.image} alt={project.title} />
                <div className="featured-image-glow"></div>
              </div>

              {/* Text side */}
              <div className="featured-details-panel">
                <span className="featured-badge">{project.category}</span>
                <h3>{project.title}</h3>
                
                <p className="featured-overview">
                  {project.longDescription || project.description}
                </p>

                <div className="featured-meta-info">
                  <div className="meta-col">
                    <strong>Client</strong>
                    <span>{project.clientName}</span>
                  </div>
                  <div className="meta-col">
                    <strong>Released</strong>
                    <span>{project.completionDate}</span>
                  </div>
                </div>

                {project.testimonial && (
                  <div className="featured-feedback glass-panel">
                    <FaQuoteLeft className="feedback-quote-icon" />
                    <p className="feedback-quote-text">
                      {project.testimonial.text}
                    </p>
                    <div className="feedback-client-rating">
                      {"★".repeat(Math.floor(project.testimonial.rating))}
                      {project.testimonial.rating % 1 !== 0 && "½"}
                      <span className="client-verified-lbl"> — Verified client review</span>
                    </div>
                  </div>
                )}

                {project.link !== "#" && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="glow-btn-primary featured-demo-btn"
                    data-cursor="disable"
                  >
                    Explore Live Site <FaArrowTrendUp />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturedProjects;
