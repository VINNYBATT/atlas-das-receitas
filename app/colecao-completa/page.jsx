import Image from 'next/image';
import { ebooks, bundleIncludes } from '../../data/ebooks';
import { CHECKOUT_URL, PRICE_SALE, PRICE_FULL, SAVINGS, DISCOUNT_PCT } from '../../lib/constants';

export const metadata = {
    title: 'Coleção Completa — 22 Ebooks de Culinária',
    description:
        'Adquira os 22 ebooks de culinária do Atlas das Receitas com mais de 1400 receitas por apenas ' +
        PRICE_SALE +
        '. Acesso imediato. Garantia de 7 dias.',
};

// ── Re-usable SVG icons ──────────────────────────────────────────────────────
function CheckIcon({ color = '#D97706' }) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
            <circle cx="10" cy="10" r="10" fill={color + '33'} />
            <path d="M6 10.5L8.5 13L14 7.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function StarRow() {
    return (
        <span style={{ display: 'inline-flex', gap: '3px' }} aria-label="5 estrelas">
            {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#D97706" aria-hidden="true">
                    <path d="M8 1.5l1.8 3.6 4 .58-2.9 2.83.68 3.99L8 10.47l-3.58 1.88.68-4L2.2 5.68l4-.58z" />
                </svg>
            ))}
        </span>
    );
}

function ShieldIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M32 4L8 14v18c0 14 10.5 23.8 24 28 13.5-4.2 24-14 24-28V14L32 4z"
                fill="rgba(154,52,18,0.12)" stroke="rgba(154,52,18,0.4)" strokeWidth="2" />
            <path d="M22 32l7 7 13-13" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// ── CTA Button (shared) ──────────────────────────────────────────────────────
function CtaButton({ size = 'xl', full = false }) {
    const fontSize = size === 'xl' ? '1.1rem' : '1rem';
    return (
        <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: full ? 'flex' : 'inline-flex',
                width: full ? '100%' : undefined,
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #C2410C 0%, #9A3412 100%)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize,
                padding: size === 'xl' ? '1rem 2.5rem' : '0.875rem 2rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(154,52,18,0.45)',
                letterSpacing: '0.01em',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            Quero a Coleção Completa →
        </a>
    );
}

// ── FAQ data ─────────────────────────────────────────────────────────────────
const FAQ = [
    {
        q: 'Como vou receber os ebooks?',
        a: 'Após a confirmação do pagamento você receberá um e-mail com o link de acesso à área de downloads. O acesso é imediato.',
    },
    {
        q: 'Em qual formato são os ebooks?',
        a: 'Todos os 22 ebooks estão em formato PDF de alta qualidade, compatíveis com celular, tablet, computador e e-readers.',
    },
    {
        q: 'Posso pagar no cartão de crédito?',
        a: 'Sim! Aceitamos cartão de crédito, débito, PIX e boleto bancário. O parcelamento está disponível no cartão.',
    },
    {
        q: 'Posso imprimir os ebooks?',
        a: 'Sim, você pode imprimir quantas vezes quiser para uso pessoal.',
    },
    {
        q: 'E se eu não gostar?',
        a: 'Oferecemos garantia total de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro sem burocracia.',
    },
    {
        q: 'As receitas são testadas?',
        a: 'Sim! Todas as mais de 1.400 receitas foram testadas e aprovadas antes de entrarem na coleção.',
    },
];

// ── Benefits ─────────────────────────────────────────────────────────────────
const BENEFITS = [
    { icon: '📚', title: '22 ebooks completos', desc: 'Cada ebook é dedicado a uma categoria — do low carb ao churrasco, sem custo extra.' },
    { icon: '🍽️', title: '1.400+ receitas testadas', desc: 'Cada receita foi preparada e aprovada antes de entrar na coleção.' },
    { icon: '⚡', title: 'Acesso imediato', desc: 'Download disponível logo após a confirmação do pagamento.' },
    { icon: '📱', title: 'Funciona em qualquer device', desc: 'PDF legível em celular, tablet, PC e e-reader.' },
    { icon: '🔄', title: 'Atualizações gratuitas', desc: 'Quando novos ebooks forem lançados você recebe sem pagar nada a mais.' },
    { icon: '🛡️', title: 'Garantia de 7 dias', desc: 'Não gostou? Devolvemos 100% do valor. Sem perguntas.' },
];

// ── Page component ────────────────────────────────────────────────────────────
export default function ColecaoCompletaPage() {
    return (
        <div style={{ backgroundColor: 'var(--color-background)' }}>

            {/* ══ HERO ══════════════════════════════════════════════════════ */}
            <section
                style={{
                    background: 'linear-gradient(160deg, #0A0400 0%, #1A0900 50%, #0F0500 100%)',
                    paddingTop: 'clamp(5rem, 10vw, 8rem)',
                    paddingBottom: 'clamp(4rem, 8vw, 6rem)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Glow */}
                <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(154,52,18,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Badge */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(217,119,6,0.18)', border: '1px solid rgba(217,119,6,0.4)', color: '#FCD34D', padding: '0.35rem 1rem', borderRadius: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                            <StarRow /> &nbsp;Mais de 4.800 leitores satisfeitos
                        </span>
                    </div>

                    <h1 style={{ fontFamily: 'var(--font-display)', color: '#FFFBEB', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                        A Coleção Completa de
                        <br />
                        <span style={{ background: 'linear-gradient(90deg,#FCD34D,#FB923C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            22 Ebooks de Culinária
                        </span>
                    </h1>

                    <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,251,235,0.72)', fontSize: 'clamp(1rem,2vw,1.15rem)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Mais de 1.400 receitas organizadas — receitas saudáveis, air fryer, marmitas,
                        doces, low carb, veganas, proteicas e muito mais.
                        Acesso imediato, garantia de 7 dias.
                    </p>

                    {/* Price */}
                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'rgba(255,251,235,0.3)', textDecoration: 'line-through', marginBottom: '0.2rem' }}>
                            De {PRICE_FULL}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.2rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'rgba(255,251,235,0.5)', marginBottom: '0.7rem' }}>R$</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,7vw,5rem)', fontWeight: 900, color: '#FCD34D', lineHeight: 1, letterSpacing: '-0.03em' }}>97</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'rgba(252,211,77,0.7)', marginBottom: '0.7rem' }}>,90</span>
                        </div>
                        <span style={{ display: 'inline-block', background: 'rgba(217,119,6,0.25)', border: '1px solid rgba(217,119,6,0.4)', color: '#FCD34D', padding: '0.3rem 0.875rem', borderRadius: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em' }}>
                            ECONOMIZE {SAVINGS} · {DISCOUNT_PCT}
                        </span>
                    </div>

                    <CtaButton size="xl" />

                    {/* Trust */}
                    <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        {['🔒 Pagamento seguro', '⚡ Acesso imediato', '↩ 7 dias de garantia'].map(t => (
                            <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 22 EBOOK COVERS ══════════════════════════════════════════ */}
            <section className="section" style={{ backgroundColor: 'var(--color-muted)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
                        <p className="label" style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>O que você vai receber</p>
                        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
                            22 ebooks — um para cada momento
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,180px),1fr))', gap: 'clamp(0.875rem,1.5vw,1.25rem)' }}>
                        {ebooks.map(eb => (
                            <div key={eb.id} style={{ borderRadius: '0.75rem', overflow: 'hidden', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                                    <Image src={eb.image} alt={eb.title} fill sizes="200px" style={{ objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,4,0,0.6) 0%, transparent 50%)' }} />
                                    <span style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', backgroundColor: eb.tagColor, color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em' }}>
                                        {eb.tag}
                                    </span>
                                    <span style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(255,251,235,0.8)' }}>
                                        {eb.count} rec.
                                    </span>
                                </div>
                                <div style={{ padding: '0.75rem' }}>
                                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-foreground)', lineHeight: 1.25 }}>
                                        {eb.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <CtaButton />
                    </div>
                </div>
            </section>

            {/* ══ BENEFITS ════════════════════════════════════════════════ */}
            <section className="section" style={{ backgroundColor: 'var(--color-background)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
                        <p className="label" style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Por que escolher a Coleção Completa</p>
                        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
                            Tudo que você precisa,<br />em um só lugar
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
                        {BENEFITS.map(b => (
                            <div key={b.title} style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '1rem', padding: '1.75rem', boxShadow: 'var(--shadow-card)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{b.icon}</div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '0.5rem' }}>{b.title}</h3>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-muted-fg)', lineHeight: 1.65 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ WHAT IS INCLUDED ════════════════════════════════════════ */}
            <section className="section" style={{ backgroundColor: 'var(--color-muted)' }}>
                <div className="container" style={{ maxWidth: '720px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
                        <p className="label" style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>O que está incluído</p>
                        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
                            Tudo na Coleção Completa
                        </h2>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {bundleIncludes.map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '0.875rem', padding: '1rem 1.25rem', boxShadow: 'var(--shadow-card)' }}>
                                <CheckIcon />
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-foreground)', lineHeight: 1.6 }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ══ PRICING BOX ═════════════════════════════════════════════ */}
            <section className="section" style={{ background: 'linear-gradient(160deg,#0A0400,#180900,#0F0500)', position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '350px', background: 'radial-gradient(ellipse,rgba(154,52,18,0.3) 0%,transparent 70%)', pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '560px', textAlign: 'center' }}>
                    <p className="label" style={{ color: 'rgba(217,119,6,0.8)', marginBottom: '0.75rem' }}>Oferta por tempo limitado</p>
                    <h2 style={{ fontFamily: 'var(--font-display)', color: '#FFFBEB', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', marginBottom: '2rem' }}>
                        Comece hoje com<br />
                        <span style={{ color: '#FCD34D' }}>mais confiança na cozinha</span>
                    </h2>

                    <div style={{ background: 'rgba(255,251,235,0.05)', border: '1px solid rgba(255,251,235,0.1)', borderRadius: '1.25rem', padding: 'clamp(1.5rem,4vw,2.5rem)', marginBottom: '1.5rem' }}>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'rgba(255,251,235,0.3)', textDecoration: 'line-through', marginBottom: '0.2rem' }}>De {PRICE_FULL}</p>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.2rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'rgba(255,251,235,0.5)', marginBottom: '0.8rem' }}>R$</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem,8vw,5.5rem)', fontWeight: 900, color: '#FCD34D', lineHeight: 1, letterSpacing: '-0.03em' }}>97</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'rgba(252,211,77,0.6)', marginBottom: '0.9rem' }}>,90</span>
                        </div>
                        <span style={{ display: 'inline-block', background: 'rgba(217,119,6,0.25)', border: '1px solid rgba(217,119,6,0.35)', color: '#FCD34D', padding: '0.3rem 0.875rem', borderRadius: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em', marginBottom: '2rem' }}>
                            ECONOMIZE {SAVINGS} · {DISCOUNT_PCT}
                        </span>
                        <CtaButton full />
                    </div>

                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>
                        Pagamento seguro · Acesso imediato · 7 dias de garantia
                    </p>
                </div>
            </section>

            {/* ══ GUARANTEE ═══════════════════════════════════════════════ */}
            <section className="section" style={{ backgroundColor: 'var(--color-muted)' }}>
                <div className="container" style={{ maxWidth: '620px', textAlign: 'center' }}>
                    <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '1.5rem', padding: 'clamp(2rem,5vw,3rem)', boxShadow: 'var(--shadow-card)' }}>
                        <ShieldIcon />
                        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(1.5rem,3vw,2rem)', margin: '1.25rem 0 1rem' }}>Garantia Total de 7 Dias</h2>
                        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted-fg)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                            Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias,
                            basta nos enviar uma mensagem e devolveremos{' '}
                            <strong style={{ color: 'var(--color-foreground)' }}>100% do seu dinheiro</strong>, sem perguntas.
                        </p>
                        <CtaButton />
                    </div>
                </div>
            </section>

            {/* ══ FAQ ═════════════════════════════════════════════════════ */}
            <section className="section" style={{ backgroundColor: 'var(--color-background)' }}>
                <div className="container" style={{ maxWidth: '720px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
                        <p className="label" style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>FAQ</p>
                        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
                            Perguntas frequentes
                        </h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {FAQ.map(({ q, a }) => (
                            <details
                                key={q}
                                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}
                            >
                                <summary
                                    style={{ padding: '1.25rem 1.5rem', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--color-foreground)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
                                >
                                    {q}
                                    <span style={{ flexShrink: 0, color: 'var(--color-primary)', fontSize: '1.25rem', lineHeight: 1 }}>+</span>
                                </summary>
                                <div style={{ padding: '0 1.5rem 1.25rem', borderTop: '1px solid var(--color-border)' }}>
                                    <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted-fg)', lineHeight: 1.75, marginTop: '1rem', fontSize: '0.95rem' }}>{a}</p>
                                </div>
                            </details>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <CtaButton size="xl" />
                    </div>
                </div>
            </section>
        </div>
    );
}
