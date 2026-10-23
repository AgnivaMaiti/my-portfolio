import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig } from "../site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="container grid gap-8 px-6 py-10 mx-auto md:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="text-lg font-semibold font-display text-zinc-900 dark:text-zinc-100">
            {siteConfig.name}
          </Link>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {siteConfig.role} · {siteConfig.location}
          </p>
          <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
            {siteConfig.availability}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Pages</p>
          <ul className="grid grid-cols-2 gap-2 mt-3 text-sm">
            {[{ name: "Home", href: "/" }, ...navLinks].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 pb-8 text-xs text-center text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
