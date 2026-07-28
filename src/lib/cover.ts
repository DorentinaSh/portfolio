/** Deterministic hue (0–359) derived from a string. */
export function hueFrom(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360;
  return h;
}

/** Up-to-two-letter monogram from a title (skips leading symbols like "." or "&"). */
export function monogram(title: string): string {
  const letters = title
    .split(/\s+/)
    .map((word) => word.match(/[a-z0-9]/i)?.[0] ?? "")
    .filter(Boolean);
  return letters.slice(0, 2).join("").toUpperCase();
}
