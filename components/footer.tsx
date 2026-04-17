export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-slate-200 bg-slate-50 py-8 
                 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm md:flex-row">
        <span className="text-slate-600 dark:text-slate-400">
          © {year} Kasım Uğur
        </span>
        <span className="text-slate-500 dark:text-slate-500">
          Built with Next.js &amp; Tailwind CSS
        </span>
        <a
          href="mailto:kasimugur.contact@gmail.com"
          className="text-indigo-600 transition hover:text-indigo-500 
                     dark:text-indigo-300 dark:hover:text-indigo-200"
        >
          kasimugur.contact@gmail.com
        </a>
      </div>
    </footer>
  );
}