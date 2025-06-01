"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "https://img.shields.io/badge/Python-3776ab?style=flat-square&logo=python&logoColor=white" },
      { name: "Java", icon: "https://img.shields.io/badge/Java-007396?style=flat-square&logo=openjdk&logoColor=white" },
      { name: "JavaScript", icon: "https://img.shields.io/badge/JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=black" },
      { name: "TypeScript", icon: "https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white" },
      { name: "C++", icon: "https://img.shields.io/badge/C++-00599c?style=flat-square&logo=cplusplus&logoColor=white" },
      { name: "C", icon: "https://img.shields.io/badge/C-a8b9cc?style=flat-square&logo=c&logoColor=black" },
      { name: "Dart", icon: "https://img.shields.io/badge/Dart-0175c2?style=flat-square&logo=dart&logoColor=white" },
      { name: "Kotlin", icon: "https://img.shields.io/badge/Kotlin-0095d5?style=flat-square&logo=kotlin&logoColor=white" },
      { name: "SQL", icon: "https://img.shields.io/badge/SQL-336791?style=flat-square&logo=postgresql&logoColor=white" },
    ]
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "Flutter", icon: "https://img.shields.io/badge/Flutter-02569b?style=flat-square&logo=flutter&logoColor=white" },
      { name: "React", icon: "https://img.shields.io/badge/React-61dafb?style=flat-square&logo=react&logoColor=black" },
      { name: "React Native", icon: "https://img.shields.io/badge/React_Native-20232a?style=flat-square&logo=react&logoColor=61dafb" },
      { name: "Next.js", icon: "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" },
      { name: "HTML5", icon: "https://img.shields.io/badge/HTML5-e34f26?style=flat-square&logo=html5&logoColor=white" },
      { name: "CSS3", icon: "https://img.shields.io/badge/CSS3-1572b6?style=flat-square&logo=css3&logoColor=white" },
      { name: "Android", icon: "https://img.shields.io/badge/Android-3ddc84?style=flat-square&logo=android&logoColor=white" },
      { name: "Tailwind CSS", icon: "https://img.shields.io/badge/Tailwind_CSS-38b2ac?style=flat-square&logo=tailwind-css&logoColor=white" },
    ]
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Flask", icon: "https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white" },
      { name: "Node.js", icon: "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" },
      { name: "Streamlit", icon: "https://img.shields.io/badge/Streamlit-ff4b4b?style=flat-square&logo=streamlit&logoColor=white" },
      { name: "FastAPI", icon: "https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" },
      { name: "Django", icon: "https://img.shields.io/badge/Django-092e20?style=flat-square&logo=django&logoColor=white" },
    ]
  },
  {
    title: "AI/ML & Data",
    skills: [
      { name: "TensorFlow", icon: "https://img.shields.io/badge/TensorFlow-ff6f00?style=flat-square&logo=tensorflow&logoColor=white" },
      { name: "PyTorch", icon: "https://img.shields.io/badge/PyTorch-ee4c2c?style=flat-square&logo=pytorch&logoColor=white" },
      { name: "scikit-learn", icon: "https://img.shields.io/badge/scikit--learn-f7931e?style=flat-square&logo=scikit-learn&logoColor=white" },
      { name: "OpenCV", icon: "https://img.shields.io/badge/OpenCV-5c3ee8?style=flat-square&logo=opencv&logoColor=white" },
      { name: "Pandas", icon: "https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white" },
      { name: "NumPy", icon: "https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white" },
      { name: "Matplotlib", icon: "https://img.shields.io/badge/Matplotlib-11557c?style=flat-square&logo=python&logoColor=white" },
      { name: "Seaborn", icon: "https://img.shields.io/badge/Seaborn-3776ab?style=flat-square&logo=python&logoColor=white" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white" },
      { name: "MySQL", icon: "https://img.shields.io/badge/MySQL-4479a1?style=flat-square&logo=mysql&logoColor=white" },
      { name: "SQLite", icon: "https://img.shields.io/badge/SQLite-003b57?style=flat-square&logo=sqlite&logoColor=white" },
      { name: "Firebase", icon: "https://img.shields.io/badge/Firebase-ffca28?style=flat-square&logo=firebase&logoColor=black" },
      { name: "MongoDB", icon: "https://img.shields.io/badge/MongoDB-47a248?style=flat-square&logo=mongodb&logoColor=white" },
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "https://img.shields.io/badge/AWS-232f3e?style=flat-square&logo=amazon-aws&logoColor=white" },
      { name: "Docker", icon: "https://img.shields.io/badge/Docker-2496ed?style=flat-square&logo=docker&logoColor=white" },
      { name: "Git", icon: "https://img.shields.io/badge/Git-f05032?style=flat-square&logo=git&logoColor=white" },
      { name: "GitHub", icon: "https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" },
      { name: "Vercel", icon: "https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" },
    ]
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma", icon: "https://img.shields.io/badge/Figma-f24e1e?style=flat-square&logo=figma&logoColor=white" },
      { name: "Adobe XD", icon: "https://img.shields.io/badge/Adobe_XD-ff61f6?style=flat-square&logo=adobe-xd&logoColor=white" },
      { name: "VS Code", icon: "https://img.shields.io/badge/VS_Code-007acc?style=flat-square&logo=visual-studio-code&logoColor=white" },
      { name: "Android Studio", icon: "https://img.shields.io/badge/Android_Studio-3ddc84?style=flat-square&logo=android-studio&logoColor=white" },
      { name: "Jupyter", icon: "https://img.shields.io/badge/Jupyter-f37626?style=flat-square&logo=jupyter&logoColor=white" },
      { name: "Arduino", icon: "https://img.shields.io/badge/Arduino-00979d?style=flat-square&logo=arduino&logoColor=white" },
    ]
  },
  {
    title: "Other Technologies",
    skills: [
      { name: "REST API", icon: "https://img.shields.io/badge/REST_API-02569b?style=flat-square&logo=fastapi&logoColor=white" },
      { name: "JSON", icon: "https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white" },
      { name: "Postman", icon: "https://img.shields.io/badge/Postman-ff6c37?style=flat-square&logo=postman&logoColor=white" },
      { name: "IoT", icon: "https://img.shields.io/badge/IoT-0066cc?style=flat-square&logo=iot&logoColor=white" },
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-zinc-400">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-100 mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <img
                      key={skillIndex}
                      src={skill.icon}
                      alt={skill.name}
                      className="transition-transform duration-200 hover:scale-110"
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}