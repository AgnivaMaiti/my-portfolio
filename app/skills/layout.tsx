import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Languages, frameworks and tools Agniva Maiti works with — Python, Dart/Flutter, Kotlin, React, machine learning libraries and more.",
  alternates: { canonical: "/skills" },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
