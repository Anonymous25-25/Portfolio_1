const myProjects = [
  {
    id: 1,
    title: "AI Cyber_Guard",
    subtitle: "Automated Vulnerability Detection • SVM + n8n",
    description:
      "An automated web application vulnerability scanning system. It uses an AI model (SVM) to detect threats like SQLi and XSS from input payloads, with real-time alerting via n8n to Telegram.",
    image: "/projects/cyberguard.png",
    tech: ["Python", "SVM", "Machine Learning", "n8n", "Telegram API"],
    github: "https://github.com/Anonymous25-25",
    report: "https://github.com/Anonymous25-25",
    featured: true,
    accentColor: "cyan",
  },
  {
    id: 2,
    title: "AI Assistance_Jarvis",
    subtitle: "Multi-Model Intelligence Orchestrator • Security Workflows",
    description:
      "A sophisticated multi-model intelligence orchestrator designed for security workflows. It features real-time decision routing between local and cloud LLMs with a high-tech monitoring dashboard.",
    image: "/projects/jarvis.png",
    tech: ["Next.js", "FastAPI", "Multi-Model Routing", "Security Dashboards"],
    github: "https://github.com/Anonymous25-25",
    report: "https://github.com/Anonymous25-25",
    featured: false,
    accentColor: "purple",
  },
  {
    id: 3,
    title: "Multi-Model AI Routing",
    subtitle: "Neural Network Architecture • STT / TTS / RAG",
    description:
      "A complex neural network architecture for AI processing. It handles STT, Vision, TTS, and RAG with optimized latency routing across local and cloud inference endpoints.",
    image: "/projects/multiai.png",
    tech: ["Ollama", "RAG", "STT/TTS", "Vector Databases"],
    github: "https://github.com/Anonymous25-25",
    report: "https://github.com/Anonymous25-25",
    featured: false,
    accentColor: "cyan",
  },
];

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "How I Work",
    href: "#how-i-work",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const bentoSocialLinks = [
  {
    name: "Github",
    href: "https://github.com/Anonymous25-25",
    icon: "/images/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/anony_mous_25_25",
    icon: "/images/insta.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/youness-boussedari-34a93136b",
    icon: "/images/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/212632260694",
    icon: "/images/whatsapp.svg",
  },
];

const iconsList = [
  {
    name: "nmap",
    image: "/images/nmap.svg",
  },
  {
    name: "burpsuite",
    image: "/images/burpsuite.svg",
  },
  {
    name: "metasploit",
    image: "/images/metasploit.svg",
  },
  {
    name: "python",
    image: "/images/python.svg",
  },
  {
    name: "linux",
    image: "/images/linux.svg",
  },
  {
    name: "splunk",
    image: "/images/splunk.svg",
  },
  {
    name: "wireshark",
    image: "/images/wireshark.svg",
  },
  {
    name: "nextjs",
    image: "/images/nextjs.svg",
  },
  {
    name: "docker",
    image: "/images/docker.svg",
  },
  {
    name: "owasp",
    image: "/images/owasp.svg",
  },
];

const slides = [
  {
    id: 1,
    title: "Offensive Security Assessment",
    img: "/images/offensive-security.png",
    link: "https://github.com/Anonymous25-25",
  },
  {
    id: 2,
    title: "JARVIS AI Co-Pilot",
    img: "/images/jarvis.png",
    link: "https://github.com/Anonymous25-25",
  },
  {
    id: 3,
    title: "SOC Blue Team Monitoring",
    img: "/images/soc-monitoring.png",
    link: "https://github.com/Anonymous25-25",
  },
];

const testimonials = [
  {
    name: "Client",
    pos: "Security Engagement",
    review:
      "Professional penetration testing engagement with clear, actionable reporting. Identified critical vulnerabilities and provided remediation guidance.",
    imgPath: "/images/client2.png",
  },
];

const footerIconsList = [
  {
    name: "Github",
    href: "https://github.com/Anonymous25-25",
    icon: "/images/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/anony_mous_25_25",
    icon: "/images/insta.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/youness-boussedari-34a93136b",
    icon: "/images/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/212632260694?text=Hi%20Youness,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20security%20engagement.",
    icon: "/images/whatsapp.svg",
  },
];

export {
  navItems,
  bentoSocialLinks,
  iconsList,
  slides,
  testimonials,
  footerIconsList,
  myProjects,
};
