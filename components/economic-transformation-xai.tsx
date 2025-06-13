"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function EconomicTransformationXAI() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const impacts = [
    {
      metric: "87%",
      label: "Redução de Tempo",
      description: "Documentação clínica automatizada elimina 87% do tempo manual de registro",
      detail: "De 45min para 6min por sessão"
    },
    {
      metric: "340%",
      label: "ROI Documentação",
      description: "Retorno sobre investimento em qualidade e velocidade de documentação",
      detail: "Payback em 3 meses"
    },
    {
      metric: "R$ 2.400",
      label: "Economia/Mês",
      description: "Por profissional através de automação dimensional e insights IA",
      detail: "R$ 28.800 anuais por profissional"
    },
    {
      metric: "95%",
      label: "Precisão Clínica",
      description: "Análise dimensional detecta padrões invisíveis à observação manual",
      detail: "Validação científica contínua"
    }
  ]

  const qualities = [
    {
      title: "Qualidade de Vida Profissional",
      points: [
        "Elimina fadiga de documentação repetitiva",
        "Foco 100% no atendimento ao paciente",
        "Insights dimensionais para decisões clínicas",
        "Redução de burnout por sobrecarga administrativa"
      ]
    },
    {
      title: "Excelência no Atendimento",
      points: [
        "Análise multidimensional em tempo real",
        "Detecção precoce de padrões de risco",
        "Continuidade de cuidado aprimorada",
        "Documentação estruturada e completa"
      ]
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="economic-impact" 
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 mx-auto mb-8"></div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "200",
            color: "#ffffff",
            letterSpacing: "-0.06em",
            lineHeight: "1",
            marginBottom: "2rem"
          }}>
            Economic Impact
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "1.1rem",
            fontWeight: "300",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Transformação quantificável: de documentação manual para inteligência dimensional automatizada
          </p>
        </motion.div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
              style={{
                background: "rgba(255, 255, 255, 0.01)",
                backdropFilter: "blur(20px) saturate(120%)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "0",
                padding: "2rem",
                transition: "all 0.3s ease"
              }}
            >
              <div className="mb-4">
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "3rem",
                  fontWeight: "200",
                  color: "#ffffff",
                  letterSpacing: "-0.04em",
                  lineHeight: "1"
                }}>
                  {impact.metric}
                </span>
              </div>
              
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.2rem",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.9)",
                letterSpacing: "-0.02em",
                marginBottom: "1rem"
              }}>
                {impact.label}
              </h3>
              
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.9rem",
                fontWeight: "400",
                lineHeight: "1.5",
                marginBottom: "0.75rem"
              }}>
                {impact.description}
              </p>
              
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: "0.8rem",
                fontWeight: "400",
                fontStyle: "italic"
              }}>
                {impact.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Quality of Life Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {qualities.map((quality, index) => (
            <div key={index} className="space-y-6">
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.9)",
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem"
              }}>
                {quality.title}
              </h3>
              
              <div className="space-y-4">
                {quality.points.map((point, pointIndex) => (
                  <motion.div
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + pointIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1 h-1 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                    <p style={{
                      fontFamily: "'Manrope', sans-serif",
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "0.9rem",
                      fontWeight: "400",
                      lineHeight: "1.6"
                    }}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 mx-auto mb-6"></div>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "0.8rem",
            fontWeight: "400",
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}>
            Análise Dimensional • ROI Comprovado • Qualidade Profissional
          </p>
        </motion.div>
      </div>
    </section>
  )
}