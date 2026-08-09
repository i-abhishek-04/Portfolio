import { User } from "lucide-react";
import { about } from "../data";

export default function About() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-between relative overflow-hidden border border-border">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <User size={16} className="text-cyan-400" />
          <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-white">
            ABOUT ME
          </h3>
        </div>

        <p className="text-slate-300 text-xs leading-relaxed relative z-10">
          {about.body}
        </p>
      </div>

      <div className="mt-8 pt-4 relative z-10 flex items-center justify-between">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-mono hover:text-cyan-300 transition-all"
        >
          &gt; More about me_
        </a>
      </div>

      {/* Decorative planet glow effect in bottom right */}
      <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-gradient-to-tr from-cyan-600/20 via-blue-900/10 to-transparent blur-xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full border border-cyan-500/20 bg-blue-950/40 pointer-events-none shadow-[0_0_30px_rgba(56,189,248,0.15)]" />
    </div>
  );
}
