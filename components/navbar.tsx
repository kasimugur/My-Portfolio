"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

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
          onClick={closeMenu}
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

      {/* Mobile Menu */}
      {/* <div
        className={clsx(
          "border-t px-4 pb-4 md:hidden",
          "border-slate-200 dark:border-slate-900",
          "bg-white dark:bg-[#1d293d]"
        )}
      >
        <div className="flex flex-col gap-2 py-4 text-slate-800 dark:text-slate-300">
          {navItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              smooth
              spy
              offset={-80}
              duration={500}
              activeClass="bg-slate-100 dark:bg-[#0f172b] text-slate-950 dark:text-slate-50"
              onClick={closeMenu}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium 
                         transition hover:bg-slate-100 dark:hover:bg-[#0f172b] 
                         hover:text-slate-950 dark:hover:text-slate-50"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div> */}
    </motion.header>
  );
}