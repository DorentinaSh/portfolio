"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="btn"
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      <Icon name={copied ? "check" : "copy"} size={16} />
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
