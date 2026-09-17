import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Agniva Maiti — education, internships at IIT Kharagpur and IIT (ISM) Dhanbad, app development experience, projects and skills. Download the PDF.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
