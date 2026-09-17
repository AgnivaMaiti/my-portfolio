import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Agniva Maiti — Computer Science graduate (B.Tech CSE, KIIT 2026) focused on AI/ML and Android development, open to jobs and freelance work.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
