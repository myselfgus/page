"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [sectionRef, sectionInView] = useScrollAnimation()

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-white" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Perguntas Frequentes</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-light pb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl font-medium mb-0">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-emotional-light transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="py-4 text-gray-medium">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
