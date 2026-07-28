import type { Metadata, Viewport } from "next";
import { Geist, Space_Mono, Jost } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/content/portfolio";
import { yearsOfExperience } from "@/lib/experience";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

// Fill the "{years}" token in the SEO copy with your live experience count.
// Metadata renders in <head> at build time, so this refreshes on each rebuild.
const seoDescription = portfolio.seo.description.replace(
  "{years}",
  String(yearsOfExperience()),
);

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.seo.url),
  title: {
    default: portfolio.seo.title,
    template: `%s — ${portfolio.name}`,
  },
  description: seoDescription,
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: portfolio.seo.url,
    title: portfolio.seo.title,
    description: seoDescription,
    siteName: portfolio.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: seoDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9e5d4" },
    { media: "(prefers-color-scheme: dark)", color: "#15160f" },
  ],
};

// Runs before first paint so the correct theme is applied with no flash.
// Defaults to light; a visitor's explicit toggle choice (saved) still wins.
const themeScript = `(function(){try{var d=document.documentElement;d.setAttribute("data-js","");d.setAttribute("data-theme",localStorage.getItem("theme")||"light");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${spaceMono.variable} ${jost.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border-[1.5px] focus:border-line focus:bg-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
