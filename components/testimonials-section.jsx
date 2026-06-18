'use client';

import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

function Stars({ count = 5 }) {
    return (
        <div style={{ display: 'flex', gap: '0.2rem' }} aria-label={`${count} estrelas`}>
            {Array.from({ length: count }).map((_, i) => (
                <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#D97706"
                    aria-hidden="true"
                >
                    <path d="M8 1.5l1.8 3.6 4 .58-2.9 2.83.68 3.99L8 10.47l-3.58 1.88.68-4L2.2 5.68l4-.58z" />
                </svg>
            ))}
        </div>
    );
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function TestimonialsSection() {
    return (
        <section
            id="testimonials"
            className="section"
            style={{ backgroundColor: 'var(--color-background)' }}
        >
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                    <p
                        className="label"
                        style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}
                    >
                        Depoimentos
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
                        O que nossos leitores
                        <br />
                        <span style={{ color: 'var(--color-primary)' }}>estão dizendo</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                        gap: 'clamp(1.25rem, 2.5vw, 2rem)',
                    }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '1.25rem',
                                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                boxShadow: 'var(--shadow-card)',
                            }}
                        >
                            {/* Stars */}
                            <Stars count={t.stars} />

                            {/* Quote */}
                            <blockquote
                                className="pull-quote"
                                style={{
                                    margin: 0,
                                    fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                                    color: 'var(--color-foreground)',
                                    flex: 1,
                                }}
                            >
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.875rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid var(--color-border)',
                                }}
                            >
                                {/* Avatar */}
                                <div
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '50%',
                                        backgroundColor: t.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                    aria-hidden="true"
                                >
                                    <span
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '0.875rem',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        {t.initials}
                                    </span>
                                </div>

                                <div>
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            color: 'var(--color-foreground)',
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {t.name}
                                    </p>
                                    <p
                                        className="label"
                                        style={{ color: 'var(--color-muted-fg)', marginTop: '0.2rem' }}
                                    >
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social proof count */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '2.5rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        color: 'var(--color-muted-fg)',
                        textTransform: 'uppercase',
                    }}
                >
                    Mais de 4.800 leitores satisfeitos em todo o Brasil
                </motion.p>
            </div>
        </section>
    );
}
