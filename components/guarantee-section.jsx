'use client';

import { motion } from 'framer-motion';

function ShieldIcon() {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M32 4L8 14v18c0 14 10.5 23.8 24 28 13.5-4.2 24-14 24-28V14L32 4z"
                fill="rgba(154,52,18,0.12)"
                stroke="rgba(154,52,18,0.4)"
                strokeWidth="2"
            />
            <path
                d="M22 32l7 7 13-13"
                stroke="#9A3412"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function GuaranteeSection() {
    return (
        <section
            className="section"
            style={{ backgroundColor: 'var(--color-muted)' }}
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        maxWidth: '680px',
                        margin: '0 auto',
                        textAlign: 'center',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '1.5rem',
                        padding: 'clamp(2rem, 5vw, 3.5rem)',
                        boxShadow: 'var(--shadow-card)',
                    }}
                >
                    <ShieldIcon />

                    <h2
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-foreground)',
                            marginTop: '1.25rem',
                            marginBottom: '1rem',
                            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                        }}
                    >
                        Garantia Total de 7 Dias
                    </h2>

                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-muted-fg)',
                            fontSize: '1.05rem',
                            lineHeight: 1.75,
                            marginBottom: '1.75rem',
                            maxWidth: '480px',
                            margin: '0 auto 1.75rem',
                        }}
                    >
                        Se por qualquer motivo você não ficar satisfeito com a coleção nos
                        primeiros 7 dias após a compra, basta nos enviar uma mensagem e
                        devolveremos{' '}
                        <strong style={{ color: 'var(--color-foreground)' }}>
                            100% do seu dinheiro
                        </strong>
                        , sem perguntas.
                    </p>

                    <p
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            fontSize: '1.15rem',
                            color: 'var(--color-primary)',
                        }}
                    >
                        &ldquo;Sua satisfação é nossa prioridade.&rdquo;
                    </p>

                    <div
                        style={{
                            marginTop: '2rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid var(--color-border)',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '2rem',
                            flexWrap: 'wrap',
                        }}
                    >
                        {[
                            { value: '7 dias', label: 'prazo de garantia' },
                            { value: '100%', label: 'do valor devolvido' },
                            { value: 'Sem', label: 'burocracia' },
                        ].map(({ value, label }) => (
                            <div key={label} style={{ textAlign: 'center' }}>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        color: 'var(--color-primary)',
                                        lineHeight: 1,
                                    }}
                                >
                                    {value}
                                </p>
                                <p
                                    className="label"
                                    style={{
                                        color: 'var(--color-muted-fg)',
                                        marginTop: '0.25rem',
                                    }}
                                >
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
