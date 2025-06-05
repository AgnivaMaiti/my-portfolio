"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
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
                <h2 className="text-3xl font-bold text-zinc-100">Nomoskar! I'm Agniva Maiti</h2>
                <p className="text-zinc-400 text-lg">Computer Science Student & Developer</p>
              </div>
            </div>
            
            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
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
          </div>
        </Card>

      </div>
    </div>
  );
}