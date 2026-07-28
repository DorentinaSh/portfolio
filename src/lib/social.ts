/** Brand colors for social app tiles. Falls back to olive for unknown icons. */
const SOCIAL_COLORS: Record<string, { bg: string; fg: string }> = {
  github: { bg: "#24292e", fg: "#ffffff" },
  linkedin: { bg: "#2f6fb0", fg: "#ffffff" },
  x: { bg: "#15171a", fg: "#ffffff" },
  mail: { bg: "var(--orange)", fg: "#ffffff" },
  behance: { bg: "#1769ff", fg: "#ffffff" },
  dribbble: { bg: "#ea4c89", fg: "#ffffff" },
};

export function socialStyle(icon: string): { bg: string; fg: string } {
  return SOCIAL_COLORS[icon] ?? { bg: "var(--olive)", fg: "var(--olive-fg)" };
}
