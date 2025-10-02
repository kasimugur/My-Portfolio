"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase transition-colors",
  {
    variants: {
      tone: {
        default:
          "border-slate-300/60 bg-slate-100/80 text-slate-700 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-200",
        accent:
          "border-transparent bg-gradient-to-r from-indigo-500/90 to-purple-500/90 text-white",
        neutral:
          "border-slate-400/60 bg-white/5 text-slate-600 dark:border-slate-600/60 dark:bg-slate-900/50 dark:text-slate-300",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
);

export type BadgeProps = {
  children: ReactNode;
} & VariantProps<typeof badgeVariants> &
  ComponentPropsWithoutRef<typeof motion.span>;

export function Badge({ children, tone, className, ...rest }: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(badgeVariants({ tone }), className)}
      {...rest}
    >
      {children}
    </motion.span>
  );
}
