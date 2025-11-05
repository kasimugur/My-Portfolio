"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/badge";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";

const headerVariants = {
  hidden: { opacity: 0, translateY: 24 },
  visible: { opacity: 1, translateY: 0 },
};

const formVariants = {
  hidden: { opacity: 0, translateY: 32 },
  visible: { opacity: 1, translateY: 0 },
};

export function ContactSection() {
  const [showToast, setShowToast] = useState(false);

  const headerAnimation = useInViewAnimation<HTMLDivElement>({ amount: 0.4 });
  const formAnimation = useInViewAnimation<HTMLFormElement>({ amount: 0.4 });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(true);
    const form = event.currentTarget;
    form.reset();
    window.setTimeout(() => setShowToast(false), 3200);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-4 pb-24 pt-12">
      <motion.div
        ref={headerAnimation.ref}
        initial="hidden"
        animate={headerAnimation.controls}
        variants={headerVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          Let&apos;s build something together.
        </h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          Formu kullanarak kısa bir mesaj bırakabilir veya doğrudan{' '}
          <a
            href="mailto:kasimugur.contact@gmail.com"
            className="text-indigo-600 underline-offset-4 transition hover:underline dark:text-indigo-300"
          >
            kasimugur.contact@gmail.com
          </a>{' '}
          adresinden iletişime geçebilirsin.
        </p>
      </motion.div>
      <motion.form
        ref={formAnimation.ref}
        onSubmit={handleSubmit}
        initial="hidden"
        animate={formAnimation.controls}
        variants={formVariants}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="mx-auto mt-12 grid w-full max-w-2xl gap-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-950/70"
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-xl border border-slate-300/70 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-xl border border-slate-300/70 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell me a little about the project..."
            className="rounded-xl border border-slate-300/70 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
        <div className="flex flex-col items-start gap-4 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Send message
          </button>
          <Badge tone="neutral" className="text-xs uppercase tracking-widest">
            Avg. response: &lt; 24h
          </Badge>
        </div>
      </motion.form>
      <AnimatePresence>
        {showToast ? (
          <motion.div
            initial={{ opacity: 0, translateY: 24 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 24 }}
            transition={{ duration: 0.3 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-2xl dark:border-indigo-500/30 dark:bg-slate-900 dark:text-slate-200"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" />
            Thanks for your message! I&apos;ll get back soon.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
