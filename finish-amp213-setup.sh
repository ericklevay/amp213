#!/bin/bash
set -e

echo "=========================================="
echo "AMP 213 Website - Finalizando Setup"
echo "=========================================="

# Diretório do projeto
PROJECT_DIR="$HOME/amp213-website"

echo ""
echo "📁 Preparando projeto em: $PROJECT_DIR"

# Criar diretório se não existir
mkdir -p "$PROJECT_DIR"

# Copiar arquivos do outputs (onde Claude extraiu o zip)
OUTPUTS_DIR="$HOME/Library/Application Support/Claude/local-agent-mode-sessions/ffcd042f-0611-48f3-a73f-d7f607849fac/b623363a-6c03-4dc2-9647-726053d17db1/local_425e5e5f-9850-4b5a-b676-1e8a1e94f662/outputs/amp213-website"

if [ -d "$OUTPUTS_DIR" ]; then
    echo "✅ Fonte encontrada: $OUTPUTS_DIR"

    # Copiar arquivos
    echo "📋 Copiando arquivos..."
    cp -r "$OUTPUTS_DIR"/* "$PROJECT_DIR/" 2>/dev/null || true
    cp -r "$OUTPUTS_DIR"/.* "$PROJECT_DIR/" 2>/dev/null || true

    echo "✅ Arquivos copiados"
else
    echo "⚠️  Pasta de origem não encontrada. Assumindo que o projeto já está em $PROJECT_DIR"
fi

cd "$PROJECT_DIR"

echo ""
echo "🔨 npm run build (pode levar 1-2 minutos)..."
npm run build

echo ""
echo "✅ Build completada com sucesso!"

# Git setup
echo ""
echo "📤 Configurando Git e fazendo push..."

# Verificar se está num repositório git
if [ ! -d ".git" ]; then
    echo "Inicializando repositório git..."
    git init
    git remote add origin https://github.com/ericklevay/amp213.git || true
fi

# Adicionar arquivos
git add .

# Fazer commit
if ! git diff --cached --quiet; then
    git commit -m "chore: setup inicial do projeto AMP 213 website"
else
    echo "Sem alterações para fazer commit"
fi

# Push
echo "Enviando para GitHub..."
git push -u origin main || git push -u origin master || echo "⚠️  Não conseguiu fazer push. Verifique se o repositório exists e suas credenciais."

echo ""
echo "=========================================="
echo "✅ SETUP COMPLETO!"
echo "=========================================="
echo ""
echo "📍 Projeto: $PROJECT_DIR"
echo "🌐 Para testar: npm run dev"
echo "📦 Para build: npm run build"
echo "🚀 Para produção: npm run start"
echo ""
