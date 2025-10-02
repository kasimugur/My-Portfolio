"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import clsx from "clsx";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    const current = theme === "system" ? resolvedTheme : theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, translateY: -16 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <ScrollLink
          to="home"
          smooth
          offset={-80}
          duration={500}
          spy
          onClick={closeMenu}
          className="cursor-pointer text-lg font-semibold text-slate-900 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-white"
        >
          Kasım Uğur
        </ScrollLink>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-indigo-500 hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Navigasyonu kapat" : "Navigasyonu aç"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            className={clsx("h-5 w-5", { hidden: isMenuOpen })}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            className={clsx("h-5 w-5", { hidden: !isMenuOpen })}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              smooth
              spy
              offset={-80}
              duration={500}
              activeClass="text-indigo-600 dark:text-indigo-300"
              className="cursor-pointer px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-slate-300"
            >
              {item.label}
            </ScrollLink>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Tema değiştir"
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-indigo-500 hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {mounted && (resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            {!mounted && <Moon size={18} />}
          </button>
        </div>
      </nav>
      <div
        className={clsx(
          "border-t border-slate-200/60 px-4 pb-4 md:hidden dark:border-slate-800",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-2 py-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              smooth
              spy
              offset={-80}
              duration={500}
              activeClass="text-indigo-600 dark:text-indigo-300"
              onClick={closeMenu}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/80"
            >
              {item.label}
            </ScrollLink>
          ))}
          <button
            type="button"
            onClick={() => {
              toggleTheme();
              closeMenu();
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200"
          >
            {mounted && resolvedTheme === "dark" ? (
              <>
                <Sun size={16} />
                Açık tema
              </>
            ) : (
              <>
                <Moon size={16} />
                Koyu tema
              </>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
