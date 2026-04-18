import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FloatingIcons } from '@/components/FloatingIcons';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Kasım Uğur - Portfolio",
  description:
    "Modern portfolio built with Next.js and Tailwind CSS. Discover my featured projects, technical skills, and get in touch.",
  metadataBase: new URL('https://kasimugur.com'), // Gerçek domainini buraya yaz
  openGraph: {
    title: "Kasım Uğur - Portfolio",
    description:
      "Frontend & Full-stack developer specializing in React and Next.js. Building fast, scalable, and beautiful digital experiences.",
    url: "https://kasimugur.com",
    siteName: "Kasım Uğur Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasım Uğur - Portfolio",
    description:
      "Frontend & Full-stack developer • React, Next.js, TypeScript",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingIcons />
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