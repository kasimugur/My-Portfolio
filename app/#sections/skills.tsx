"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/badge";

const primarySkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux",
  "Next.js",
  "SASS",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Axios",
  "Jest",
  "Testing Library",
  "React Hook Form",
  "Formik",
  "Yup",
  "Python",
  "C#",
  "Linux",
  "SQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "APIs",
  "Agile",
  "Jira",
  "SDLC",
  "OOP",
  "RESTful APIs",
];

const learningNext = ["Node.js", "Docker", "React Native"];

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, translateY: 32 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl px-4 py-20 z-30"
    >
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-10 shadow-[0_32px_90px_rgba(2,6,23,0.45)] backdrop-blur">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">Skillset</p>
            <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
              Languages, libraries, frameworks and tools I use in development
            </h2>
            <p className="text-base text-slate-300">
          I’m a product-focused developer. Strong type safety, good tests, and following design systems help me move fast and safely with teams.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-slate-400">
                Technical Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {primarySkills.map((skill) => (
                  <Badge key={skill} tone="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-slate-400">
                Learning Next
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {learningNext.map((skill) => (
                  <Badge key={skill} tone="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
