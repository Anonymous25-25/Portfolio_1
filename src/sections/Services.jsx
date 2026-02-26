import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { Layout, Rocket, Brain } from "lucide-react";

function Services() {
  const solutions = [
    {
      number: "01",
      title: "Custom Web Applications",
      icon: <Layout size={28} />,
      desc: "End-to-end MERN stack solutions tailored to your business needs — from frontend interfaces to secure backend systems."
    },
    {
      number: "02",
      title: "Performance & Conversion Optimization",
      icon: <Rocket size={28} />,
      desc: "Optimized user experiences designed to increase engagement, improve speed, and turn visitors into customers."
    },
    {
      number: "03",
      title: "Scalable Backend Architecture",
      icon: <Brain size={28} />,
      desc: "Clean, structured, and maintainable backend systems built to support long-term scalability and operational efficiency."
    }
  ];

  return (
    <section id="services" className="relative py-0 px-5">
      
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />

      <div className="container mx-auto relative z-10">
        
        <TitleHeader
          title="How I Can Help"
          text="Strategic digital solutions designed for measurable business growth."
          number={"02"}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-black-300 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-blue-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Have a project in mind?
          </h3>

          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
          >
            Discuss Your Project
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;