export function GlowBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.12),transparent_30%),linear-gradient(180deg,#020617_0%,#030712_48%,#020617_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:52px_52px] opacity-60 [mask-image:radial-gradient(circle_at_50%_8%,black,transparent_65%)]" />
      <div className="absolute left-[18%] top-[12%] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[8%] top-[22%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-[6%] left-[38%] h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />
    </div>
  );
}
