"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDownRight } from "lucide-react";
import { Badge } from "@/components/badge";
import kasim from "@/public/kasimugur2.jpg";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

const timeline = [
  { year: "2025", label: "Portfolio v1 yayında" },
  { year: "2025", label: "E-ticaret Paneli beta" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main className="flex flex-col gap-12">
        {/* HERO SECTION */}
        <section
          className="bg-gradient-to-b 
                     from-slate-50 via-slate-100 to-slate-100 
                     dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 
                     px-4 pb-24 pt-32"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, translateY: 24 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-6"
              >
                <Badge tone="accent">Frontend / Full-stack</Badge>

                <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Hi, I&apos;m Kasım Uğur
                </h1>

                <p className="text-slate-600 dark:text-slate-300 max-w-xl text-lg">
                  I build products using React, Next.js, and modern frontend architectures.
                  Component-driven design, performance optimization, and developer experience are my priorities.
                  I aim to build testable and scalable systems.
                </p>

                <div className="flex flex-col items-start gap-3 sm:flex-row">
                  {/* Primary Button */}
                  <ScrollLink
                    to="projects"
                    smooth
                    offset={-80}
                    duration={500}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-2xl 
                               bg-indigo-600 px-6 py-3 text-sm font-semibold text-white 
                               shadow-[0_18px_40px_rgba(79,70,229,0.35)] 
                               transition hover:bg-indigo-500 
                               dark:shadow-[0_18px_40px_rgba(79,70,229,0.25)]"
                  >
                    Check out my latest projects
                    <ArrowDownRight size={18} />
                  </ScrollLink>

                  {/* Secondary Button */}
                  <ScrollLink
                    to="contact"
                    smooth
                    offset={-80}
                    duration={500}
                    className="inline-flex items-center gap-2 rounded-2xl 
                               border border-indigo-500/40 px-6 py-3 text-sm font-semibold 
                               text-indigo-700 dark:text-indigo-300 
                               transition hover:border-indigo-400 hover:text-indigo-600 
                               dark:hover:border-indigo-400 dark:hover:text-indigo-200"
                  >
                    Send email
                  </ScrollLink>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, translateY: 24 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="pointer-events-none absolute left-4 right-4 top-[52%] hidden h-px bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-300 opacity-70 dark:from-indigo-800/50 dark:via-indigo-500/60 dark:to-indigo-800/50 sm:block" />

                {timeline.map((item, index) => (
                  <div
                    key={`${item.year}-${item.label}`}
                    className="relative z-10 flex flex-1 items-center gap-4 rounded-2xl 
                               border border-slate-200 bg-white shadow-md 
                               dark:border-slate-800 dark:bg-slate-900/70 
                               px-5 py-4 dark:shadow-[0_14px_40px_rgba(2,6,23,0.4)]"
                  >
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full 
                                    bg-indigo-600 text-sm font-semibold uppercase tracking-widest text-white 
                                    shadow-[0_12px_30px_rgba(79,70,229,0.4)]">
                      {item.year}
                      {index < timeline.length - 1 && (
                        <span className="absolute -right-3 hidden h-0.5 w-6 bg-indigo-500 sm:block" aria-hidden="true" />
                      )}
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Profil Fotoğrafı */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto flex h-80 w-80 items-center justify-center overflow-hidden 
                         rounded-[3rem] border border-slate-200 bg-white shadow-2xl 
                         dark:border-slate-800 dark:bg-slate-900/80 
                         dark:shadow-[0_40px_120px_rgba(79,70,229,0.32)]"
            >
              <Image
                src={kasim}
                alt="Kasim Uğur"
                fill
                sizes="320px"
                className="object-cover z-40"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Diğer bölümler (zaten component olarak ayrılmış) */}
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}