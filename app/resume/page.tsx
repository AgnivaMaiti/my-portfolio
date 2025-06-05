"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Globe } from "lucide-react";
import Link from "next/link";

const resumeData = {
  personalInfo: {
    name: "Agniva Maiti",
    title: "Computer Science Student & AI-ML Developer",
    email: "maitiagniva@gmail.com",
    phone: "+91 8729806726",
    location: "Bhubaneswar, India",
    linkedin: "https://www.linkedin.com/in/agniva-maiti/",
    github: "https://github.com/AgnivaMaiti",
    website: "https://www.agniva.tech",
    summary: "Passionate Computer Science student with extensive experience in AI/ML research, app development, and technical leadership. Proven track record of contributing to research projects at prestigious institutions and developing innovative solutions for real-world problems."
  },
  
  education: [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      location: "Bhubaneswar, India",
      duration: "Sep 2022 - Jun 2026",
      gpa: "8.46 CGPA (6th Semester)",
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
      technologies: ["Python", "Computer Vision", "Deep Learning"]
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

export default function ResumePage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-4xl lg:px-8 md:space-y-12 md:pt-24 lg:pt-32">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Resume
          </h1>
          <p className="mt-4 text-zinc-400">
            Download my resume or view it below.
          </p>
          <Link
            href="/resume.pdf"
            download="Agniva_Maiti_Resume.pdf"
            className="inline-flex items-center gap-2 mt-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-6 py-3 rounded-md transition-colors font-medium"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </Link>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Personal Information */}
        <Card>
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-zinc-100 mb-2">{resumeData.personalInfo.name}</h2>
              <p className="text-xl text-zinc-300 mb-6">{resumeData.personalInfo.title}</p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{resumeData.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{resumeData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{resumeData.personalInfo.location}</span>
                </div>
                <Link href={resumeData.personalInfo.linkedin} target="_blank" className="flex items-center gap-2 hover:text-zinc-200">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
                <Link href={resumeData.personalInfo.github} target="_blank" className="flex items-center gap-2 hover:text-zinc-200">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
                <Link href={resumeData.personalInfo.website} target="_blank" className="flex items-center gap-2 hover:text-zinc-200">
                  <Globe className="w-4 h-4" />
                  <span>Portfolio</span>
                </Link>
              </div>
            </div>
            
            <div className="border-t border-zinc-700 pt-6">
              <h3 className="text-lg font-semibold text-zinc-100 mb-3">Summary</h3>
              <p className="text-zinc-300 leading-relaxed">{resumeData.personalInfo.summary}</p>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-200">{edu.degree}</h4>
                    <p className="text-zinc-400">{edu.institution} • {edu.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-300">{edu.duration}</p>
                    <p className="text-zinc-400">{edu.gpa}</p>
                  </div>
                </div>
                {edu.relevant.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm text-zinc-400 mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, i) => (
                        <span key={i} className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Experience */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Internships & Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-200">{exp.title}</h4>
                    <p className="text-zinc-400">{exp.company} • {exp.location}</p>
                  </div>
                  <p className="text-zinc-300">{exp.duration}</p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-300 text-sm flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Leadership */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Leadership & Volunteering</h3>
            {resumeData.leadership.map((leadership, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-200">{leadership.title}</h4>
                    <p className="text-zinc-400">{leadership.organization}</p>
                  </div>
                  <p className="text-zinc-300">{leadership.duration}</p>
                </div>
                <ul className="space-y-2">
                  {leadership.achievements.map((achievement, i) => (
                    <li key={i} className="text-zinc-300 text-sm flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Projects */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Sample Projects</h3>
            <div className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="border-l-2 border-zinc-700 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-zinc-200">{project.name}</h4>
                    {project.github && (
                      <Link href={project.github} target="_blank" className="text-zinc-400 hover:text-zinc-200">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                  <p className="text-zinc-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Skills */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-zinc-200 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <span key={i} className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Languages */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.languages.map((language, index) => (
                <span key={index} className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-md text-sm">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Certifications */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="text-zinc-300 flex items-start">
                  <span className="text-zinc-500 mr-3">•</span>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Organizations */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Organizations</h3>
            <div className="grid grid-cols-1 gap-3">
              {resumeData.organizations.map((org, index) => (
                <div key={index} className="text-zinc-300 flex items-start">
                  <span className="text-zinc-500 mr-3">•</span>
                  {org}
                </div>
              ))}
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}