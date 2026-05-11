#!/bin/bash

echo "=========================================="
echo "AMP 213 - Push para GitHub"
echo "=========================================="
echo ""

PROJECT_DIR="$HOME/amp213-website"

# Validar pasta existe
if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ Erro: Pasta $PROJECT_DIR não encontrada"
    exit 1
fi

cd "$PROJECT_DIR"

echo "📁 Projeto: $PROJECT_DIR"
echo ""

# Verificar Git config
echo "🔐 Verificando configuração Git..."

GIT_USER=$(git config --global user.name)
GIT_EMAIL=$(git config --global user.email)

if [ -z "$GIT_USER" ] || [ -z "$GIT_EMAIL" ]; then
    echo "⚠️  Git não configurado globalmente"
    echo ""
    echo "Execute para configurar:"
    echo "  git config --global user.name 'Seu Nome'"
    echo "  git config --global user.email 'seu@email.com'"
    echo ""
    read -p "Pressione Enter para continuar mesmo assim, ou Ctrl+C para cancelar..."
else
    echo "✅ Configurado como: $GIT_USER <$GIT_EMAIL>"
fi

echo ""
echo "📤 Iniciando processo de push..."
echo ""

# 1. Git init
if [ ! -d ".git" ]; then
    echo "1️⃣  Inicializando repositório Git..."
    git init
    echo "   ✅ Git repositório criado"
else
    echo "1️⃣  Repositório Git já existe"
fi

echo ""

# 2. Adicionar remote
echo "2️⃣  Adicionando remote GitHub..."
if git remote get-url origin &>/dev/null; then
    echo "   ⚠️  Remote já existe:"
    git remote -v
    read -p "Deseja continuar com este remote? (s/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Ss]$ ]]; then
        echo "   ❌ Cancelado"
        exit 1
    fi
else
    git remote add origin https://github.com/ericklevay/amp213.git
    echo "   ✅ Remote adicionado: https://github.com/ericklevay/amp213.git"
fi

echo ""

# 3. Add files
echo "3️⃣  Adicionando arquivos..."
git add .
FILES_COUNT=$(git status --short | wc -l)
echo "   ✅ $FILES_COUNT arquivos adicionados"

echo ""

# 4. Commit
echo "4️⃣  Fazendo commit..."
if git diff --cached --quiet; then
    echo "   ⚠️  Nenhuma alteração para fazer commit"
else
    git commit -m "chore: setup inicial AMP 213 website - Next.js + Tailwind + Homepage"
    echo "   ✅ Commit criado"
fi

echo ""

# 5. Branch
echo "5️⃣  Configurando branch main..."
git branch -M main
echo "   ✅ Branch renomeada para main"

echo ""

# 6. Push
echo "6️⃣  Fazendo push para GitHub..."
echo "   ⚠️  Se pedir autenticação, use:"
echo "   - GitHub token OU"
echo "   - SSH key"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "✅ SUCESSO!"
    echo "=========================================="
    echo ""
    echo "🎉 Projeto enviado para GitHub!"
    echo ""
    echo "📍 URL: https://github.com/ericklevay/amp213"
    echo ""
    echo "🚀 Próximas ações:"
    echo "   1. Abra https://github.com/ericklevay/amp213"
    echo "   2. Deploy no Vercel (recomendado):"
    echo "      https://vercel.com/new"
    echo ""
else
    echo ""
    echo "=========================================="
    echo "❌ ERRO no push"
    echo "=========================================="
    echo ""
    echo "Possíveis soluções:"
    echo ""
    echo "1️⃣  Verificar credenciais:"
    echo "   git config --global user.name"
    echo "   git config --global user.email"
    echo ""
    echo "2️⃣  Verificar remote:"
    echo "   git remote -v"
    echo ""
    echo "3️⃣  Verificar se repositório existe em GitHub:"
    echo "   https://github.com/ericklevay/amp213"
    echo ""
    echo "4️⃣  Usar SSH em vez de HTTPS:"
    echo "   git remote set-url origin git@github.com:ericklevay/amp213.git"
    echo "   git push -u origin main"
    echo ""
    exit 1
fi
