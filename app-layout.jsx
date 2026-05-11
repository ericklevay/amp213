import './globals.css'

export const metadata = {
  title: 'AMP 213 - Eventos em Olinda',
  description: 'Casa de eventos premium no Sítio Histórico de Olinda, PE - Casarão colonial para eventos inesquecíveis',
  keywords: 'eventos, buffet, olinda, casamento, aniversário, empresa, sofisticado, clássico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800 font-body">
        {children}
      </body>
    </html>
  )
}
