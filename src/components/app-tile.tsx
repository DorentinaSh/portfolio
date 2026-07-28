import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppTileProps {
  label?: string;
  href?: string;
  external?: boolean;
  /** Background color of the icon square (any CSS color). */
  color?: string;
  /** Text/icon color inside the square. */
  fg?: string;
  children: ReactNode;
  className?: string;
  tileClassName?: string;
  ariaLabel?: string;
}

/** A rounded app-icon square with an optional caption, like a desktop app. */
export function AppTile({
  label,
  href,
  external,
  color = "var(--window)",
  fg = "#fff",
  children,
  className,
  tileClassName,
  ariaLabel,
}: AppTileProps) {
  const tile = (
    <span
      className={cn("app-tile h-14 w-14 text-2xl", tileClassName)}
      style={{ backgroundColor: color, color: fg }}
    >
      {children}
    </span>
  );

  const caption = label ? (
    <span className="text-center font-mono text-[11px] leading-tight text-ink-soft">{label}</span>
  ) : null;

  const body = (
    <span className="flex flex-col items-center gap-2">
      {tile}
      {caption}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel ?? label}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn("group inline-flex", className)}
      >
        {body}
      </a>
    );
  }

  return <span className={cn("inline-flex", className)}>{body}</span>;
}
