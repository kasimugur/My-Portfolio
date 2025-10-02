import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingIcons } from "@/components/FloatingIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kasım Uğur — Portfolio",
  description:
    "Next.js ve Tailwind ile inşa edilmiş modern bir portföy. Kasım Uğur'un öne çıkan projelerini, teknik becerilerini ve iletişim kanallarını keşfedin.",
  metadataBase: new URL("https://kasim-portfolio.local"),
  openGraph: {
    title: "Kasım Uğur — Portfolio",
    description:
      "Next.js ve Tailwind ile inşa edilmiş modern bir portföy. Öne çıkan projeler, teknik beceriler ve iletişim alanı.",
    url: "https://kasim-portfolio.local",
    siteName: "Kasım Uğur Portfolio",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasım Uğur — Portfolio",
    description:
      "Frontend & Full-stack developer. React ve Next.js odaklı arayüzler ve ürünler.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 antialiased  dark:bg-slate-950`}
      >
        <ThemeProvider>
          <FloatingIcons  />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
