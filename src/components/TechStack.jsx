import { Code2 } from "lucide-react";
import {
  ReactIcon, NextIcon, TypescriptIcon, PythonIcon, FastapiIcon, NodeIcon,
  PostgresIcon, MongoIcon, DockerIcon, TailwindIcon, GitIcon, LinuxIcon,
  LangchainIcon, QdrantIcon, FirebaseIcon
} from "./BrandIcons";

const skillsList = [
  { name: "React", icon: ReactIcon },
  { name: "Python", icon: PythonIcon },
  { name: "FastAPI", icon: FastapiIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Git", icon: GitIcon },
  { name: "Docker", icon: DockerIcon },
];

export default function TechStack() {
  return (
    <div id="skills" className="glass-panel rounded-2xl p-6 h-full border border-slate-800 bg-[#070d1d] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Code2 size={16} className="text-cyan-400" />
          <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-white">
            TECH STACK
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-y-3.5 gap-x-2">
          {skillsList.map((s) => {
            const IconComp = s.icon;
            return (
              <div key={s.name} className="flex items-center gap-2 text-xs text-slate-300">
                <IconComp size={15} className="shrink-0" />
                <span className="truncate font-body">{s.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-5 text-[11px] font-mono text-slate-500">and more...</p>
    </div>
  );
}
