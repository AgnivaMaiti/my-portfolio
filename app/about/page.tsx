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
                <p className="text-zinc-600 dark:text-zinc-400 text-lg">ML Engineer &amp; NLP Researcher</p>
              </div>
            </div>
            
            <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
              <p>
                I'm a Computer Science graduate (B.Tech CSE, KIIT, 2026, CGPA 8.72/10) who works where machine
                learning meets shipped software. On the research side, I co-authored an EMNLP 2025 paper on LLM
                teaching agents, wrote two WMT 2026 papers on English–Nagamese and English–Kokborok translation,
                presented two posters at GlobalSouthML at ICML 2026, and built NagaNLP,
                an open toolkit for the low-resource Nagamese language. On the product side, my Flutter app GScholar
                has 100,000+ downloads on Google Play, and NagaTranslate brings retrieval-grounded LLM translation to
                Naga languages.
              </p>
              
              <p>
                When I'm not coding, you'll find me lost in a good book, gazing at clouds, 
                or enjoying a perfect cup of espresso. These moments of reflection often inspire 
                my best ideas and keep me grounded.
              </p>
              
              <p>
                Before graduating I did research internships at IIT Kharagpur (search-engine bias with small
                language models) and IIT (ISM) Dhanbad (low-light image enhancement), built production ML inference
                pipelines at RnPsoft, and shipped an offline-ML Flutter app for the Agrovigya rural-employment initiative.
                Since graduating I&apos;ve done freelance speech recognition work, fine-tuning and benchmarking ASR models
                for Yiddish and Hebrew, and reviewed papers for the NeurIPS 2026 GlobalSouthAI workshop.
              </p>
              
              <p>
                I&apos;m looking for full-time roles as a software, ML or AI engineer, and research positions in NLP.
                I&apos;m open to relocating and to remote work. If you&apos;re working on something interesting,
                especially language technology for languages that don&apos;t have much data yet, I&apos;d love to talk.
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