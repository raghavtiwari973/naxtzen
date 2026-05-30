import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import BrandLogo from "./BrandLogo";
import "./styles/Navbar.css";
import { FaSun, FaMoon } from "react-icons/fa6";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme State Management
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("nextzee-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("nextzee-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      
      const targetHref = anchor.getAttribute("data-href") || anchor.getAttribute("href");
      if (targetHref && targetHref.startsWith("#") && targetHref !== "#") {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (window.innerWidth > 1024 && smoother) {
          smoother.scrollTo(targetHref, true, "top top");
        } else {
          const targetEl = document.querySelector(targetHref);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    const handleResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="header glass-panel">

        <a href="#landingDiv" className="navbar-logo" data-cursor="disable">
          <BrandLogo />
        </a>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          <li>
            <a data-href="#landingDiv" href="#landingDiv">
              <HoverLinks text="HOME" />
            </a>
          </li>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="OVERVIEW" />
            </a>
          </li>
          <li>
            <a data-href="#services" href="#services">
              <HoverLinks text="SERVICES" />
            </a>
          </li>
          <li>
            <a data-href="#featured" href="#featured">
              <HoverLinks text="FEATURED" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PORTFOLIO" />
            </a>
          </li>
          <li>
            <a data-href="#pricing" href="#pricing">
              <HoverLinks text="PRICING" />
            </a>
          </li>
          <li>
            <a data-href="#reviews" href="#reviews">
              <HoverLinks text="REVIEWS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            data-cursor="disable"
            style={{ background: 'transparent', border: 'none', color: 'var(--textColor, inherit)', fontSize: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', marginRight: '8px' }}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href="#contact"
            className="glow-btn-primary nav-cta"
            data-cursor="disable"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`hamburger-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-cursor="disable"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu glass-panel ${mobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a data-href="#landingDiv" href="#landingDiv" onClick={() => setMobileMenuOpen(false)}>
              HOME
            </a>
          </li>
          <li>
            <a data-href="#about" href="#about" onClick={() => setMobileMenuOpen(false)}>
              OVERVIEW
            </a>
          </li>
          <li>
            <a data-href="#services" href="#services" onClick={() => setMobileMenuOpen(false)}>
              SERVICES
            </a>
          </li>
          <li>
            <a data-href="#featured" href="#featured" onClick={() => setMobileMenuOpen(false)}>
              FEATURED
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={() => setMobileMenuOpen(false)}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a data-href="#pricing" href="#pricing" onClick={() => setMobileMenuOpen(false)}>
              PRICING
            </a>
          </li>
          <li>
            <a data-href="#reviews" href="#reviews" onClick={() => setMobileMenuOpen(false)}>
              REVIEWS
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={() => setMobileMenuOpen(false)}>
              CONTACT
            </a>
          </li>
          <li className="mobile-cta-li">
            <a
              href="#contact"
              className="glow-btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
