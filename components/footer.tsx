export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 bg-white/70 py-8 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-600 dark:text-slate-300 md:flex-row">
        <span>© {year} Kasım Uğur</span>
        <span className="text-slate-500 dark:text-slate-400">Built with Next.js & Tailwind CSS</span>
        <a
          href="mailto:hello@kasimugur.dev"
          className="text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200"
        >
          hello@kasimugur.dev
        </a>
      </div>
    </footer>
  );
}
