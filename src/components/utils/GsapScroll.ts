import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** @deprecated Character removed — kept so legacy Character utils still compile */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function setCharTimeline(..._args: unknown[]) {
  /* no-op */
}

type RevealOptions = {
  y?: number;
  x?: number;
  scale?: number;
  stagger?: number;
  duration?: number;
  start?: string;
  scrub?: boolean;
};

function revealOnScroll(
  selector: string,
  trigger: string,
  options: RevealOptions = {}
) {
  const elements = gsap.utils.toArray<HTMLElement>(selector);
  if (!elements.length) return;

  const {
    y = 48,
    x = 0,
    scale = 1,
    stagger = 0.1,
    duration = 0.85,
    start = "top 82%",
    scrub = false,
  } = options;

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y,
      x,
      scale: scale === 1 ? 1 : scale * 0.92,
      filter: "blur(6px)",
    },
    {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      duration,
      stagger,
      ease: scrub ? "none" : "power3.out",
      scrollTrigger: {
        trigger,
        start,
        toggleActions: scrub ? undefined : "play none none reverse",
        scrub: scrub || undefined,
      },
    }
  );
}

export function setAllTimeline() {
  /* Section headers */
  gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 44 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          id: "section-title",
          trigger: title.closest("section, .about-section, footer, [class*='-section']") ?? title,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>(".section-subtitle").forEach((sub) => {
    gsap.fromTo(
      sub,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          id: "section-subtitle",
          trigger: sub.closest("section, .about-section, footer, [class*='-section']") ?? sub,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const headerDesc =
    ".services-header-desc, .benefits-header-desc, .featured-header-desc, .work-header-desc, .process-header-desc, .pricing-header-desc, .faq-header-desc, .about-intro-para";
  gsap.utils.toArray<HTMLElement>(headerDesc).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  /* About */
  revealOnScroll(".about-feature-item", ".about-section", { y: 36, stagger: 0.12 });
  revealOnScroll(".illustration-card, .illustration-badge", ".about-section", {
    y: 56,
    scale: 0.95,
    stagger: 0.15,
    start: "top 78%",
  });

  /* Stats */
  revealOnScroll(".stats-section .counter-card", ".stats-section", {
    y: 50,
    stagger: 0.12,
    start: "top 78%",
  });
  revealOnScroll(".stats-section .status-card", ".stats-section", {
    y: 40,
    stagger: 0.1,
    start: "top 75%",
  });

  /* Services */
  revealOnScroll(".service-card", ".services-section", {
    y: 56,
    stagger: 0.08,
    start: "top 80%",
  });

  /* Benefits */
  revealOnScroll(".benefit-card", ".benefits-section", {
    y: 48,
    stagger: 0.07,
    start: "top 80%",
  });

  /* Featured projects */
  revealOnScroll(".featured-row", ".featured-section", {
    y: 64,
    stagger: 0.2,
    start: "top 85%",
  });

  /* Portfolio */
  revealOnScroll(".portfolio-controls", ".work-section", { y: 32, stagger: 0 });
  revealOnScroll(".portfolio-card", ".work-section", {
    y: 52,
    stagger: 0.06,
    start: "top 82%",
  });

  /* Process */
  const processTimeline = gsap.timeline({
    scrollTrigger: {
      id: "section-process",
      trigger: ".process-section",
      start: "top 40%",
      end: "80% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  processTimeline
    .fromTo(
      ".process-timeline-line",
      { scaleY: 0.05, transformOrigin: "top center" },
      { scaleY: 1, duration: 0.6 },
      0
    )
    .fromTo(
      ".process-step-card",
      { opacity: 0, x: -36, filter: "blur(4px)" },
      { opacity: 1, x: 0, filter: "blur(0px)", stagger: 0.08, duration: 0.55 },
      0.12
    );

  /* Reviews */
  revealOnScroll(".reviews-summary-card", ".reviews-section", { y: 40 });
  revealOnScroll(".review-card", ".reviews-section", { y: 48, stagger: 0.15 });

  /* Pricing */
  revealOnScroll(".pricing-card", ".pricing-section", {
    y: 56,
    stagger: 0.12,
    start: "top 80%",
  });

  /* FAQ */
  revealOnScroll(".faq-item", ".faq-section", {
    y: 32,
    stagger: 0.08,
    start: "top 85%",
  });

  /* Contact form */
  revealOnScroll(".contact-info-panel", ".contact-form-section", { x: -40, y: 0 });
  revealOnScroll(".contact-inputs-block", ".contact-form-section", { x: 40, y: 0 });

  /* Footer */
  revealOnScroll(".footer-brand-col", ".footer-section", { y: 36 });
  revealOnScroll(".footer-links-col", ".footer-section", { y: 36, stagger: 0.1 });

  /* Subtle parallax on hero while scrolling */
  if (window.innerWidth > 768) {
    gsap.to(".landing-intro", {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }

  ScrollTrigger.refresh();
}
