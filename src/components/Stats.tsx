import { useEffect, useState, useRef } from "react";
import { agencyConfig } from "../data/agencyConfig";
import "./styles/Stats.css";

// Native lightweight React Counter component
const Counter = ({ endValue, suffix = "" }: { endValue: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = endValue;
    if (start === end) return;

    const duration = 1500; // ms
    const incrementTime = Math.max(Math.floor(duration / end), 16); // limit to ~60fps
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue, hasStarted]);

  return (
    <span ref={elementRef} className="counter-val">
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { counters, statusCards } = agencyConfig.stats;

  return (
    <div className="stats-section">
      <div className="stats-container section-container">
        
        {/* Animated Counter Grid */}
        <div className="stats-counters-grid">
          <div className="counter-card glass-panel" data-cursor="disable">
            <div className="counter-number-wrapper">
              <Counter endValue={counters.delivered} suffix="+" />
            </div>
            <p className="counter-label">Projects Delivered</p>
            <div className="counter-glow-line c-teal"></div>
          </div>

          <div className="counter-card glass-panel" data-cursor="disable">
            <div className="counter-number-wrapper">
              <Counter endValue={counters.happyClients} suffix="+" />
            </div>
            <p className="counter-label">Happy Clients</p>
            <div className="counter-glow-line c-indigo"></div>
          </div>

          <div className="counter-card glass-panel" data-cursor="disable">
            <div className="counter-number-wrapper">
              <Counter endValue={counters.completedProjects} suffix="+" />
            </div>
            <p className="counter-label">Projects Completed</p>
            <div className="counter-glow-line c-purple"></div>
          </div>

          <div className="counter-card glass-panel" data-cursor="disable">
            <div className="counter-number-wrapper">
              <Counter endValue={counters.yearsOfExperience} suffix="+" />
            </div>
            <p className="counter-label">Years of Experience</p>
            <div className="counter-glow-line c-pink"></div>
          </div>
        </div>

        {/* Project Status Board */}
        <div className="status-board-wrapper">
          <div className="status-header">
            <span className="status-indicator-dot animate-pulse-orange"></span>
            <h3>Real-Time Project Pipeline Status</h3>
          </div>
          
          <div className="status-cards-grid">
            <div className="status-card glass-panel" data-cursor="disable">
              <div className="status-card-inner">
                <span className="status-tag tag-active">Active</span>
                <span className="status-num">{statusCards.ongoing}</span>
                <h4>Ongoing Projects</h4>
                <p className="status-desc">Currently in active design and development pipelines.</p>
              </div>
            </div>

            <div className="status-card glass-panel" data-cursor="disable">
              <div className="status-card-inner">
                <span className="status-tag tag-waiting">Queued</span>
                <span className="status-num">{statusCards.inWaiting}</span>
                <h4>Projects In Pipeline</h4>
                <p className="status-desc">Requirement discussion completed; awaiting scheduling slot.</p>
              </div>
            </div>

            <div className="status-card glass-panel" data-cursor="disable">
              <div className="status-card-inner">
                <span className="status-tag tag-upcoming">Upcoming</span>
                <span className="status-num">{statusCards.upcoming}</span>
                <h4>Upcoming Bookings</h4>
                <p className="status-desc">Agreed contracts scheduled for deployment slots next month.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;
