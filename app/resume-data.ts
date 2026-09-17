// Resume content shared by the resume page and the home page.
export const resumeData = {
  personalInfo: {
    name: "Agniva Maiti",
    title: "Computer Science Graduate & AI-ML Developer",
    email: "maitiagniva@gmail.com",
    phone: "+91 8729806726",
    location: "Bhubaneswar, India",
    linkedin: "https://www.linkedin.com/in/agniva-maiti/",
    github: "https://github.com/AgnivaMaiti",
    website: "https://www.agniva.in",
    summary: "Computer Science graduate with extensive experience in AI/ML research, app development, and technical leadership. Proven track record of contributing to research projects at prestigious institutions and developing innovative solutions for real-world problems."
  },
  
  education: [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      location: "Bhubaneswar, India",
      duration: "Sep 2022 - Jun 2026",
      gpa: "CGPA: 8.72/10 (final)",
      relevant: ["Data Structures & Algorithms", "Machine Learning", "Database Systems", "Software Engineering"]
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
      title: "App Developer",
      company: "DES Navalmal Firodia Law College",
      location: "Pune, India (Remote)",
      duration: "Feb 2025",
      description: [
        "Developed an app for Agrovigya initiative",
        "Aimed at increasing employment in rural India",
        "Equipped farmers with improved agricultural techniques and resources"
      ]
    },
    {
      title: "Institute Research Intern",
      company: "IIT (ISM) Dhanbad",
      location: "Dhanbad, India",
      duration: "Dec 2024 - Jan 2025",
      description: [
        "Explored low-light image enhancement through techniques like deep curve estimation and RGB-NIR pairing",
        "Replicated and analyzed methods from published research papers",
        "Gained hands-on experience with advanced computer vision techniques"
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
      title: "AI Research Intern",
      company: "IIT Kharagpur",
      location: "Kharagpur, India",
      duration: "May 2024",
      description: [
        "Collected and annotated data for more than 18,700+ entries from Google and Bing search results",
        "Assessed relevance and stance using 3 different Large Language Models",
        "Contributed to large-scale data processing and analysis pipeline"
      ]
    },
    {
      title: "ML-AI Intern",
      company: "RnPsoft Pvt Ltd",
      location: "Bhubaneswar, India",
      duration: "Jan 2024",
      description: [
        "Contributed as ML-AI developer to the ABIV project",
        "Integrated AI models to personalize educational content for 500+ active users",
        "Improved user engagement through intelligent content recommendation"
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
      title: "Tech & Web Team Member",
      organization: "KIITFest 8.0",
      duration: "Feb 2025",
      achievements: [
        "Assisted in developing a scanning app for ID verification and merch distribution used by 1,500+ fest attendees",
        "Resolved tech issues reducing downtime by 40%",
        "Contributed to successful execution of major college festival"
      ]
    },
    {
      title: "IoT Developer and App Development Lead",
      organization: "KIIT Robotics Society",
      duration: "Nov 2023",
      achievements: [
        "Engineered a weather and pollution monitoring system with app integration",
        "Engineered AI-powered legal and medical chatbots",
        "Represented and organized tech events for the society and college",
        "Instructed 50+ students in Flutter development at KRS Classes",
        "Oversaw the development of the official KRS App"
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
      name: "Satellite Image Landscape Classifier",
      description: "Image classification system designed to identify and label 6 different landscape categories in satellite images",
      technologies: ["Python", "Computer Vision", "Deep Learning"],
      github: "https://github.com/AgnivaMaiti/Satellite-Image-Landscape-Classifier"
    },
    {
      name: "Geeti - AI Lyrics Generator",
      description: "AI-powered lyrics generator tailored to preferred genre, language, and song structure",
      technologies: ["Python", "NLP", "AI/ML"],
      github: "https://github.com/AgnivaMaiti/Geeti"
    },
    {
      name: "Start-Up Idea Validator",
      description: "Web application designed to assist entrepreneurs in evaluating the viability of their startup ideas",
      technologies: ["Python", "Web Development", "AI/ML"],
      github: "https://github.com/AgnivaMaiti/Startup-Validator"
    },
    {
      name: "What The Flutter!?",
      description: "Flutter learning app with detailed documentation and rich examples for hands-on learning",
      technologies: ["Flutter", "Dart", "Mobile Development"]
    },
    {
      name: "Smart Air Purifier",
      description: "IoT-based air purification system with intelligent monitoring capabilities",
      technologies: ["IoT", "Arduino", "Mobile App"]
    }
  ],
  
  skills: {
    "Programming Languages": ["Python", "Java", "C", "C++", "JavaScript", "Dart", "SQL"],
    "Web Development": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    "Mobile Development": ["Flutter", "Android Studio"],
    "AI/ML & Data": ["PyTorch", "NumPy", "NLTK", "Scikit-Learn", "Computer Vision"],
    "Cloud Computing": ["AWS"],
    "Design & Tools": ["Figma", "Git", "GitHub", "Arduino"]
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
