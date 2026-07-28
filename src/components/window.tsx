import type { ReactNode } from "react";
import { portfolio } from "@/content/portfolio";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

const USER = portfolio.name.split(" ")[0].toUpperCase();

interface RetroWindowProps {
  /** Trailing path segment, e.g. "works" → title "C:\JORDAN\works". */
  dir: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

/** A faux-OS window: olive title bar with a file path + controls, parchment body. */
export function RetroWindow({ dir, children, className, bodyClassName }: RetroWindowProps) {
  return (
    <div className={cn("window", className)}>
      <div className="window-title">
        <span className="truncate">
          C:\{USER}\{dir}
        </span>
        <span aria-hidden className="flex shrink-0 items-center gap-1.5">
          <span
            className="win-btn"
            style={{ backgroundColor: "color-mix(in oklab, var(--olive-fg) 18%, transparent)" }}
          >
            <span className="block h-[2px] w-2.5 bg-current" />
          </span>
          <span
            className="win-btn"
            style={{ backgroundColor: "color-mix(in oklab, var(--olive-fg) 18%, transparent)" }}
          >
            <span className="block h-2 w-2 border-[1.5px] border-current" />
          </span>
          <span className="win-btn" style={{ backgroundColor: "var(--red)" }}>
            <Icon name="close" size={12} strokeWidth={2.4} />
          </span>
        </span>
      </div>
      <div className={cn("p-6 sm:p-8", bodyClassName)}>{children}</div>
    </div>
  );
}
