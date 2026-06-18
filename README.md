# Atlas das Receitas

A coleção definitiva de 22 ebooks de culinária brasileira — 1.400+ receitas testadas e aprovadas.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · Framer Motion · Vercel

---

## Deploy no Vercel (passo a passo)

### 1. Suba o projeto no GitHub

1. Acesse [github.com/new](https://github.com/new) e crie um repositório chamado `atlas-das-receitas`
2. Marque como **Privado**
3. Não inicialize com README
4. Na sua máquina, descompacte o ZIP e rode:

```bash
cd atlas-das-receitas
git init
git add .
git commit -m "feat: Atlas das Receitas — build inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/atlas-das-receitas.git
git push -u origin main
```

### 2. Importe no Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **"Import Git Repository"**
3. Selecione o repositório `atlas-das-receitas`
4. Em **Framework Preset**, selecione **Next.js** (detectado automaticamente)
5. Clique em **Deploy** — sem variáveis de ambiente necessárias por enquanto

O deploy leva ~2 minutos. A URL do projeto será algo como `atlas-das-receitas.vercel.app`.

---

## Atualizar o link de checkout (Cakto)

Quando tiver a URL real do Cakto, edite **apenas este arquivo**:

```
lib/constants.js
```

Troque a linha:
```js
export const CHECKOUT_URL = 'https://cakto.com.br/checkout-placeholder';
```

Pelo link real, salve, faça commit e push — o Vercel faz o redeploy automaticamente.

---

## Conectar o domínio atlasdasreceitas.com.br (Registro.br)

### No Vercel

1. Acesse seu projeto → **Settings → Domains**
2. Clique em **Add Domain**
3. Digite: `atlasdasreceitas.com.br` e também `www.atlasdasreceitas.com.br`
4. O Vercel vai mostrar os registros DNS que você precisa criar

### No Registro.br

1. Acesse [registro.br](https://registro.br) e faça login
2. Clique no domínio `atlasdasreceitas.com.br` → **DNS**
3. Adicione os seguintes registros (os valores exatos aparecem no painel Vercel):

| Tipo | Nome | Valor |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

4. Aguarde até 48h para propagação (normalmente <1h)

---

## Estrutura do projeto

```
atlas-das-receitas/
├── app/
│   ├── page.jsx                    # Homepage
│   ├── layout.jsx                  # Layout global + SEO
│   ├── colecao-completa/page.jsx   # Página de vendas da coleção
│   ├── downloads/page.jsx          # Área de downloads (pós-compra)
│   ├── obrigado/page.jsx           # Página de obrigado
│   ├── termos/page.jsx             # Termos de uso
│   ├── politica-de-reembolso/      # Política de reembolso
│   └── suporte/page.jsx            # Suporte ao cliente
├── components/
│   ├── hero.jsx                    # Hero cinematic com mockups
│   ├── ebooks-section.jsx          # Grid dos 22 ebooks
│   ├── bundle-section.jsx          # Seção da coleção completa
│   ├── testimonials-section.jsx    # Depoimentos
│   ├── guarantee-section.jsx       # Garantia de 7 dias
│   └── final-cta-section.jsx       # CTA final
├── data/
│   ├── ebooks.js                   # Dados dos 22 ebooks
│   └── testimonials.js             # Depoimentos
├── lib/
│   └── constants.js                # ← CHECKOUT_URL, preços, domínio
├── styles/
│   └── globals.css                 # Design tokens, Tailwind v4
├── vercel.json                     # Configuração de deploy
└── package.json
```

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Suporte

suporte@atlasdasreceitas.com.br
