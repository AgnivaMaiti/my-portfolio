"use client";
import { Github, Mail, Linkedin, Briefcase, Code2, Smartphone, BrainCircuit, Globe, FileText } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { siteConfig, hireMailto, freelanceMailto } from "../site";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: siteConfig.linkedin,
    label: "LinkedIn",
    handle: "agniva-maiti",
  },
  {
    icon: <Mail size={20} />,
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    handle: siteConfig.email,
  },
  {
    icon: <Github size={20} />,
    href: siteConfig.github,
    label: "Github",
    handle: "AgnivaMaiti",
  },
];

const services = [
  {
    icon: <Smartphone size={20} />,
    title: "Android & Flutter apps",
    description: "Cross-platform and Android apps built with Flutter, Dart and Kotlin.",
  },
  {
    icon: <BrainCircuit size={20} />,
    title: "AI/ML solutions",
    description: "NLP, computer vision and LLM-powered tools, from data to working prototype.",
  },
  {
    icon: <Globe size={20} />,
    title: "Web apps",
    description: "Modern web apps and sites with React and Next.js.",
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-100/0 via-zinc-200 to-zinc-100/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container px-6 pt-24 pb-16 mx-auto space-y-12 lg:px-8 md:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium border rounded-full text-emerald-700 border-emerald-600/40 bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Available for work
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Let&apos;s work together
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            I&apos;m open to full-time roles, internships and freelance projects.
            If you&apos;re hiring or have a project in mind, send me an email — I&apos;d love to hear about it.
          </p>
          <div className="flex flex-col gap-3 mt-8 sm:flex-row">
            <Link
              href={hireMailto}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md duration-200 bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              <Briefcase className="w-4 h-4" />
              Offer a job / internship
            </Link>
            <Link
              href={freelanceMailto}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border rounded-md duration-200 border-zinc-400 text-zinc-800 hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-300"
            >
              <Code2 className="w-4 h-4" />
              Start a freelance project
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium duration-200 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <FileText className="w-4 h-4" />
              View resume
            </Link>
          </div>
        </div>

        <section aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            What I can help with
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title}>
                <div className="relative z-10 p-6">
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full text-zinc-700 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600">
                    {s.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Find me online
          </h2>
          <div className="grid w-full grid-cols-1 gap-4 mt-6 sm:grid-cols-3 lg:gap-8">
            {socials.map((s) => (
              <Card key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${s.label}`}
                  className="p-6 relative flex flex-col items-center gap-4 duration-700 group md:py-12"
                >
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900 border-zinc-300 dark:border-zinc-500 bg-white dark:bg-zinc-900 group-hover:border-zinc-400 dark:group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-base font-medium break-all duration-150 lg:text-xl text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-2 text-sm text-center duration-1000 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
