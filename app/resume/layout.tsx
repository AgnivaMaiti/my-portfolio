import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Agniva Maiti: EMNLP 2025, WMT 2026 and GlobalSouthML at ICML 2026 papers, research internships at IIT Kharagpur and IIT (ISM) Dhanbad, a 100K+ download Flutter app, projects and skills. Download the PDF.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
