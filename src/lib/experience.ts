import { portfolio } from "@/content/portfolio";

/**
 * Start year of your earliest role — the first 4-digit year found across all
 * `experience` periods. Used to count "years of experience".
 */
export const careerStartYear = Math.min(
  ...portfolio.experience.map((job) => Number(job.period.match(/\d{4}/)?.[0])),
);

/**
 * Whole years of experience as of `year` (defaults to the current year when
 * called). Used at build time (SSR fallbacks + SEO) and, via the client
 * components, on each visitor's device.
 */
export function yearsOfExperience(year = new Date().getFullYear()): number {
  return year - careerStartYear;
}
