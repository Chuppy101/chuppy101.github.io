import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "border-cyan-300/50 bg-gradient-to-r from-cyan-300 to-violet-400 text-slate-950 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/30",
  secondary:
    "border-slate-600/60 bg-white/[0.04] text-slate-100 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-100",
  ghost: "border-transparent bg-transparent text-slate-300 hover:bg-white/[0.04] hover:text-white",
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ children, variant = "secondary", className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ children, variant = "secondary", className, ...props }: AnchorProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
