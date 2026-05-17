import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";

const TechStack = () => {
  const stacks = [
    {
      category: "Offensive Security",
      items: ["Penetration Testing", "Nmap", "Burp Suite", "OWASP ZAP", "Metasploit", "Wireshark"],
    },
    {
      category: "Defensive & SOC",
      items: ["SOC Analysis", "Splunk", "Wazuh SIEM", "Threat Detection", "MITRE ATT&CK", "SIEM Analysis"],
    },
    {
      category: "Development & AI",
      items: ["Python", "FastAPI", "Next.js", "Docker", "LLM Integration", "Linux/Kali"],
    },
  ];

  return (
    <section id="tech-stack" className="relative py-24 px-5">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="container mx-auto relative z-10">
        <TitleHeader
          title="Technical Arsenal"
          number="06"
          text="Core tools, platforms, and frameworks used across offensive, defensive, and development workflows."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="bg-black-300 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                {stack.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {stack.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Closing Statement */}
        <div className="mt-20 text-center text-gray-400 text-sm leading-relaxed">
          Focused on actionable intelligence, clean reporting, and building unshakeable defenses.
        </div>
      </div>
    </section>
  );
};

export default TechStack;
