import { Code2, Rocket, Brain, Coffee } from "lucide-react";
import { profile, stats } from "../data";
import Reveal from "./Reveal";

const iconMap = { code: Code2, rocket: Rocket, brain: Brain, coffee: Coffee };

export default function TerminalStats() {
  return (
    <section className="px-5 sm:px-8 lg:pl-32 -mt-2 mb-16">
      <Reveal>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.3fr_1.7fr] gap-5">
          <div className="rounded-2xl p-6 font-mono text-[13px] leading-7 code-terminal-dark border shadow-lg">
            <p>
              <span className="text-emerald-400 font-semibold">abhishek@portfolio</span>
              <span className="text-slate-500">:~$ </span>
              <span className="text-white font-semibold">whoami</span>
            </p>
            <p className="text-slate-300 mt-1">
              <span className="text-slate-500">&gt; Name</span>
              <span className="text-slate-500 mx-3">:</span>
              <span className="text-white font-medium">{profile.name}</span>
            </p>
            <p className="text-slate-300">
              <span className="text-slate-500">&gt; Role</span>
              <span className="text-slate-500 mx-3">:</span>
              <span className="text-white font-medium">{profile.role}</span>
            </p>
            <p className="text-slate-300">
              <span className="text-slate-500">&gt; College</span>
              <span className="text-slate-500 mx-3">:</span>
              <span className="text-white font-medium">{profile.college}</span>
            </p>
            <p className="text-slate-300">
              <span className="text-slate-500">&gt; Status</span>
              <span className="text-slate-500 mx-3">:</span>
              <span className="text-white font-medium">{profile.status}</span>
            </p>
            <p className="mt-2">
              <span className="text-emerald-400 font-semibold">abhishek@portfolio</span>
              <span className="text-slate-500">:~$ </span>
              <span className="inline-block w-2 h-4 bg-cyan-400 align-middle animate-blink" />
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={i}
                  className="glass-panel rounded-2xl p-5 flex flex-col items-center justify-center text-center card-hover border border-[var(--border-card)]"
                >
                  <Icon size={24} className="text-cyan-400 mb-3" />
                  <p className="font-display font-extrabold text-2xl text-[var(--text-heading)] tracking-tight">{s.value}</p>
                  <p className="text-[11px] font-mono text-[var(--text-muted)] mt-1.5">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
