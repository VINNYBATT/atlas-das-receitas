import { SUPPORT_EMAIL } from '../../lib/constants';

export const metadata = {
    title: 'Obrigado pela sua compra!',
    description: 'Sua compra foi confirmada. Acesse seus ebooks agora.',
    robots: { index: false, follow: false },
};

function CheckCircle() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="40" r="40" fill="rgba(154,52,18,0.12)" />
            <circle cx="40" cy="40" r="32" fill="rgba(154,52,18,0.12)" stroke="rgba(154,52,18,0.4)" strokeWidth="1.5" />
            <path d="M27 41l9 9 17-18" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function ObrigadoPage() {
    return (
        <div
            style={{
                minHeight: '100dvh',
                backgroundColor: 'var(--color-background)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '5rem',
                paddingBottom: '5rem',
            }}
        >
            <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>

                {/* Check icon */}
                <div style={{ marginBottom: '2rem' }}>
                    <CheckCircle />
                </div>

                {/* Eyebrow */}
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                    Compra confirmada
                </p>

                {/* Heading */}
                <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                    Obrigado pela sua compra!
                </h1>

                {/* Message */}
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted-fg)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                    Seu pagamento foi confirmado com sucesso. Seus <strong style={{ color: 'var(--color-foreground)' }}>22 ebooks</strong> estão prontos para download.
                    Você também receberá um e-mail com o link de acesso.
                </p>

                {/* Primary CTA */}
                <a
                    href="/downloads"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'linear-gradient(135deg,#C2410C,#9A3412)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        padding: '1rem 2.5rem',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 24px rgba(154,52,18,0.4)',
                        marginBottom: '1.5rem',
                    }}
                >
                    Acessar meus downloads →
                </a>

                {/* Divider */}
                <div style={{ borderTop: '1px solid var(--color-border)', margin: '2rem 0' }} />

                {/* What's next */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                    {[
                        { icon: '📩', title: 'Verifique seu e-mail', desc: 'Enviamos a confirmação e o link de acesso.' },
                        { icon: '📥', title: 'Baixe seus ebooks', desc: 'Acesse /downloads e baixe todos os 22 arquivos.' },
                        { icon: '🍳', title: 'Comece a cozinhar', desc: 'Escolha uma receita e mãos à obra!' },
                    ].map(s => (
                        <div key={s.title} style={{ backgroundColor: 'var(--color-muted)', border: '1px solid var(--color-border)', borderRadius: '1rem', padding: '1.25rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.625rem' }}>{s.icon}</div>
                            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-foreground)', marginBottom: '0.35rem' }}>{s.title}</p>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-muted-fg)', lineHeight: 1.5 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Support */}
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-muted-fg)', lineHeight: 1.6 }}>
                    Precisa de ajuda?{' '}
                    <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                        {SUPPORT_EMAIL}
                    </a>
                </p>
            </div>
        </div>
    );
}
