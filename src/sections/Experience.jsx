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
          title="Education & Certifications"
          number="05"
          text="Formal training and industry-recognized credentials in cybersecurity."
        />

        <div className="md:mt-20 mt-10 space-y-12">

          {/* Education Card */}
          <div className="exp-card bg-black-300 rounded-2xl p-8 backdrop-blur-md border border-white/10">
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  Technician in Cybersecurity
                </h2>
                <p className="text-cyan-400">
                  CMC Tamesna — Penetration Testing & SOC Analysis
                </p>
              </div>

              <span className="text-sm opacity-60">
                2024 – 2026
              </span>
            </div>

            <p className="mt-6 text-blue-50 leading-relaxed">
              Specialized training in penetration testing methodologies, vulnerability
              assessment, SOC analysis, and threat detection. Hands-on experience with
              industry-standard tools and real-world security scenarios.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Penetration Testing
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                SOC Analysis
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Threat Detection
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Vulnerability Assessment
              </span>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="exp-card bg-black-300 rounded-2xl p-8 backdrop-blur-md border border-white/10">
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  Professional Certifications
                </h2>
                <p className="text-cyan-400">
                  Cisco · Google · IBM · ISC2
                </p>
              </div>
            </div>

            <p className="mt-6 text-blue-50 leading-relaxed">
              Industry-recognized credentials in ethical hacking, cybersecurity
              foundations, and security principles. Practical skills validated
              through hands-on assessments and real-world application.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Ethical Hacker (Cisco)
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Cybersecurity Foundations (Google)
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Cybersecurity Careers (IBM)
              </span>
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                Security Principles (ISC2)
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
