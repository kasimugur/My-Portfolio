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
    title: "E-Ticaret Paneli (MikroSatıcı)",
    desc: "Sipariş, fatura ve kargo süreçlerini tek panelde toplayan, PDF çıktıları ve çoklu entegrasyonlarla desteklenen yönetim paneli.",
    stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "PDFKit"],
    demo: "https://demo.mikrosatici.app",
    repo: "https://github.com/kasimugur/mikrosatici-panel",
    featured: true,
    image: "/images/mikrosatici.svg",
  },
  {
    title: "Formik + Yup Çok Adımlı Form",
    desc: "Çok adımlı form sihirbazı, şema tabanlı doğrulama ve RTL/Jest testleri ile güvenilir kullanıcı deneyimi.",
    stack: ["React", "Formik", "Yup", "RTL", "Jest"],
    repo: "https://github.com/kasimugur/multistep-formik",
    image: "/images/formik-yup.svg",
  },
  {
    title: "Popup Generator",
    desc: "Tailwind projeleri için tekrar kullanılabilir, temalı modal bileşenleri üreten araç.",
    stack: ["TypeScript", "Next.js", "Redux", "Tailwind"],
    demo: "https://popup-generator.dev",
    repo: "https://github.com/kasimugur/popup-generator",
    featured: true,
    image: "/images/popup-generator.svg",
  },
];
