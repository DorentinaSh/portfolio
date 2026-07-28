import Link from "next/link";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] items-center justify-center py-24">
      <div className="window w-full max-w-md">
        <div className="window-title">
          <span>C:\SYSTEM\error</span>
          <span aria-hidden className="win-btn" style={{ backgroundColor: "var(--red)" }}>
            <Icon name="close" size={12} strokeWidth={2.4} />
          </span>
        </div>
        <div className="p-8 text-center sm:p-10">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl border-[1.5px] border-line bg-red font-display text-3xl font-bold text-white shadow-[3px_3px_0_0_var(--line)]">
            !
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight">404 — file not found</h1>
          <p className="mt-3 leading-relaxed text-ink-soft">
            This page was moved, renamed, or never existed. Let&rsquo;s get you back to the desktop.
          </p>
          <Link href="/" className="btn btn-primary mt-7 gap-2">
            <Icon name="arrowRight" size={16} className="rotate-180" />
            back home
          </Link>
        </div>
      </div>
    </section>
  );
}
