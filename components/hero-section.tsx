"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Play, Zap } from "lucide-react"
import { scrollToSection } from "@/utils/smooth-scroll"
import ExplosiveVisualization from "./explosive-visualization"
import ModernButton from "./modern-button"
import { useIsMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)"}}
      aria-label="Hero section - ZEO AI Clinical Assistant"
      role="banner"
    >
      {/* Background visualization with dimensional space */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ExplosiveVisualization />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-[#0f0f0f]/40 z-[2]" aria-hidden="true" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 lg:px-8 pt-20 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-6xl mx-auto text-center">\n          {/* Responsive padding and improved max-width */}
          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 bg-white/3 backdrop-blur-sm border border-white/8 rounded-none" style={{color: "rgba(255, 255, 255, 0.5)", fontFamily: "'Manrope', sans-serif", fontSize: "1rem", fontWeight: "400", letterSpacing: "0.05em", textTransform: "uppercase"}}>
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2 animate-pulse"></span>
              Clinical AI Platform
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="mb-8 md:mb-12 leading-none"
            style={{fontFamily: "'Space Grotesk', sans-serif"}}
          >
            <span className="block mb-4" style={{fontSize: "6rem", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.08em", textShadow: "0 0 40px rgba(255, 255, 255, 0.1)"}}>
              ZeoCare
            </span>
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
            </div>
            <span className="block mt-8" style={{fontFamily: "'Manrope', sans-serif", fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.4)", fontWeight: "400", letterSpacing: "0.08em", textTransform: "uppercase"}}>
              AI Clinical Assistant
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="mb-12 max-w-3xl mx-auto text-center"
            style={{fontFamily: "'Manrope', sans-serif", color: "rgba(255, 255, 255, 0.4)", fontSize: "0.95rem", fontWeight: "400", lineHeight: "1.6", letterSpacing: "0.01em"}}
          >
            Revolutionary AI platform that transforms audio transcriptions into dimensional mental health insights with 100% automated documentation and professional quality assurance.
          </motion.p>

          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("demo")}
              className="btn-mcp-primary flex items-center gap-2"
            >
              Try Demo
              <Play size={16} />
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-mcp-secondary flex items-center gap-2"
            >
              <Zap size={16} />
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        {!isMobile && (
          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 group"
            onClick={() => scrollToSection("demo")}
          >
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-sm mb-3 font-[400] tracking-wide group-hover:text-white/80 transition-colors duration-300">
                Explore ZeoCare
              </span>
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover:bg-white/20 transition-all duration-300"></div>
                <ArrowDown className="relative text-white/60 group-hover:text-white/90 animate-bounce-subtle transition-colors duration-300" size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
