export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-400 md:flex-row">
        <span>© {year} Kasım Uğur</span>
        <span className="text-slate-500">Built with Next.js & Tailwind CSS</span>
        <a
          href="mailto:kasimugur.contact@gmail.com"
          className="text-indigo-300 transition hover:text-indigo-200"
        >
          kasimugur.contact@gmail.com
        </a>
      </div>
    </footer>
  );
}
