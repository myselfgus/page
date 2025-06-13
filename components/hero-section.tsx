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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Hero section - ZEO AI Clinical Assistant"
      role="banner"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 lg:px-8 pt-20 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-6xl mx-auto text-center">\n          {/* Responsive padding and improved max-width */}
          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-white/3 backdrop-blur-sm border border-white/8 rounded-full text-white/60 text-xs md:text-sm font-medium font-secondary uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/5 hover:border-white/12 hover:text-white/80">
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2 animate-pulse"></span>
              Clinical AI Platform
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="font-primary font-bold text-white mb-8 md:mb-12 tracking-tight leading-none"
          >
            <span className="block text-8xl md:text-9xl lg:text-[12rem] mb-4 md:mb-6 font-[300] tracking-[-0.08em] text-white/95">
              ZEO
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-[400] tracking-[0.1em] text-white/60 uppercase">
              AI Clinical Assistant
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-[300]"
          >
            Advanced transcription and clinical documentation
          </motion.p>

          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            className="flex justify-center"
          >
            <button
              onClick={() => scrollToSection("demo")}
              className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 
                         text-white/90 hover:text-white font-[400] text-base tracking-wide
                         rounded-lg backdrop-blur-sm transition-all duration-300
                         hover:scale-105 active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Try ZEO demo"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try Demo
                <Play size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
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
              <span className="text-white/60 text-sm mb-3 font-secondary font-[400] tracking-wide group-hover:text-white/80 transition-colors duration-300">
                Explore ZEO
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
