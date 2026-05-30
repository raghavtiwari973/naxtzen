import "./styles/SocialIcons.css";
import { useEffect } from "react";
import { agencyConfig } from "../data/agencyConfig";

const SocialIcons = () => {
  const { socials } = agencyConfig.brand.contact;

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    let isActive = true;
    const elements = Array.from(social.querySelectorAll("span")).map((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      const rect = elem.getBoundingClientRect();
      return {
        link,
        rect,
        mouseX: rect.width / 2,
        mouseY: rect.height / 2,
        currentX: 0,
        currentY: 0
      };
    });

    const onMouseMove = (e: MouseEvent) => {
      elements.forEach((state) => {
        const x = e.clientX - state.rect.left;
        const y = e.clientY - state.rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          state.mouseX = x;
          state.mouseY = y;
        } else {
          state.mouseX = state.rect.width / 2;
          state.mouseY = state.rect.height / 2;
        }
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    const updatePosition = () => {
      if (!isActive) return;
      elements.forEach((state) => {
        state.currentX += (state.mouseX - state.currentX) * 0.1;
        state.currentY += (state.mouseY - state.currentY) * 0.1;
        state.link.style.setProperty("--siLeft", `${state.currentX}px`);
        state.link.style.setProperty("--siTop", `${state.currentY}px`);
      });
      requestAnimationFrame(updatePosition);
    };
    updatePosition();

    return () => {
      isActive = false;
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
      </div>
    </div>
  );
};

export default SocialIcons;
