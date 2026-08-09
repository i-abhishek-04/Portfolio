import { Folder } from "lucide-react";
import { experience } from "../data";

export default function Experience() {
  return (
    <div id="experience" className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-between border border-border">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Folder size={16} className="text-cyan-400" />
          <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-white">
            EXPERIENCE &amp; JOURNEY
          </h3>
        </div>

        <ol className="relative border-l border-cyan-500/30 ml-2 space-y-5">
          {experience.map((e, i) => (
            <li key={i} className="pl-5 relative">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] border border-cyan-200" />
              <p className="text-[10px] font-mono text-slate-500">{e.period}</p>
              <p className="text-xs font-semibold text-white mt-0.5">{e.title}</p>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">{e.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
