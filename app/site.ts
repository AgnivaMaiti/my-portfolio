// Single source of truth for URLs, identity and SEO text used across the site.
export const siteConfig = {
  url: "https://www.agniva.in",
  name: "Agniva Maiti",
  role: "AI/ML & Android Developer",
  title: "Agniva Maiti — AI/ML & Android Developer",
  description:
    "Portfolio of Agniva Maiti, a Computer Science graduate (B.Tech CSE, KIIT 2026) and AI/ML, Android & Flutter developer. Open to full-time roles, internships and freelance projects.",
  intro:
    "I'm a Computer Science graduate (B.Tech CSE, KIIT, 2026) with a deep fascination for AI/ML and Android development. I build Flutter apps, machine learning and LLM-powered tools, and web apps.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Kalinga Institute of Industrial Technology (KIIT)",
    schoolUrl: "https://kiit.ac.in",
    year: "2026",
    cgpa: "8.72/10",
  },
  tagline: "Book-lover, cloud-gazer, and coffee aficionado on a coding adventure.",
  email: "maitiagniva@gmail.com",
  location: "Bhubaneswar, India",
  linkedin: "https://www.linkedin.com/in/agniva-maiti/",
  github: "https://github.com/AgnivaMaiti",
  keywords: [
    "Agniva Maiti",
    "Agniva",
    "Agniva Maiti portfolio",
    "Agniva Maiti KIIT",
    "Computer Science graduate",
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

export const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

const mailto = (subject: string) =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;

export const hireMailto = mailto("Job opportunity for Agniva");
export const freelanceMailto = mailto("Freelance project enquiry");
