import React, { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { myProjects } from "../constants/index";

/* ─── tiny icon components ──────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const ReportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ─── Scanning line animation overlay ───────────────────────────────────── */
const ScanLine = () => (
  <div className="project-scan-line pointer-events-none absolute inset-0 overflow-hidden rounded-2xl z-10">
    <div className="scan-beam" />
  </div>
);

/* ─── Status badge ───────────────────────────────────────────────────────── */
const StatusBadge = ({ label = "OPERATIONAL" }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
    {label}
  </span>
);

/* ─── Tech pill ──────────────────────────────────────────────────────────── */
const TechPill = ({ label }) => (
  <span className="inline-block px-2.5 py-0.5 text-[11px] rounded-full border border-white/10 bg-white/5 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors duration-300">
    {label}
  </span>
);

/* ─── Action button ──────────────────────────────────────────────────────── */
const ActionButton = ({ href, icon, label, variant = "ghost" }) => {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/btn";
  const ghost =
    "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300";
  const solid =
    "border border-purple-500/40 bg-purple-500/10 text-purple-300 hover:border-purple-400/70 hover:bg-purple-500/20 hover:text-purple-200";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === "solid" ? solid : ghost}`}
    >
      {icon}
      {label}
      <ExternalLinkIcon />
    </a>
  );
};

/* ─── Featured Card (spans full width) ──────────────────────────────────── */
const FeaturedCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card-featured group relative rounded-2xl overflow-hidden border border-white/8 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40"
      style={{ "--glow": "rgba(0,255,255,0.12)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow backdrop */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,255,255,0.08) 0%, transparent 70%)" }} />

      <ScanLine />

      <div className="grid md:grid-cols-[1fr_1.1fr] gap-0 min-h-[380px]">
        {/* LEFT — content */}
        <div className="flex flex-col justify-between p-8 md:p-10 z-10 relative">
          <div>
            {/* header row */}
            <div className="flex items-start justify-between mb-5 gap-4">
              <div>
                <p className="text-[11px] text-cyan-400/70 tracking-[0.2em] uppercase mb-1 font-medium">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
              </div>
              <StatusBadge />
            </div>

            <p className="text-xs text-cyan-400 tracking-wider uppercase mb-4 opacity-80">
              {project.subtitle}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <ActionButton
              href={project.github}
              icon={<GitHubIcon />}
              label="View GitHub"
              variant="ghost"
            />
            <ActionButton
              href={project.report}
              icon={<ReportIcon />}
              label="Read Report"
              variant="solid"
            />
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="relative overflow-hidden min-h-[240px] md:min-h-0">
          {/* gradient overlay on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(11,6,32,1) 0%, transparent 100%)" }} />
          {/* gradient overlay on bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none md:hidden"
            style={{ background: "linear-gradient(to top, rgba(11,6,32,1) 0%, transparent 100%)" }} />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* corner badge */}
          <div className="absolute top-4 right-4 z-20 px-2 py-1 rounded bg-black/60 border border-cyan-500/30 text-[10px] text-cyan-400 font-mono tracking-wider">
            AI_POWERED
          </div>
        </div>
      </div>

      {/* Bottom border glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(to right, transparent, rgba(0,255,255,0.5), transparent)" }} />
    </div>
  );
};

/* ─── Small Bento Card ───────────────────────────────────────────────────── */
const BentoCard = ({ project }) => {
  const isPurple = project.accentColor === "purple";
  const glowColor = isPurple ? "rgba(168,85,247,0.15)" : "rgba(0,255,255,0.12)";
  const borderHover = isPurple ? "hover:border-purple-500/50" : "hover:border-cyan-500/40";
  const accentText = isPurple ? "text-purple-400" : "text-cyan-400";
  const radial = isPurple
    ? "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.1) 0%, transparent 70%)"
    : "radial-gradient(ellipse at 50% 0%, rgba(0,255,255,0.08) 0%, transparent 70%)";
  const bottomLine = isPurple
    ? "linear-gradient(to right, transparent, rgba(168,85,247,0.5), transparent)"
    : "linear-gradient(to right, transparent, rgba(0,255,255,0.5), transparent)";

  return (
    <div
      className={`project-card group relative flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-black/40 backdrop-blur-xl transition-all duration-500 ${borderHover}`}
    >
      {/* Glow backdrop */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: radial }}
      />

      <ScanLine />

      {/* Image section */}
      <div className="relative overflow-hidden h-52 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(11,6,32,1) 0%, transparent 100%)" }}
        />
        {/* corner label */}
        <div className={`absolute top-3 right-3 z-20 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono tracking-wider ${accentText}`}>
          {project.id === 2 ? "JARVIS_v2" : "ROUTING_SYS"}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 z-10 relative">
        <p className={`text-[10px] tracking-[0.2em] uppercase mb-1.5 font-medium ${accentText} opacity-70`}>
          {project.subtitle.split("•")[0].trim()}
        </p>
        <h3 className="text-lg font-bold text-white mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <ActionButton
            href={project.github}
            icon={<GitHubIcon />}
            label="View GitHub"
            variant="ghost"
          />
          <ActionButton
            href={project.report}
            icon={<ReportIcon />}
            label="Read Report"
            variant="solid"
          />
        </div>
      </div>

      {/* Bottom border glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: bottomLine }}
      />
    </div>
  );
};

/* ─── Main section ───────────────────────────────────────────────────────── */
const Projects = () => {
  const featured = myProjects.find((p) => p.featured);
  const smallCards = myProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-0 px-5">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="container mx-auto relative z-10">
        <TitleHeader
          title="Selected Work"
          number="03"
          text="Real-world AI-powered security systems and engineering projects demonstrating offensive and defensive capabilities."
        />

        {/* Bento grid */}
        <div className="mt-16 flex flex-col gap-5">
          {/* Row 1 — Featured full-width card */}
          {featured && <FeaturedCard project={featured} />}

          {/* Row 2 — Two equal bento cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {smallCards.map((project) => (
              <BentoCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
