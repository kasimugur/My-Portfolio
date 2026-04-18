"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export function Navbar() {

  return (
    <motion.header
      initial={{ opacity: 0, translateY: -16 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 
                 bg-white/90 dark:bg-slate-950/70 backdrop-blur"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-sm">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth
          offset={-80}
          duration={500}
          spy
          className="cursor-pointer text-lg font-semibold 
                     text-slate-900 dark:text-slate-100 
                     transition hover:text-slate-950 dark:hover:text-white"
        >
          Kasım Uğur
        </ScrollLink>

  
        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              smooth
              spy
              offset={-80}
              duration={500}
              activeClass="text-slate-950 dark:text-slate-50"
              className="cursor-pointer rounded-full px-4 py-2 font-medium 
                         text-slate-700 dark:text-slate-300 
                         transition hover:text-slate-950 dark:hover:text-slate-50"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        <ThemeToggle />
      </nav>

    </motion.header>
  );
}