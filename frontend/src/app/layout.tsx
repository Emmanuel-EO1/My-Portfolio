import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // High-end engineering fonts
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel | Fullstack Systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans hide-scrollbar`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}