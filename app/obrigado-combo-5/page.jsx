export const metadata = {
    title: 'Compra Aprovada — Combo Premium | Atlas das Receitas',
    description: 'Escolha os 5 ebooks do seu Combo Premium.',
    robots: { index: false, follow: false },
};

const EBOOKS = [
    '300 Receitas Virais do Brasil',
    'Emagrecimento Inteligente',
    'High Protein',
    'Marmitas Fit',
    'Air Fryer Master',
    'Low Carb Definitivo',
    'Keto Fácil',
    'Vegano Sem Complicação',
    'Vida Sem Glúten',
    'Receitas Sem Lactose',
    'Receitas para Diabéticos',
    'Cozinha Econômica',
    'Bartender em Casa',
    'Barista em Casa',
    'Alta Gastronomia',
    'Doces que Viralizaram',
    '15 Minutos na Cozinha',
    'Cozinha Vegetariana',
    'Ganho de Massa',
    'O Mundo em um Copo',
    'Saúde à Mesa',
    'Para Quem Odeia Cozinhar',
];

const selectStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.625rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(217,119,6,0.25)',
    color: 'var(--color-foreground)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
};

const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.625rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(217,119,6,0.25)',
    color: 'var(--color-foreground)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
};

const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(253,211,77,0.7)',
    marginBottom: '0.45rem',
};

export default function ObrigadoCombo5Page() {
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
            <div style={{ width: '100%', maxWidth: '560px' }}>
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
                        Combo Premium
                    </p>

                    <h1 style={{ textAlign: 'center', fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '0.875rem' }}>
                        Compra aprovada!
                    </h1>

                    <p style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', color: '#FCD34D', marginBottom: '0.75rem' }}>
                        Escolha os 5 ebooks que deseja receber.
                    </p>

                    <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', color: 'var(--color-muted-fg)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                        Preencha o formulário abaixo com o mesmo e-mail usado na compra.
                        Enviaremos seus ebooks por e-mail em até 24 horas.
                    </p>

                    <div style={{ borderTop: '1px solid rgba(217,119,6,0.15)', marginBottom: '2rem' }} />

                    <form
                        action="https://formsubmit.co/suporte@atlasdasreceitas.com.br"
                        method="POST"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                    >
                        <input type="hidden" name="_subject" value="Nova seleção Combo Premium - Atlas das Receitas" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="/obrigado" />

                        <div>
                            <label style={labelStyle} htmlFor="nome">Nome</label>
                            <input
                                id="nome"
                                type="text"
                                name="nome"
                                required
                                placeholder="Seu nome completo"
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={labelStyle} htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                placeholder="mesmo e-mail da compra"
                                style={inputStyle}
                            />
                        </div>

                        {[1, 2, 3, 4, 5].map((n) => (
                            <div key={n}>
                                <label style={labelStyle} htmlFor={`ebook${n}`}>Ebook {n}</label>
                                <select id={`ebook${n}`} name={`ebook${n}`} required style={selectStyle}>
                                    <option value="" disabled selected>Selecione um ebook…</option>
                                    {EBOOKS.map((e) => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                            </div>
                        ))}

                        <button
                            type="submit"
                            style={{
                                marginTop: '0.5rem',
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                background: 'linear-gradient(135deg, #C2410C 0%, #9A3412 100%)',
                                color: '#FFFFFF',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 24px rgba(154,52,18,0.45)',
                            }}
                        >
                            Enviar seleção →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
