import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { agencyConfig, Project } from "../data/agencyConfig";
import { FaMagnifyingGlass, FaArrowTrendUp, FaCircleInfo, FaXmark } from "react-icons/fa6";
import "./styles/Work.css";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique categories from config
  const categories = useMemo(() => {
    const list = new Set(agencyConfig.portfolio.map((p) => p.category));
    return ["All", ...Array.from(list)];
  }, []);

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    return agencyConfig.portfolio.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.clientName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        
        <div className="work-header-block">
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="section-title">
            Explore Our Completed <br />
            <span className="gradient-text">Client Showcases</span>
          </h2>
          <p className="work-header-desc">
            Browse through our portfolio of custom student frameworks, freelance profiles, startup platforms, and corporate websites built to convert.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="portfolio-controls glass-panel" data-cursor="disable">
          {/* Search Box */}
          <div className="portfolio-search-box">
            <FaMagnifyingGlass className="search-icon" />
            <input 
              type="text" 
              placeholder="Search projects, client, tech..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Categories */}
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        {filteredProjects.length > 0 ? (
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="portfolio-card glass-panel"
                data-cursor="disable"
              >
                <div className="portfolio-img-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-tag-category">{project.category}</span>
                  </div>
                </div>
                
                <div className="portfolio-card-details">
                  <div className="portfolio-card-meta">
                    <span className="client-lbl">{project.clientName}</span>
                    <span className="date-lbl">{project.completionDate}</span>
                  </div>
                  
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="portfolio-card-actions">
                    {project.link !== "#" ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="glow-btn-primary card-action-btn"
                      >
                        Live Demo <FaArrowTrendUp />
                      </a>
                    ) : (
                      <button 
                        className="glow-btn-primary card-action-btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        Details Only
                      </button>
                    )}
                    
                    <button 
                      className="glow-btn-secondary card-action-btn-sec"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FaCircleInfo /> View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="portfolio-empty glass-panel">
            <h3>No Projects Found</h3>
            <p>Try resetting your filter categories or checking your spelling queries!</p>
            <button className="glow-btn-secondary" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Portfolio Details Modal */}
        {createPortal(<div className={`portfolio-modal-overlay ${selectedProject ? "active" : ""}`} onClick={() => setSelectedProject(null)}>
          <div className="portfolio-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <FaXmark />
            </button>
            
            {selectedProject && (
              <div className="modal-inner">
                <div className="modal-image-wrapper">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  <div className="modal-image-overlay">
                    <span className="modal-cat-tag">{selectedProject.category}</span>
                  </div>
                </div>

                <div className="modal-content-grid">
                  <div className="modal-main-content">
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-client-sub">Built for <strong>{selectedProject.clientName}</strong> — Completed {selectedProject.completionDate}</p>
                    
                    <div className="modal-divider"></div>
                    
                    <h3>Project Overview</h3>
                    <p className="modal-long-desc">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  <div className="modal-sidebar-content">
                    {selectedProject.testimonial && (
                      <div className="modal-testimonial-box glass-panel">
                        <div className="testimonial-stars">
                          {"★".repeat(Math.floor(selectedProject.testimonial.rating))}
                          {selectedProject.testimonial.rating % 1 !== 0 && "½"}
                        </div>
                        <p>"{selectedProject.testimonial.text}"</p>
                        <span className="testimonial-client-sig">— Verified Client Feedback</span>
                      </div>
                    )}
                    
                    {selectedProject.link !== "#" && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="glow-btn-primary modal-cta-btn"
                      >
                        Visit Live Project Website <FaArrowTrendUp />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>, document.body)}

      </div>
    </div>
  );
};

export default Work;
