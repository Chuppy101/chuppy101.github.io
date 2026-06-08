import type { Project } from "@/types/content";
import { accentClasses } from "@/utils/accent";
import { cn } from "@/utils/cn";

type ProjectPreviewProps = {
  type: Project["preview"];
  accent: Project["accent"];
};

export function ProjectPreview({ type, accent }: ProjectPreviewProps) {
  const classes = accentClasses[accent];

  return (
    <div className="relative h-44 overflow-hidden border-b border-slate-800/80 bg-slate-950/80 p-4">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", classes.from, classes.to)} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
      <div className="relative h-full rounded-2xl border border-slate-700/60 bg-slate-950/65 p-3 shadow-2xl shadow-slate-950/50 backdrop-blur-xl transition duration-300 group-hover:scale-[1.02]">
        {type === "dashboard" && <DashboardPreview />}
        {type === "shop" && <ShopPreview />}
        {type === "cars" && <CarsPreview />}
        {type === "calendar" && <CalendarPreview />}
        {type === "movies" && <MoviesPreview />}
        {type === "editor" && <EditorPreview />}
      </div>
    </div>
  );
}

function WindowHeader() {
  return (
    <div className="mb-3 flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-red-400/70" />
      <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
      <span className="h-2 w-2 rounded-full bg-lime-400/70" />
      <span className="ml-auto h-2 w-16 rounded-full bg-slate-700/70" />
    </div>
  );
}

function DashboardPreview() {
  return (
    <>
      <WindowHeader />
      <div className="grid grid-cols-3 gap-2">
        {["h-10", "h-10", "h-10"].map((height, index) => (
          <div key={index} className={`${height} rounded-xl border border-cyan-300/20 bg-cyan-300/10`} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-[1.2fr_0.8fr] gap-2">
        <div className="h-16 rounded-xl border border-violet-300/20 bg-violet-300/10" />
        <div className="space-y-2">
          <div className="h-3 rounded-full bg-slate-700/80" />
          <div className="h-3 rounded-full bg-slate-700/60" />
          <div className="h-3 rounded-full bg-slate-700/40" />
        </div>
      </div>
    </>
  );
}

function ShopPreview() {
  return (
    <>
      <WindowHeader />
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-xl border border-slate-700/60 bg-white/[0.04] p-2">
            <div className="mx-auto h-8 w-10 rounded-lg bg-gradient-to-br from-slate-500/70 to-cyan-300/40" />
            <div className="mt-2 h-2 rounded-full bg-slate-700/70" />
          </div>
        ))}
      </div>
    </>
  );
}

function CarsPreview() {
  return (
    <>
      <WindowHeader />
      <div className="space-y-2">
        {[0, 1, 2].map((index) => (
          <div key={index} className="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-white/[0.04] p-2">
            <div className="h-8 w-12 rounded-lg bg-gradient-to-r from-cyan-300/30 to-violet-300/30" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2 rounded-full bg-slate-600/80" />
              <div className="h-2 w-2/3 rounded-full bg-slate-700/70" />
            </div>
            <div className="h-6 w-10 rounded-lg bg-lime-300/20" />
          </div>
        ))}
      </div>
    </>
  );
}

function CalendarPreview() {
  return (
    <>
      <WindowHeader />
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }).map((_, index) => (
          <div
            key={index}
            className={`h-4 rounded ${index === 10 || index === 18 ? "bg-cyan-300/70" : "bg-slate-700/60"}`}
          />
        ))}
      </div>
      <div className="mt-3 h-8 rounded-xl border border-violet-300/20 bg-violet-300/10" />
    </>
  );
}

function MoviesPreview() {
  return (
    <>
      <WindowHeader />
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-20 rounded-xl bg-gradient-to-br from-slate-700 via-slate-800 to-violet-400/30" />
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <div className="h-6 flex-1 rounded-lg bg-cyan-300/15" />
        <div className="h-6 w-16 rounded-lg bg-violet-300/15" />
      </div>
    </>
  );
}

function EditorPreview() {
  return (
    <>
      <WindowHeader />
      <div className="grid h-[104px] grid-cols-[42px_1fr_54px] gap-2">
        <div className="space-y-2 rounded-xl border border-slate-700/60 bg-slate-900/70 p-2">
          <div className="h-4 rounded bg-cyan-300/20" />
          <div className="h-4 rounded bg-violet-300/20" />
          <div className="h-4 rounded bg-lime-300/20" />
        </div>
        <div className="relative rounded-xl border border-cyan-300/20 bg-slate-950/80">
          <div className="absolute left-5 top-5 h-10 w-16 rounded-lg border border-cyan-300/60 bg-cyan-300/10" />
          <div className="absolute bottom-4 right-5 h-8 w-8 rounded-full border border-violet-300/60 bg-violet-300/10" />
        </div>
        <div className="space-y-2 rounded-xl border border-slate-700/60 bg-slate-900/70 p-2">
          <div className="h-2 rounded bg-slate-700" />
          <div className="h-2 rounded bg-slate-700" />
          <div className="h-2 rounded bg-slate-700" />
        </div>
      </div>
    </>
  );
}
