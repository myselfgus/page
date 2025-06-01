"use client"

import { useState } from "react"
import { ChevronDown, Mail, MapPin, Share2, Linkedin, Twitter, Instagram } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { GlassButton } from "./glass-button"
import GlassModal from "./glass-modal"

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "O que é a abordagem dimensional da HEALTH/HEALTH?",
    answer:
      "Nossa abordagem dimensional posiciona a experiência mental em um espaço vetorial contínuo de 10 dimensões fundamentais, superando as limitações dos sistemas categoriais tradicionais que dividem a experiência em 'transtornos' discretos.",
  },
  {
    question: "Como a visualização dimensional beneficia os pacientes?",
    answer:
      "As visualizações dimensionais facilitam a compreensão da experiência pessoal, reduzem o estigma através da despatologização, promovem maior autonomia no processo terapêutico e reconhecem a singularidade da experiência individual além das categorias diagnósticas genéricas.",
  },
  {
    question: "Quais são as bases científicas do framework HEALTH/HEALTH?",
    answer:
      "Nosso framework fundamenta-se no materialismo existencial, integrando neurociência contemporânea, fenomenologia da experiência vivida e ciência de sistemas dinâmicos para criar uma abordagem cientificamente rigorosa e humanisticamente significativa.",
  },
  {
    question: "Como posso implementar esta abordagem na minha prática clínica?",
    answer:
      "Oferecemos treinamento, suporte técnico e ferramentas de visualização que podem ser integradas à sua prática. Entre em contato conosco para uma avaliação inicial, demonstração personalizada e plano de implementação adaptado às suas necessidades específicas.",
  },
  {
    question: "A HEALTH/HEALTH oferece parcerias para pesquisadores?",
    answer:
      "Sim, buscamos ativamente parcerias com pesquisadores interessados em explorar nosso framework dimensional. Oferecemos acesso a dados dimensionais quantitativos, ferramentas para análise trajetorial e suporte para desenvolvimento de intervenções personalizadas baseadas em perfis dimensionais.",
  },
]

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="contact-faq" className="section bg-pearl">
      <div className="section-container">
        <div className="section-header">
          <h2>Perguntas e Contato</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border-b border-gray-light pb-2">
                  <button
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h4 className="text-lg font-medium mb-0">{faq.question}</h4>
                    <ChevronDown
                      className={`w-5 h-5 text-emotional-light transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div id={`faq-answer-${index}`} className="overflow-hidden">
                      <p className="py-4 text-gray-medium">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <p className="text-lg mb-6">
              Estamos em busca de parcerias com clínicos, pesquisadores e instituições que compartilham nossa visão de
              transformar a saúde mental através de uma abordagem dimensional humanizada.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-md mr-4 flex-shrink-0 bg-emotional-light/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emotional-light" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Email</h4>
                  <p className="text-gray-medium mb-0">contato@healthhealth.com.br</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-md mr-4 flex-shrink-0 bg-cognitive-light/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cognitive-light" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Localização</h4>
                  <p className="text-gray-medium mb-0">Campinas, São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-md mr-4 flex-shrink-0 bg-autonomy-light/10 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-autonomy-light" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Redes Sociais</h4>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center transition-all duration-300"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center transition-all duration-300"
                    >
                      <span className="sr-only">Twitter</span>
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center transition-all duration-300"
                    >
                      <span className="sr-only">Instagram</span>
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />

            <div className="mt-8">
              <GlassButton onClick={() => setIsModalOpen(true)} variant="primary">
                Agendar uma Demonstração
              </GlassButton>
            </div>

            <GlassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Agendar uma Demonstração">
              <p>
                Preencha o formulário abaixo para agendar uma demonstração personalizada da nossa plataforma de
                visualização dimensional.
              </p>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm mb-1">Nome</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 text-white"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Organização</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 text-white"
                    placeholder="Nome da sua organização"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Mensagem</label>
                  <textarea
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 text-white h-24"
                    placeholder="Conte-nos mais sobre seu interesse"
                  ></textarea>
                </div>
              </div>
            </GlassModal>
          </div>
        </div>
      </div>
    </section>
  )
}
