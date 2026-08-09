export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--color-bg)]">
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[110px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-cyan-500/15 blur-[120px] animate-float-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-rose-600/10 blur-[130px] animate-float-slow" style={{ animationDelay: "6s" }} />
    </div>
  );
}
