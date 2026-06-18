'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
    { label: 'Ebooks', href: '#ebooks' },
    { label: 'Coleção Completa', href: '/colecao-completa' },
    { label: 'Depoimentos', href: '#testimonials' },
];

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled ? 'nav-glass shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="container">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* LOGO */}
                    <Link
                        href="/"
                        className="flex items-center no-underline group"
                        aria-label="Atlas das Receitas"
                    >
                        <Image
                            src="/logo-atlas-das-receitas.png"
                            alt="Atlas das Receitas"
                            width={300}
                            height={100}
                            priority
                            className="h-[45px] md:h-[60px] w-auto transition-opacity duration-150 group-hover:opacity-85"
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav
                        className="hidden md:flex items-center gap-8"
                        aria-label="Navegação principal"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="no-underline text-sm font-medium transition-colors duration-150 hover:opacity-70"
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    color: 'var(--color-foreground)',
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#bundle"
                            className="btn btn-primary btn-lg cursor-pointer"
                        >
                            Ver Coleção Completa
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 cursor-pointer rounded-md transition-colors hover:bg-black/5"
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        <span
                            className="block h-0.5 w-6 rounded-full transition-all duration-300 origin-center"
                            style={{
                                backgroundColor: 'var(--color-foreground)',
                                transform: open
                                    ? 'translateY(4px) rotate(45deg)'
                                    : 'none',
                            }}
                        />

                        <span
                            className="block h-0.5 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: 'var(--color-foreground)',
                                width: open ? '0' : '1.5rem',
                                opacity: open ? 0 : 1,
                            }}
                        />

                        <span
                            className="block h-0.5 w-6 rounded-full transition-all duration-300 origin-center"
                            style={{
                                backgroundColor: 'var(--color-foreground)',
                                transform: open
                                    ? 'translateY(-4px) rotate(-45deg)'
                                    : 'none',
                            }}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                className="md:hidden transition-all duration-300 overflow-hidden nav-glass"
                style={{
                    maxHeight: open ? '400px' : '0',
                    opacity: open ? 1 : 0,
                }}
                aria-hidden={!open}
            >
                <div className="container py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="no-underline text-base font-medium py-2 border-b cursor-pointer transition-colors hover:opacity-70"
                            style={{
                                fontFamily: 'var(--font-body)',
                                color: 'var(--color-foreground)',
                                borderColor: 'var(--color-border)',
                            }}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#bundle"
                        className="btn btn-primary btn-lg mt-2 cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        Ver Coleção Completa
                    </a>
                </div>
            </div>
        </header>
    );
}
