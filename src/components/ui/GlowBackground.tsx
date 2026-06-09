export function GlowBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="app-background-gradient absolute inset-0" />
      <div className="app-background-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_50%_8%,black,transparent_65%)]" />
      <div className="absolute left-[18%] top-[12%] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[8%] top-[22%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-[6%] left-[38%] h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />
    </div>
  );
}
