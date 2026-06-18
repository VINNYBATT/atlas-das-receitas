import '../styles/globals.css';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { SITE_URL } from '../lib/constants';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        template: '%s | Atlas das Receitas',
        default: 'Atlas das Receitas — 22 Ebooks de Culinária | 1400+ Receitas',
    },
    description:
        'A coleção definitiva de ebooks de culinária. 22 ebooks, mais de 1.400 receitas — saudável, air fryer, marmitas, doces, low carb e muito mais. Acesso imediato por R$97,90.',
    keywords: [
        'ebooks culinária', 'receitas saudáveis', 'air fryer receitas', 'marmitas fit',
        'receitas low carb', 'ebooks digitais', 'coleção receitas', 'atlas das receitas',
    ],
    authors: [{ name: 'Atlas das Receitas', url: SITE_URL }],
    openGraph: {
        title: 'Atlas das Receitas — 22 Ebooks · 1400+ Receitas',
        description: '22 ebooks de culinária por apenas R$97,90. Acesso imediato. Garantia de 7 dias.',
        siteName: 'Atlas das Receitas',
        locale: 'pt_BR',
        type: 'website',
        url: SITE_URL,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Atlas das Receitas — 22 Ebooks · 1400+ Receitas',
        description: '22 ebooks de culinária por apenas R$97,90.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    alternates: {
        canonical: SITE_URL,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>
                <Nav />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
