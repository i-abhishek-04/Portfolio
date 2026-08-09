import { Code2, Rocket, Brain, Coffee } from "lucide-react";
import { stats } from "../data";
import Reveal from "./Reveal";

const iconMap = { code: Code2, rocket: Rocket, brain: Brain, coffee: Coffee };

export default function StatsBar() {
  return (
    <section className="px-5 sm:px-8 lg:pl-32 py-12 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={i}
                  className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center card-hover border border-slate-800/80 bg-[#060c1c]/80"
                >
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <Icon size={24} />
                  </div>
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-xs font-mono font-semibold text-cyan-300 mt-1">{s.label}</p>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">{s.subtext}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
