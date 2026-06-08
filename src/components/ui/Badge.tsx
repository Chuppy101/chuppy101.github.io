import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type BadgeProps = {
  children: ReactNode;
  active?: boolean;
  className?: string;
};

export function Badge({ children, active = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl border px-2.5 py-1 text-xs font-medium",
        active
          ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200"
          : "border-slate-700/60 bg-white/[0.03] text-slate-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
