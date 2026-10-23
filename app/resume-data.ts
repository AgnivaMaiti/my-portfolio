// Resume content shared by the resume page and the home page.
export const resumeData = {
  personalInfo: {
    name: "Agniva Maiti",
    title: "Computer Science Graduate, ML & Software Developer",
    email: "maitiagniva@gmail.com",
    phone: "+91 8729806726",
    location: "Dimapur, India",
    linkedin: "https://www.linkedin.com/in/agniva-maiti/",
    github: "https://github.com/AgnivaMaiti",
    website: "https://www.agniva.in",
    summary: "Computer Science graduate (KIIT, 2026) and software developer bridging machine learning and scalable software, with papers at EMNLP 2025 (Main), WMT 2026 and GlobalSouthML at ICML 2026. Builder of a Flutter app with 100K+ Play Store downloads, and experienced in end-to-end app development, rapid prototyping, and taking ML pipelines (NLP, LLM agents) into production."
  },

  publications: [
    {
      title: "Investigating Pedagogical Teacher and Student LLM Agents: Genetic Adaptation Meets Retrieval-Augmented Generation Across Learning Styles",
      authors: "Debdeep Sanyal, Agniva Maiti, Umakanta Maharana, Dhruv Kumar, Ankur Mali, C. Lee Giles, Murari Mandal",
      venue: "EMNLP 2025 (Main Conference)",
      url: "https://aclanthology.org/2025.emnlp-main.675/",
      summary: "Multi-agent teacher and student framework where genetic algorithms evolve teaching strategies across 100 heterogeneous student agents, plus Persona-RAG, a retrieval module reaching 88% accuracy on conceptual questions (HyDE 85%, vanilla RAG 74%), with human evaluation by 20 raters (Krippendorff's alpha 0.78-0.84)."
    },
    {
      title: "SCE-KIIT: Fine-Tuning NLLB-200 for English–Nagamese Translation",
      authors: "Agniva Maiti, Aarsh Muley, Sovan Kumar Sahoo",
      venue: "WMT 2026",
      url: "https://www2.statmt.org/wmt26/pdf/2026.wmt-1.156.pdf",
      summary: "Curated 2,280 English–Nagamese sentence pairs and fine-tuned NLLB-200 (600M) with surrogate language tokens; BLEU on our held-out split rose from 0.40 to 40.02."
    },
    {
      title: "SCE-KIIT: KokLLaMA: Cross-Task Adaptation for Low-Resource English–Kokborok Translation",
      authors: "Agniva Maiti, Aarsh Muley, Sovan Kumar Sahoo",
      venue: "WMT 2026",
      url: "https://www2.statmt.org/wmt26/pdf/2026.wmt-1.157.pdf",
      summary: "QLoRA-tuned Llama-3.2-3B-Instruct on 11,428 Kokborok instruction pairs, with no parallel training data."
    },
    {
      title: "Bridging the Visual Gap: Resource-Efficient VLM Adaptation for Meitei Mayek using Synthetic Multi-Modal Mixtures",
      authors: "Agniva Maiti, Aditya Tiwari, Dwarikanath Mahapatra, et al.",
      venue: "GlobalSouthML at ICML 2026 (poster)",
      url: "https://icml.cc/virtual/2026/78317",
      summary: "Adapts PaliGemma-3B to the Meitei Mayek script with QLoRA and a five-part synthetic multimodal data mixture, raising ANLS from 8.62% to 21.62% and doubling VQA exact match from 8% to 16%, with 76% POPE accuracy."
    },
    {
      title: "Evaluating Indic Literary Creativity In LLMs through the Lens of the Shastras",
      authors: "Agniva Maiti, Aarsh Muley, Aditya Tiwari, Dwarikanath Mahapatra, et al.",
      venue: "GlobalSouthML at ICML 2026 (poster)",
      url: "https://icml.cc/virtual/2026/78332",
      summary: "Benchmarks 8 LLMs on Hindi and Bengali creative writing using Torrance-test dimensions and 6 classical rhetorical devices, and identifies an \"Alankara over-stuffing\" bias in LLM-as-a-judge scoring."
    },
    {
      title: "NagaNLP: Bootstrapping NLP for Low-Resource Nagamese Creole with Human-in-the-Loop Synthetic Data",
      authors: "Agniva Maiti, Manya Pandey, Murari Mandal",
      venue: "arXiv preprint, 2025",
      url: "https://arxiv.org/abs/2512.12537",
      summary: "10,018-pair conversational corpus and annotated POS/NER data (Cohen's κ 0.92 POS, 0.88 NER), a fine-tuned XLM-R reaching 93.81% POS accuracy and 0.75 NER F1, and NagaLLaMA (Llama-3.2-3B) with perplexity 3.85 vs 96.76 few-shot."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      location: "Bhubaneswar, India",
      duration: "Sep 2022 - May 2026",
      gpa: "CGPA: 8.72/10 (final)",
      relevant: ["Machine Learning", "GenAI & Large Language Models", "Deep Learning", "Data Structures & Algorithms", "Probability & Statistics", "Data Mining", "Discrete Math", "DBMS", "Software Engineering", "Operating Systems", "Computer Networks"]
    },
    {
      degree: "High School Education (CBSE) - PCMB",
      institution: "Hollotoli School",
      location: "Dimapur, India",
      duration: "Apr 2020 - Jun 2022",
      gpa: "Class 12: 84.66%, Class 10: 96.16%",
      relevant: []
    }
  ],
  
  experience: [
    {
      title: "Speech Recognition (ASR) Engineer",
      company: "Freelance",
      location: "Remote",
      duration: "Aug 2026 - Sep 2026",
      featured: true,
      description: [
        "Fine-tuned, aligned and benchmarked automatic speech recognition (ASR) models for Yiddish and Hebrew"
      ]
    },
    {
      title: "App Development Intern",
      company: "DES Navalmal Firodia Law College (Agrovigya)",
      location: "Pune, India (Remote)",
      duration: "Feb 2025 - Jul 2025",
      featured: true,
      description: [
        "Developed the Agrovigya Flutter app serving 36 districts, with quantized TensorFlow Lite models for offline use",
        "Engineered Random Forest classifiers (Scikit-learn) powering the website's crop and job prediction backend",
        "Aimed at increasing rural employment and giving farmers better agricultural techniques and resources"
      ]
    },
    {
      title: "Research Intern, Dept. of Mathematics and Computing",
      company: "IIT (ISM) Dhanbad",
      location: "Dhanbad, India",
      duration: "Dec 2024 - Jan 2025",
      featured: true,
      description: [
        "Reviewed 20+ papers and reproduced and benchmarked 5+ state-of-the-art low-light enhancement models (e.g. Zero-DCE, DVN) using SSIM and PSNR",
        "Optimized pre-processing pipelines for improved image restoration"
      ]
    },
    {
      title: "App Developer",
      company: "Syntalix",
      location: "Kolkata, India",
      duration: "Sep 2024",
      description: [
        "Worked as a developer in Flutter-based app development for Android platforms",
        "Contributed to mobile application development using modern Flutter framework",
        "Collaborated with team on Android app deployment and optimization"
      ]
    },
    {
      title: "Research Intern, Dept. of Artificial Intelligence",
      company: "IIT Kharagpur",
      location: "Kharagpur, India",
      duration: "May 2024 - Jul 2024",
      featured: true,
      description: [
        "Curated a benchmark of 18,700+ entries by aggregating and annotating Google and Bing results to analyze search engine bias",
        "Used small language models such as Mistral and Phi to evaluate retrieval fairness, quantifying relevance and stance across diverse queries"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "RnPsoft Pvt Ltd",
      location: "Bhubaneswar, India",
      duration: "Jan 2024 - Aug 2024",
      featured: true,
      description: [
        "Architected end-to-end ML inference pipelines for personalized educational media delivery, serving 500+ users",
        "Contributed as ML developer to the ABIV project"
      ]
    },
    {
      title: "ML-AI Intern",
      company: "OpenGenus Foundation",
      location: "Tokyo, Japan (Remote)",
      duration: "Jul 2023",
      description: [
        "Authored 11 technical articles on machine learning",
        "Built 2 NLP projects and an NLP checklist for the website",
        "Contributed to open-source machine learning resources"
      ]
    },
    {
      title: "Business Development Intern",
      company: "ScarBluu",
      location: "Mumbai, India (Remote)",
      duration: "Aug 2022",
      description: [
        "Generated leads and established fruitful client relationships to pitch company services",
        "Developed business strategies and client acquisition techniques",
        "Contributed to company's growth through strategic partnerships"
      ]
    }
  ],
  
  leadership: [
    {
      title: "Reviewer",
      organization: "NeurIPS 2026 GlobalSouthAI Workshop",
      duration: "Sep 2026",
      achievements: [
        "Reviewed workshop paper submissions"
      ]
    },
    {
      title: "Volunteer App Developer",
      organization: "KIITFest 8.0",
      duration: "Feb 2025",
      achievements: [
        "Deployed an internal scanning app volunteers used to verify IDs and manage merchandise for 1,500+ attendees",
        "Resolved tech issues, reducing entry-queue downtime by 40%"
      ]
    },
    {
      title: "IoT Developer and App Development Lead",
      organization: "KIIT Robotics Society",
      duration: "Nov 2023",
      achievements: [
        "Led and mentored 100+ students across the Robotics and Electrical Societies, spearheading Flutter development of 10+ production apps",
        "Oversaw the official KRS app and taught Flutter at KRS Classes",
        "Engineered a weather and pollution monitoring system with app integration, and AI-powered legal and medical chatbots"
      ]
    },
    {
      title: "Web Team Member and App Development Lead",
      organization: "KIIT Electrical Society",
      duration: "Nov 2023",
      achievements: [
        "Represented the society in symposiums",
        "Presented research paper on DNM on behalf of the society"
      ]
    },
    {
      title: "App Developer",
      organization: "Konnexions (IT & Web Society)",
      duration: "Mar 2023",
      achievements: [
        "Developed and engineered a comprehensive time management and productivity app",
        "Integrated to-do list functionality for enhanced user productivity",
        "Contributed to society's technical projects and initiatives"
      ]
    }
  ],
  
  projects: [
    {
      name: "GScholar App",
      description: "Flutter research app on Google Play with 100K+ downloads (4.4 stars): paper search, PDF reading, LLM chat with a paper, multi-paper comparison and citations, monetised with AdMob and a Pro tier",
      technologies: ["Flutter", "Dart", "LLMs", "AdMob"],
      link: "https://play.google.com/store/apps/details?id=com.mynimalistic.gscholar"
    },
    {
      name: "NagaNLP",
      description: "Open NLP toolkit for Nagamese Creole: human-in-the-loop synthetic corpus (10,018 pairs; Cohen's κ 0.92 POS, 0.88 NER), POS/NER models and NagaLLaMA, a LoRA-tuned Llama-3.2-3B",
      technologies: ["PyTorch", "Transformers", "LoRA", "Low-Resource NLP"],
      link: "https://arxiv.org/abs/2512.12537"
    },
    {
      name: "NagaTranslate",
      description: "Live translator for Nagamese, Ao and Sema: retrieval-grounded LLM translation on Vercel Edge, community data for 22 Naga languages, and an Android app",
      technologies: ["React", "Vite", "Vercel Edge", "RAG", "Flutter"],
      link: "https://www.nagatranslate.in"
    },
    {
      name: "Murmuration",
      description: "Flutter package for building multi-agent LLM systems with chained workflows across OpenAI, Google and Anthropic models",
      technologies: ["Dart", "Flutter", "LLM Agents"],
      link: "https://pub.dev/packages/murmuration"
    },
    {
      name: "Satellite Image Landscape Classifier",
      description: "Image classification system that labels 6 landscape categories in satellite images",
      technologies: ["Python", "Computer Vision", "Deep Learning"],
      link: "https://github.com/AgnivaMaiti/Satellite-Image-Landscape-Classifier"
    }
  ],

  skills: {
    "Programming Languages": ["Python", "Java", "C", "C++", "JavaScript", "Dart", "SQL"],
    "AI/ML & Research": ["PyTorch", "TensorFlow", "Hugging Face Transformers", "LoRA / QLoRA", "Scikit-learn", "Pandas", "NumPy", "LLMs", "NLP", "RAG", "Agentic AI", "Image Processing"],
    "Mobile Development": ["Flutter", "React Native", "Android", "AdMob", "Play Console"],
    "Web & Backend": ["React", "Flask", "Node.js", "Vercel", "Firebase", "PostgreSQL"],
    "Cloud & Tools": ["AWS", "Docker", "Git", "GitHub", "Figma"]
  },
  
  languages: ["English", "Hindi", "Bengali", "Nagamese", "Assamese"],
  
  certifications: [
    "Machine Learning with Scikit-Learn",
    "Processing Text with Python Essential Training",
    "JavaScript Essential Training",
    "SQL for Data Analysis",
    "Figma Essential Training: The Basics",
    "Career Essentials in GitHub Professional Certificate",
    "Strategy and Game Theory for Management"
  ],
  
  organizations: [
    "UiPath Student Community - ML Team Member",
    "Google Developer Student Club - Systems and Low Level Team Member",
    "Kartavya - Kalakaar (Dramatics Society) - Script Writer",
    "SPIC MACAY - KIIT Chapter - Content Writer",
    "Kraya&Kuber (Marketing Society) - Digital Marketing & Finance Team Member"
  ]
};
