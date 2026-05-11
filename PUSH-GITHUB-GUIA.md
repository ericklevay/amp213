# 📤 Guia: Push AMP 213 para GitHub

Seu projeto está em: `~/amp213-website`

## Passo 1: Abrir Terminal e ir para pasta do projeto

```bash
cd ~/amp213-website
```

## Passo 2: Verificar se Git está configurado

```bash
git config --global user.name
git config --global user.email
```

Se não aparecer nada, configure:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

## Passo 3: Inicializar repositório Git

```bash
git init
```

## Passo 4: Adicionar repositório remoto (GitHub)

```bash
git remote add origin https://github.com/ericklevay/amp213.git
```

Para verificar se funcionou:
```bash
git remote -v
```

## Passo 5: Adicionar todos os arquivos

```bash
git add .
```

## Passo 6: Fazer commit

```bash
git commit -m "Initial commit: AMP 213 website com Next.js, Tailwind e homepage completa"
```

## Passo 7: Fazer push para GitHub

```bash
git branch -M main
git push -u origin main
```

---

## ✅ Pronto!

Seu site está em: **https://github.com/ericklevay/amp213**

---

## 📝 Próximas ações (depois do push)

### Deploy no Vercel (Recomendado para Next.js)

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione o repositório `amp213`
5. Clique em "Deploy"

Vercel faz build automático a cada push! 🚀

### Deploy em outro lugar

Se preferir outro serviço (Netlify, AWS, etc), o comando de build é:
```bash
npm run build
```

E para rodar em produção:
```bash
npm run start
```

---

## 🆘 Problemas?

### Erro: "Permission denied" ou "Authentication failed"

Você precisa configurar autenticação com GitHub. Opções:

**Opção A: Token de acesso pessoal**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Gere um novo token com permissão `repo`
3. Ao fazer push, use o token como senha

**Opção B: SSH (melhor)**
1. Gere chave SSH:
   ```bash
   ssh-keygen -t ed25519 -C "seu@email.com"
   ```
2. Adicione a chave pública em GitHub → Settings → SSH Keys
3. Use URL SSH no git remote:
   ```bash
   git remote set-url origin git@github.com:ericklevay/amp213.git
   ```

---

## 📁 Estrutura do Projeto

```
amp213-website/
├── app/
│   ├── layout.jsx          # Layout raiz
│   ├── page.jsx            # Homepage
│   └── globals.css         # Tailwind
├── components/             # Componentes React
├── public/                 # Imagens e assets
├── node_modules/           # Dependências (não vai no GitHub)
├── package.json
├── next.config.js
├── tailwind.config.js
├── .gitignore             # node_modules, .next já está aqui
└── README.md
```

---

## 🎨 Customizações (para depois)

Se quiser adicionar:
- Mais páginas: Crie arquivos em `app/`
- Componentes: Coloque em `app/components/`
- Imagens: Coloque em `public/`
- Cores/Fonts: Edite `tailwind.config.js`

Qualquer mudança, faça:
```bash
git add .
git commit -m "descrição da mudança"
git push
```

---

**Sucesso! 🚀**
