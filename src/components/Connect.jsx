import { Send, Mail, MapPin, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { connect } from "../data";

const iconMap = { mail: Mail, pin: MapPin, github: GithubIcon, linkedin: LinkedinIcon, code: Code };

export default function Connect() {
  return (
    <div id="contact" className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-between border border-border">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Send size={16} className="text-cyan-400" />
          <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-white">
            LET'S CONNECT
          </h3>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed mb-5">
          {connect.intro}
        </p>

        <div className="space-y-2.5">
          {connect.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Mail;
            const content = (
              <div className="flex items-center gap-3 bg-panel2/60 border border-border rounded-xl px-4 py-2.5 text-xs text-slate-300 hover:border-cyan-500/50 hover:text-white transition-all">
                <Icon size={14} className="text-cyan-400 shrink-0" />
                <span className="truncate font-mono text-[11px]">{item.label}</span>
              </div>
            );
            return item.href ? (
              <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
