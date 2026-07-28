/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT  —  this is the only file you need to edit to make the site
 *  yours. Values marked "[placeholder]" weren't in the CV and need filling in.
 *
 *  Tips:
 *   • Add or remove items from any array freely.
 *   • `seo.url` must stay a valid URL (it's used for canonical + OG tags).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { IconName } from "@/components/icons";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: IconName;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  tags?: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Portfolio {
  name: string;
  initials: string;
  role: string;
  location: string;
  /** The italic tagline shown in the hero window. */
  headline: string;
  /** Supporting paragraph (not currently shown; kept for flexibility). */
  intro: string;
  email: string;
  resumeUrl?: string;
  nav: NavItem[];
  socials: SocialLink[];
  about: {
    paragraphs: string[];
    /** Small stat tiles, e.g. years of experience. */
    stats: { value: string; label: string }[];
  };
  skills: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  seo: {
    title: string;
    description: string;
    /** Full production URL, used for canonical + OG tags + sitemap. */
    url: string;
  };
}

export const portfolio: Portfolio = {
  name: "Dorentina Shabani",
  initials: "DS",
  role: "Software Engineer",
  location: "Pristina, Kosovo",
  headline: "Driven to deliver next-generation software solutions.",
  // Not shown by default. "{years}" is replaced with your live experience count
  // wherever it's rendered (same token as the About paragraph + SEO description).
  intro: "Software Engineer with {years}+ years of experience across .NET and modern front-end.",
  email: "dorentinashabani0@gmail.com",
  // Lives in `public/`, so it's served at the site root and opens in a new tab.
  // To swap it: drop a new PDF in `public/` and point this at "/your-file.pdf".
  resumeUrl: "/DorentinaShabaniResume.pdf",

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/DorentinaSh", handle: "DorentinaSh", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dorentina-shabani-5677031a3/",
      handle: "dorentina-shabani",
      icon: "linkedin",
    },
  ],

  about: {
    // Use "{years}" in any paragraph to insert your live experience count — e.g.
    // "over {years} years" — kept current on each visitor's device (see About.tsx).
    paragraphs: [
      "Experienced Software Engineer based in Pristina, Kosovo, with over {years} years of expertise in both .NET and front-end work.",
      "Self-managing on independent projects and collaborating effectively within teams. I'm passionate about continuous learning and driven to deliver next-generation software solutions.",
    ],
    // "Years of experience" is shown first and auto-counted from your earliest
    // role in `experience` below (computed in About.tsx), so only these two live here.
    stats: [
      { value: "6", label: "Roles held" },
      { value: "2", label: "Degrees earned" },
    ],
  },

  skills: [
    { title: "Languages", items: ["C#", "JavaScript"] },
    {
      title: "Frameworks",
      items: [".NET Framework", ".NET Core", "React.js", "Next.js", "Blazor"],
    },
    { title: "Data & Messaging", items: ["SQL Server", "Relational Databases", "Apache Kafka"] },
    {
      title: "Architecture & Testing",
      items: ["Microservices", "Orleans", "Unit & Component Testing"],
    },
  ],

  experience: [
    {
      company: "Helmut Fischer",
      role: ".NET & Blazor Developer",
      period: "2024 — Present",
      location: "Germany",
      description:
        "Building software for high-precision measuring devices — material analysis, nanoindentation, and material testing.",
      tags: [".NET Framework", "C#", "Blazor"],
    },
    {
      company: "IkubInfo",
      role: ".NET Backend Developer",
      period: "2023 — 2024",
      location: "Tirana",
      description: "Backend development in .NET Core and C#.",
      tags: [".NET Core", "C#"],
    },
    {
      company: "Homesourcing",
      role: "React.js & .NET Developer",
      period: "2022 — Present",
      location: "Oslo",
      description:
        "Full-stack development across a .NET Core backend and a React.js / Next.js frontend.",
      tags: [".NET Core", "C#", "React.js", "Next.js"],
    },
    {
      company: "Starlabs",
      role: ".NET Backend Developer",
      period: "2021 — 2022",
      location: "Pristina",
      description:
        "Backend development in .NET Core, building microservices on the Orleans framework with Apache Kafka.",
      tags: [".NET Core", "C#", "Orleans", "Apache Kafka"],
    },
    {
      company: "Riinvest College",
      role: "University Assistant",
      period: "2020 — 2022",
      location: "Pristina",
      description:
        "Teaching assistant, lecturing Project TI1, Project TI2, and Object-Oriented Programming.",
      tags: ["Teaching", "OOP"],
    },
    {
      company: "Crea-Ko",
      role: "Full-Stack Web Developer",
      period: "2019 — 2021",
      location: "Pristina",
      description:
        "Built, designed, and maintained web applications, including the continON ERP solution.",
      tags: ["Full-Stack", ".NET", "JavaScript"],
    },
  ],

  education: [
    {
      degree: "MA, Management of Financial & Information Systems",
      school: "Riinvest College",
      period: "2020 — 2024",
      location: "Pristina",
    },
    {
      degree: "BSc, Software Engineering",
      school: "Riinvest College",
      period: "2017 — 2020",
      location: "Pristina",
    },
  ],

  seo: {
    title: "Dorentina Shabani — Software Engineer",
    // "{years}" is replaced at build time with your live experience count.
    description:
      "Dorentina Shabani is a Software Engineer based in Pristina, Kosovo with {years}+ years of experience in .NET and front-end development.",
    // Replace with your real domain before deploying (must be a valid URL).
    url: "https://example.com",
  },
};
