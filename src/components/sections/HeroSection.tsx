import { ArrowRight, Download, GitBranch, Sparkles } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { scrollToSection } from "@/utils/scrollToSection";
import { useContent } from "@/hooks/useContent";

export function HeroSection() {
  const { profile, ui } = useContent();

  return (
    <Section id="home" className="flex min-h-[760px] items-center border-b border-slate-800/70 py-12 lg:min-h-screen">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              {ui.hero.greeting}
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Frontend
              <span className="block bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="mt-5 text-xl font-bold text-slate-200 sm:text-2xl">
              <span className="text-cyan-300">React</span>
              <span className="mx-3 text-slate-600">/</span>
              <span className="text-sky-300">TypeScript</span>
              <span className="mx-3 text-slate-600">/</span>
              <span className="text-lime-300">Product Interfaces</span>
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.pitch}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="primary" onClick={() => scrollToSection("projects")}>
                {ui.hero.viewProjects}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <ButtonLink href={profile.githubUrl} target="_blank" rel="noreferrer" variant="secondary">
                <GitBranch className="h-4 w-4" />
                GitHub
              </ButtonLink>
              <ButtonLink href={profile.resumeUrl} variant="secondary" download>
                <Download className="h-4 w-4" />
                {ui.hero.downloadResume}
              </ButtonLink>
            </div>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {ui.hero.stats.map((stat) => (
                <Stat key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <CodeShowcase />
        </Reveal>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-white/[0.03] p-4 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-bold text-slate-100">{value}</p>
    </div>
  );
}

function CodeShowcase() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] items-center justify-center lg:flex">
      <div className="absolute inset-8 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-sm" />
      <div className="absolute inset-16 rounded-full border border-violet-300/20 bg-violet-300/5" />
      <div className="absolute bottom-20 h-16 w-72 rounded-full bg-cyan-300/20 blur-2xl" />
      <div className="absolute bottom-24 h-10 w-64 rounded-[50%] border border-cyan-300/30 bg-cyan-300/10" />
      <div className="relative flex h-56 w-72 items-center justify-center rounded-[2rem] border border-slate-700/40 bg-slate-900/35 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-300/10 via-transparent to-violet-400/10" />
        <div className="relative flex items-center gap-4 text-[7rem] font-black leading-none tracking-tighter">
          <span className="bg-gradient-to-br from-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(139,92,246,0.65)]">
            &lt;
          </span>
          <span className="bg-gradient-to-br from-cyan-200 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(34,211,238,0.65)]">
            /
          </span>
          <span className="bg-gradient-to-br from-cyan-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(34,211,238,0.65)]">
            &gt;
          </span>
        </div>
      </div>
    </div>
  );
}
