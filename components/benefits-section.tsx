"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// Import the useScrollAnimation hook
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import ParallaxSection from "@/components/parallax-section"

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState("clinicians")
  const [sectionRef, sectionInView] = useScrollAnimation()

  return (
    <section id="benefits" className="section bg-pearl" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Benefícios</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="flex justify-center mb-8 overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              className={`px-4 py-2 mx-1 rounded-md font-secondary font-medium bg-gray-light text-gray-dark transition-all duration-300 ${activeTab === "clinicians" ? "bg-emotional-light text-white" : ""}`}
              onClick={() => setActiveTab("clinicians")}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              Para Clínicos
            </motion.button>
            <motion.button
              className={`px-4 py-2 mx-1 rounded-md font-secondary font-medium bg-gray-light text-gray-dark transition-all duration-300 ${activeTab === "patients" ? "bg-emotional-light text-white" : ""}`}
              onClick={() => setActiveTab("patients")}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              Para Pacientes
            </motion.button>
            <motion.button
              className={`px-4 py-2 mx-1 rounded-md font-secondary font-medium bg-gray-light text-gray-dark transition-all duration-300 ${activeTab === "researchers" ? "bg-emotional-light text-white" : ""}`}
              onClick={() => setActiveTab("researchers")}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              Para Pesquisadores
            </motion.button>
          </motion.div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "clinicians" && (
                <motion.div
                  key="clinicians"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ParallaxSection offset={20}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-emotional-light/10">
                          <div className="absolute w-7 h-7 border-2 border-emotional-light rounded-full">
                            <div className="absolute w-2 h-2 bg-emotional-light rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                          </div>
                        </div>
                        <h3 className="text-xl mb-2">Precisão Diagnóstica</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Avaliação multidimensional que captura nuances da experiência do paciente sem reducionismo.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-cognitive-light/10">
                          <div className="absolute w-8 h-4 border-b-2 border-l-2 border-r-2 border-cognitive-light"></div>
                        </div>
                        <h3 className="text-xl mb-2">Monitoramento Longitudinal</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Acompanhamento da trajetória terapêutica com detecção precoce de mudanças significativas.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-autonomy-light/10">
                          <div className="absolute w-4 h-3 bg-autonomy-light clip-path-[polygon(0%_0%,100%_0%,100%_75%,75%_75%,75%_100%,50%_75%,0%_75%)] -translate-x-2.5 rotate-180"></div>
                          <div className="absolute w-4 h-3 bg-autonomy-light clip-path-[polygon(0%_0%,100%_0%,100%_75%,75%_75%,75%_100%,50%_75%,0%_75%)] translate-x-2.5"></div>
                        </div>
                        <h3 className="text-xl mb-2">Comunicação Aprimorada</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Visualizações que facilitam o diálogo clínico e a compreensão compartilhada do processo
                          terapêutico.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-critical/10">
                          <div className="absolute w-6 h-[30px] border-2 border-critical rounded-sm">
                            <div className="absolute w-4 h-0.5 bg-critical top-[40%] left-1/2 -translate-x-1/2 shadow-[0_-6px_0_var(--color-critical),0_6px_0_var(--color-critical)]"></div>
                          </div>
                        </div>
                        <h3 className="text-xl mb-2">Documentação Rica</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Registro Clínico Dimensional (RCD) que integra dados quantitativos e narrativa qualitativa.
                        </p>
                      </motion.div>
                    </div>
                  </ParallaxSection>
                </motion.div>
              )}

              {activeTab === "patients" && (
                <motion.div
                  key="patients"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ParallaxSection offset={20}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-emotional-light/10">
                          <div className="absolute w-8 h-8 border-2 border-emotional-light rounded-full"></div>
                        </div>
                        <h3 className="text-xl mb-2">Compreensão Visual</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Visualização clara da experiência pessoal, facilitando o autoconhecimento e a psicoeducação.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-emotional-light/10">
                          <div className="absolute w-8 h-8 border-2 border-emotional-light rounded-md transform rotate-45"></div>
                        </div>
                        <h3 className="text-xl mb-2">Despatologização</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Abordagem que normaliza a experiência humana, reduzindo estigma e autoestigma.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-emotional-light/10">
                          <div className="absolute w-8 h-8 border-2 border-emotional-light rounded-full">
                            <div className="absolute w-4 h-4 border-2 border-emotional-light rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                          </div>
                        </div>
                        <h3 className="text-xl mb-2">Agência e Autonomia</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Participação ativa no processo terapêutico com maior clareza sobre objetivos e progresso.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-emotional-light/10">
                          <div className="absolute w-8 h-8 border-2 border-emotional-light">
                            <div className="absolute w-4 h-4 bg-emotional-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                          </div>
                        </div>
                        <h3 className="text-xl mb-2">Personalização</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Reconhecimento da singularidade da experiência individual, além de categorias diagnósticas
                          genéricas.
                        </p>
                      </motion.div>
                    </div>
                  </ParallaxSection>
                </motion.div>
              )}

              {activeTab === "researchers" && (
                <motion.div
                  key="researchers"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ParallaxSection offset={20}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-cognitive-light/10">
                          <div className="absolute w-8 h-8 border-2 border-cognitive-light rounded-md"></div>
                        </div>
                        <h3 className="text-xl mb-2">Framework Científico</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Estrutura conceitual rigorosa que integra neurociência, fenomenologia e sistemas dinâmicos.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-cognitive-light/10">
                          <div className="absolute w-8 h-8 border-2 border-cognitive-light rounded-full">
                            <div className="absolute w-1 h-6 bg-cognitive-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute w-6 h-1 bg-cognitive-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                          </div>
                        </div>
                        <h3 className="text-xl mb-2">Dados Dimensionais</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Acesso a dados quantitativos precisos que permitem análises estatísticas sofisticadas.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-cognitive-light/10">
                          <div className="absolute w-8 h-4 border-b-2 border-cognitive-light">
                            <div className="absolute w-2 h-2 bg-cognitive-light rounded-full right-0 bottom-[-4px]"></div>
                          </div>
                        </div>
                        <h3 className="text-xl mb-2">Análise Trajetorial</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Estudo de padrões dinâmicos e pontos críticos em processos psicológicos ao longo do tempo.
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <div className="w-[60px] h-[60px] rounded-md mb-4 flex items-center justify-center relative bg-cognitive-light/10">
                          <div className="absolute w-8 h-8 border-2 border-cognitive-light rounded-md">
                            <div className="absolute w-4 h-4 bg-cognitive-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm"></div>
                          </div>
                        </div>
                        <h3 className="text-xl mb-2">Medicina de Precisão</h3>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Base para desenvolvimento de intervenções personalizadas baseadas em perfis dimensionais.
                        </p>
                      </motion.div>
                    </div>
                  </ParallaxSection>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
