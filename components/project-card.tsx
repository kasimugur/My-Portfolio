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
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-[0_24px_70px_rgba(2,6,23,0.45)] transition-shadow hover:shadow-[0_30px_90px_rgba(2,6,23,0.55)]"
    >
      <div className="relative h-52 w-full overflow-hidden bg-slate-900">
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
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <p className="mt-2 text-sm text-slate-300">{desc}</p>
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
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
