import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Experience = () => {
  useGSAP(() => {
    gsap.from(".exp-card", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="experience" className="flex-center mt-0 pt-0 relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="container w-full h-full md:my-5 my-10  relative z-5">

        <TitleHeader
          title="Experience"
          number="05"
          text="Professional work and real-world impact."
        />

        <div className="md:mt-20 mt-10 space-y-12">

          {/* Experience Card 1 */}
          <div className="exp-card bg-black-300 rounded-2xl p-8 backdrop-blur-md border border-white/10">
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  Freelance MERN Developer
                </h2>
                <p className="text-cyan-400">
                  PaonFlowers – Dubai
                </p>
              </div>

              <span className="text-sm opacity-60">
                OCT 2025 – NOV 2025
              </span>
            </div>

            <p className="mt-6 text-blue-50 leading-relaxed">
              Developed a full MERN-stack e-commerce platform for a Dubai-based
              floral business, focusing on modern UI, performance optimization,
              and seamless backend integration.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                React.js
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                MongoDB
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Experience Card 2 */}
          

        </div>
      </div>
    </section>
  );
};

export default Experience;