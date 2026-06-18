import Image from 'next/image';
import { ebooks } from '../../data/ebooks';
import { SUPPORT_EMAIL } from '../../lib/constants';

export const metadata = {
    title: 'Área de Downloads',
    description: 'Acesse e baixe todos os seus ebooks da Coleção Completa Atlas das Receitas.',
    robots: { index: false, follow: false },
};

function DownloadIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M12 15l-4-4h2.5V4h3v7H16l-4 4z" fill="currentColor" />
            <path d="M5 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

export default function DownloadsPage() {
    return (
        <div
            style={{
                minHeight: '100dvh',
                backgroundColor: '#0A0400',
                paddingTop: '5rem',
                paddingBottom: '5rem',
            }}
        >
            {/* Background glow */}
            <div aria-hidden="true" style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '400px', background: 'radial-gradient(ellipse,rgba(154,52,18,0.2) 0%,transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,5vw,4rem)', paddingTop: '1rem' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(217,119,6,0.8)', marginBottom: '1rem' }}>
                        Área privada
                    </p>
                    <h1 style={{ fontFamily: 'var(--font-display)', color: '#FFFBEB', fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
                        Seus Downloads
                    </h1>
                    <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,251,235,0.55)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
                        Clique em <strong style={{ color: 'rgba(255,251,235,0.8)' }}>Baixar</strong> para fazer o download de cada ebook. Os arquivos estão em PDF e funcionam em qualquer dispositivo.
                    </p>
                </div>

                {/* Stats strip */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem,4vw,3rem)', flexWrap: 'wrap', marginBottom: 'clamp(2.5rem,5vw,4rem)', padding: '1.5rem', background: 'rgba(255,251,235,0.04)', border: '1px solid rgba(255,251,235,0.08)', borderRadius: '1rem', maxWidth: '600px', margin: '0 auto clamp(2.5rem,5vw,4rem)' }}>
                    {[
                        { value: '22', label: 'ebooks' },
                        { value: '1400+', label: 'receitas' },
                        { value: 'PDF', label: 'formato' },
                    ].map(({ value, label }) => (
                        <div key={label} style={{ textAlign: 'center' }}>
                            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: '#FCD34D', lineHeight: 1 }}>{value}</p>
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,251,235,0.4)', marginTop: '0.25rem' }}>{label}</p>
                        </div>
                    ))}
                </div>

                {/* Ebook grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gap: 'clamp(1rem,2vw,1.5rem)' }}>
                    {ebooks.map((eb, i) => (
                        <div
                            key={eb.id}
                            style={{
                                background: 'rgba(255,251,235,0.04)',
                                border: '1px solid rgba(255,251,235,0.09)',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'border-color 0.2s',
                            }}
                        >
                            {/* Cover */}
                            <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                                <Image src={eb.image} alt={eb.title} fill sizes="300px" style={{ objectFit: 'cover', opacity: 0.85 }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,4,0,0.7) 0%, transparent 60%)' }} />
                                {/* Number badge */}
                                <div style={{ position: 'absolute', top: '0.625rem', left: '0.625rem', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(10,4,0,0.7)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</span>
                                </div>
                                <span style={{ position: 'absolute', top: '0.625rem', right: '0.625rem', backgroundColor: eb.tagColor, color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.52rem', letterSpacing: '0.08em' }}>
                                    {eb.tag}
                                </span>
                            </div>

                            {/* Body */}
                            <div style={{ padding: '1rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: '#FFFBEB', lineHeight: 1.25 }}>{eb.title}</p>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,251,235,0.45)', lineHeight: 1.5 }}>{eb.subtitle}</p>
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'rgba(255,251,235,0.3)', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                                    {eb.count} receitas · PDF
                                </p>
                                {/* Download button */}
                                <a
                                    href={eb.downloadPath}
                                    download
                                    style={{
                                        marginTop: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        background: 'linear-gradient(135deg,#C2410C,#9A3412)',
                                        color: '#FFFFFF',
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 700,
                                        fontSize: '0.875rem',
                                        padding: '0.625rem 1rem',
                                        borderRadius: '0.625rem',
                                        textDecoration: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <DownloadIcon />
                                    Baixar PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support footer note */}
                <p style={{ textAlign: 'center', marginTop: '3rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em', color: 'rgba(255,251,235,0.28)', textTransform: 'uppercase' }}>
                    Problemas com o download?{' '}
                    <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'rgba(255,251,235,0.5)', textDecoration: 'underline' }}>
                        {SUPPORT_EMAIL}
                    </a>
                </p>
            </div>
        </div>
    );
}
