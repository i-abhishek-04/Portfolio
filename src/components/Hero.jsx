import { Mail, FileText, Play, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { profile } from "../data";
import NetworkCanvas from "./NetworkCanvas";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-14 px-5 sm:px-8 lg:pl-32">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <Reveal>
          <p className="font-mono text-xs sm:text-sm text-emerald-400 mb-3 flex items-center gap-1.5 font-medium">
            <span className="text-slate-500">$</span> hello_world.exe
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-wider text-glow-cyan leading-tight">
            {profile.name.toUpperCase()}
          </h1>
          <p className="mt-2.5 font-mono text-xs sm:text-sm tracking-[0.25em] text-cyan-300 font-bold">
            {profile.role.toUpperCase()}
          </p>
          <p className="mt-4 text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed font-body">
            {profile.taglines[0]}
            <span className="inline-block w-1.5 h-4 bg-cyan-400 ml-1 align-middle animate-blink" />
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
            >
              <Play size={13} fill="currentColor" /> View Projects
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-purple-500/50 bg-purple-950/20 text-purple-200 text-xs font-mono font-semibold px-5 py-2.5 rounded-xl hover:bg-purple-900/30 transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)]"
            >
              <FileText size={14} /> Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <span className="font-mono text-[11px] text-slate-500 tracking-widest uppercase font-semibold">CONNECT</span>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="GitHub"><GithubIcon size={16} /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="LinkedIn"><LinkedinIcon size={16} /></a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors" title="Instagram"><InstagramIcon size={16} /></a>
            <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors" title="Email"><Mail size={16} /></a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative h-[340px] sm:h-[400px] rounded-3xl border border-cyan-500/15 overflow-hidden bg-[#040814]/50 backdrop-blur-sm">
            <NetworkCanvas />

            {/* Central Hexagon badge with AR */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-36 h-36 flex items-center justify-center animate-floatSlow">
                <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]">
                  <polygon points="50,3 97,28 97,87 50,112 3,87 3,28" fill="#040916" stroke="#38bdf8" strokeWidth="2.5" />
                </svg>
                <span className="absolute font-display font-extrabold text-3xl text-cyan-300 tracking-widest">AR</span>
              </div>
            </div>

            {/* Bottom-right SYSTEM STATUS ONLINE pill */}
            <div className="absolute bottom-5 right-5 bg-[#060c1c]/90 border border-emerald-500/30 rounded-xl px-3.5 py-2 leading-tight backdrop-blur-md shadow-lg">
              <p className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">SYSTEM STATUS</p>
              <p className="text-[11px] font-mono text-emerald-400 flex items-center gap-2 mt-0.5 font-bold">
                ONLINE <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
