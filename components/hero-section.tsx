"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { scrollToSection } from "@/utils/smooth-scroll"
import ExplosiveVisualization from "./explosive-visualization"
import GlassButton from "./glass-button"
import { useIsMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background visualization */}
      <div className="absolute inset-0 z-0">
        <ExplosiveVisualization />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-[2]" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-16 pb-24 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.4 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
              Tecnologia em parceria
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-primary font-bold text-white mb-8 tracking-tight leading-tight"
          >
            A IA que{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Re-Humaniza
            </span>{" "}
            a Saúde
          </motion.h1>

          <motion.p
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0.15 : 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
           Nossa IA-pair-clinician libera{" "}
            <span className="text-cyan-400 font-semibold">90% do seu tempo</span> para o que realmente importa:{" "}
            <span className="text-purple-400 font-semibold">o vínculo terapêutico</span>.
          </motion.p>

          <motion.p
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0.2 : 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
          >
            Potencializamos médicos de qualidade. Humanizamos a saúde. Revolucionamos o cuidado.
          </motion.p>

          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0.25 : 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GlassButton onClick={() => scrollToSection("demo")}>Entre em Contato</GlassButton>
              </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
            onClick={() => scrollToSection("demo")}
          >
            <div className="flex flex-col items-center">
              <span className="text-white/80 text-sm mb-2 drop-shadow-lg">Experimente nossa IA</span>
              <ArrowDown className="text-white/80 animate-bounce drop-shadow-lg" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
