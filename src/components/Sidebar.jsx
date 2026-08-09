import { useEffect, useState } from "react";
import { GripVertical, Home, User, Folder, Code2, Mail } from "lucide-react";

const items = [
  { href: "#home", icon: Home },
  { href: "#about", icon: User },
  { href: "#projects", icon: Folder },
  { href: "#skills", icon: Code2 },
  { href: "#contact", icon: Mail },
];

export default function Sidebar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = items.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex flex-col items-center gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-40 glass-panel rounded-2xl py-6 px-3 border border-[var(--border-card)] shadow-lg">
      <GripVertical size={16} className="text-[var(--text-muted)]" />
      {items.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className={`h-10 w-10 flex items-center justify-center rounded-xl transition-all ${active === href
              ? "bg-blue-600/30 text-cyan-400 border border-blue-500/60 shadow-[0_0_15px_rgba(56,189,248,0.3)] font-semibold"
              : "text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-slate-500/10"
            }`}
        >
          <Icon size={18} />
        </a>
      ))}
    </aside>
  );
}
