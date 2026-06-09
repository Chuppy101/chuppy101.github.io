import { Copy, Download, GitBranch, Mail, MapPin, Send, type LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useContent } from "@/hooks/useContent";

export function ContactSection() {
  const { copied, copy } = useCopyToClipboard();
  const { profile, ui } = useContent();

  return (
    <Section id="contact" className="border-b-0 pb-8">
      <Reveal>
        <SectionTitle eyebrow={ui.sections.contactsEyebrow} title={ui.sections.contactsTitle} />
      </Reveal>

      <Reveal delay={0.05}>
        <Card className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
            <div className="border-b border-slate-800/80 p-6 lg:border-b-0 lg:border-r">
              <p className="text-2xl font-black text-white">{ui.contact.title}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{profile.availability}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={profile.resumeUrl} download variant="primary">
                  <Download className="h-4 w-4" />
                  {ui.contact.downloadResume}
                </ButtonLink>
                <Button variant="secondary" onClick={() => copy(profile.email)}>
                  <Copy className="h-4 w-4" />
                  {copied ? ui.contact.copiedEmail : ui.contact.copyEmail}
                </Button>
              </div>
            </div>

            <div className="grid gap-3 p-6 sm:grid-cols-2">
              <ContactLink icon={GitBranch} label="GitHub" value="github.com/Chuppy101" href={profile.githubUrl} />
              <ContactLink icon={Send} label="Telegram" value="@Chubby_Alex" href={profile.telegramUrl} />
              <ContactLink icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactLink icon={MapPin} label={ui.contact.locationLabel} value={profile.location} href="#" />
            </div>
          </div>
        </Card>
      </Reveal>

      <footer className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-slate-600 sm:flex-row">
        <span>{ui.contact.copyright}</span>
        <span>{profile.subtitle}</span>
      </footer>
    </Section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");
  const isAnchor = href === "#";

  if (isAnchor) {
    return (
      <div className="rounded-2xl border border-slate-700/50 bg-white/[0.03] p-4">
        <div className="flex items-center gap-3 text-slate-400">
          <Icon className="h-4 w-4 text-cyan-300" />
          <span className="text-xs uppercase tracking-[0.2em]">{label}</span>
        </div>
        <p className="mt-3 text-sm font-bold text-slate-100">{value}</p>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="rounded-2xl border border-slate-700/50 bg-white/[0.03] p-4 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
    >
      <div className="flex items-center gap-3 text-slate-400">
        <Icon className="h-4 w-4 text-cyan-300" />
        <span className="text-xs uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className="mt-3 break-all text-sm font-bold text-slate-100">{value}</p>
    </a>
  );
}
