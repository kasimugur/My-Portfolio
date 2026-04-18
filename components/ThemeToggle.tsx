"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration mismatch'i önlemek için
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative p-2.5 rounded-2xl 
                 hover:bg-slate-100 dark:hover:bg-slate-800 
                 transition-all duration-200 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 text-amber-500 transition-all duration-300 
                     ${theme === "dark" ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
          size={20}
          strokeWidth={2.5}
        />
        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 text-slate-400 dark:text-slate-300 transition-all duration-300 
                     ${theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}`}
          size={20}
          strokeWidth={2.5}
        />
      </div>
    </button>
  );
}