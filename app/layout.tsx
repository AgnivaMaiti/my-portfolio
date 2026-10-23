import "../global.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { LanguageSwitcher } from "./components/language-switcher";
import { siteConfig } from "./site";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    firstName: "Agniva",
    lastName: "Maiti",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

// Structured data so search engines understand who the site is about.
const personId = `${siteConfig.url}/#person`;
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      givenName: "Agniva",
      familyName: "Maiti",
      url: siteConfig.url,
      image: `${siteConfig.url}/opengraph-image`,
      email: `mailto:${siteConfig.email}`,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dimapur",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: siteConfig.education.school,
        url: siteConfig.education.schoolUrl,
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: siteConfig.education.degree,
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: siteConfig.education.school,
        },
      },
      knowsLanguage: ["English", "Hindi", "Bengali", "Nagamese", "Assamese"],
      knowsAbout: [
        "Machine Learning",
        "Artificial Intelligence",
        "Natural Language Processing",
        "Low-Resource NLP",
        "Large Language Models",
        "Computer Vision",
        "Android Development",
        "Flutter",
        "Web Development",
      ],
      sameAs: [siteConfig.linkedin, siteConfig.github],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profilepage`,
      url: siteConfig.url,
      name: siteConfig.title,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": personId },
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="application/rss+xml" title={`${siteConfig.name} — Projects`} href="/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body
        className={`bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Footer />
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
