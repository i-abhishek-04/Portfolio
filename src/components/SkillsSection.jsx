import { useState } from "react";
import { Code2, Layout, Server, Database, CheckCircle2 } from "lucide-react";
import { skillCategories } from "../data";
import {
  ReactIcon, NextIcon, TypescriptIcon, PythonIcon, FastapiIcon, NodeIcon,
  PostgresIcon, MongoIcon, DockerIcon, TailwindIcon, GitIcon, LinuxIcon,
  LangchainIcon, QdrantIcon, FirebaseIcon
} from "./BrandIcons";
import Reveal from "./Reveal";

const categoryIcons = { layout: Layout, server: Server, database: Database };

const brandIcons = {
  react: ReactIcon,
  next: NextIcon,
  ts: TypescriptIcon,
  python: PythonIcon,
  fastapi: FastapiIcon,
  node: NodeIcon,
  postgres: PostgresIcon,
  mongo: MongoIcon,
  docker: DockerIcon,
  tailwind: TailwindIcon,
  git: GitIcon,
  linux: LinuxIcon,
  langchain: LangchainIcon,
  qdrant: QdrantIcon,
  firebase: FirebaseIcon,
};

export default function SkillsSection() {
  const [activeCat, setActiveCat] = useState(0);

  return (
    <section id="skills" className="px-5 sm:px-8 lg:pl-32 py-20 relative z-10 border-t border-[var(--border-card)]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Code2 size={20} />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">TECHNICAL CAPABILITIES</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-heading)] tracking-tight">
                Skills &amp; Tech Stack
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Category Navigation Pills */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3 mb-8">
            {skillCategories.map((cat, idx) => {
              const IconComp = categoryIcons[cat.icon] || Code2;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveCat(idx)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                    activeCat === idx
                      ? "bg-blue-600/20 border-blue-500/60 text-cyan-400 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                      : "theme-card-subtle border-[var(--border-card)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-cyan-500/40"
                  }`}
                >
                  <IconComp size={16} className={activeCat === idx ? "text-cyan-400" : "text-[var(--text-muted)]"} />
                  {cat.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active Category Skills Grid */}
        <Reveal delay={150}>
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[var(--border-card)]">
            <h3 className="font-display font-bold text-lg text-[var(--text-heading)] mb-6 flex items-center gap-2">
              {skillCategories[activeCat].title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories[activeCat].skills.map((skill) => {
                const IconComp = brandIcons[skill.icon];
                return (
                  <div
                    key={skill.name}
                    className="theme-card-subtle border border-[var(--border-card)] rounded-xl p-4 flex items-center justify-between card-hover hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl theme-card-subtle border border-[var(--border-card)] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                        {IconComp ? (
                          <IconComp size={20} className="shrink-0" />
                        ) : (
                          <CheckCircle2 size={18} className="text-cyan-400" />
                        )}
                      </div>
                      <div>
                        <span className="font-display font-semibold text-xs text-[var(--text-heading)] block">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">
                          Production Ready
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-lg shrink-0 font-medium">
                      {skill.tag || "Core"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
