import { useEffect } from "react";
import About from "./About";
import Stats from "./Stats";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";

const MainContainer = () => {
  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      module.initialFX?.();
    });
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />

            <About />
            <Stats />
            <Services />
            <WhyChooseUs />
            <Process />
            <Testimonials />
            <Pricing />
            <FAQ />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
