import Link from "next/link";
import React from "react";
import { ArrowRight, ChevronDown, FileText, GraduationCap, Mail } from "lucide-react";
import { allProjects } from "contentlayer/generated";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { Services } from "./components/services";
import { Article } from "./projects/article";
import { resumeData } from "./resume-data";
import { navLinks, siteConfig } from "./site";

const featuredSlugs = ["Murmuration", "Resume-Analyzer", "Startup-Validator", "Geeti"];

const sectionHeading = "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl";
const primaryButton =
  "inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md duration-200 bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white";
const secondaryButton =
  "inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium border rounded-md duration-200 border-zinc-400 text-zinc-800 hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:text-white";
const moreLink =
  "inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white";

export default function Home() {
  const featured = featuredSlugs
    .map((slug) => allProjects.find((p) => p.slug === slug && p.published))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const experience = resumeData.experience.slice(0, 5);
  const { education } = siteConfig;

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-10 overflow-hidden bg-gradient-to-tl from-zinc-100 via-zinc-300/20 to-zinc-100 dark:from-black dark:via-zinc-600/20 dark:to-black">
        <nav className="my-10 md:my-16 animate-fade-in-fast" aria-label="Main">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              </li>
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
        <div className="z-10 flex flex-col items-center my-10 md:my-16 text-center animate-fade-in-fast">
          <p className="text-lg font-medium sm:text-xl text-zinc-800 dark:text-zinc-200">
            {siteConfig.role}
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-500">
            {siteConfig.tagline}
          </p>

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
            <Link href="/contact" className={primaryButton}>
              <Mail className="w-4 h-4" />
              Hire me / Work with me
            </Link>
            <Link href="/resume" className={secondaryButton}>
              <FileText className="w-4 h-4" />
              View resume
            </Link>
          </div>
        </div>

        <a
          href="#about"
          className="absolute z-10 flex flex-col items-center text-xs bottom-6 animate-fade-in-fast text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
        >
          More about me
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      <main className="px-6 mx-auto max-w-6xl lg:px-8">
        <section id="about" aria-labelledby="about-heading" className="py-20 scroll-mt-8">
          <h2 id="about-heading" className={sectionHeading}>
            About me
          </h2>
          <p className="max-w-3xl mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {siteConfig.intro}
          </p>
          <p className="inline-flex items-start gap-2 mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            <GraduationCap className="w-5 h-5 shrink-0" />
            <span>
              {education.degree} · {education.school} · {education.year} · CGPA {education.cgpa}
            </span>
          </p>
          <div className="mt-6">
            <Link href="/about" className={moreLink}>
              Read more about me <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section aria-labelledby="services-heading" className="pb-20">
          <h2 id="services-heading" className={sectionHeading}>
            What I do
          </h2>
          <Services />
        </section>

        <section aria-labelledby="projects-heading" className="pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="projects-heading" className={sectionHeading}>
              Featured projects
            </h2>
            <Link href="/projects" className={moreLink}>
              All projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
            {featured.map((project) => (
              <Card key={project.slug}>
                <Article project={project} headingLevel="h3" />
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="experience-heading" className="pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="experience-heading" className={sectionHeading}>
              Experience
            </h2>
            <Link href="/resume" className={moreLink}>
              Full resume <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ol className="mt-6 border-l border-zinc-300 dark:border-zinc-700">
            {experience.map((exp) => (
              <li key={`${exp.company}-${exp.duration}`} className="relative pb-6 pl-6 last:pb-0">
                <span className="absolute w-2.5 h-2.5 rounded-full -left-[5.5px] top-2 bg-zinc-400 dark:bg-zinc-500" />
                <p className="text-xs text-zinc-500">{exp.duration}</p>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {exp.title} · {exp.company}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{exp.description[0]}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="cta-heading" className="pb-24">
          <div className="p-8 text-center border rounded-2xl md:p-12 border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <h2 id="cta-heading" className={sectionHeading}>
              Let&apos;s work together
            </h2>
            <p className="max-w-xl mx-auto mt-3 text-zinc-600 dark:text-zinc-400">
              Hiring for a full-time role or internship, or have a freelance project in mind? I&apos;d love to hear about it.
            </p>
            <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
              <Link href="/contact" className={primaryButton}>
                <Mail className="w-4 h-4" />
                Get in touch
              </Link>
              <Link href="/resume" className={secondaryButton}>
                <FileText className="w-4 h-4" />
                View resume
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
