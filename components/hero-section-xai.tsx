"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Play } from "lucide-react"
import { scrollToSection } from "@/utils/smooth-scroll"
import DimensionalMindVisualization from "./dimensional-mind-visualization"

export default function HeroSectionXAI() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)"}}
    >
      {/* Dimensional Mind Space Visualization */}
      <DimensionalMindVisualization />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(4rem, 12vw, 8rem)",
            fontWeight: "200",
            color: "#ffffff",
            letterSpacing: "-0.08em",
            lineHeight: "0.9",
            marginBottom: "2rem",
            textShadow: "0 0 80px rgba(255, 255, 255, 0.1)"
          }}>
            ZeoCare
          </h1>
        </motion.div>

        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={isLoaded ? { width: "200px" } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "1.2rem",
            color: "rgba(255, 255, 255, 0.5)",
            fontWeight: "300",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "3rem"
          }}>
            AI Clinical Assistant
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "1.1rem",
            color: "rgba(255, 255, 255, 0.4)",
            fontWeight: "400",
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0 auto 4rem"
          }}>
            Revolutionary AI platform transforming audio transcriptions into dimensional 
            mental health insights with 100% automated clinical documentation.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <button
            onClick={() => scrollToSection("demo")}
            className="group relative btn-mcp-primary flex items-center gap-3 mx-auto"
            style={{ minWidth: "200px" }}
          >
            <span>Experience Demo</span>
            <Play size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => scrollToSection("demo")}
        >
          <div className="flex flex-col items-center">
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              color: "rgba(255, 255, 255, 0.3)",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.5rem"
            }}>
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} style={{color: "rgba(255, 255, 255, 0.4)"}} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}