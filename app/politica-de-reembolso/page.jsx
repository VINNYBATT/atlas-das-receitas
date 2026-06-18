import { SUPPORT_EMAIL } from '../../lib/constants';

export const metadata = {
    title: 'Política de Reembolso',
    description: 'Política de Reembolso e Garantia de 7 dias do Atlas das Receitas.',
};

const LAST_UPDATED = '18 de junho de 2025';

export default function PoliticaReembolsoPage() {
    const s = {
        h2: { fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: '1.3rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '0.75rem' },
        p: { fontFamily: 'var(--font-body)', color: 'var(--color-muted-fg)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' },
    };

    return (
        <div style={{ backgroundColor: 'var(--color-background)', paddingTop: '5rem', paddingBottom: '5rem' }}>
            <div className="container" style={{ maxWidth: '720px' }}>

                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '1rem' }}>Legal</p>
                <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontSize: 'clamp(1.75rem,3.5vw,2.75rem)', fontWeight: 900, marginBottom: '0.5rem' }}>Política de Reembolso</h1>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-muted-fg)', marginBottom: '3rem' }}>Última atualização: {LAST_UPDATED}</p>

                {/* Highlight box */}
                <div style={{ backgroundColor: 'rgba(154,52,18,0.06)', border: '1px solid rgba(154,52,18,0.2)', borderRadius: '1rem', padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-foreground)', marginBottom: '0.5rem' }}>Garantia de 7 dias — sem burocracia</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-muted-fg)', lineHeight: 1.7, margin: 0 }}>
                        Se não ficar satisfeito nos primeiros 7 dias após a compra, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicação.
                    </p>
                </div>

                <h2 style={s.h2}>1. Prazo para Solicitação</h2>
                <p style={s.p}>O cliente tem até <strong>7 dias corridos</strong> a partir da data de confirmação da compra para solicitar o reembolso, conforme o Código de Defesa do Consumidor (Lei nº 8.078/90, art. 49) e o Código Civil brasileiro.</p>

                <h2 style={s.h2}>2. Como Solicitar o Reembolso</h2>
                <p style={s.p}>Para solicitar o reembolso, envie um e-mail para <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--color-primary)' }}>{SUPPORT_EMAIL}</a> com o assunto <strong>"Reembolso"</strong> e informe o nome utilizado na compra e o e-mail do pedido.</p>
                <p style={s.p}>Você também pode solicitar diretamente pela plataforma Cakto, onde realizou a compra.</p>

                <h2 style={s.h2}>3. Prazo para Devolução do Valor</h2>
                <p style={s.p}>Após a confirmação da solicitação, o estorno é processado em até <strong>5 dias úteis</strong>. O prazo para o crédito aparecer na fatura depende da operadora do cartão ou da instituição financeira (normalmente 1–2 faturas para cartão de crédito; imediato para PIX).</p>

                <h2 style={s.h2}>4. Produtos Não Elegíveis</h2>
                <p style={s.p}>Não há exceções ao prazo de 7 dias — todos os pedidos realizados dentro do prazo são elegíveis ao reembolso total.</p>

                <h2 style={s.h2}>5. Contato</h2>
                <p style={s.p}>Dúvidas? <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--color-primary)' }}>{SUPPORT_EMAIL}</a> ou acesse nossa página de <a href="/suporte" style={{ color: 'var(--color-primary)' }}>Suporte</a>.</p>

                <div style={{ marginTop: '3rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="/termos" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Termos de Uso</a>
                    <a href="/suporte" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Suporte</a>
                </div>
            </div>
        </div>
    );
}
