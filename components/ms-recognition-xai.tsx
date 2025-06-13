"use client"

import { motion } from "framer-motion"
import { Award, Building, Users } from "lucide-react"

export default function MSRecognitionXAI() {
  return (
    <section 
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
            Recognition
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
            Microsoft Founders Hub Partnership
          </p>
        </motion.div>

        {/* Recognition Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mcp-card max-w-4xl mx-auto text-center"
        >
          
          {/* Microsoft Logo/Badge Area */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Building size={24} style={{color: "rgba(255, 255, 255, 0.6)"}} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "rgba(255, 255, 255, 0.8)",
                letterSpacing: "-0.01em"
              }}>
                Microsoft for Startups
              </span>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 mx-auto"></div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "1.1rem",
              fontWeight: "400",
              lineHeight: "1.8",
              maxWidth: "700px",
              margin: "0 auto"
            }}>
              A ZeoCare foi selecionada para o programa Microsoft for Startups Founders Hub, 
              reconhecendo nossa inovação em IA clínica e abordagem dimensional-vetorial 
              para análise de saúde mental.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Award,
                  title: "Innovation",
                  description: "AI-powered dimensional analysis"
                },
                {
                  icon: Users,
                  title: "Partnership",
                  description: "Microsoft Founders Hub program"
                },
                {
                  icon: Building,
                  title: "Recognition",
                  description: "Industry validation"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4">
                    <item.icon size={20} style={{color: "rgba(255, 255, 255, 0.5)", margin: "0 auto"}} />
                  </div>
                  <h4 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "0.5rem"
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.4)",
                    fontSize: "0.85rem",
                    fontWeight: "400"
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}