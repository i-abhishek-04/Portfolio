import { useState } from "react";
import { projects, skills } from "../data";
import { ChartIcon, ChainIcon, GithubIcon, ExternalIcon } from "../Icons";

const iconMap = { chart: ChartIcon, chain: ChainIcon };

function ProjectCard({ project }) {
  const Icon = iconMap[project.icon] ?? ChartIcon;
  return (
    <div className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden flex flex-col">
      <div className="relative h-40 flex items-center justify-center bg-[var(--color-surface-2)] overflow-hidden">
        <Icon className="text-[var(--color-cyan)] opacity-70 group-hover:opacity-0 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-gradient-to-br from-[var(--color-cyan)] to-[var(--color-violet)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-display font-semibold text-[#08080f] flex items-center gap-1.5 text-lg"
          >
            View Project <ExternalIcon />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg">{project.title}</h3>
        <p className="font-mono text-xs text-[var(--color-cyan)] mt-1">{project.subtitle}</p>
        <p className="text-sm text-[var(--color-muted)] mt-3 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-muted)]">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-5 pt-5 border-t border-[var(--color-border)]">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
            <GithubIcon width={16} height={16} /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
            <ExternalIcon /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

const catLabel = { lang: "Language", framework: "Framework", tool: "Tool", ai: "AI / LLM" };

function SkillCard({ skill }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex flex-col items-center justify-center gap-2 text-center hover:border-[var(--color-cyan)]/50 transition-colors">
      <span className="font-display font-medium">{skill.name}</span>
      <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]">
        {catLabel[skill.cat]}
      </span>
    </div>
  );
}

export default function Work() {
  const [tab, setTab] = useState("projects");

  return (
    <section id="work" className="py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-sm text-[var(--color-cyan)]">$ ls</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Work</h2>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>
        <p className="text-[var(--color-muted)] mb-10 max-w-xl">
          Explore my projects and technical skills.
        </p>

        <div className="inline-flex rounded-full border border-[var(--color-border)] p-1 mb-12 font-mono text-sm">
          <button
            onClick={() => setTab("projects")}
            className={`px-5 py-2 rounded-full transition-colors ${
              tab === "projects" ? "btn-primary text-[#08080f]" : "text-[var(--color-muted)]"
            }`}
          >
            {"</> "}Projects
          </button>
          <button
            onClick={() => setTab("skills")}
            className={`px-5 py-2 rounded-full transition-colors ${
              tab === "skills" ? "btn-primary text-[#08080f]" : "text-[var(--color-muted)]"
            }`}
          >
            Skills
          </button>
        </div>

        {tab === "projects" ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((s) => (
              <SkillCard key={s.name} skill={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
