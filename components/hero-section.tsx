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
      {/* Background visualization with dimensional space */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ExplosiveVisualization />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/40 z-[2]" aria-hidden="true" />

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
            <span className="block text-7xl md:text-8xl lg:text-9xl mb-2 md:mb-4 font-[300] tracking-[-0.06em] text-white/95">
              ZeoCare
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-[400] tracking-[0.05em] text-white/60">
              AI Clinical Assistant
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed font-[400]"
          >
            Revolutionary AI platform that transforms{" "}
            <span className="text-white/90 font-[500]">audio transcriptions</span> into{" "}
            <span className="text-white/80 font-[500]">dimensional mental health insights</span>.
          </motion.p>

          <motion.p
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            className="text-base md:text-lg text-white/40 mb-8 md:mb-12 max-w-2xl mx-auto font-[300] leading-relaxed"
          >
            100% automated documentation • Dimensional space analysis • Professional quality assurance
          </motion.p>

          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ModernButton
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("demo")}
              icon={<Play size={18} />}
              iconPosition="right"
              ariaLabel="Try ZeoCare demo - Interactive AI clinical assistant demonstration"
            >
              Try Demo
            </ModernButton>
            
            <ModernButton
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("contact")}
              icon={<Zap size={18} />}
              iconPosition="left"
              ariaLabel="Get started with ZeoCare - Contact us to begin using AI clinical assistant"
            >
              Get Started
            </ModernButton>
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
