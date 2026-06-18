'use client';

import { motion } from 'framer-motion';
import { CHECKOUT_URL, PRICE_FULL, PRICE_SALE, SAVINGS, DISCOUNT_PCT } from '../lib/constants';

export function FinalCtaSection() {
    return (
        <section
            className="section"
            style={{
                background: 'linear-gradient(160deg, #9A3412 0%, #7C2D12 50%, #1A0800 100%)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
            }}
        >
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(217,119,6,0.25) 0%, transparent 65%)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '680px', margin: '0 auto' }}
                >
                    <p className="label" style={{ color: 'rgba(252,211,77,0.8)', marginBottom: '1.25rem' }}>
                        Oferta por tempo limitado
                    </p>

                    <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFFBEB', fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                        Comece hoje a cozinhar com
                        <br />
                        <span style={{ color: '#FCD34D' }}>mais confiança e sabor</span>
                    </h2>

                    <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,251,235,0.72)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                        22 ebooks · 1400+ receitas · Acesso imediato · Garantia de 7 dias
                    </p>

                    {/* Price */}
                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'rgba(255,251,235,0.35)', textDecoration: 'line-through', marginBottom: '0.25rem' }}>
                            De {PRICE_FULL}
                        </p>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 700, color: '#FCD34D', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                            {PRICE_SALE}
                        </p>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', color: 'rgba(255,251,235,0.75)', padding: '0.2rem 0.75rem', borderRadius: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em' }}>
                            ECONOMIZE {SAVINGS} · {DISCOUNT_PCT}
                        </span>
                    </div>

                    <motion.a
                        href={CHECKOUT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-xl cursor-pointer"
                        whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(15,5,0,0.55)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{ display: 'inline-flex', backgroundColor: '#FFFBEB', color: '#7C2D12', fontWeight: 700, fontSize: '1.05rem', boxShadow: '0 6px 24px rgba(15,5,0,0.4)', textDecoration: 'none', marginBottom: '1.5rem' }}
                    >
                        Quero a Coleção Completa →
                    </motion.a>

                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(255,251,235,0.35)', textTransform: 'uppercase' }}>
                        Pagamento seguro · Acesso imediato · 7 dias de garantia
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
