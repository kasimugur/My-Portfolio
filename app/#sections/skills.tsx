"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/badge";

const primarySkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Python",
  "Django",
  "Formik",
  "Jest",
  "Testing Library",
  "PostgreSQL",
  "GitHub",
  "Postman",
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
      className="mx-auto w-full max-w-6xl px-4 py-20"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">Skillset</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Languages, libraries, frameworks and tools I use in development
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Ürün odaklı düşünürüm; güçlü tip güvenliği, kapsamlı testler ve tasarım sistemlerine uyum, ekipler ile hızlı ilerlememi sağlıyor.
          </p>
        </div>
        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
              I use…
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
            <h3 className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
              I want to learn soon
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
    </motion.section>
  );
}
