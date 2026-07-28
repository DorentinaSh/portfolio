"use client";

import { useSyncExternalStore } from "react";

// Never notifies — depends only on the current date, read on render.
const subscribe = () => () => {};
const liveYear = () => new Date().getFullYear();

/**
 * The current calendar year, computed on each visitor's device so a copyright
 * line stays current without a rebuild. `fallback` is the build-time year, used
 * for the server render + hydration so the two match.
 */
export function CurrentYear({ fallback }: { fallback: number }) {
  return <>{useSyncExternalStore(subscribe, liveYear, () => fallback)}</>;
}
