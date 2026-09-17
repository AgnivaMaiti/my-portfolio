import { BrainCircuit, Globe, Smartphone } from "lucide-react";
import { Card } from "./card";

const services = [
  {
    icon: <Smartphone size={20} />,
    title: "Android & Flutter apps",
    description: "Cross-platform and Android apps built with Flutter, Dart and Kotlin.",
  },
  {
    icon: <BrainCircuit size={20} />,
    title: "AI/ML solutions",
    description: "NLP, computer vision and LLM-powered tools, from data to working prototype.",
  },
  {
    icon: <Globe size={20} />,
    title: "Web apps",
    description: "Modern web apps and sites with React and Next.js.",
  },
];

export function Services() {
  return (
    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
      {services.map((s) => (
        <Card key={s.title}>
          <div className="relative z-10 p-6">
            <span className="flex items-center justify-center w-10 h-10 border rounded-full text-zinc-700 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600">
              {s.icon}
            </span>
            <h3 className="mt-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">{s.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
