export const accentClasses = {
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-300/10",
    border: "border-cyan-300/30",
    shadow: "shadow-cyan-400/20",
    from: "from-cyan-300/30",
    to: "to-cyan-300/0",
  },
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-300/10",
    border: "border-violet-300/30",
    shadow: "shadow-violet-400/20",
    from: "from-violet-300/30",
    to: "to-violet-300/0",
  },
  lime: {
    text: "text-lime-300",
    bg: "bg-lime-300/10",
    border: "border-lime-300/30",
    shadow: "shadow-lime-400/20",
    from: "from-lime-300/30",
    to: "to-lime-300/0",
  },
  blue: {
    text: "text-sky-300",
    bg: "bg-sky-300/10",
    border: "border-sky-300/30",
    shadow: "shadow-sky-400/20",
    from: "from-sky-300/30",
    to: "to-sky-300/0",
  },
} as const;

export type Accent = keyof typeof accentClasses;
