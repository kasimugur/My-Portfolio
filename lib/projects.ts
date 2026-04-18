export type Project = {
  title: string;
  desc: string;
  stack: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
  image?: string;
};
export const projects: Project[] = [
  {
    title: "VibeBlog - Next Generation News Platform",
    desc: "A modern Next.js-based news platform powered by NewsAPI, delivering real-time data flow. Showcases modern web engineering practices such as SSR, URL-based state management, and Error Boundaries, with a fully responsive design.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Next-Themes",
      "NewsAPI"
    ],
    demo: "https://vibe-blog-app.vercel.app/",
    repo: "https://github.com/kasimugur/vibeblog",
    featured: true,
    image: "/projects/vibeblog-banner.png",
  },
  {
    title: "CineSearch - Movie Discovery App",
    desc: "A modern Next.js-based movie and TV discovery platform powered by the TVMaze API. Features dynamic search, highlighted content, responsive design, and critical components tested with Jest and React Testing Library.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "TVMaze API"
    ],
    demo: "https://movie-app-liard-tau.vercel.app/",
    repo: "https://github.com/kasimugur/movie-app",
    featured: true,
    image: "/projects/cinesearch-banner.png",
  },
  {
    title: "NexusDash - The Ultimate SaaS Prototyping Engine",
    desc: "A high-performance Next.js 16 application for SaaS founders and developers to prototype enterprise-grade dashboards in seconds. Features a Zustand-powered state engine, sector-specific template presets, and a dynamic code generator.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Recharts",
      "Lucide React",
      "Next-Themes"
    ],
    demo: "https://dashboard-generator-peach.vercel.app/",
    repo: "https://github.com/kasimugur/dashboard-generator",
    featured: true,
    image: "/projects/nexusdash-banner.png",
  },
  {
    title: "Age Calculator App",
    desc: "A responsive web application that allows users to calculate their exact age in years, months, and days by entering their birthdate. Includes form validation and a clean UI.",
    stack: ["HTML", "CSS", "SCSS", "JavaScript"],
    demo: "https://age-calculator-birthday.netlify.app/",
    repo: "https://github.com/kasimugur/age-culculator-app",
    featured: true,
    image: "/projects/agecalculator.png",
  },
];

