import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from("#about-card", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="about" className="relative py-24 px-5">
      <GradientSpheres
        sphere1Class={"about-gradient-sphere about-sphere-1"}
        sphere2Class={"about-gradient-sphere about-sphere-2"}
      />

      <div className="container mx-auto relative z-20">
        <TitleHeader
          title="About Me"
          text="Turning ideas into scalable digital products."
          number={"01"}
        />

        <div className="mt-16">
          <div
            id="about-card"
            className="relative bg-black-300 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-500"
          >
            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* LEFT SIDE */}
              <div className="md:col-span-7">
                {/* NAME + FLOWER */}
                <div className="flex items-center gap-4">
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-14 w-8 h-auto"
                  />
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Saurav Kumar Singh
                    <p className="text-gray-400 text-sm mt-1">
                      Full-Stack MERN Developer
                    </p>
                  </h2>
                </div>

                <p className="mt-6 text-gray-300 leading-relaxed">
                  I partner with businesses to design and develop modern web
                  applications that are structured, scalable, and built with
                  long-term growth in mind.
                </p>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  My approach combines strong frontend craftsmanship with robust
                  backend architecture — ensuring that every project is not only
                  visually refined, but also technically reliable and
                  performance-focused.
                </p>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  From strategy to deployment, I focus on delivering clean,
                  maintainable solutions that simplify operations, improve user
                  experience, and support measurable business outcomes.
                </p>

                <div className="mt-6 space-y-2 text-gray-300">
                  <p>✔ Structured & Scalable Development</p>
                  <p>✔ Clean, Maintainable Code Practices</p>
                  <p>✔ Performance & Growth-Oriented Solutions</p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="md:col-span-5">
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <img
                    src="/images/profile.jpg"
                    alt="Saurav"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
