// Single source of truth for URLs, identity and SEO text used across the site.
export const siteConfig = {
  url: "https://www.agniva.in",
  name: "Agniva Maiti",
  role: "ML Engineer & NLP Researcher",
  title: "Agniva Maiti — ML Engineer & NLP Researcher",
  description:
    "Agniva Maiti is a Computer Science graduate (B.Tech CSE, KIIT 2026) working on NLP for low-resource Indian languages and building ML-powered apps. Papers at EMNLP 2025, WMT 2026 and GlobalSouthML at ICML 2026, and GScholar, a Flutter app with 100K+ Play Store downloads. Open to software, ML and research roles.",
  intro:
    "I'm a Computer Science graduate (B.Tech CSE, KIIT, 2026) working on NLP for low-resource Indian languages and on the software that puts it in people's hands. My research, mostly with RespAI Lab at KIIT, covers LLM and vision-language model fine-tuning (LoRA/QLoRA), machine translation and human-validated synthetic data, with papers at EMNLP 2025, WMT 2026 and GlobalSouthML at ICML 2026. I also built NagaNLP and NagaTranslate for Naga languages, and my Flutter app GScholar has passed 100,000 downloads on Google Play.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Kalinga Institute of Industrial Technology (KIIT)",
    schoolUrl: "https://kiit.ac.in",
    year: "2026",
    cgpa: "8.72/10",
  },
  tagline: "I build machine learning systems for languages most AI ignores, and the apps that put them in people's hands.",
  availability: "Open to full-time software, ML and research roles, and freelance projects. Open to relocation.",
  email: "maitiagniva@gmail.com",
  location: "Dimapur, India",
  linkedin: "https://www.linkedin.com/in/agniva-maiti/",
  github: "https://github.com/AgnivaMaiti",
  keywords: [
    "Agniva Maiti",
    "Agniva",
    "Agniva Maiti portfolio",
    "Agniva Maiti KIIT",
    "Computer Science graduate",
    "ML engineer",
    "Software engineer",
    "AI/ML developer",
    "Machine learning developer",
    "Android developer",
    "Flutter developer",
    "App developer India",
    "Freelance developer",
    "Freelance app developer",
    "Hire Flutter developer",
    "NLP researcher",
    "Low-resource NLP",
    "Nagamese NLP",
    "Machine translation",
    "WMT 2026",
    "NagaNLP",
    "NagaTranslate",
    "GScholar app",
    "KIIT",
    "Dimapur",
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
