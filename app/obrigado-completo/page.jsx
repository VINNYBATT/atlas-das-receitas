import { SUPPORT_EMAIL } from '../../lib/constants';

export const metadata = {
    title: 'Compra Aprovada — Coleção Completa | Atlas das Receitas',
    description: 'Sua Coleção Completa está pronta para download.',
    robots: { index: false, follow: false },
};

const EBOOKS = [
    { id: 1,  title: '300 Receitas Virais do Brasil' },
    { id: 2,  title: 'Emagrecimento Inteligente' },
    { id: 3,  title: 'High Protein' },
    { id: 4,  title: 'Marmitas Fit' },
    { id: 5,  title: 'Air Fryer Master' },
    { id: 6,  title: 'Low Carb Definitivo' },
    { id: 7,  title: 'Keto Fácil' },
    { id: 8,  title: 'Vegano Sem Complicação' },
    { id: 9,  title: 'Vida Sem Glúten' },
    { id: 10, title: 'Receitas Sem Lactose' },
    { id: 11, title: 'Receitas para Diabéticos' },
    { id: 12, title: 'Cozinha Econômica' },
    { id: 13, title: 'Bartender em Casa' },
    { id: 14, title: 'Barista em Casa' },
    { id: 15, title: 'Alta Gastronomia' },
    { id: 16, title: 'Doces que Viralizaram' },
    { id: 17, title: '15 Minutos na Cozinha' },
    { id: 18, title: 'Cozinha Vegetariana' },
    { id: 19, title: 'Ganho de Massa' },
    { id: 20, title: 'O Mundo em um Copo' },
    { id: 21, title: 'Saúde à Mesa' },
    { id: 22, title: 'Para Quem Odeia Cozinhar' },
];

export default function ObrigadoCompletoPage() {
    return (
        <div
            style={{
                minHeight: '100dvh',
                backgroundColor: 'var(--color-background)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6rem 1.25rem 4rem',
            }}
        >
            <div style={{ width: '100%', maxWidth: '640px' }}>
                <div
                    style={{
                        background: 'linear-gradient(155deg, #1A0A00 0%, #120600 100%)',
                        border: '1px solid rgba(217,119,6,0.22)',
                        borderRadius: '1.5rem',
                        padding: 'clamp(2rem, 5vw, 3rem)',
                        boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '3rem', lineHeight: 1 }}>🎉</span>
                    </div>

                    <p style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                        Coleção Completa
                    </p>

                    <h1 style={{ textAlign: 'center', fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '0.875rem' }}>
                        Compra aprovada!
                    </h1>

                    <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', color: 'var(--color-muted-fg)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                        Sua <strong style={{ color: 'var(--color-foreground)' }}>Coleção Completa</strong> está pronta.
                        Acesse todos os 22 ebooks agora mesmo.
                    </p>

                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <a
                            href="/downloads"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'linear-gradient(135deg, #C2410C 0%, #9A3412 100%)',
                                color: '#FFFFFF',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                padding: '1rem 2.5rem',
                                borderRadius: '0.75rem',
                                textDecoration: 'none',
                                boxShadow: '0 4px 24px rgba(154,52,18,0.45)',
                            }}
                        >
                            Baixar Coleção Completa →
                        </a>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(217,119,6,0.15)', marginBottom: '1.75rem' }} />

                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(253,211,77,0.6)', marginBottom: '1rem' }}>
                        22 ebooks incluídos
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
                            gap: '0.5rem',
                        }}
                    >
                        {EBOOKS.map((eb) => (
                            <div
                                key={eb.id}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.625rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(217,119,6,0.12)',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 0.75rem',
                                }}
                            >
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-primary)', minWidth: '1.5rem' }}>
                                    {String(eb.id).padStart(2, '0')}
                                </span>
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-foreground)' }}>
                                    {eb.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div style={{ borderTop: '1px solid rgba(217,119,6,0.15)', margin: '1.75rem 0 1.25rem' }} />

                    <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted-fg)', lineHeight: 1.6 }}>
                        Precisa de ajuda?{' '}
                        <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                            {SUPPORT_EMAIL}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
