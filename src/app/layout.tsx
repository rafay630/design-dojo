import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
  title: "Design Dojo | Master Design Thinking Through Practice",
  description: "A peer-to-peer ecosystem bridging Design Thinking theory and practice. Document your process, learn from founders, and join a cohort of makers.",
  keywords: ["Design Thinking", "EdTech", "Portfolio", "Mentorship", "UX Design", "Collaborative Learning"],
};

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-indigo)] to-[var(--accent-coral)] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🥋</span>
              </div>
              <span className="font-bold text-xl">Design Dojo</span>
            </div>
            <p className="text-muted text-sm">
              Bridging Design Thinking theory and real-world practice through peer-led learning.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/dt-stages" className="hover:text-[var(--foreground)]">DT Stages</Link></li>
              <li><Link href="/case-studies" className="hover:text-[var(--foreground)]">Case Studies</Link></li>
              <li><Link href="/modules" className="hover:text-[var(--foreground)]">Modules</Link></li>
            </ul>
          </div>

          {/* Build */}
          <div>
            <h4 className="font-semibold mb-4">Build</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/portfolio" className="hover:text-[var(--foreground)]">Portfolio</Link></li>
              <li><Link href="/dojo" className="hover:text-[var(--foreground)]">Mentorship Dojo</Link></li>
              <li><Link href="/dashboard" className="hover:text-[var(--foreground)]">Dashboard</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-[var(--foreground)]">Our Mission</Link></li>
              <li><Link href="/about#sdg" className="hover:text-[var(--foreground)]">SDG Alignment</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">© 2026 Design Dojo. Democratizing design education.</p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-2">
              🎯 SDG 4: Quality Education
            </span>
            <span className="flex items-center gap-2">
              💼 SDG 8: Decent Work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}