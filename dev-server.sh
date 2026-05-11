#!/bin/bash

echo "=========================================="
echo "AMP 213 Website - Dev Server"
echo "=========================================="

PROJECT_DIR="$HOME/amp213-website"

# Criar diretório se não existir
mkdir -p "$PROJECT_DIR"

# Copiar arquivos se não estiverem lá
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    echo "📁 Copiando arquivos do projeto..."
    OUTPUTS_DIR="$HOME/Library/Application Support/Claude/local-agent-mode-sessions/ffcd042f-0611-48f3-a73f-d7f607849fac/b623363a-6c03-4dc2-9647-726053d17db1/local_425e5e5f-9850-4b5a-b676-1e8a1e94f662/outputs/amp213-website"

    if [ -d "$OUTPUTS_DIR" ]; then
        cp -r "$OUTPUTS_DIR"/* "$PROJECT_DIR/" 2>/dev/null || true
        cp -r "$OUTPUTS_DIR"/.* "$PROJECT_DIR/" 2>/dev/null || true
        echo "✅ Arquivos copiados"
    fi
fi

cd "$PROJECT_DIR"

# Instalar dependências se node_modules não existir
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 Instalando dependências (pode levar 2-3 minutos)..."
    npm install
fi

echo ""
echo "🌐 Iniciando servidor de desenvolvimento..."
echo ""
echo "=========================================="
echo "✨ SERVIDOR INICIADO!"
echo "=========================================="
echo ""
echo "📍 URL: http://localhost:3000"
echo ""
echo "Pressione Ctrl+C para parar o servidor"
echo ""

npm run dev
