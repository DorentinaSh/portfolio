"use client";

import { useSyncExternalStore } from "react";
import { yearsOfExperience } from "@/lib/experience";

// Never notifies — the value depends only on the current date, read on render.
const subscribe = () => () => {};
const liveYears = () => yearsOfExperience();

// Server + hydration use the build-time `fallback` (so they match the SSR HTML);
// the browser then recomputes against today's date, keeping the count current
// with no rebuild.
function useLiveYears(fallback: number) {
  return useSyncExternalStore(subscribe, liveYears, () => fallback);
}

/** Live "N+" for the stat tile. */
export function YearsOfExperience({ fallback }: { fallback: number }) {
  return <>{useLiveYears(fallback)}+</>;
}

/** Live "N" (no "+") for inline prose. */
export function YearsCount({ fallback }: { fallback: number }) {
  return <>{useLiveYears(fallback)}</>;
}
