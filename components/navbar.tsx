"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, translateY: -16 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-slate-800 dark:bg-slate-950/70 backdrop-blur"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-sm text-slate-50">
        <ScrollLink
          to="home"
          smooth
          offset={-80}
          duration={500}
          spy
          onClick={closeMenu}
          className="cursor-pointer text-lg font-semibold text-slate-900 transition hover:text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-50"
        >
          Kasım Uğur
        </ScrollLink>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900 bg-[#1d293d] text-slate-900 transition hover:border-[#0c0642] hover:text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-50 md:hidden"
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
              activeClass="text-slate-50"
              className="cursor-pointer rounded-full px-4 py-2 font-medium text-slate-900 transition hover:text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-50"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </nav>
      <div
        className={clsx(
          "border-t border-slate-900 bg-[#1d293d] px-4 pb-4 md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-2 py-4 text-slate-300">
          {navItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              smooth
              spy
              offset={-80}
              duration={500}
              activeClass="bg-[#0f172b] text-slate-950"
              onClick={closeMenu}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-[#0f172b] hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-50"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
