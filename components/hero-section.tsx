"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { scrollToSection } from "@/utils/smooth-scroll"
import OptimizedHeroVisualization from "./optimized-hero-visualization"
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
      <OptimizedHeroVisualization />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-16 pb-24 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white mb-6 tracking-tight"
          >
            Reimaginando a <span className="text-emotional-light">Saúde Mental</span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0.1 : 0.2 }}
            className="text-lg md:text-xl text-gray-light mb-6 max-w-3xl mx-auto"
          >
            Automatizamos até <span className="font-semibold text-emotional-light">90&nbsp;% da documentação clínica</span>
            em saúde mental, liberando o profissional para o que realmente importa&nbsp;— o vínculo terapêutico. Com
            inteligência dimensional-vetorial, elevamos a acurácia dos registros, reduzimos custos operacionais e
            ampliamos o acesso de pacientes a&nbsp;um cuidado de excelência.
          </motion.p>

          <motion.p
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0.15 : 0.3 }}
            className="text-sm md:text-base text-gray-light/80 mb-8 max-w-2xl mx-auto"
          >
            Mais tempo para o médico. Mais cuidado para o paciente. Mais valor para o sistema.
          </motion.p>

          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: isMobile ? 0.2 : 0.5, delay: isMobile ? 0.2 : 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GlassButton onClick={() => scrollToSection("about")}>Conheça Nossa Abordagem</GlassButton>
            <GlassButton onClick={() => scrollToSection("contact")}>Entre em Contato</GlassButton>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={false}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <div className="flex flex-col items-center">
              <span className="text-white text-sm mb-2">Scroll para descobrir</span>
              <ArrowDown className="text-white animate-bounce" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
