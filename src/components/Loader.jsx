import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1400);
    const t2 = setTimeout(() => onDone?.(), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)] transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <p className="font-mono text-sm text-[var(--color-muted)] mb-2">
          <span className="text-[var(--color-cyan)]">$</span> whoami
        </p>
        <h1 className="font-display text-2xl md:text-3xl font-semibold">
          Abhishek Raj<span className="text-gradient">.</span>
        </h1>
        <div className="mt-5 h-[2px] w-40 mx-auto bg-[var(--color-border)] overflow-hidden rounded-full">
          <div className="h-full w-1/2 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-violet)] animate-[loaderbar_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes loaderbar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
