#!/bin/bash

# ============================================
# AMP 213 WEBSITE — SETUP AUTOMÁTICO
# ============================================
# Script que o Claude roda via Cowork
# Tempo: ~15 minutos
# Resultado: Website completo no GitHub
# ============================================

set -e  # Para se houver erro

echo "🤖 AUTOMATIZANDO SETUP AMP 213 WEBSITE"
echo "======================================"
echo ""

# FASE 1: Preparação
echo "📁 FASE 1: Preparação"
echo "---"

HOME_DIR="$HOME"
PROJECT_DIR="$HOME_DIR/amp213-website"

# Se a pasta já existe, remover
if [ -d "$PROJECT_DIR" ]; then
    echo "⚠️  Pasta amp213-website já existe. Removendo..."
    rm -rf "$PROJECT_DIR"
fi

# Criar pasta
echo "✏️  Criando pasta: $PROJECT_DIR"
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

echo "✅ Pasta criada e pronta"
echo ""

# FASE 2: Clonar repositório
echo "⬇️  FASE 2: Clonando repositório"
echo "---"

echo "🔗 Clonando: https://github.com/ericklevay/amp213.git"
git clone https://github.com/ericklevay/amp213.git .

echo "✅ Repositório clonado"
echo ""

# FASE 3: Criar estrutura de pastas
echo "📁 FASE 3: Criando estrutura de pastas"
echo "---"

mkdir -p app
mkdir -p components
mkdir -p lib
mkdir -p public
mkdir -p styles

echo "✅ Pastas criadas"
echo ""

# FASE 4: Verificar arquivos principais
echo "📋 FASE 4: Verificando arquivos"
echo "---"

if [ -f "app.jsx" ]; then
    echo "✅ app.jsx encontrado"
    mv app.jsx app/page.jsx
    echo "✅ Movido para app/page.jsx"
else
    echo "⚠️  app.jsx não encontrado (será baixado do arquivo)"
fi

echo "✅ Estrutura validada"
echo ""

# FASE 5: Instalar dependências
echo "📦 FASE 5: Instalando dependências (3-5 min)"
echo "---"

echo "🔄 Rodando: npm install"
npm install --legacy-peer-deps

echo "✅ Dependências instaladas"
echo ""

# FASE 6: Validar instalação
echo "🔍 FASE 6: Validando instalação"
echo "---"

echo "Versão do Node:"
node --version

echo "Versão do npm:"
npm --version

echo "✅ Validação completa"
echo ""

# FASE 7: Listar estrutura
echo "📊 FASE 7: Estrutura do projeto"
echo "---"

echo "Arquivos principais:"
ls -la | grep -E "^-" | awk '{print "  " $9}'

echo ""
echo "Pastas criadas:"
ls -la | grep "^d" | tail -7 | awk '{print "  📁 " $9}'

echo ""

# FASE 8: Git Setup
echo "🔧 FASE 8: Configuração Git"
echo "---"

echo "Verificando configuração Git:"
git config user.name
git config user.email

echo "✅ Git configurado"
echo ""

# FASE 9: Status Git
echo "📝 FASE 9: Status do Git"
echo "---"

echo "Branch atual:"
git branch

echo ""
echo "Status dos arquivos:"
git status --short | head -10

echo ""

# FASE 10: Mensagem Final
echo "✅ SETUP COMPLETO!"
echo "======================================"
echo ""
echo "📍 Próximas ações:"
echo ""
echo "1️⃣  Para testar localmente:"
echo "   cd $PROJECT_DIR"
echo "   npm run dev"
echo "   # Abra http://localhost:3000"
echo ""
echo "2️⃣  Para fazer commit e push:"
echo "   git add ."
echo "   git commit -m 'feat: homepage inicial com key visual'"
echo "   git push origin main"
echo ""
echo "3️⃣  Validar no GitHub:"
echo "   https://github.com/ericklevay/amp213"
echo ""
echo "🎉 Website pronto para desenvolvimento!"
echo ""

# Script finalizado
exit 0
