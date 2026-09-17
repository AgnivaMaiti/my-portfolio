import Link from "next/link";
import React from "react";
import { FileText, Mail } from "lucide-react";
import Particles from "./components/particles";
import { siteConfig } from "./site";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-10 overflow-hidden bg-gradient-to-tl from-zinc-100 via-zinc-300/20 to-zinc-100 dark:from-black dark:via-zinc-600/20 dark:to-black">
      <nav className="my-10 md:my-16 animate-fade-in" aria-label="Main">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-500/50 dark:via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-zinc-900 dark:bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        {siteConfig.name}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-500/50 dark:via-zinc-300/50 to-zinc-300/0" />
      <div className="z-10 flex flex-col items-center my-10 md:my-16 text-center animate-fade-in">
        <p className="text-lg font-medium sm:text-xl text-zinc-800 dark:text-zinc-200">
          {siteConfig.role}
        </p>
        <h2 className="mt-2 text-sm text-zinc-600 dark:text-zinc-500">
          {siteConfig.tagline}
        </h2>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-3 py-1 mt-8 text-xs font-medium border rounded-full text-emerald-700 border-emerald-600/40 bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/30"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-500" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          Open to full-time roles, internships &amp; freelance projects
        </Link>

        <div className="flex flex-col items-center gap-3 mt-6 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md duration-200 bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            <Mail className="w-4 h-4" />
            Hire me / Work with me
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium border rounded-md duration-200 border-zinc-400 text-zinc-800 hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:text-white"
          >
            <FileText className="w-4 h-4" />
            View resume
          </Link>
        </div>
      </div>
    </div>
  );

}
