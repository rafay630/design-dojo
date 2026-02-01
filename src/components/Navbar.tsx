'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/dt-stages', label: 'DT Stages' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/dojo', label: 'Dojo' },
        { href: '/about', label: 'About' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <nav className="navbar">
            <div className="container flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-indigo)] to-[var(--accent-coral)] rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-lg">🥋</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight">Design Dojo</span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${isActive(link.href) ? 'nav-link-active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <Link href="/auth/login" className="nav-link">Sign In</Link>
                    <Link href="/auth/signup" className="btn btn-primary">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-[var(--background-alt)] transition-colors z-50"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`block h-0.5 w-full bg-[var(--foreground)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block h-0.5 w-full bg-[var(--foreground)] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-0.5 w-full bg-[var(--foreground)] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Mobile Menu Panel */}
                <div className={`fixed top-0 right-0 h-full w-80 max-w-[85%] bg-white shadow-2xl md:hidden transition-transform duration-300 ease-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="pt-20 px-6 pb-6 h-full flex flex-col">
                        {/* Mobile Nav Links */}
                        <div className="space-y-1 flex-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${isActive(link.href)
                                        ? 'bg-[var(--primary-indigo)] text-white'
                                        : 'hover:bg-[var(--background-alt)]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Auth Section */}
                        <div className="border-t border-[var(--border)] pt-6 space-y-3">
                            <Link
                                href="/api/auth/signin"
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-center py-3 border border-[var(--border)] rounded-xl font-medium hover:bg-[var(--background-alt)] transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/dashboard"
                                onClick={() => setIsMenuOpen(false)}
                                className="btn btn-primary w-full text-center"
                            >
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
