import Link from "next/link";
import { Navigation } from "./components/nav";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-100/0 via-zinc-200 to-zinc-100/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-sm font-medium text-zinc-500">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col gap-3 mt-8 sm:flex-row">
          <Link
            href="/"
            className="px-5 py-2.5 text-sm font-medium rounded-md duration-200 bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Go home
          </Link>
          <Link
            href="/projects"
            className="px-5 py-2.5 text-sm font-medium border rounded-md duration-200 border-zinc-400 text-zinc-800 hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-300"
          >
            See projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-medium duration-200 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
