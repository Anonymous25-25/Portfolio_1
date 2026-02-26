import React from "react";
import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const Projects = () => {
  const projects = [
    {
      title: "Paon Flowers",
      subtitle: "Boutique E-Commerce Platform • Live Production",
      description:
        "A boutique e-commerce platform built to improve product presentation, simplify ordering workflows, and strengthen digital brand credibility. Designed and deployed as a live commercial website serving real customers.",
      image: "/images/paonflowers.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      live: "https://paonflowers.co.uk/",
    },
    {
      title: "LifeSync",
      subtitle: "Real-Time Companion Web Application",
      description:
        "A real-time web application focused on accessibility and structured monitoring, featuring dashboard insights and communication tools designed to enhance user experience and operational clarity.",
      image: "/images/LifeSync.png",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      live: "https://lifesync21.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="relative py-0 px-5">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="container  mx-auto relative z-10">
        <TitleHeader
          title="Selected Work"
          number="03"
          text="A curated selection of projects demonstrating structured development, production deployment, and business-focused execution."
        />

        <div className="mt-20 space-y-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition duration-300 aspect-[16/10] bg-black shadow-xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div>
               

                <h3 className="text-3xl font-semibold mb-6">
                  {project.title}
                </h3>

                 <p className="text-sm text-blue-400 mb-3 tracking-wide uppercase">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECH BADGES */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-white/20 transition"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* LIVE LINK */}
                <div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:text-blue-400 transition font-medium"
                  >
                    Visit Live Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;