import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-card)] px-5 sm:px-8 lg:pl-32 py-8 glass-panel">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono">
        <p>© 2026 Abhishek Raj. All rights reserved.</p>
        <p className="text-cyan-400 font-mono text-[11px] text-center font-medium">
          &lt; Keep Building • Keep Learning • Keep Shipping /&gt;
        </p>
        <a
          href="#home"
          className="h-9 w-9 flex items-center justify-center rounded-xl border border-[var(--border-card)] theme-card-subtle text-[var(--text-muted)] hover:text-cyan-400 hover:border-cyan-400 transition-colors"
        >
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
