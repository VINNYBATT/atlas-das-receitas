import Link from 'next/link';

const footerLinks = [
    { label: 'Ebooks', href: '#ebooks' },
    { label: 'Coleção Completa', href: '/colecao-completa' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Política de Reembolso', href: '/politica-de-reembolso' },
    { label: 'Suporte', href: '/suporte' },
];

export function Footer() {
    return (
        <footer
            className="section"
            style={{ backgroundColor: 'var(--color-foreground)', color: 'var(--color-on-primary)' }}
        >
            <div className="container">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                >
                    {/* Brand */}
                    <div className="max-w-xs">
                        <p
                            className="text-2xl font-bold tracking-tight mb-2"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}
                        >
                            Atlas das Receitas
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            A coleção definitiva de culinária premium. Receitas autênticas, técnicas profissionais
                            e sabores que transformam a cozinha em arte.
                        </p>
                    </div>

                    {/* Links */}
                    <nav aria-label="Rodapé">
                        <p className="label mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Navegação</p>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm no-underline transition-opacity hover:opacity-100"
                                        style={{ color: 'rgba(255,255,255,0.55)' }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA */}
                    <div className="flex flex-col gap-3 max-w-xs">
                        <p className="label" style={{ color: 'rgba(255,255,255,0.35)' }}>Comece agora</p>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Acesse a coleção completa e transforme sua cozinha.
                        </p>
                        <a href="#bundle" className="btn btn-accent btn-lg mt-1 cursor-pointer">
                            Ver Coleção Completa
                        </a>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        © {new Date().getFullYear()} Atlas das Receitas. Todos os direitos reservados.
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        Feito com amor e muito sabor 🍳
                    </p>
                </div>
            </div>
        </footer>
    );
}
