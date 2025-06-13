"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Target } from "lucide-react"

export default function AboutXAI() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI",
      description: "Multi-model analysis pipeline with GPT-4, Claude, and proprietary algorithms"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant transcription and dimensional analysis for immediate insights"
    },
    {
      icon: Target,
      title: "Clinical Precision",
      description: "Professional-grade documentation with 98.5% accuracy standards"
    }
  ]

  return (
    <section 
      id="about"
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
            Technology
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
            Revolutionary approach to mental health analysis
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mcp-card text-center"
            >
              <div className="mb-6">
                <feature.icon size={32} style={{color: "rgba(255, 255, 255, 0.6)", margin: "0 auto"}} />
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "rgba(255, 255, 255, 0.9)",
                letterSpacing: "-0.01em",
                marginBottom: "1rem"
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: "0.9rem",
                fontWeight: "400",
                lineHeight: "1.6"
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: "1.1rem",
            fontWeight: "400",
            lineHeight: "1.8",
            marginBottom: "2rem"
          }}>
            A ZeoCare nasceu da visão de transformar a análise de saúde mental através de 
            tecnologia de IA avançada. Nossa abordagem dimensional-vetorial mapeia espaços 
            mentais complexos, fornecendo insights clínicos precisos e documentação automatizada.
          </p>
          
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.8"
          }}>
            Desenvolvida com base em frameworks científicos rigorosos e validação clínica, 
            nossa plataforma representa uma nova era na assistência clínica automatizada.
          </p>
        </motion.div>
      </div>
    </section>
  )
}