#!/bin/bash

echo "🚀 AMP 213 - Setup Git & Deploy"
echo "================================"

# 1. NPM Install
echo ""
echo "📦 Instalando dependências..."
npm install

# 2. Build test
echo ""
echo "🔨 Testando build..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build falhou. Verifique os erros acima."
  exit 1
fi

# 3. Git setup
echo ""
echo "🔧 Configurando Git..."

if [ ! -d ".git" ]; then
  git init
  echo "✅ Repositório Git inicializado"
else
  echo "✅ Repositório Git já existe"
fi

# 4. Adicionar todos os arquivos
echo ""
echo "📝 Adicionando arquivos..."
git add .

# 5. Commit
echo ""
echo "💾 Fazendo commit..."
git commit -m "Redesign sofisticado AMP 213 - Playfair Display + Lora typography, novo design premium"

# 6. Instruções para push
echo ""
echo "✅ Tudo pronto!"
echo ""
echo "📌 PRÓXIMOS PASSOS:"
echo ""
echo "1️⃣  Se ainda não tem repositório remoto:"
echo "   git remote add origin https://github.com/ericklevay/amp213.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "2️⃣  Se já tem repositório remoto:"
echo "   git push"
echo ""
echo "3️⃣  Deploy no Vercel:"
echo "   - Acesse https://vercel.com"
echo "   - Conecte seu GitHub"
echo "   - Selecione o repositório amp213"
echo "   - Deploy automático!"
echo ""
