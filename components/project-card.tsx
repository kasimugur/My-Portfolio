"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "./badge";
import type { Project } from "@/lib/projects";

export type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { title, desc, stack, demo, repo, featured, image } = project;
  return (
    <motion.article
      initial={{ opacity: 0, translateY: 24 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
    >
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {featured ? (
          <Badge tone="accent" className="absolute left-5 top-5 z-10">
            Featured
          </Badge>
        ) : null}
        {image ? (
          <Image
            src={image}
            alt={`${title} görseli`}
            fill
            priority={index < 2}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/70 to-purple-500/70 text-white">
            <span className="text-sm font-semibold uppercase tracking-widest">{title}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} tone="neutral">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-3">
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200"
            >
              Demo
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          ) : null}
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              Repo
              <Github size={16} strokeWidth={2} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
