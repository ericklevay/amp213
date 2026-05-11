'use client'

import Link from 'next/link'
import { Phone, Instagram, MapPin, Calendar, Users, Sparkles, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Header Premium */}
      <header className="bg-white border-b border-gray-100 py-5 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amp-dark rounded-full flex items-center justify-center">
              <span className="text-amp-gold font-display font-bold text-lg">AMP</span>
            </div>
            <div>
              <h1 className="font-display text-amp-dark text-2xl font-bold">AMP 213</h1>
              <p className="text-xs text-amp-dark/60">Espaço Sofisticado</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link href="#diferenciais" className="text-amp-dark hover:text-amp-gold transition font-medium text-sm">Diferenciais</Link>
            <Link href="#galeria" className="text-amp-dark hover:text-amp-gold transition font-medium text-sm">Galeria</Link>
            <Link href="#tipos" className="text-amp-dark hover:text-amp-gold transition font-medium text-sm">Eventos</Link>
            <Link href="#contato" className="text-amp-dark hover:text-amp-gold transition font-medium text-sm">Contato</Link>
          </nav>

          <Link
            href="https://wa.me/5581991975967"
            className="bg-amp-gold text-amp-dark px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition"
          >
            Contato
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] flex items-center overflow-hidden bg-amp-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-amp-dark/90 to-amp-dark/50"></div>

        <div className="absolute inset-0 bg-[url('/hero-pattern.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6 text-amp-gold">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">LOCALIZADO NO SÍTIO HISTÓRICO</span>
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dê um AMP no seu evento
            </h2>

            <p className="text-xl text-gray-100 mb-4">
              Casarão colonial do século 17 transformado em espaço premium para seus momentos inesquecíveis
            </p>

            <div className="flex items-center gap-2 text-amp-gold mb-8">
              <MapPin className="w-5 h-5" />
              <p className="text-base">Rua do Amparo, 213 - Olinda, PE</p>
            </div>

            <Link
              href="https://wa.me/5581991975967"
              className="inline-flex items-center gap-3 bg-amp-gold text-amp-dark px-8 py-4 rounded-full font-display font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Solicite um orçamento
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-amp-dark mb-4">
              Por que escolher AMP 213?
            </h2>
            <p className="text-gray-600 text-lg">Somos mais que um espaço. Somos uma experiência.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-50 p-10 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-amp-gold">
              <div className="w-16 h-16 bg-amp-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amp-gold group-hover:text-white transition">
                <Calendar className="w-8 h-8 text-amp-dark group-hover:text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-amp-dark mb-4">Histórico</h3>
              <p className="text-gray-700 leading-relaxed">
                Casarão colonial do século 17 no coração do Sítio Histórico. Cada evento é marcado pela memória e arquitetura única do espaço português.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50 p-10 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-amp-gold">
              <div className="w-16 h-16 bg-amp-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amp-gold group-hover:text-white transition">
                <Users className="w-8 h-8 text-amp-dark group-hover:text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-amp-dark mb-4">Versátil</h3>
              <p className="text-gray-700 leading-relaxed">
                Salão Barroco (90m²), Quintal Secreto (450m²), Mezanino com madeira do século 19. Capacidade para até 300 pessoas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50 p-10 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-amp-gold">
              <div className="w-16 h-16 bg-amp-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amp-gold group-hover:text-white transition">
                <Sparkles className="w-8 h-8 text-amp-dark group-hover:text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-amp-dark mb-4">Experiência</h3>
              <p className="text-gray-700 leading-relaxed">
                Equipe especializada, buffet premium e atenção aos detalhes. Transformamos sua visão em realidade com profissionalismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section id="tipos" className="bg-amp-cream/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-amp-dark text-center mb-16">
            Tipos de Eventos
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💍', name: 'Casamentos', desc: 'Dia perfeito em cenário histórico' },
              { icon: '🎂', name: 'Aniversários', desc: 'Celebrações memoráveis' },
              { icon: '👔', name: 'Corporativo', desc: 'Eventos profissionais premium' },
              { icon: '💕', name: 'Noivados', desc: 'Noites de sonho' },
              { icon: '🍽️', name: 'Jantares', desc: 'Experiências gastronômicas' },
              { icon: '📸', name: 'Produções', desc: 'Fotos e vídeos únicos' },
            ].map((evento, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-t-2 border-amp-gold text-center">
                <div className="text-4xl mb-4">{evento.icon}</div>
                <h3 className="font-display text-xl font-bold text-amp-dark mb-2">{evento.name}</h3>
                <p className="text-gray-600 text-sm">{evento.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Preview */}
      <section id="galeria" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-amp-dark mb-4">Galeria</h2>
            <p className="text-gray-600 text-lg">Veja a beleza do nosso espaço</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-amp-dark/10 to-amp-gold/10 rounded-xl overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition">
                  <p className="text-gray-400">Imagem {i}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#galeria"
              className="inline-flex items-center gap-2 text-amp-dark hover:text-amp-gold transition font-semibold"
            >
              Ver galeria completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-amp-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16">
            Vamos criar seu evento?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contatos */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amp-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amp-gold" />
                </div>
                <div>
                  <p className="text-amp-gold font-semibold text-sm mb-1">WhatsApp</p>
                  <Link
                    href="https://wa.me/5581991975967"
                    className="text-white hover:text-amp-gold transition text-lg"
                  >
                    81 99197-5967
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amp-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-amp-gold" />
                </div>
                <div>
                  <p className="text-amp-gold font-semibold text-sm mb-1">Instagram</p>
                  <Link
                    href="https://instagram.com/amp.213"
                    className="text-white hover:text-amp-gold transition text-lg"
                  >
                    @amp.213
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amp-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amp-gold" />
                </div>
                <div>
                  <p className="text-amp-gold font-semibold text-sm mb-1">Endereço</p>
                  <p className="text-white text-lg">Rua do Amparo, 213<br />Olinda, PE</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-amp-gold/10 border border-amp-gold/30 p-12 rounded-xl flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold text-amp-gold mb-4">
                Solicite um orçamento
              </h3>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Envie uma mensagem via WhatsApp ou Instagram com detalhes do seu evento. Nossa equipe responderá em breve!
              </p>
              <Link
                href="https://wa.me/5581991975967"
                className="inline-block bg-amp-gold text-amp-dark px-8 py-4 rounded-full font-display font-bold hover:shadow-lg hover:scale-105 transition-all self-start"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amp-gold/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2">© 2024 AMP 213 - Todos os direitos reservados</p>
          <p className="text-gray-500 text-sm">
            Rua do Amparo, 213 - Sítio Histórico de Olinda, PE
          </p>
        </div>
      </footer>
    </>
  )
}
