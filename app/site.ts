// Single source of truth for URLs, identity and SEO text used across the site.
export const siteConfig = {
  url: "https://www.agniva.in",
  name: "Agniva Maiti",
  role: "AI/ML & Android Developer",
  title: "Agniva Maiti — AI/ML & Android Developer",
  description:
    "Portfolio of Agniva Maiti, a Computer Science student and AI/ML, Android & Flutter developer. Open to full-time roles, internships and freelance projects.",
  tagline: "Book-lover, cloud-gazer, and coffee aficionado on a coding adventure.",
  email: "maitiagniva@gmail.com",
  location: "Bhubaneswar, India",
  linkedin: "https://www.linkedin.com/in/agniva-maiti/",
  github: "https://github.com/AgnivaMaiti",
  keywords: [
    "Agniva Maiti",
    "Agniva",
    "AI/ML developer",
    "Machine learning developer",
    "Android developer",
    "Flutter developer",
    "App developer India",
    "Freelance developer",
    "Freelance app developer",
    "Hire Flutter developer",
    "KIIT",
    "Bhubaneswar",
    "Portfolio",
  ],
};

const mailto = (subject: string) =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;

export const hireMailto = mailto("Job opportunity for Agniva");
export const freelanceMailto = mailto("Freelance project enquiry");
