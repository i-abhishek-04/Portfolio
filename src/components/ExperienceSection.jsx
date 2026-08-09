import { Folder, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { experience, achievements } from "../data";
import Reveal from "./Reveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-5 sm:px-8 lg:pl-32 py-20 relative z-10 border-t border-slate-900">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Folder size={20} />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">CAREER &amp; ACADEMICS</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Experience &amp; Education Journey
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Timeline Column */}
          <div className="lg:col-span-8">
            <ol className="relative border-l-2 border-cyan-500/30 ml-3 space-y-10">
              {experience.map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <li className="pl-6 sm:pl-8 relative group">
                    {/* Timeline glowing dot */}
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#040814] border-2 border-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] group-hover:bg-cyan-400 transition-colors" />

                    <div className="glass-panel rounded-2xl p-6 border border-slate-800 bg-[#070d1d]">
                      {/* Top Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-lg flex items-center gap-1.5">
                          <Calendar size={12} /> {item.period}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full">
                          {item.type}
                        </span>
                      </div>

                      {/* Role Title & Org */}
                      <h3 className="font-display font-bold text-white text-lg mt-2">{item.title}</h3>
                      <p className="text-xs font-mono text-cyan-300 font-semibold mt-0.5 flex items-center gap-1.5">
                        <span>{item.org}</span>
                        {item.location && (
                          <>
                            <span>·</span>
                            <span className="text-slate-400 flex items-center gap-1 font-normal">
                              <MapPin size={11} /> {item.location}
                            </span>
                          </>
                        )}
                      </p>

                      {/* Bullets */}
                      <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-3">
                        {item.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Side Column: Key Achievements */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={150}>
              <div className="glass-panel rounded-2xl p-6 border border-slate-800 bg-[#070d1d] sticky top-24">
                <div className="flex items-center gap-2 mb-5">
                  <Award size={18} className="text-amber-400" />
                  <h3 className="font-display font-bold text-base text-white">Highlights &amp; Rank</h3>
                </div>

                <div className="space-y-4">
                  {achievements.map((ach, idx) => (
                    <div key={idx} className="bg-[#040814] border border-slate-800 rounded-xl p-4">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                        {ach.badge}
                      </span>
                      <h4 className="font-display font-bold text-xs text-white mt-2">{ach.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal">{ach.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
