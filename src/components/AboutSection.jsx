import { useState } from "react";
import { User, Terminal, Code, Cpu, ShieldCheck, GraduationCap } from "lucide-react";
import { about, profile } from "../data";
import Reveal from "./Reveal";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("whoami");

  return (
    <section id="about" className="px-5 sm:px-8 lg:pl-32 py-20 relative z-10 border-t border-[var(--border-card)]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <User size={20} />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">GET TO KNOW ME</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-heading)] tracking-tight">
                About Me &amp; Engineering Focus
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Terminal */}
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="code-terminal-dark rounded-2xl border border-cyan-500/30 overflow-hidden shadow-xl">
                {/* Terminal Header */}
                <div className="bg-[#091124] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="flex gap-2 font-mono text-xs">
                    <button
                      onClick={() => setActiveTab("whoami")}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeTab === "whoami" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      whoami
                    </button>
                    <button
                      onClick={() => setActiveTab("bio")}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeTab === "bio" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      bio.txt
                    </button>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-xs leading-relaxed text-slate-300 min-h-[260px]">
                  {activeTab === "whoami" && (
                    <div className="space-y-2">
                      <p>
                        <span className="text-emerald-400 font-bold">abhishek@nsut</span>
                        <span className="text-slate-500">:~$ </span>
                        <span className="text-white font-bold">whoami --verbose</span>
                      </p>
                      <p className="text-slate-400 pt-2"><span className="text-cyan-400 font-semibold">&gt; Name     :</span> {profile.name}</p>
                      <p className="text-slate-400"><span className="text-cyan-400 font-semibold">&gt; Role     :</span> {profile.role}</p>
                      <p className="text-slate-400"><span className="text-cyan-400 font-semibold">&gt; Education:</span> {profile.degree}</p>
                      <p className="text-slate-400"><span className="text-cyan-400 font-semibold">&gt; Institute:</span> {profile.college}</p>
                      <p className="text-slate-400"><span className="text-cyan-400 font-semibold">&gt; Location :</span> {profile.location}</p>
                      <p className="text-slate-400"><span className="text-cyan-400 font-semibold">&gt; Status   :</span> <span className="text-emerald-400">{profile.status}</span></p>
                      <p className="pt-2">
                        <span className="text-emerald-400 font-bold">abhishek@nsut</span>
                        <span className="text-slate-500">:~$ </span>
                        <span className="inline-block w-2 h-4 bg-cyan-400 align-middle animate-blink" />
                      </p>
                    </div>
                  )}

                  {activeTab === "bio" && (
                    <div className="space-y-3">
                      <p>
                        <span className="text-emerald-400 font-bold">abhishek@nsut</span>
                        <span className="text-slate-500">:~$ </span>
                        <span className="text-white font-bold">cat bio.txt</span>
                      </p>
                      <p className="text-slate-300 pt-1 leading-normal">
                        "{about.summary}"
                      </p>
                      <p className="text-slate-400 text-[11px] pt-2 border-t border-slate-800/80">
                        # Focus: Full-Stack Web Development, AI Agents, RAG Pipelines, Microservices Architecture.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Education Badge Card */}
            <Reveal delay={150}>
              <div className="mt-5 glass-panel rounded-2xl p-5 border border-[var(--border-card)] flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[var(--text-heading)]">{profile.degree}</h4>
                  <p className="text-xs text-cyan-400 mt-0.5">{profile.college}</p>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono mt-1">{profile.batch} · CGPA: {profile.cgpa} · New Delhi, India</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-5">
            <Reveal delay={120}>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[var(--border-card)]">
                <h3 className="font-display font-bold text-xl text-[var(--text-heading)] mb-4">
                  Passionate about shipping impactful digital products.
                </h3>
                <p className="text-[var(--text-body)] text-sm leading-relaxed mb-6">
                  {about.summary}
                </p>

                {/* Core Pillars */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-card)]">
                  <div className="theme-card-subtle border border-[var(--border-card)] rounded-xl p-4">
                    <Code className="text-cyan-400 mb-2" size={20} />
                    <h4 className="font-display font-bold text-xs text-[var(--text-heading)] mb-1">Full-Stack Web</h4>
                    <p className="text-[11px] text-[var(--text-muted)] leading-normal">Building responsive interfaces with React/Next.js and FastAPI backends.</p>
                  </div>
                  <div className="theme-card-subtle border border-[var(--border-card)] rounded-xl p-4">
                    <Cpu className="text-purple-400 mb-2" size={20} />
                    <h4 className="font-display font-bold text-xs text-[var(--text-heading)] mb-1">AI &amp; RAG Systems</h4>
                    <p className="text-[11px] text-[var(--text-muted)] leading-normal">Designing vector search pipelines with Qdrant, LangChain &amp; Gemini.</p>
                  </div>
                  <div className="theme-card-subtle border border-[var(--border-card)] rounded-xl p-4">
                    <ShieldCheck className="text-emerald-400 mb-2" size={20} />
                    <h4 className="font-display font-bold text-xs text-[var(--text-heading)] mb-1">Performance</h4>
                    <p className="text-[11px] text-[var(--text-muted)] leading-normal">Optimizing API response times, database queries, and clean code.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
