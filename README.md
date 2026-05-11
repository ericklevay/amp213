# 🏛️ AMP 213 - Website

> Espaço multicultural e histórico para eventos em Olinda, PE

**AMP 213** é o website oficial da casa de eventos e buffet premium localizada no Sítio Histórico de Olinda, em um casarão colonial do século 17.

🌐 **Website:** [amp213.com.br](https://amp213.com.br)  
📱 **WhatsApp:** [81 99197-5967](https://wa.me/5581991975967)  
📸 **Instagram:** [@amp.213](https://instagram.com/amp.213)  
📍 **Endereço:** Rua do Amparo, 213 - Olinda, PE

---

## ✨ Features

- ✅ Homepage responsiva e moderna
- ✅ Design premium com cores customizadas
- ✅ Otimizado para SEO
- ✅ Integração WhatsApp e Instagram
- ✅ Performance otimizada (Next.js)
- ✅ Dark mode ready

---

## 🏗️ Estrutura do Projeto

```
amp213-website/
├── app/
│   ├── layout.jsx          # Layout raiz com metadata
│   ├── page.jsx            # Homepage
│   └── globals.css         # Estilos globais (Tailwind)
├── components/             # Componentes React reutilizáveis
├── public/                 # Imagens e assets estáticos
├── styles/                 # Estilos customizados
├── lib/                    # Utilitários e helpers
├── package.json            # Dependências
├── next.config.js          # Configuração Next.js
├── tailwind.config.js      # Tema customizado AMP 213
├── postcss.config.js       # PostCSS config
└── .gitignore              # Arquivos ignorados no Git
```

---

## 🛠️ Tech Stack

| Tecnologia | Versão | Descrição |
|---|---|---|
| **Next.js** | 14.0.0 | Framework React com SSR/SSG |
| **React** | 18.2.0 | Biblioteca UI |
| **Tailwind CSS** | 3.3.5 | Framework CSS utilitário |
| **Lucide React** | 0.263.1 | Ícones SVG |
| **Node.js** | 18+ | Runtime JavaScript |

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ericklevay/amp213.git
cd amp213-website

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor em localhost:3000

# Produção
npm run build        # Build otimizado para produção
npm run start        # Inicia servidor de produção

# Qualidade de código
npm run lint         # Verifica linting com ESLint
```

---

## 🎨 Customização

### Cores Customizadas

As cores do AMP 213 estão configuradas em `tailwind.config.js`:

```javascript
{
  'amp-green': '#556B2F',    // Verde principal
  'amp-brown': '#5D4037',    // Marrom
  'amp-beige': '#F5F1DE',    // Bege
  'amp-gold': '#C9A961'      // Dourado
}
```

Use as cores nos componentes:
```jsx
<div className="bg-amp-green text-amp-beige">
  AMP 213
</div>
```

### Fonts

Configuradas em `app/globals.css` e `tailwind.config.js`:
- **Serif:** Georgia (headings)
- **Sans:** Sistema padrão (body)

---

## 📱 Responsividade

O projeto é **100% responsivo** usando Tailwind CSS breakpoints:

```jsx
<div className="
  text-sm sm:text-base md:text-lg lg:text-xl
  px-4 sm:px-6 md:px-8 lg:px-12
">
  Responsive content
</div>
```

---

## 🌍 Deploy

### Vercel (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione o repositório `amp213`
5. Deploy automático a cada push!

### Outras plataformas

```bash
# Build para produção
npm run build

# Servir localmente
npm run start
```

---

## 📊 Páginas e Rotas

| Rota | Arquivo | Descrição |
|---|---|---|
| `/` | `app/page.jsx` | Homepage |

Para adicionar novas páginas, crie arquivos em `app/`:
```
app/
├── about/
│   └── page.jsx      → /about
├── eventos/
│   └── page.jsx      → /eventos
└── contato/
    └── page.jsx      → /contato
```

---

## 🔗 Integração External

### WhatsApp
```jsx
<a href="https://wa.me/5581991975967">
  Fale conosco no WhatsApp
</a>
```

### Instagram
```jsx
<a href="https://instagram.com/amp.213">
  Siga @amp.213
</a>
```

---

## 📈 SEO

Metadata configurada em `app/layout.jsx`:

```javascript
export const metadata = {
  title: 'AMP 213 - Eventos em Olinda',
  description: 'Casa de eventos premium no Sítio Histórico de Olinda, PE'
}
```

Para adicionar Open Graph meta tags:
```javascript
export const metadata = {
  openGraph: {
    title: 'AMP 213',
    images: ['/og-image.jpg']
  }
}
```

---

## 🐛 Issues e Bugs

Encontrou um bug? Abra uma [issue no GitHub](https://github.com/ericklevay/amp213/issues).

---

## 📝 Roadmap

- [ ] Galeria de eventos (portfolio)
- [ ] Blog com artigos sobre eventos
- [ ] Sistema de reservas online
- [ ] Dashboard administrativo
- [ ] Multi-idioma (PT/EN)
- [ ] Analytics e tracking

---

## 📄 Licença

Este projeto é privado. Todos os direitos reservados © 2024 AMP 213.

---

## 👨‍💻 Autor

**Erick Levay**
- 📧 Email: erick@levay.com.br
- 💼 LinkedIn: [linkedin.com/in/ericklevay](https://linkedin.com/in/ericklevay)
- 🐙 GitHub: [github.com/ericklevay](https://github.com/ericklevay)

---

## 📞 Contato

Para dúvidas sobre o projeto:
- 📱 WhatsApp: [81 99197-5967](https://wa.me/5581991975967)
- 📧 Email: erick@levay.com.br

---

**Made with ❤️ para AMP 213**
