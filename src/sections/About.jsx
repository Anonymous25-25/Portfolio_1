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
          text="Cybersecurity Engineer & Offensive Security Specialist."
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
                    src="/images/shield.svg"
                    alt="shield"
                    className="md:w-14 w-8 h-auto"
                  />
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Youness Boussedari
                    <p className="text-gray-400 text-sm mt-1">
                      Cybersecurity Engineer | Offensive Security Specialist
                    </p>
                  </h2>
                </div>

                <p className="mt-6 text-gray-300 leading-relaxed">
                  Student in cybersecurity specializing in penetration testing
                  and threat detection. Experienced in reconnaissance, web
                  exploitation (OWASP Top 10), and SOC analysis — I focus on
                  actionable intelligence and executive-ready reporting.
                </p>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  My approach blends deep technical knowledge of attacker
                  methodologies with a defender&apos;s mindset. Every engagement is
                  designed to identify real risk, strengthen posture, and
                  deliver measurable security improvements.
                </p>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  From recon to reporting, I ensure every finding is clearly
                  communicated, prioritized by business impact, and backed by
                  concrete remediation guidance.
                </p>

                <div className="mt-6 space-y-2 text-gray-300">
                  <p>✔ Penetration Testing & Vulnerability Assessment</p>
                  <p>✔ Threat Detection & SOC Analysis</p>
                  <p>✔ Executive-Ready Security Reporting</p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[3/4] mx-auto group">
                  <img
                    src="/images/youness-avatar.png"
                    alt="Youness Boussedari"
                    className="w-full h-full object-cover object-top rounded-2xl shadow-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
                  
                  {/* Subtle scanline overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                     <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-[scan_4s_linear_infinite]"></div>
                  </div>
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
