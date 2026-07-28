import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A classic manila folder icon with a peeking document. */
export function Folder({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 56" fill="none" aria-hidden="true">
      <path
        d="M4 11 h15 l4 5 h34 a3 3 0 0 1 3 3 v29 a3 3 0 0 1 -3 3 H4 a3 3 0 0 1 -3 -3 V14 a3 3 0 0 1 3 -3 Z"
        fill="var(--yellow)"
        stroke="var(--line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="21"
        y="18"
        width="14"
        height="10"
        rx="2"
        fill="#5b83c0"
        stroke="var(--line)"
        strokeWidth="1.6"
      />
      <path
        d="M2 26 h60 a2 2 0 0 1 2 2 v21 a3 3 0 0 1 -3 3 H3 a3 3 0 0 1 -3 -3 V28 a2 2 0 0 1 2 -2 Z"
        fill="#f2d97e"
        stroke="var(--line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface DesktopIconProps {
  label: string;
  href: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

/** Desktop shortcut: an icon with a selectable caption below it. */
export function DesktopIcon({ label, href, external, children, className }: DesktopIconProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn("group flex w-24 flex-col items-center gap-1.5 text-center", className)}
    >
      <span className="transition-transform duration-200 group-hover:-translate-y-1">{children}</span>
      <span className="rounded px-1.5 font-mono text-xs text-ink transition-colors group-hover:bg-olive/20">
        {label}
      </span>
    </a>
  );
}
