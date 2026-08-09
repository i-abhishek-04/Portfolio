import { useEffect, useState } from "react";
import { Code2, Menu, X, Sun, Moon } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { profile } from "../data";

const links = [
  { href: "#home", label: "/home" },
  { href: "#about", label: "/about" },
  { href: "#projects", label: "/projects" },
  { href: "#skills", label: "/skills" },
  { href: "#experience", label: "/experience" },
  { href: "#contact", label: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? "glass-panel border-b border-border shadow-md" : "bg-transparent"
        }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <a href="#home" className="font-display font-bold text-xl tracking-tight text-[var(--text-heading)] flex items-center gap-0.5">
          AR<span className="text-pink-400 font-extrabold">_</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-3 font-mono text-[13px]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${active === l.href
                    ? "text-cyan-400 bg-blue-600/20 border border-blue-500/50 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                  }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions (Theme Toggle & Github CTA) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center justify-center p-2 rounded-xl theme-card-subtle text-[var(--text-body)] hover:text-[var(--text-heading)] hover:border-cyan-500/50 transition-all cursor-pointer"
          >
            {theme === "light" ? (
              <Moon size={18} className="text-purple-500" />
            ) : (
              <Sun size={18} className="text-amber-400" />
            )}
          </button>

          {/* Desktop GitHub CTA */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 theme-card-subtle rounded-xl px-4 py-1.5 text-xs font-mono text-[var(--text-body)] hover:border-cyan-500/50 hover:text-[var(--text-heading)] transition-all"
          >
            <Code2 size={14} className="text-cyan-400" />
            View Source
            <GithubIcon size={14} />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl theme-card-subtle text-[var(--text-body)] hover:text-[var(--text-heading)] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} className="text-cyan-400" /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-border px-6 py-5 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <ul className="flex flex-col gap-3 font-mono text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl transition-all ${active === l.href
                      ? "text-cyan-400 bg-blue-600/20 border border-blue-500/50 font-semibold"
                      : "text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-slate-800/20"
                    }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full theme-card-subtle rounded-xl px-4 py-2.5 text-xs font-mono text-[var(--text-body)] hover:border-cyan-500/50 transition-all"
            >
              <Code2 size={14} className="text-cyan-400" />
              View Source Code
              <GithubIcon size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

