import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { experience } from "@/data/experience";
import { accentClasses } from "@/utils/accent";
import { cn } from "@/utils/cn";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionTitle eyebrow="Commercial experience" title="Опыт работы" />
      </Reveal>

      <div className="relative space-y-5 pl-5 before:absolute before:left-[10px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-cyan-300 before:via-violet-400 before:to-lime-300 sm:pl-8 sm:before:left-[15px]">
        {experience.map((item, index) => {
          const accent = accentClasses[item.accent];

          return (
            <Reveal key={item.company} delay={index * 0.05}>
              <div className="relative">
                <span className={cn("absolute -left-[29px] top-8 h-4 w-4 rounded-full border bg-slate-950 shadow-lg sm:-left-[40px]", accent.border, accent.shadow)} />
                <Card className="p-5 transition duration-300 hover:border-slate-500/70 sm:p-6">
                  <div className="grid gap-5 lg:grid-cols-[110px_1fr_180px]">
                    <div className={cn("flex h-20 w-20 items-center justify-center rounded-3xl border bg-white/[0.03] text-xl font-black uppercase", accent.border, accent.text)}>
                      {item.logoText}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-black text-white">{item.company}</h3>
                        <Badge active>{item.role}</Badge>
                      </div>
                      <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", accent.bg)} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="text-left lg:text-right">
                      <p className="text-sm font-bold text-slate-200">{item.period}</p>
                      <p className="mt-2 inline-flex rounded-xl border border-slate-700/60 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400">
                        {item.duration}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
