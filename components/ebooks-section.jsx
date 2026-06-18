'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ebooks } from '../data/ebooks';
import { CHECKOUT_URL } from '../lib/constants';

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 48 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

function EbookModal({ ebook, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                key="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(10,4,0,0.82)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem',
                }}
                aria-label="Fechar modal"
            >
                <motion.div
                    key="modal-card"
                    initial={{ opacity: 0, y: 32, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.97 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        background: 'linear-gradient(155deg, #1A0A00 0%, #120600 100%)',
                        border: '1px solid rgba(217,119,6,0.22)',
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        width: '100%',
                        maxWidth: '520px',
                        boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
                        position: 'relative',
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={ebook.title}
                >
                    <button
                        onClick={onClose}
                        aria-label="Fechar"
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            zIndex: 10,
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            background: 'rgba(255,251,235,0.08)',
                            border: '1px solid rgba(255,251,235,0.12)',
                            color: 'rgba(255,251,235,0.6)',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: 1,
                        }}
                    >
                        ✕
                    </button>

                    <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden' }}>
                        <Image
                            src={ebook.image}
                            alt={ebook.title}
                            fill
                            sizes="520px"
                            style={{ objectFit: 'cover', opacity: 0.55 }}
                        />
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to bottom, rgba(10,4,0,0.2) 0%, rgba(10,4,0,0.85) 100%)',
                        }} />
                        <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem' }}>
                            <span style={{
                                display: 'inline-block',
                                backgroundColor: ebook.tagColor,
                                color: '#FFFFFF',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '2rem',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.6rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '0.5rem',
                            }}>
                                {ebook.tag}
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                                fontWeight: 700,
                                color: '#FFFBEB',
                                lineHeight: 1.2,
                            }}>
                                {ebook.title}
                            </h2>
                        </div>
                    </div>

                    <div style={{ padding: '1.5rem 1.75rem 2rem' }}>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1rem',
                            color: 'rgba(255,251,235,0.65)',
                            lineHeight: 1.7,
                            marginBottom: '1rem',
                        }}>
                            {ebook.subtitle}
                        </p>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.75rem',
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.7rem',
                                letterSpacing: '0.1em',
                                color: '#F59E0B',
                                textTransform: 'uppercase',
                            }}>
                                {ebook.count} receitas incluídas
                            </span>
                        </div>

                        <div style={{
                            borderTop: '1px solid rgba(217,119,6,0.15)',
                            paddingTop: '1.5rem',
                        }}>
                            <p style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'rgba(255,251,235,0.85)',
                                marginBottom: '1rem',
                                lineHeight: 1.5,
                            }}>
                                Gostou? Leve este ebook e mais 21 na Coleção Completa.
                            </p>
                            <motion.a
                                href="https://pay.cakto.com.br/38ohh6i_932517"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(154,52,18,0.65)' }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.18 }}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    padding: '0.95rem 1.5rem',
                                    borderRadius: '0.875rem',
                                    background: 'linear-gradient(135deg, #C2410C 0%, #9A3412 100%)',
                                    color: '#FFFFFF',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    boxShadow: '0 4px 24px rgba(154,52,18,0.45)',
                                    cursor: 'pointer',
                                }}
                            >
                                Quero a Coleção Completa →
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function EbookCard({ ebook, onSaibaMais }) {
    return (
        <motion.article
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
                transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}
        >
            <div style={{ position: 'relative', aspectRatio: '2/3', overflow: 'hidden' }}>
                <motion.div
                    style={{ position: 'absolute', inset: 0 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={ebook.image}
                        alt={ebook.title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        style={{ objectFit: 'contain' }}
                    />
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(15,5,0,0.5) 0%, transparent 50%)',
                    }} />
                </motion.div>

                <span
                    className="label"
                    style={{
                        position: 'absolute', top: '0.75rem', left: '0.75rem',
                        backgroundColor: ebook.tagColor, color: '#FFFFFF',
                        padding: '0.25rem 0.625rem', borderRadius: '2rem',
                        fontSize: '0.6rem', letterSpacing: '0.1em', zIndex: 1,
                    }}
                >
                    {ebook.tag}
                </span>

                <span style={{
                    position: 'absolute', bottom: '0.75rem', right: '0.75rem',
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    letterSpacing: '0.08em', color: 'rgba(255,251,235,0.85)', zIndex: 1,
                }}>
                    {ebook.count} RECEITAS
                </span>
            </div>

            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                <div>
                    <h3 style={{
                        fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600,
                        color: 'var(--color-foreground)', lineHeight: 1.25, marginBottom: '0.35rem',
                    }}>
                        {ebook.title}
                    </h3>
                    <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                        color: 'var(--color-muted-fg)', lineHeight: 1.5,
                    }}>
                        {ebook.subtitle}
                    </p>
                </div>

                <div style={{
                    marginTop: 'auto', display: 'flex', alignItems: 'center',
                    justifyContent: 'flex-end', paddingTop: '0.75rem',
                    borderTop: '1px solid var(--color-border)',
                }}>
                    <button
                        onClick={() => onSaibaMais(ebook)}
                        className="btn cursor-pointer"
                        style={{
                            fontSize: '0.8rem',
                            padding: '0.5rem 1.1rem',
                            background: 'transparent',
                            border: '1.5px solid var(--color-primary)',
                            color: 'var(--color-primary)',
                            borderRadius: '0.5rem',
                            fontFamily: 'var(--font-body)',
                            fontWeight: 600,
                            transition: 'background 0.18s ease, color 0.18s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--color-primary)';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--color-primary)';
                        }}
                        aria-label={`Saiba mais sobre ${ebook.title}`}
                    >
                        Saiba Mais
                    </button>
                </div>
            </div>
        </motion.article>
    );
}

export function EbooksSection() {
    const [activeEbook, setActiveEbook] = useState(null);
    const closeModal = useCallback(() => setActiveEbook(null), []);

    return (
        <>
            <section
                id="ebooks"
                className="section"
                style={{ backgroundColor: 'var(--color-muted)' }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
                    >
                        <p className="label" style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                            Nossa Coleção
                        </p>
                        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
                            22 ebooks para cada momento
                            <br />
                            <span style={{ color: 'var(--color-primary)' }}>na sua cozinha</span>
                        </h2>
                        <p style={{
                            fontFamily: 'var(--font-body)', color: 'var(--color-muted-fg)',
                            fontSize: '1.05rem', maxWidth: '540px', margin: '1rem auto 0', lineHeight: 1.7,
                        }}>
                            De receitas do dia a dia a preparações especiais — temos um ebook para cada
                            desejo e necessidade.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                            gap: 'clamp(1rem, 2vw, 1.5rem)',
                        }}
                    >
                        {ebooks.map((ebook) => (
                            <EbookCard key={ebook.id} ebook={ebook} onSaibaMais={setActiveEbook} />
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ textAlign: 'center', marginTop: '3rem' }}
                    >
                        <p style={{
                            fontFamily: 'var(--font-body)', color: 'var(--color-muted-fg)',
                            marginBottom: '1.25rem', fontSize: '0.95rem',
                        }}>
                            Todos os 22 ebooks disponíveis na Coleção Completa
                        </p>
                        <a
                            href="https://pay.cakto.com.br/38ohh6i_932517"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg cursor-pointer"
                        >
                            Quero a Coleção Completa
                        </a>
                    </motion.div>
                </div>
            </section>

            {activeEbook && <EbookModal ebook={activeEbook} onClose={closeModal} />}
        </>
    );
}
