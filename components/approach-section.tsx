"use client"

import { motion } from "framer-motion"
import RadarChart from "./radar-chart"
// Import the useScrollAnimation hook
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import ParallaxSection from "@/components/parallax-section"

// Update the component with enhanced animations
export default function ApproachSection() {
  const [sectionRef, sectionInView] = useScrollAnimation()
  const [comparisonRef, comparisonInView] = useScrollAnimation()
  const [descriptionRef, descriptionInView] = useScrollAnimation()

  return (
    <section id="approach" className="section bg-pearl" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Nossa Abordagem</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="space-y-12">
          <ParallaxSection offset={20}>
            <motion.div
              ref={comparisonRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-center mb-6 text-xl text-gray-dark">Abordagem Categorial Tradicional</h3>
                <div className="h-[200px] mb-6 rounded-md overflow-hidden bg-pearl grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5">
                  <motion.div
                    className="bg-gray-light flex items-center justify-center p-2 font-secondary font-medium text-sm text-center text-gray-dark"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={comparisonInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Transtorno A
                  </motion.div>
                  <motion.div
                    className="bg-gray-light flex items-center justify-center p-2 font-secondary font-medium text-sm text-center text-gray-dark"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={comparisonInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    Transtorno B
                  </motion.div>
                  <motion.div
                    className="bg-gray-light flex items-center justify-center p-2 font-secondary font-medium text-sm text-center text-gray-dark"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={comparisonInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    Transtorno C
                  </motion.div>
                  <motion.div
                    className="bg-gray-light flex items-center justify-center p-2 font-secondary font-medium text-sm text-center text-gray-dark"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={comparisonInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    Transtorno D
                  </motion.div>
                </div>
                <ul className="list-disc pl-6 mt-auto text-[15px]">
                  <motion.li
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    Categorias rígidas (sim/não)
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    Fronteiras artificiais
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    Alta comorbidade
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.0 }}
                  >
                    Heterogeneidade dentro de categorias
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-center mb-6 text-xl text-emotional-dark">Abordagem Dimensional ZeoCare</h3>
                <div className="h-[200px] mb-6 rounded-md overflow-hidden bg-black flex items-center justify-center">
                  <RadarChart />
                </div>
                <ul className="list-disc pl-6 mt-auto text-[15px]">
                  <motion.li
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    Dimensões contínuas (0-10)
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    Perfil personalizado único
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    Trajetórias de mudança
                  </motion.li>
                  <motion.li
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.0 }}
                  >
                    Experiência sem patologização
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </ParallaxSection>

          <ParallaxSection offset={30}>
            <motion.div
              ref={descriptionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg mb-6">
                O framework ZeoCare representa uma ruptura epistemológica com a tradição diagnóstica
                contemporânea. Enquanto os sistemas categoriais como DSM-5 e CID-11 dividem a experiência em
                "transtornos" discretos, nossa abordagem dimensional posiciona a experiência mental em um espaço
                vetorial contínuo de 10 dimensões fundamentais.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  className="bg-emotional-light/10 rounded-md p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <h4 className="text-lg mb-2 text-emotional-dark">Dimensão Emocional</h4>
                  <ul>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-emotional-light">
                      Valência Emocional
                    </li>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-emotional-light">
                      Excitação Emocional
                    </li>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-emotional-light">
                      Dominância Emocional
                    </li>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-emotional-light">
                      Intensidade Afetiva
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-cognitive-light/10 rounded-md p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <h4 className="text-lg mb-2 text-cognitive-dark">Dimensão Cognitiva</h4>
                  <ul>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cognitive-light">
                      Complexidade Sintática
                    </li>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cognitive-light">
                      Coerência Narrativa
                    </li>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cognitive-light">
                      Flexibilidade Cognitiva
                    </li>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cognitive-light">
                      Dissonância Cognitiva
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-autonomy-light/10 rounded-md p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <h4 className="text-lg mb-2 text-autonomy-dark">Dimensão Autonomia</h4>
                  <ul>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-autonomy-light">
                      Perspectiva Temporal
                    </li>
                    <li className="mb-1 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-autonomy-light">
                      Autocontrole
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  )
}
