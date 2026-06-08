import { motion, useReducedMotion } from "framer-motion";
import { type CSSProperties, type PointerEvent, useState } from "react";
import type { Skill } from "@/types/content";
import { accentClasses } from "@/utils/accent";
import { cn } from "@/utils/cn";

const positions: Record<string, { x: number; y: number }> = {
  React: { x: 14, y: 25 },
  TypeScript: { x: 37, y: 21 },
  JavaScript: { x: 60, y: 25 },
  "Redux Toolkit": { x: 79, y: 22 },
  Zustand: { x: 24, y: 46 },
  "REST API": { x: 49, y: 47 },
  "Axios / Fetch": { x: 73, y: 47 },
  "Tailwind CSS": { x: 14, y: 68 },
  SCSS: { x: 34, y: 72 },
  Vite: { x: 55, y: 67 },
  Storybook: { x: 79, y: 70 },
  "GitHub Actions": { x: 43, y: 87 },
  Vitest: { x: 63, y: 87 },
  Jest: { x: 25, y: 88 },
  Cypress: { x: 83, y: 88 },
  "Node.js": { x: 42, y: 10 },
  Express: { x: 64, y: 9 },
  Strapi: { x: 84, y: 10 },
};

const connections: Array<[string, string]> = [
  ["React", "TypeScript"],
  ["TypeScript", "JavaScript"],
  ["TypeScript", "Redux Toolkit"],
  ["React", "Zustand"],
  ["React", "Tailwind CSS"],
  ["TypeScript", "REST API"],
  ["REST API", "Axios / Fetch"],
  ["Tailwind CSS", "SCSS"],
  ["REST API", "Vite"],
  ["Vite", "Storybook"],
  ["Vite", "GitHub Actions"],
  ["Storybook", "Cypress"],
  ["GitHub Actions", "Vitest"],
  ["Vitest", "Cypress"],
  ["Node.js", "Express"],
  ["Express", "Strapi"],
  ["Node.js", "REST API"],
];

type SkillMapProps = {
  skills: Skill[];
};

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

const REPULSE_RADIUS = 24;
const MAX_SHIFT = 28;

export function SkillMap({ skills }: SkillMapProps) {
  const shouldReduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState<PointerState>({ x: 50, y: 50, active: false });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const handlePointerLeave = () => {
    setPointer((value) => ({ ...value, active: false }));
  };

  return (
    <div
      className="relative mx-auto h-[440px] max-w-5xl overflow-hidden rounded-[2rem] border border-slate-700/50 bg-slate-900/30 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-70" />

      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        {connections.map(([from, to]) => {
          const start = positions[from];
          const end = positions[to];
          if (!start || !end) return null;

          return (
            <line
              key={`${from}-${to}`}
              x1={`${start.x}%`}
              y1={`${start.y}%`}
              x2={`${end.x}%`}
              y2={`${end.y}%`}
              stroke="rgba(148, 163, 184, 0.28)"
              strokeWidth="1.4"
              strokeDasharray="4 7"
            />
          );
        })}
      </svg>

      {skills.map((skill, index) => {
        const position = positions[skill.name];
        const Icon = skill.icon;
        const accent = accentClasses[skill.accent];
        if (!position) return null;

        const offset = getRepulseOffset(position, pointer, shouldReduceMotion);
        const floatStyle = getFloatStyle(index);

        return (
          <div key={skill.name} className="absolute" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
            <motion.div
              animate={{ x: offset.x, y: offset.y }}
              transition={{ type: "spring", stiffness: 44, damping: 18, mass: 1.1 }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
            >
              <div className="skill-node-center">
                <div className="skill-node-float" style={floatStyle}>
                  <div
                    className={cn(
                      "group flex items-center gap-2.5 rounded-2xl border bg-slate-950/82 px-3.5 py-2.5 shadow-xl backdrop-blur-xl transition duration-300 hover:border-cyan-300/60",
                      accent.border,
                      accent.shadow,
                    )}
                  >
                    {Icon && (
                      <span className={cn("flex h-7 w-7 items-center justify-center rounded-xl", accent.bg, accent.text)}>
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                    )}
                    <span className="whitespace-nowrap text-[13px] font-bold text-slate-100">{skill.name}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

function getRepulseOffset(position: { x: number; y: number }, pointer: PointerState, shouldReduceMotion: boolean | null) {
  if (!pointer.active || shouldReduceMotion) return { x: 0, y: 0 };

  const dx = position.x - pointer.x;
  const dy = position.y - pointer.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance === 0 || distance > REPULSE_RADIUS) return { x: 0, y: 0 };

  const force = (REPULSE_RADIUS - distance) / REPULSE_RADIUS;
  const angle = Math.atan2(dy, dx);

  return {
    x: Math.cos(angle) * MAX_SHIFT * force,
    y: Math.sin(angle) * MAX_SHIFT * force,
  };
}

function getFloatStyle(index: number) {
  const floatX = ((index % 3) - 1) * 5;
  const floatY = index % 2 === 0 ? -5 : 5;
  const duration = 5.6 + (index % 5) * 0.45;
  const delay = index * -0.18;

  return {
    "--float-x": `${floatX}px`,
    "--float-y": `${floatY}px`,
    "--float-duration": `${duration}s`,
    "--float-delay": `${delay}s`,
  } as CSSProperties;
}
