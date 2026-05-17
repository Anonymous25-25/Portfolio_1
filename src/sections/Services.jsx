import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";
import { Shield, Search, LineChart } from "lucide-react";

function Services() {
  const solutions = [
    {
      number: "01",
      title: "Penetration Testing",
      icon: <Shield size={28} />,
      desc: "Web application and network penetration testing covering OWASP Top 10, SQL injection, XSS, and authentication flaws. Actionable findings prioritized by business risk."
    },
    {
      number: "02",
      title: "Vulnerability Assessment",
      icon: <Search size={28} />,
      desc: "Comprehensive reconnaissance and vulnerability identification using Nmap, Burp Suite, OWASP ZAP, and Metasploit. Clear, executive-ready reporting."
    },
    {
      number: "03",
      title: "SOC Analysis & Threat Detection",
      icon: <LineChart size={28} />,
      desc: "Security event monitoring, IoC correlation, and SIEM analysis using Splunk and Wazuh. MITRE ATT&CK-aligned threat hunting and detection strategies."
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
          text="Offensive security services designed to strengthen your defense posture."
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
            Have a security concern?
          </h3>

          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
          >
            Discuss Your Engagement
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;
