import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-slate-900/80">
      <div
        className="h-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
