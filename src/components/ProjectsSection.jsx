import { useState } from "react";
import { Folder } from "lucide-react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const categories = ["All", "Full Stack SaaS", "Developer Tools", "AI & RAG"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === filter ||
            p.category.toLowerCase().includes(filter.toLowerCase()) ||
            p.tags.some((t) => t.toLowerCase() === filter.toLowerCase())
        );

  return (
    <section id="projects" className="px-5 sm:px-8 lg:pl-32 py-20 relative z-10 border-t border-slate-900">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-9 w-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Folder size={18} />
                </div>
                <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">FEATURED WORK</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Software &amp; AI Projects
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-[#060c1d] border border-slate-800 p-1.5 rounded-xl max-w-full overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 sm:px-4 py-2 text-xs font-mono rounded-lg transition-all whitespace-nowrap ${
                    filter === cat
                      ? "bg-blue-600 text-white font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
