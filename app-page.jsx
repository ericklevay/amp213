'use client'

import Link from 'next/link'
import { Phone, Instagram, Mail, MapPin, Calendar, Users } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-amp-green text-amp-beige py-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">AMP 213</h1>
            <p className="text-sm text-amp-beige/80">Eventos em Olinda</p>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#diferenciais" className="hover:text-amp-gold transition">Diferenciais</Link>
            <Link href="#contato" className="hover:text-amp-gold transition">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-amp-brown text-amp-beige py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
              Dê um AMP no seu evento!
            </h2>
            <p className="text-xl md:text-2xl mb-6 text-amp-beige/90">
              Espaço histórico e exclusivo no coração do Sítio Histórico de Olinda
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-lg">
              <MapPin className="w-6 h-6" />
              <p className="text-amp-beige/80">Rua do Amparo, 213 - Olinda, PE</p>
            </div>
          </div>

          {/* Destaque */}
          <div className="mt-12 bg-amp-beige/10 border-l-4 border-amp-gold p-6 rounded">
            <p className="text-amp-beige italic text-lg">
              Casarão colonial do século 17 transformado em espaço premium para seus momentos inesquecíveis
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-amp-beige">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-amp-brown text-center mb-12 font-serif">
            Por que escolher AMP 213?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition border-t-4 border-amp-green">
              <Calendar className="w-12 h-12 text-amp-green mb-4" />
              <h4 className="text-2xl font-bold text-amp-brown mb-3 font-serif">Histórico</h4>
              <p className="text-gray-700 leading-relaxed">
                Localizado em um casarão colonial do século 17, no coração do Sítio Histórico de Olinda. Cada evento é marcado pela memória e arquitetura única do espaço.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition border-t-4 border-amp-gold">
              <Users className="w-12 h-12 text-amp-gold mb-4" />
              <h4 className="text-2xl font-bold text-amp-brown mb-3 font-serif">Versátil</h4>
              <p className="text-gray-700 leading-relaxed">
                Salão Barroco (90m²), Quintal Secreto (450m²), Mezanino com madeira do século 19. Capacidade para até 300 pessoas em diferentes configurações.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition border-t-4 border-amp-brown">
              <Mail className="w-12 h-12 text-amp-brown mb-4" />
              <h4 className="text-2xl font-bold text-amp-brown mb-3 font-serif">Experiência</h4>
              <p className="text-gray-700 leading-relaxed">
                Equipe especializada, buffet premium, e atenção aos detalhes. Transformamos sua visão em realidade com profissionalismo e excelência.
              </p>
            </div>
          </div>

          {/* Tipos de eventos */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h4 className="text-2xl font-bold text-amp-brown mb-6 font-serif">Tipos de Eventos</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amp-green rounded-full"></span>
                <p className="text-gray-700">Casamentos</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amp-green rounded-full"></span>
                <p className="text-gray-700">Aniversários</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amp-green rounded-full"></span>
                <p className="text-gray-700">Eventos Corporativos</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amp-green rounded-full"></span>
                <p className="text-gray-700">Noivados</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amp-green rounded-full"></span>
                <p className="text-gray-700">Jantares Privados</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amp-green rounded-full"></span>
                <p className="text-gray-700">Gravações e Fotossessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-amp-brown text-amp-beige">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 font-serif">
            Vamos criar seu evento?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-amp-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-amp-gold font-semibold">WhatsApp</p>
                  <Link
                    href="https://wa.me/5581991975967"
                    className="text-amp-beige hover:text-amp-gold transition"
                  >
                    81 99197-5967
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <Instagram className="w-6 h-6 text-amp-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-amp-gold font-semibold">Instagram</p>
                  <Link
                    href="https://instagram.com/amp.213"
                    className="text-amp-beige hover:text-amp-gold transition"
                  >
                    @amp.213
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-amp-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-amp-gold font-semibold">Endereço</p>
                  <p className="text-amp-beige">
                    Rua do Amparo, 213<br />
                    Olinda, PE
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <div className="bg-amp-beige/10 border-2 border-amp-gold rounded-lg p-8">
                <h4 className="text-2xl font-bold font-serif mb-4">
                  Solicite um orçamento
                </h4>
                <p className="text-amp-beige/90 mb-6">
                  Envie uma mensagem via WhatsApp ou Instagram com detalhes do seu evento. Responderemos em breve!
                </p>
                <Link
                  href="https://wa.me/5581991975967"
                  className="inline-block bg-amp-gold text-amp-brown font-bold py-3 px-8 rounded hover:bg-amp-beige transition"
                >
                  Fale Conosco →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amp-green text-amp-beige py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2024 AMP 213 - Todos os direitos reservados</p>
          <p className="text-sm text-amp-beige/70">
            Rua do Amparo, 213 - Sítio Histórico de Olinda, PE
          </p>
        </div>
      </footer>
    </>
  )
}
