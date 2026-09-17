"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import { resumeData } from "../resume-data";


export default function ResumePage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-100/0 via-zinc-200 to-zinc-100/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-4xl lg:px-8 md:space-y-12 md:pt-24 lg:pt-32">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Resume
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Download my resume or view it below. Open to full-time roles, internships and freelance projects.
          </p>
          <Link
            href="/resume.pdf"
            download="Agniva_Maiti_Resume.pdf"
            className="inline-flex items-center gap-2 mt-6 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 px-6 py-3 rounded-md transition-colors font-medium"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 ml-3 border border-zinc-400 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 text-zinc-900 dark:text-zinc-100 px-6 py-3 rounded-md transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            Hire me
          </Link>
        </div>

        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Personal Information */}
        <Card>
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{resumeData.personalInfo.name}</h2>
              <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-6">{resumeData.personalInfo.title}</p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
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
                <Link href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-200">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
                <Link href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-200">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
                <Link href={resumeData.personalInfo.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-200">
                  <Globe className="w-4 h-4" />
                  <span>Portfolio</span>
                </Link>
              </div>
            </div>
            
            <div className="border-t border-zinc-300 dark:border-zinc-700 pt-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Summary</h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{resumeData.personalInfo.summary}</p>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{edu.degree}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">{edu.institution} • {edu.location}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-zinc-700 dark:text-zinc-300">{edu.duration}</p>
                    <p className="text-zinc-600 dark:text-zinc-400">{edu.gpa}</p>
                  </div>
                </div>
                {edu.relevant.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, i) => (
                        <span key={i} className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-md text-xs">
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
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Internships & Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{exp.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">{exp.company} • {exp.location}</p>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">{exp.duration}</p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-700 dark:text-zinc-300 text-sm flex items-start">
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
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Leadership & Volunteering</h3>
            {resumeData.leadership.map((leadership, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{leadership.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">{leadership.organization}</p>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">{leadership.duration}</p>
                </div>
                <ul className="space-y-2">
                  {leadership.achievements.map((achievement, i) => (
                    <li key={i} className="text-zinc-700 dark:text-zinc-300 text-sm flex items-start">
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
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Sample Projects</h3>
            <div className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{project.name}</h4>
                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`} className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-md text-xs">
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
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <span key={i} className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-md text-sm">
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
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.languages.map((language, index) => (
                <span key={index} className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-md text-sm">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Certifications */}
        <Card>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="text-zinc-700 dark:text-zinc-300 flex items-start">
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
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Organizations</h3>
            <div className="grid grid-cols-1 gap-3">
              {resumeData.organizations.map((org, index) => (
                <div key={index} className="text-zinc-700 dark:text-zinc-300 flex items-start">
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