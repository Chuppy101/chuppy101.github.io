import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillMap } from "@/components/skills/SkillMap";
import { useContent } from "@/hooks/useContent";

export function SkillsSection() {
  const { skills, skillGroups, ui } = useContent();

  return (
    <Section id="skills">
      <Reveal>
        <SectionTitle eyebrow={ui.sections.skillsEyebrow} title={ui.sections.skillsTitle} />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="hidden lg:block">
          <SkillMap skills={skills} />
        </div>
      </Reveal>

      <div className="grid gap-4 lg:hidden">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <Card className="p-5">
              <h3 className="text-base font-black text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-xl border border-slate-700/60 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
