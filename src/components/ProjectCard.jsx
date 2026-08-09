import { Star, Brain, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon, YoutubeIcon, InstagramIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from "./BrandIcons";

function VisualSocial() {
  return (
    <div className="relative h-36 rounded-2xl bg-[#040814] border border-cyan-500/20 p-3 overflow-hidden flex items-center justify-between">
      <div className="flex flex-col gap-2 text-slate-400 pl-1 z-10">
        <InstagramIcon size={13} className="text-pink-400" />
        <YoutubeIcon size={13} className="text-red-500" />
        <TwitterIcon size={13} className="text-sky-400" />
        <LinkedinIcon size={13} className="text-blue-400" />
        <FacebookIcon size={13} className="text-blue-500" />
      </div>

      <div className="relative w-16 h-16 flex items-center justify-center shrink-0 z-10">
        <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <polygon points="50,3 97,28 97,87 50,112 3,87 3,28" fill="#090d1f" stroke="#a855f7" strokeWidth="3" />
        </svg>
        <Brain size={22} className="absolute text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
      </div>

      <div className="w-28 h-24 rounded-xl bg-[#070e20] border border-cyan-500/30 p-2 flex flex-col justify-between shadow-md z-10">
        <div className="flex items-center justify-between border-b border-slate-800 pb-1">
          <div className="h-1.5 w-10 bg-cyan-400/50 rounded-full" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>

        <div className="flex items-end justify-between gap-1.5 h-12 pt-2 px-1">
          <div className="w-2 bg-blue-600/40 rounded-t-sm h-6" />
          <div className="w-2 bg-cyan-400 rounded-t-sm h-10 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
          <div className="w-2 bg-purple-500/60 rounded-t-sm h-7" />
          <div className="w-2 bg-cyan-300 rounded-t-sm h-11" />
        </div>
      </div>
    </div>
  );
}

function VisualChat() {
  return (
    <div className="h-36 rounded-2xl bg-[#040814] border border-cyan-500/20 p-3.5 flex flex-col justify-center gap-2.5">
      <div className="self-start bg-slate-900/90 border border-slate-700/60 rounded-2xl px-3.5 py-1.5 text-[11px] text-slate-300 shadow-sm">
        How can I help you today?
      </div>
      <div className="self-end bg-blue-600/30 border border-blue-500/50 rounded-2xl px-3.5 py-1.5 text-[11px] text-blue-200 shadow-[0_0_12px_rgba(37,99,235,0.2)]">
        Explain RAG in simple terms.
      </div>
      <div className="self-start bg-slate-900/90 border border-slate-700/60 rounded-2xl px-3.5 py-1 text-[11px] text-slate-400 font-mono tracking-widest">
        ...
      </div>
    </div>
  );
}

function VisualCode() {
  return (
    <div className="h-36 rounded-2xl bg-[#030611] border border-cyan-500/20 p-3.5 font-mono text-[10px] leading-[16px] flex gap-3 overflow-hidden">
      <div className="text-slate-600 flex flex-col select-none border-r border-slate-800 pr-2">
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
      </div>
      <div className="text-slate-300 space-y-0.5">
        <p><span className="text-cyan-400 font-semibold">import</span> <span className="text-purple-300">Monaco</span></p>
        <p><span className="text-purple-400 font-semibold">class</span> <span className="text-yellow-300">CodeDrive</span>:</p>
        <p className="pl-3"><span className="text-blue-400">def</span> <span className="text-cyan-300">execute</span>(code):</p>
        <p className="pl-6 text-emerald-400">// container isolate</p>
        <p className="pl-6"><span className="text-cyan-300">return</span> <span className="text-orange-300">docker.run()</span></p>
      </div>
    </div>
  );
}

const visuals = { social: VisualSocial, chat: VisualChat, code: VisualCode };

export default function ProjectCard({ project }) {
  const Visual = visuals[project.visual] || VisualSocial;

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between card-hover border border-slate-800/80 bg-[#070d1c]/90 h-full">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-0.5 rounded-md">
              {project.category}
            </span>
            {project.date && (
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-md">
                {project.date}
              </span>
            )}
          </div>
          {project.featured && (
            <span className="flex items-center gap-1 text-[10px] font-mono text-purple-300 bg-purple-500/15 border border-purple-500/40 rounded-full px-2.5 py-0.5">
              <Star size={10} fill="currentColor" /> Featured
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="font-display font-bold text-white text-lg">{project.name}</h3>
        <p className="text-xs text-cyan-300/80 font-mono mt-0.5 mb-3">{project.tagline}</p>

        {/* Visual Mockup */}
        <div className="mb-4">
          <Visual />
        </div>

        {/* Description */}
        <p className="text-slate-300 text-xs leading-relaxed mb-4">{project.description}</p>

        {/* Feature Bullets */}
        {project.features && (
          <ul className="space-y-1.5 mb-4 pt-3 border-t border-slate-800/80">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-400 leading-snug">
                <CheckCircle2 size={12} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#040814] border border-slate-800 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold py-2.5 rounded-xl transition-all shadow-sm"
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono py-2.5 rounded-xl transition-all"
          >
            <GithubIcon size={12} /> GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
