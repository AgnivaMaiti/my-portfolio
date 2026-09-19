import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import { getPolicy, policies } from "../policies";

type Props = { params: { slug: string } };

export const generateStaticParams = () =>
  policies.map((policy) => ({ slug: policy.slug }));

export function generateMetadata({ params }: Props): Metadata {
  const policy = getPolicy(params.slug);
  if (!policy) return {};

  return {
    title: `${policy.app} privacy policy`,
    description: `Privacy policy for ${policy.app}, an unofficial Android app.`,
    alternates: { canonical: `/privacy/${policy.slug}` },
    // Unlisted, not private: Play needs the URL to resolve for anyone who has it,
    // but there is no reason for it to turn up in search results.
    robots: { index: false, follow: false },
  };
}

export default function PrivacyPolicyPage({ params }: Props) {
  const policy = getPolicy(params.slug);
  if (!policy) notFound();

  return (
    <div className="bg-gradient-to-tl from-zinc-100/0 via-zinc-200 to-zinc-100/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-4xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <Card>
          <div className="p-8 md:p-10">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {policy.app}
            </h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Privacy policy
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
              Last updated {policy.updated} &middot;{" "}
              <span className="font-mono">{policy.packageId}</span>
            </p>

            <div className="mt-8 space-y-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {policy.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              {policy.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {section.heading}
                  </h2>
                  {section.body?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-3 space-y-2 list-disc list-outside pl-5 text-zinc-700 dark:text-zinc-300">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <p className="mt-10 text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
              Content shown in the app comes from {policy.serviceOwner}, which is
              governed by{" "}
              <a
                href={policy.servicePrivacyUrl}
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="underline hover:text-zinc-800 dark:hover:text-zinc-300"
              >
                its own privacy policy
              </a>
              .
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
