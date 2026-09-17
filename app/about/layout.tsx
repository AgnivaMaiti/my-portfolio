import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Agniva Maiti — Computer Science student with a focus on AI/ML and Android development, open to jobs and freelance work.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
