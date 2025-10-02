"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDownRight } from "lucide-react";
import { SkillsSection } from "./#sections/skills";
import { ProjectsSection } from "./#sections/projects";
import { ContactSection } from "./#sections/contact";
import { Badge } from "@/components/badge";
import kasim from "@/public/kasimugur2.jpg"
const timeline = [
  { year: "2025", label: "Portfolio v1 yayında" },
  { year: "2025", label: "E-ticaret Paneli beta" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <main className="flex flex-col gap-4">
        <section id="home" className="bg-gradient-to-b from-white/90 to-slate-50/90 px-4 pb-24 pt-32 dark:from-slate-950/90 dark:to-slate-900/80">
          <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, translateY: 24 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <Badge tone="accent">Frontend / Full-stack</Badge>
                <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Hi, I&apos;m Kasım Uğur
                </h1>
                <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
                  Full-stack/Frontend Developer. React & Next.js odaklı arayüzler ve ölçeklenebilir web uygulamaları geliştiriyorum; tasarım sistemlerini üretim hızına dönüştürmeyi seviyorum.
                </p>
                <div className="flex flex-col items-start gap-3 sm:flex-row">
                  <ScrollLink
                    to="projects"
                    smooth
                    offset={-80}
                    duration={500}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500"
                  >
                    Son projelerime göz at
                    <ArrowDownRight size={18} />
                  </ScrollLink>
                  <a
                    href="mailto:hello@kasimugur.dev"
                    className="inline-flex items-center gap-2 rounded-2xl border border-indigo-200/60 px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-indigo-500/40 dark:text-indigo-300 dark:hover:text-indigo-200"
                  >
                    Mail gönder
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: 24 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="pointer-events-none absolute left-4 right-4 top-[52%] hidden h-px bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 opacity-70 dark:from-indigo-800/40 dark:via-indigo-500/60 dark:to-indigo-800/40 sm:block" />
                {timeline.map((item, index) => (
                  <div
                    key={`${item.year}-${item.label}`}
                    className="relative z-10 flex flex-1 items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
                  >
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600/90 text-sm font-semibold uppercase tracking-widest text-white shadow-xl">
                      {item.year}
                      {index < timeline.length - 1 ? (
                        <span className="absolute -right-3 hidden h-0.5 w-6 bg-indigo-300 dark:bg-indigo-500 sm:block" aria-hidden="true" />
                      ) : null}
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto flex h-80 w-80 items-center justify-center overflow-hidden rounded-[3rem] border border-slate-200/70 bg-white/70 shadow-[0_40px_120px_rgba(79,70,229,0.18)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
            >
              <Image
                src={kasim}
                alt="Kasım Uğur placeholder"
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
