import React, { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import HowIWork from "./sections/HowIWork";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Loader from "./components/Loader";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <FloatingWhatsApp />
          <NavBar />
          <SideBar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <HowIWork />
          <Experience />
          <TechStack /> 
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
