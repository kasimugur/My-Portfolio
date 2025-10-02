"use client";

import { motion } from "framer-motion";
import { projects as projectData } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

const sortedProjects = [...projectData].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-20">
      <motion.div
        initial={{ opacity: 0, translateY: 24 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">Projects</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          My more important projects are the ones that bring measurable value.
        </h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          Ürün analitiği, kullanıcı geribildirimi ve takım uyumunu merkeze alarak geliştirdiğim projeler burada.
        </p>
      </motion.div>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {sortedProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
