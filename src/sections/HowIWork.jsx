import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const HowIWork = () => {
  const pathRef = useRef(null);
  const orbRef = useRef(null);

  useGSAP(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#process",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.5,
      },
    });

    gsap.to(orbRef.current, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#process",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.5,
      },
    });

    gsap.from(".process-step", {
      opacity: 0,
      y: 80,
      stagger: 0.3,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#process",
        start: "top 75%",
      },
    });

  }, []);

  const steps = [
    {
      title: "Discovery & Alignment",
      desc: "We begin with a structured discussion to understand your business objectives, audience, and technical requirements — ensuring clarity before execution."
    },
    {
      title: "Strategic Planning",
      desc: "Defining user journeys, system architecture, and a scalable roadmap aligned with your long-term business growth."
    },
    {
      title: "Development & Execution",
      desc: "Clean, maintainable, and performance-driven development using modern full-stack technologies and best engineering practices."
    },
    {
      title: "Launch & Optimization",
      desc: "Deployment, testing, analytics integration, and refinement to ensure stability, performance, and measurable results."
    }
  ];

  return (
    <section id="process" className="flex-center relative md:p-0 px-5">

      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="container w-full h-full md:my-30 my-10 relative z-10">

        <TitleHeader
          title="How I Work"
          number="04"
          text="A structured process designed to deliver clarity, efficiency, and reliable outcomes."
        />

        {/* Animated Path */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hidden md:block pointer-events-none">

          <svg
            viewBox="0 0 1000 1800"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            <path
              ref={pathRef}
              d="
                M500 150
                C 900 400, 100 600, 500 850
                C 900 1100, 100 1350, 500 1600
              "
              stroke="url(#pathGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="8 8"
              opacity="0.5"
            />
          </svg>

          {/* Orb */}
          {/* <div
            ref={orbRef}
            className="w-5 h-5 rounded-full bg-cyan-400 shadow-lg"
          ></div> */}

        </div>

        {/* Steps */}
        <div className="relative mt-40 space-y-52">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`process-step flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <div className="w-full md:w-1/2">

                <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-3xl p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                  <h3 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {String(index + 1).padStart(2, "0")} — {step.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Trust Signals */}
        <div className="mt-32 text-center text-gray-400 text-sm leading-relaxed">
          Typical project timeline: 2–4 weeks depending on scope. <br />
          Flexible for international time zones. <br />
          Clear communication and milestone-based delivery.
        </div>

      </div>
    </section>
  );
};

export default HowIWork;