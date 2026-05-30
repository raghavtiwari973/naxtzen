import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";
import { setAllTimeline } from "./GsapScroll";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0]?.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#050810",
    duration: 0.5,
    delay: 0.3,
  });

  const landingHeadline = document.querySelector(".landing-intro h1");
  const landingBadge = document.querySelector(".agency-badge");
  const landingDesc = document.querySelector(".landing-desc");
  const landingCtas = document.querySelector(".landing-ctas");

  if (landingHeadline) {
    const splitHeadline = new SplitText(landingHeadline, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    gsap.fromTo(
      splitHeadline.chars,
      { opacity: 0, y: 60, filter: "blur(4px)" },
      {
        opacity: 1,
        duration: 1,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.02,
        delay: 0.35,
      }
    );
  }

  gsap.fromTo(
    [landingBadge, landingDesc, landingCtas].filter(Boolean),
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.15,
      delay: 0.6,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  gsap.fromTo(
    ".landing-section",
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: "power2.out" }
  );

  requestAnimationFrame(() => {
    setAllTimeline();
  });
}
