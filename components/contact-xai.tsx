"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Users } from "lucide-react"

export default function ContactXAI() {
  const faqs = [
    {
      question: "O que é a abordagem dimensional da ZeoCare?",
      answer: "Nossa metodologia mapeia espaços mentais através de análise vetorial, identificando padrões dimensionais em dados clínicos para gerar insights precisos."
    },
    {
      question: "Quais são as bases científicas do framework ZeoCare?",
      answer: "Baseado em neurociência computacional, processamento de linguagem natural e modelos de IA multi-dimensionais validados clinicamente."
    },
    {
      question: "A ZeoCare oferece parcerias para pesquisadores?",
      answer: "Sim, colaboramos com instituições acadêmicas e profissionais de saúde mental para validação contínua e desenvolvimento de novas funcionalidades."
    }
  ]

  return (
    <section 
      id="contact"
      className="py-32 border-t border-white/5"
      style={{background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)"}}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "3rem",
            fontWeight: "300",
            color: "#ffffff",
            letterSpacing: "-0.04em",
            lineHeight: "1.1",
            marginBottom: "1rem"
          }}>
            Connect
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 mx-auto mb-6"></div>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: "1rem",
            fontWeight: "400",
            maxWidth: "500px",
            margin: "0 auto"
          }}>
            Get started with ZeoCare's AI clinical platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5rem",
              fontWeight: "500",
              color: "rgba(255, 255, 255, 0.9)",
              letterSpacing: "-0.02em",
              marginBottom: "2rem"
            }}>
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={20} style={{color: "rgba(255, 255, 255, 0.5)"}} />
                <div>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.9rem",
                    fontWeight: "400"
                  }}>
                    Email
                  </p>
                  <a 
                    href="mailto:contato@zeocare.com"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "1rem",
                      fontWeight: "400",
                      textDecoration: "none"
                    }}
                  >
                    contato@zeocare.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Users size={20} style={{color: "rgba(255, 255, 255, 0.5)"}} />
                <div>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.9rem",
                    fontWeight: "400"
                  }}>
                    Partnerships
                  </p>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1rem",
                    fontWeight: "400"
                  }}>
                    Research & Clinical Collaborations
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MessageCircle size={20} style={{color: "rgba(255, 255, 255, 0.5)"}} />
                <div>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.9rem",
                    fontWeight: "400"
                  }}>
                    Support
                  </p>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1rem",
                    fontWeight: "400"
                  }}>
                    Technical assistance & implementation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5rem",
              fontWeight: "500",
              color: "rgba(255, 255, 255, 0.9)",
              letterSpacing: "-0.02em",
              marginBottom: "2rem"
            }}>
              Frequently Asked
            </h3>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/5 pb-6">
                  <h4 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "0.75rem"
                  }}>
                    {faq.question}
                  </h4>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.4)",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    lineHeight: "1.6"
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}