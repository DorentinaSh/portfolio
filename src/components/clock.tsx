"use client";

import { useEffect, useState } from "react";

function format(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/** A small taskbar clock. Client-only value, so SSR shows a placeholder. */
export function Clock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState(() => (typeof window === "undefined" ? "" : format(new Date())));

  useEffect(() => {
    const id = setInterval(() => setTime(format(new Date())), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time || "--:--"}
    </span>
  );
}
