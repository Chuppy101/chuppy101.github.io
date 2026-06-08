import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-700/50 bg-slate-900/45 shadow-2xl shadow-slate-950/30 backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
