'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85';

const FLOATING_BOOKS = [
    {
        id: 1,
        title: 'Receitas\nSaudáveis',
        tag: 'Saúde · 80 receitas',
        color: 'linear-gradient(145deg, #2D6A4F 0%, #1B4332 100%)',
        accent: '#52B788',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
        rotate: -8,
        x: '58%',
        y: '22%',
        delay: 0.6,
        scale: 1,
    },
    {
        id: 2,
        title: 'Air Fryer\nCompleto',
        tag: 'Air Fryer · 65 receitas',
        color: 'linear-gradient(145deg, #9A3412 0%, #7C2D12 100%)',
        accent: '#FB923C',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80',
        rotate: 5,
        x: '72%',
        y: '42%',
        delay: 0.85,
        scale: 0.88,
    },
    {
        id: 3,
        title: 'Doces &\nSobremesas',
        tag: 'Confeitaria · 75 receitas',
        color: 'linear-gradient(145deg, #6D28D9 0%, #4C1D95 100%)',
        accent: '#C4B5FD',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
        rotate: -4,
        x: '56%',
        y: '62%',
        delay: 1.05,
        scale: 0.78,
    },
];

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

function item(reduce) {
    return {
        hidden: { opacity: 0, y: reduce ? 0 : 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
    };
}

function EbookMockup({ book, reduce }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 60, rotate: book.rotate * 0.5 }}
            animate={{ opacity: 1, y: 0, rotate: book.rotate }}
            transition={{ duration: 1.1, delay: book.delay, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'absolute',
                left: book.x,
                top: book.y,
                width: '148px',
                transform: `scale(${book.scale})`,
                transformOrigin: 'top left',
                zIndex: 1,
                filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.55))',
                cursor: 'default',
                pointerEvents: 'none',
            }}
            aria-hidden="true"
        >
            <motion.div
                animate={reduce ? {} : { y: [0, -10, 0] }}
                transition={{
                    duration: 4 + book.id * 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: book.id * 0.4,
                }}
                style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: book.color,
                    aspectRatio: '3/4',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(255,255,255,0.12)',
                }}
            >
                <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
                    <Image
                        src={book.image}
                        alt=""
                        fill
                        sizes="148px"
                        style={{ objectFit: 'cover', opacity: 0.45 }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(to bottom, ${book.color.split(' ')[2]} 0%, transparent 40%, rgba(0,0,0,0.5) 100%)`,
                        }}
                    />
                </div>
                <div style={{ padding: '0.875rem 0.875rem 1rem', background: book.color }}>
                    <p
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.55rem',
                            letterSpacing: '0.14em',
                            color: book.accent,
                            textTransform: 'uppercase',
                            marginBottom: '0.3rem',
                        }}
                    >
                        {book.tag}
                    </p>
                    <p
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1.25,
                            whiteSpace: 'pre-line',
                        }}
                    >
                        {book.title}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function Hero() {
    const sectionRef = useRef(null);
    const reduce = useReducedMotion();
    const iv = item(reduce);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '30%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '10%']);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                height: '100dvh',
                minHeight: '640px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 'clamp(4rem, 10vh, 5rem)',
            }}
            aria-label="Seção principal"
        >
            <motion.div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: '-30% 0 -30%',
                    backgroundImage: `url('${HERO_IMAGE}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 35%',
                    y: bgY,
                    willChange: 'transform',
                    zIndex: 0,
                }}
            />

            <div
                aria-hidden="true"
                style={{ position: 'absolute', inset: 0, background: 'rgba(10,4,0,0.55)', zIndex: 0 }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    background: 'linear-gradient(105deg, rgba(10,4,0,0.92) 0%, rgba(10,4,0,0.82) 42%, rgba(10,4,0,0.22) 68%, transparent 100%)',
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    background: 'linear-gradient(to top, rgba(10,4,0,0.75) 0%, transparent 40%)',
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    background: 'radial-gradient(ellipse 70% 50% at 50% 110%, rgba(180,83,9,0.35) 0%, transparent 65%)',
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    background: 'radial-gradient(ellipse 50% 40% at 85% 0%, rgba(217,119,6,0.12) 0%, transparent 60%)',
                }}
            />

            <div aria-hidden="true" style={{ display: 'contents' }} className="hero-books">
                {FLOATING_BOOKS.map((book) => (
                    <EbookMockup key={book.id} book={book} reduce={reduce} />
                ))}
            </div>

            <motion.div
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 3,
                    opacity: contentOpacity,
                    y: contentY,
                    maxWidth: '100%',
                }}
            >
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    style={{ maxWidth: 'min(620px, 52vw)' }}
                    className="hero-text"
                >
                    <motion.div variants={iv} style={{ marginBottom: '1.25rem' }}>
                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'rgba(217,119,6,0.18)',
                                border: '1px solid rgba(217,119,6,0.4)',
                                color: '#FCD34D',
                                padding: '0.35rem 1rem',
                                borderRadius: '2rem',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.65rem',
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                            }}
                        >
                            <span
                                style={{
                                    width: '5px',
                                    height: '5px',
                                    borderRadius: '50%',
                                    background: '#F59E0B',
                                    display: 'block',
                                    boxShadow: '0 0 6px #F59E0B',
                                }}
                            />
                            A coleção definitiva de culinária digital
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={iv}
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: '#FFFFFF',
                            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                            fontWeight: 900,
                            lineHeight: 1.02,
                            letterSpacing: '-0.03em',
                            marginBottom: '0.4rem',
                        }}
                    >
                        Mais de 1400
                    </motion.h1>
                    <motion.h1
                        variants={iv}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                            fontWeight: 900,
                            lineHeight: 1.02,
                            letterSpacing: '-0.03em',
                            marginBottom: '1.25rem',
                            background: 'linear-gradient(90deg, #FCD34D 0%, #FB923C 60%, #F87171 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        receitas em 22 ebooks
                    </motion.h1>

                    <motion.p
                        variants={iv}
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'rgba(255,251,235,0.72)',
                            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                            lineHeight: 1.8,
                            marginBottom: '2rem',
                            maxWidth: '480px',
                        }}
                    >
                        Receitas saudáveis, air fryer, marmitas, doces, low carb, veganas,
                        proteicas e muito mais — tudo organizado e pronto para usar.
                    </motion.p>

                    <motion.div
                        variants={iv}
                        style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center' }}
                    >
                        <motion.a
                            href="#bundle"
                            className="btn btn-xl cursor-pointer"
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 40px rgba(154,52,18,0.6)' }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                background: 'linear-gradient(135deg, #C2410C 0%, #9A3412 100%)',
                                color: '#FFFFFF',
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                boxShadow: '0 4px 24px rgba(154,52,18,0.5)',
                                textDecoration: 'none',
                                display: 'inline-flex',
                            }}
                        >
                            Ver Coleção Completa
                        </motion.a>
                        <motion.a
                            href="#ebooks"
                            className="btn btn-xl cursor-pointer"
                            whileHover={{ background: 'rgba(255,255,255,0.18)' }}
                            transition={{ duration: 0.2 }}
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(12px)',
                                border: '1.5px solid rgba(255,255,255,0.22)',
                                color: '#FFFFFF',
                                fontWeight: 600,
                                textDecoration: 'none',
                                display: 'inline-flex',
                            }}
                        >
                            Explorar Ebooks
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={iv}
                        style={{ marginTop: '1.75rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                    >
                        {['🔒 Pagamento seguro', '⚡ Acesso imediato', '↩ Garantia de 7 dias'].map((t) => (
                            <span
                                key={t}
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.38)',
                                }}
                            >
                                {t}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2.25rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
                aria-hidden="true"
            >
                <span
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.55rem',
                        letterSpacing: '0.18em',
                        color: 'rgba(255,255,255,0.28)',
                        textTransform: 'uppercase',
                    }}
                >
                    scroll
                </span>
                <motion.div
                    animate={reduce ? {} : { y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        width: '1px',
                        height: '3rem',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
                    }}
                />
            </motion.div>

            <style>{`
                @media (max-width: 1024px) {
                    .hero-books > * { display: none !important; }
                    .hero-text { max-width: 100% !important; }
                }
                @media (max-width: 640px) {
                    .hero-text { max-width: 100% !important; }
                }
            `}</style>
        </section>
    );
}
