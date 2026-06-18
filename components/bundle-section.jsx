'use client';

import { motion } from 'framer-motion';
import { CHECKOUT_URL, CHECKOUT_URL_COMBO3, CHECKOUT_URL_COMBO5 } from '../lib/constants';

function StarIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="#D97706" aria-hidden="true">
            <path d="M7 1.3l1.57 3.18 3.51.51-2.54 2.47.6 3.5L7 9.22 3.86 10.96l.6-3.5L2 4.99l3.51-.51z" />
        </svg>
    );
}

function CheckIcon({ dim = false }) {
    return (
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
            <circle cx="9" cy="9" r="9" fill="rgba(217,119,6,0.2)" />
            <path
                d="M5.5 9.5L7.5 11.5L12.5 6.5"
                stroke="#F59E0B"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.35C17.25 23.15 21 18.25 21 13V7L12 2z"
                fill="rgba(217,119,6,0.15)" stroke="rgba(217,119,6,0.5)" strokeWidth="1.5" />
            <path d="M9 12l2 2 4-4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function FlashIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(217,119,6,0.6)" aria-hidden="true">
            <path d="M13 2L4.5 13.5H11L10 22L20.5 10H14L13 2z" />
        </svg>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
    hidden: {},
    show:   { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const PLANS = [
    {
        key: 'combo3',
        label: 'Combo Essencial',
        priceNum: '39',
        priceDec: ',90',
        description: 'Escolha 3 volumes para começar sua coleção.',
        note: 'Você escolhe os volumes após a compra.',
        cta: 'Montar meu Combo 3',
        href: CHECKOUT_URL_COMBO3,
        perks: [
            'Escolha 3 títulos à sua vontade',
            'Download em PDF imediato',
            '7 dias de garantia',
        ],
        highlight: false,
        badge: 'Para começar',
    },
    {
        key: 'combo5',
        label: 'Combo Premium',
        priceNum: '59',
        priceDec: ',90',
        description: 'Escolha 5 volumes e monte um kit mais completo.',
        note: 'Você escolhe os volumes após a compra.',
        cta: 'Montar meu Combo 5',
        href: CHECKOUT_URL_COMBO5,
        perks: [
            'Escolha 5 títulos à sua vontade',
            'Download em PDF imediato',
            '7 dias de garantia',
        ],
        highlight: false,
        badge: 'Mais escolhido',
    },
    {
        key: 'full',
        label: 'Coleção Completa',
        priceNum: '97',
        priceDec: ',90',
        priceFull: 'R$397,00',
        savings: 'R$299,10',
        discountPct: '75% OFF',
        description: 'Leve os 22 ebooks da coleção com o melhor custo-benefício.',
        note: null,
        cta: 'Quero a Coleção Completa',
        href: CHECKOUT_URL,
        perks: [
            'Todos os 22 volumes inclusos',
            'Acesso imediato após o pagamento',
            'Atualizações gratuitas para sempre',
            '7 dias de garantia total',
        ],
        highlight: true,
        badge: 'Mais vendido',
    },
];

function PlanCard({ plan, index }) {
    const {
        label, priceNum, priceDec, priceFull, savings, discountPct,
        description, note, cta, href, perks, highlight, badge,
    } = plan;

    const isCombo = !highlight && badge !== null;

    return (
        <motion.div
            variants={fadeUp}
            style={{
                position: 'relative',
                borderRadius: '1.5rem',
                padding: highlight ? 'clamp(1.75rem, 4vw, 2.5rem)' : 'clamp(1.5rem, 3.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                background: highlight
                    ? 'linear-gradient(155deg, rgba(154,52,18,0.22) 0%, rgba(100,30,5,0.14) 60%, rgba(15,5,0,0.1) 100%)'
                    : isCombo
                        ? 'linear-gradient(155deg, rgba(180,72,18,0.16) 0%, rgba(120,50,8,0.10) 60%, rgba(15,5,0,0.08) 100%)'
                        : 'rgba(255,251,235,0.03)',
                border: highlight
                    ? '1.5px solid rgba(217,119,6,0.5)'
                    : isCombo
                        ? '1px solid rgba(217,119,6,0.3)'
                        : '1px solid rgba(255,251,235,0.07)',
                boxShadow: highlight
                    ? '0 0 80px rgba(154,52,18,0.25), 0 8px 32px rgba(0,0,0,0.5)'
                    : isCombo
                        ? '0 0 40px rgba(154,52,18,0.12), 0 4px 24px rgba(0,0,0,0.4)'
                        : '0 2px 20px rgba(0,0,0,0.3)',
                transform: highlight ? 'scale(1.04)' : 'scale(1)',
                transition: 'box-shadow 0.3s ease',
            }}
        >
            {(highlight || isCombo) && (
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '8%',
                        right: '8%',
                        height: '1.5px',
                        background: highlight
                            ? 'linear-gradient(90deg, transparent, rgba(217,119,6,0.8), rgba(251,146,60,0.6), transparent)'
                            : 'linear-gradient(90deg, transparent, rgba(217,119,6,0.45), rgba(251,146,60,0.3), transparent)',
                        borderRadius: '2px',
                    }}
                />
            )}

            <div style={{ minHeight: '2.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                {badge ? (
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            background: 'linear-gradient(135deg, rgba(217,119,6,0.28) 0%, rgba(154,52,18,0.28) 100%)',
                            border: '1px solid rgba(217,119,6,0.55)',
                            color: '#FCD34D',
                            padding: '0.3rem 0.85rem',
                            borderRadius: '2rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.13em',
                            textTransform: 'uppercase',
                            boxShadow: '0 0 16px rgba(217,119,6,0.15)',
                        }}
                    >
                        {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                        {badge}
                    </span>
                ) : null}
            </div>

            <p
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: highlight ? '1.4rem' : '1.15rem',
                    fontWeight: 700,
                    color: highlight ? '#FCD34D' : isCombo ? '#FDE68A' : 'rgba(255,251,235,0.8)',
                    marginBottom: '0.4rem',
                    lineHeight: 1.2,
                }}
            >
                {label}
            </p>

            <p
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: highlight ? 'rgba(255,251,235,0.6)' : isCombo ? 'rgba(255,251,235,0.55)' : 'rgba(255,251,235,0.45)',
                    lineHeight: 1.55,
                    marginBottom: note ? '0.4rem' : '1.5rem',
                }}
            >
                {description}
            </p>

            {note && (
                <p
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.05em',
                        color: 'rgba(255,251,235,0.28)',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                    }}
                >
                    {note}
                </p>
            )}

            <div style={{ marginBottom: '1.25rem' }}>
                {priceFull && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                        <span
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.78rem',
                                color: 'rgba(255,251,235,0.22)',
                                textDecoration: 'line-through',
                            }}
                        >
                            De {priceFull}
                        </span>
                        <span
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.62rem',
                                letterSpacing: '0.1em',
                                color: '#FCD34D',
                                background: 'rgba(217,119,6,0.2)',
                                border: '1px solid rgba(217,119,6,0.3)',
                                padding: '0.15rem 0.5rem',
                                borderRadius: '2rem',
                                textTransform: 'uppercase',
                            }}
                        >
                            {discountPct}
                        </span>
                    </div>
                )}

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.15rem', lineHeight: 1 }}>
                    <span
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            color: (highlight || isCombo) ? 'rgba(252,211,77,0.55)' : 'rgba(255,251,235,0.38)',
                            paddingBottom: highlight ? '0.7rem' : '0.45rem',
                        }}
                    >
                        R$
                    </span>
                    <span
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: highlight ? 'clamp(3rem, 7vw, 4.5rem)' : 'clamp(2.2rem, 5vw, 3rem)',
                            fontWeight: 900,
                            color: highlight ? '#FCD34D' : isCombo ? '#FDE68A' : 'rgba(255,251,235,0.88)',
                            letterSpacing: '-0.03em',
                        }}
                    >
                        {priceNum}
                    </span>
                    <span
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: highlight ? '1.25rem' : '1rem',
                            fontWeight: 700,
                            color: (highlight || isCombo) ? 'rgba(252,211,77,0.55)' : 'rgba(255,251,235,0.38)',
                            paddingBottom: highlight ? '0.7rem' : '0.45rem',
                        }}
                    >
                        {priceDec}
                    </span>
                </div>

                {savings && (
                    <p
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.06em',
                            color: 'rgba(252,211,77,0.45)',
                            marginTop: '0.2rem',
                            textTransform: 'uppercase',
                        }}
                    >
                        Economia de {savings}
                    </p>
                )}
            </div>

            <ul
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    flexGrow: 1,
                }}
            >
                {perks.map((perk) => (
                    <li key={perk} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                        <CheckIcon dim={!highlight} />
                        <span
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.875rem',
                                color: highlight ? 'rgba(255,251,235,0.7)' : isCombo ? 'rgba(255,251,235,0.6)' : 'rgba(255,251,235,0.45)',
                                lineHeight: 1.5,
                            }}
                        >
                            {perk}
                        </span>
                    </li>
                ))}
            </ul>

            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                    scale: 1.03,
                    boxShadow: highlight
                        ? '0 8px 40px rgba(154,52,18,0.7)'
                        : isCombo
                            ? '0 6px 30px rgba(154,52,18,0.45)'
                            : '0 4px 20px rgba(255,251,235,0.08)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    textDecoration: 'none',
                    padding: highlight ? '1rem 1.5rem' : '0.875rem 1.25rem',
                    borderRadius: '0.875rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: highlight ? '1rem' : '0.9rem',
                    letterSpacing: '0.01em',
                    cursor: 'pointer',
                    background: highlight
                        ? 'linear-gradient(135deg, #C2410C 0%, #9A3412 100%)'
                        : isCombo
                            ? 'linear-gradient(135deg, #D97706 0%, #B45309 100%)'
                            : 'rgba(255,251,235,0.06)',
                    color: (highlight || isCombo) ? '#FFFFFF' : 'rgba(255,251,235,0.6)',
                    border: (highlight || isCombo) ? 'none' : '1px solid rgba(255,251,235,0.1)',
                    boxShadow: highlight
                        ? '0 4px 28px rgba(154,52,18,0.5)'
                        : isCombo
                            ? '0 4px 20px rgba(180,83,9,0.35)'
                            : 'none',
                }}
            >
                {cta} →
            </motion.a>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '0.875rem',
                }}
            >
                <ShieldIcon />
                <span
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.07em',
                        color: 'rgba(255,251,235,0.2)',
                        textTransform: 'uppercase',
                    }}
                >
                    Pagamento seguro · Acesso imediato
                </span>
            </div>
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
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute', top: 0, left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1000px', height: '560px',
                    background: 'radial-gradient(ellipse, rgba(154,52,18,0.26) 0%, transparent 70%)',
                    pointerEvents: 'none', zIndex: 0,
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute', bottom: 0, left: '50%',
                    transform: 'translateX(-50%)',
                    width: '700px', height: '320px',
                    background: 'radial-gradient(ellipse, rgba(217,119,6,0.13) 0%, transparent 70%)',
                    pointerEvents: 'none', zIndex: 0,
                }}
            />

            <div className="container section" style={{ position: 'relative', zIndex: 1 }}>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                >
                    <p
                        className="label"
                        style={{ color: 'rgba(217,119,6,0.75)', marginBottom: '0.875rem' }}
                    >
                        Escolha seu plano
                    </p>
                    <h2
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: '#FFFBEB',
                            fontSize: 'clamp(1.9rem, 4.5vw, 3.25rem)',
                            lineHeight: 1.1,
                            letterSpacing: '-0.025em',
                            marginBottom: '1rem',
                        }}
                    >
                        Monte seu combo ou leve
                        <br />
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #FCD34D 0%, #FB923C 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            a coleção completa
                        </span>
                    </h2>
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1rem',
                            color: 'rgba(255,251,235,0.4)',
                            maxWidth: '460px',
                            margin: '0 auto',
                            lineHeight: 1.65,
                        }}
                    >
                        Nos combos, você escolhe quais volumes quer receber após a compra.
                    </p>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
                        gap: 'clamp(1rem, 2.5vw, 1.75rem)',
                        alignItems: 'end',
                        maxWidth: '980px',
                        margin: '0 auto',
                    }}
                >
                    {PLANS.map((plan, i) => (
                        <PlanCard key={plan.key} plan={plan} index={i} />
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: 'clamp(2rem, 4vw, 3rem)',
                    }}
                >
                    <FlashIcon />
                    <p
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.09em',
                            color: 'rgba(255,251,235,0.2)',
                            textTransform: 'uppercase',
                        }}
                    >
                        Todos os planos incluem garantia de 7 dias e acesso imediato
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
