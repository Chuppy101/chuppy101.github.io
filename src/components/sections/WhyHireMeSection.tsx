import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { accentClasses } from "@/utils/accent";
import { cn } from "@/utils/cn";
import { useContent } from "@/hooks/useContent";

export function WhyHireMeSection() {
  const { valueCards, ui } = useContent();

  return (
    <Section id="why-hire-me">
      <Reveal>
        <SectionTitle eyebrow={ui.sections.valueEyebrow} title={ui.sections.valueTitle} />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {valueCards.map((card, index) => {
          const Icon = card.icon;
          const accent = accentClasses[card.accent];

          return (
            <Reveal key={card.title} delay={index * 0.05}>
              <Card className={cn("h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-500/70", accent.shadow)}>
                <div className={cn("mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border", accent.bg, accent.border, accent.text)}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{card.text}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
