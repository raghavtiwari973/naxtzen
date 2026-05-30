import { useEffect } from "react";
import About from "./About";
import Stats from "./Stats";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedProjects from "./FeaturedProjects";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { useLoading } from "../context/LoadingProvider";

const MainContainer = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    import("./Loading").then(({ setProgress }) => {
      const progress = setProgress(setLoading);
      progress.loaded();
    });
  }, [setLoading]);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />

            <About />
            <Stats />
            <Services />
            <WhyChooseUs />
            <FeaturedProjects />
            <Work />

            <Process />
            <Testimonials />
            <Pricing />
            <FAQ />
            <ContactForm />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
