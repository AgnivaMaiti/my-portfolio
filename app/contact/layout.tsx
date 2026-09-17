import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Hire",
  description:
    "Hire Agniva Maiti for full-time roles, internships or freelance AI/ML, Android/Flutter and web projects. Reach out by email, LinkedIn or GitHub.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
