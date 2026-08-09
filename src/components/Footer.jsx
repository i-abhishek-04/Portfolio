import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 px-5 sm:px-8 lg:pl-32 py-8 bg-[#02050b]/90">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
        <p>© 2026 Abhishek Raj. All rights reserved.</p>
        <p className="text-cyan-400/80 font-mono text-[11px] text-center">
          &lt; Keep Building • Keep Learning • Keep Shipping /&gt;
        </p>
        <a
          href="#home"
          className="h-9 w-9 flex items-center justify-center rounded-xl border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-colors bg-[#050a17]"
        >
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
