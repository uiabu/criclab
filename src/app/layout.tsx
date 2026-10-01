import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CricketLab — Train Smarter. Play Better. | Elite Cricket Academy",
  description:
    "Learn from world-class cricket coaching, follow structured training programs, master batting, bowling, fielding, and build your game step by step.",
  keywords: [
    "cricket academy",
    "batting drills",
    "bowling velocity",
    "cricket training programs",
    "cricket coaching videos",
    "cricket fitness",
    "T20 power hitting",
    "seam bowling mechanics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#060b13] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
