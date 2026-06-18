'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ebooks } from '../data/ebooks';

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 48 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
};

function EbookCard({ ebook }) {
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
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
            }}
        >
            {/* Cover image */}
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
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
                        style={{ objectFit: 'cover' }}
                    />
                    {/* Warm overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(to top, rgba(15,5,0,0.5) 0%, transparent 50%)',
                        }}
                    />
                </motion.div>

                {/* Tag */}
                <span
                    className="label"
                    style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: ebook.tagColor,
                        color: '#FFFFFF',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '2rem',
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        zIndex: 1,
                    }}
                >
                    {ebook.tag}
                </span>

                {/* Recipe count on image */}
                <span
                    style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        right: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.08em',
                        color: 'rgba(255,251,235,0.85)',
                        zIndex: 1,
                    }}
                >
                    {ebook.count} RECEITAS
                </span>
            </div>

            {/* Card body */}
            <div
                style={{
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    flex: 1,
                }}
            >
                <div>
                    <h3
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: 'var(--color-foreground)',
                            lineHeight: 1.25,
                            marginBottom: '0.35rem',
                        }}
                    >
                        {ebook.title}
                    </h3>
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.85rem',
                            color: 'var(--color-muted-fg)',
                            lineHeight: 1.5,
                        }}
                    >
                        {ebook.subtitle}
                    </p>
                </div>

                {/* Footer */}
                <div
                    style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid var(--color-border)',
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: 'var(--color-primary)',
                        }}
                    >
                        {ebook.price}
                    </span>
                    <button
                        className="btn btn-primary cursor-pointer"
                        style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                        aria-label={`Comprar ${ebook.title}`}
                    >
                        Comprar Agora
                    </button>
                </div>
            </div>
        </motion.article>
    );
}

export function EbooksSection() {
    return (
        <section
            id="ebooks"
            className="section"
            style={{ backgroundColor: 'var(--color-muted)' }}
        >
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                    <p
                        className="label"
                        style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}
                    >
                        Nossa Coleção
                    </p>
                    <h2
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-foreground)',
                        }}
                    >
                        22 ebooks para cada momento
                        <br />
                        <span style={{ color: 'var(--color-primary)' }}>na sua cozinha</span>
                    </h2>
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-muted-fg)',
                            fontSize: '1.05rem',
                            maxWidth: '540px',
                            margin: '1rem auto 0',
                            lineHeight: 1.7,
                        }}
                    >
                        De receitas do dia a dia a preparações especiais — temos um ebook para cada
                        desejo e necessidade.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                        gap: 'clamp(1rem, 2vw, 1.5rem)',
                    }}
                >
                    {ebooks.map((ebook) => (
                        <EbookCard key={ebook.id} ebook={ebook} />
                    ))}
                </motion.div>

                {/* View all CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                >
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-muted-fg)',
                            marginBottom: '1.25rem',
                            fontSize: '0.95rem',
                        }}
                    >
                        Exibindo 8 de 22 ebooks disponíveis
                    </p>
                    <a href="#bundle" className="btn btn-primary btn-lg cursor-pointer">
                        Ver todos os 22 ebooks na Coleção Completa
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
