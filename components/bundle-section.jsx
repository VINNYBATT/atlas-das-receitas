'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { bundleIncludes } from '../data/ebooks';
import { CHECKOUT_URL, PRICE_FULL, SAVINGS, DISCOUNT_PCT } from '../lib/constants';

// Visual spread of ebook covers for the mockup stack
const COVER_IMAGES = [
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80',
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&q=80',
    'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80',
];

function CheckIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
            <circle cx="9" cy="9" r="9" fill="rgba(217,119,6,0.2)" />
            <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#F59E0B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function StarIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#D97706" aria-hidden="true">
            <path d="M7 1.3l1.57 3.18 3.51.51-2.54 2.47.6 3.5L7 9.22 3.86 10.96l.6-3.5L2 4.99l3.51-.51z" />
        </svg>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const listItem = {
    hidden: { opacity: 0, x: -14 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function BookStack() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', width: '100%', maxWidth: '360px', margin: '0 auto', aspectRatio: '1/1' }}
        >
            {/* Glow under the stack */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '15%',
                    right: '15%',
                    height: '60px',
                    background: 'radial-gradient(ellipse, rgba(217,119,6,0.5) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                }}
            />

            {/* Stacked book covers — fanned out */}
            {COVER_IMAGES.map((src, i) => {
                const angle = (i - 2) * 7;
                const zIndex = i;
                const translateX = (i - 2) * 12;
                const translateY = (2 - i) * 6;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: angle * 0.3, scale: 0.85 }}
                        whileInView={{ opacity: 1, rotate: angle, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '20%',
                            width: '55%',
                            aspectRatio: '3/4',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            zIndex,
                            transform: `rotate(${angle}deg) translate(${translateX}px, ${translateY}px)`,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            cursor: 'default',
                        }}
                    >
                        <Image src={src} alt="" fill sizes="200px" style={{ objectFit: 'cover' }} />
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, rgba(10,4,0,0.2) 0%, rgba(10,4,0,0.55) 100%)',
                            }}
                        />
                        {/* Subtle "Atlas das Receitas" watermark */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0.6rem',
                                left: '0.6rem',
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.5rem',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                color: 'rgba(255,255,255,0.6)',
                                textTransform: 'uppercase',
                            }}
                        >
                            Atlas das Receitas
                        </div>
                    </motion.div>
                );
            })}

            {/* "22 ebooks" badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: 'absolute',
                    bottom: '8%',
                    right: '6%',
                    background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                    borderRadius: '50%',
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(217,119,6,0.6)',
                    zIndex: 20,
                    border: '3px solid rgba(255,255,255,0.15)',
                }}
            >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>22</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', marginTop: '0.1rem' }}>ebooks</span>
            </motion.div>
        </motion.div>
    );
}

export function BundleSection() {
    return (
        <section
            id="bundle"
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(170deg, #0A0400 0%, #180900 40%, #0F0500 100%)',
            }}
        >
            {/* Texture grain overlay */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            {/* Top glow */}
            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '500px', background: 'radial-gradient(ellipse, rgba(154,52,18,0.28) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
            {/* Bottom glow */}
            <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '300px', background: 'radial-gradient(ellipse, rgba(217,119,6,0.15) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

            <div className="container section" style={{ position: 'relative', zIndex: 1 }}>

                {/* ── "Mais Popular" badge ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'linear-gradient(135deg, rgba(217,119,6,0.25) 0%, rgba(154,52,18,0.25) 100%)',
                            border: '1px solid rgba(217,119,6,0.45)',
                            color: '#FCD34D',
                            padding: '0.45rem 1.25rem',
                            borderRadius: '2rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            boxShadow: '0 0 24px rgba(217,119,6,0.2)',
                        }}
                    >
                        <span style={{ display: 'flex', gap: '2px' }}>
                            {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                        </span>
                        Mais Popular — Melhor Custo-Benefício
                    </span>
                </motion.div>

                {/* ── Section heading ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                    <p className="label" style={{ color: 'rgba(217,119,6,0.8)', marginBottom: '0.75rem' }}>
                        Coleção Completa · 22 Ebooks Digitais
                    </p>
                    <h2
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: '#FFFBEB',
                            fontSize: 'clamp(1.9rem, 4.5vw, 3.25rem)',
                            lineHeight: 1.1,
                            letterSpacing: '-0.025em',
                        }}
                    >
                        Tudo que você precisa para
                        <br />
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #FCD34D 0%, #FB923C 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            transformar sua cozinha
                        </span>
                    </h2>
                </motion.div>

                {/* ── Two-column: book stack + pricing card ── */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                        gap: 'clamp(2rem, 5vw, 4rem)',
                        alignItems: 'center',
                        maxWidth: '960px',
                        margin: '0 auto',
                    }}
                >
                    {/* LEFT — book stack visual */}
                    <BookStack />

                    {/* RIGHT — includes + pricing */}
                    <div>
                        {/* Includes list */}
                        <p className="label" style={{ color: 'rgba(255,251,235,0.35)', marginBottom: '1.25rem' }}>
                            O que está incluído
                        </p>
                        <motion.ul
                            variants={listVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
                        >
                            {bundleIncludes.map((text, i) => (
                                <motion.li
                                    key={i}
                                    variants={listItem}
                                    style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                                >
                                    <CheckIcon />
                                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(255,251,235,0.8)', lineHeight: 1.55 }}>
                                        {text}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* ── Pricing card ── */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(255,251,235,0.04)',
                                border: '1px solid rgba(255,251,235,0.1)',
                                borderRadius: '1.25rem',
                                padding: 'clamp(1.5rem, 4vw, 2.25rem)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Card inner glow */}
                            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(217,119,6,0.5), transparent)' }} />

                            {/* Original price */}
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'rgba(255,251,235,0.3)', textDecoration: 'line-through', marginBottom: '0.2rem' }}>
                                De {PRICE_FULL}
                            </p>

                            {/* Sale price — hero size */}
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.25rem', marginBottom: '0.5rem' }}>
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'rgba(255,251,235,0.5)', marginBottom: '0.6rem' }}>
                                    R$
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                                        fontWeight: 900,
                                        color: '#FCD34D',
                                        lineHeight: 1,
                                        letterSpacing: '-0.03em',
                                    }}
                                >
                                    97
                                </p>
                                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'rgba(252,211,77,0.6)', marginBottom: '0.7rem' }}>
                                    ,90
                                </p>
                            </div>

                            {/* Savings pill */}
                            <div style={{ marginBottom: '1.75rem' }}>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        background: 'rgba(217,119,6,0.25)',
                                        border: '1px solid rgba(217,119,6,0.35)',
                                        color: '#FCD34D',
                                        padding: '0.3rem 0.875rem',
                                        borderRadius: '2rem',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.68rem',
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    ECONOMIZE {SAVINGS} · {DISCOUNT_PCT}
                                </span>
                            </div>

                            {/* CTA */}
                            <motion.a
                                href={CHECKOUT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-xl cursor-pointer"
                                whileHover={{ scale: 1.03, boxShadow: '0 12px 48px rgba(154,52,18,0.65)' }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(135deg, #C2410C 0%, #9A3412 100%)',
                                    color: '#FFFFFF',
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    boxShadow: '0 4px 24px rgba(154,52,18,0.5)',
                                    marginBottom: '1.25rem',
                                    textDecoration: 'none',
                                    letterSpacing: '0.01em',
                                }}
                            >
                                Quero a Coleção Completa →
                            </motion.a>

                            {/* Trust signals */}
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                                {[
                                    { icon: '🔒', text: 'Pagamento seguro' },
                                    { icon: '⚡', text: 'Acesso imediato' },
                                    { icon: '↩', text: '7 dias de garantia' },
                                ].map(({ icon, text }) => (
                                    <span
                                        key={text}
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.62rem',
                                            letterSpacing: '0.06em',
                                            color: 'rgba(255,251,235,0.35)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.3rem',
                                        }}
                                    >
                                        <span>{icon}</span>
                                        {text.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
