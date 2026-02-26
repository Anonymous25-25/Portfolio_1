import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-[78vh] w-screen overflow-hidden text-white bg-[#0f001a] md:px-10 px-5"
    >
      <GradientSpheres
        sphere1Class={"gradient-sphere sphere-1"}
        sphere2Class={"gradient-sphere sphere-2"}
      />

      {/* SINGLE CONTAINER */}
      <div className="relative h-full flex items-center">
        {/* TEXT CONTENT */}

        <div className="relative z-20 max-w-xl ml-2 mt-45 md:ml-30">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-400/30 text-green-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Open to Quality Projects
          </div>
          <p className="text-sm md:text-base text-gray-400 mb-4">
            Saurav Kumar Singh | MERN Stack Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building Scalable & Revenue-Driven
            <br />
            Web Applications
          </h1>

          <p className="mt-6 text-gray-400 md:text-lg">
            Helping flower shops and local businesses grow through modern,
            high-performance digital solutions using React, Node.js & MongoDB.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
            >
              Start a Project
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-white/20 hover:border-white/40 transition rounded-lg font-medium"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* 3D CHARACTER ABSOLUTE */}
        <div className="absolute right-0 top-0 left-100  w-full h-full pointer-events-none">
          <HeroExperience />
        </div>
      </div>
    </section>
  );
}

export default Hero;
