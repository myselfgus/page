"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

export default function MSRecognitionSection() {
  const [sectionRef, sectionInView] = useScrollAnimation()
  const foundersHubLink = "https://www.microsoft.com/en-us/founders-hub"

  return (
    <section
      id="recognition"
      className="py-16 md:py-24 bg-gradient-to-br from-sky-600 via-indigo-700 to-purple-700 text-white"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Conteúdo Explicativo Detalhado e Assertivo */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-2"
            >
              <p className="text-sm md:text-base font-semibold text-sky-300 uppercase tracking-wider">
                PARCERIA E APOIO
              </p>
              <Link
                href={foundersHubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Microsoft for Startups Founders Hub"
                className="flex items-center bg-white/10 rounded-md p-1 hover:bg-white/20 transition-all duration-300"
              >
                <Image
                  src="https://www.groovypost.com/wp-content/uploads/2017/02/Microsoft-logo.png"
                  alt="Microsoft"
                  width={20}
                  height={20}
                  className="h-auto"
                />
              </Link>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6"
            >
              Oficialmente membros do Microsoft for Startups Founders Hub!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed mb-6 text-indigo-100"
            >
              É com imenso orgulho que anunciamos nossa seleção no <strong>Microsoft for Startups Founders Hub</strong>.
              Esta seleção chancela o potencial inovador da HEALTH/HEALTH e da nossa abordagem dimensional-vetorial,
              abrindo portas para um ecossistema de tecnologias de vanguarda e suporte especializado.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg md:text-xl leading-relaxed mb-6 text-indigo-100"
            >
              Através desta colaboração estratégica, estamos potencializando nossas soluções com o poder do{" "}
              <strong>Azure AI</strong>, otimizando nosso desenvolvimento com ferramentas como{" "}
              <strong>GitHub Copilot</strong>, e acessando uma vasta rede de mentores e recursos da Microsoft. Isso nos
              permite acelerar a entrega de valor, refinar a precisão da nossa abordagem dimensional-vetorial e escalar
              nossas operações com robustez e segurança de nível mundial.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-lg md:text-xl font-semibold leading-relaxed mb-8 text-sky-200"
            >
              Para nossos clientes e parceiros, esta parceria significa acesso a soluções ainda mais sofisticadas,
              confiáveis e na fronteira da inovação tecnológica, com o selo de qualidade e a infraestrutura global da
              Microsoft.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-indigo-700 hover:bg-gray-200 font-semibold py-3.5 px-10 rounded-lg shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-opacity-50"
                aria-label="Saiba mais sobre o Microsoft for Startups Founders Hub"
              >
                <Link href={foundersHubLink} target="_blank" rel="noopener noreferrer">
                  Explore o Founders Hub
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
