"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";
import { FileText, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-100/0 via-zinc-200 to-zinc-100/0 dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-4xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        
        {/* Main Content */}
        <Card>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zinc-400 to-zinc-600 flex items-center justify-center">
                <span className="text-xl font-bold text-zinc-900">AM</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Nomoskar! I'm Agniva Maiti</h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg">Computer Science Student & Developer</p>
              </div>
            </div>
            
            <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
              <p>
                I'm a passionate Computer Science student with a deep fascination for 
                AI/ML and Android development. My journey in technology began with curiosity 
                about how things work, and it has evolved into a love for creating solutions 
                that make a difference.
              </p>
              
              <p>
                When I'm not coding, you'll find me lost in a good book, gazing at clouds, 
                or enjoying a perfect cup of espresso. These moments of reflection often inspire 
                my best ideas and keep me grounded.
              </p>
              
              <p>
                I'm still learning and growing every day, and I find joy in exploring new technologies, 
                contributing to projects, and collaborating with others who share the same enthusiasm. 
                I'm especially drawn to spaces where I can both contribute and learn.
              </p>
              
              <p>
                I'm always open to opportunities where I can learn, contribute, and grow—so if you're 
                working on something interesting, or just want to chat about the latest tech, I'd love to connect!
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-3 mt-10 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md duration-200 bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                <Mail className="w-4 h-4" />
                Hire me / Work with me
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border rounded-md duration-200 border-zinc-400 text-zinc-800 hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-300"
              >
                <FileText className="w-4 h-4" />
                View resume
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium duration-200 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                See my projects &rarr;
              </Link>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}