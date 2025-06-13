"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Target } from "lucide-react"

export default function EconomicImpactXAI() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "90%",
      label: "Efficiency Increase"
    },
    {
      icon: Clock,
      value: "75%",
      label: "Time Reduction"
    },
    {
      icon: Target,
      value: "100%",
      label: "Automation"
    }
  ]

  return (
    <section 
      id="economic-impact" 
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
            Impact
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
            Transforming clinical workflows with measurable results
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mcp-card text-center"
            >
              <div className="mb-6">
                <metric.icon size={32} style={{color: "rgba(255, 255, 255, 0.6)", margin: "0 auto"}} />
              </div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "2.5rem",
                fontWeight: "300",
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem"
              }}>
                {metric.value}
              </div>
              <div style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: "0.9rem",
                fontWeight: "400"
              }}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.8"
          }}>
            ZeoCare revolutionizes clinical documentation through advanced AI analysis, 
            providing dimensional mental health insights while ensuring complete automation 
            and professional quality standards. Our platform delivers measurable improvements 
            in efficiency, accuracy, and clinical outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}