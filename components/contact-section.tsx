"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Share2 } from "lucide-react"

// Import the useScrollAnimation hook
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import ParallaxSection from "@/components/parallax-section"
import ContactForm from "@/components/contact-form"
import { GlassButton } from "./glass-button"
import GlassModal from "./glass-modal"

export default function ContactSection() {
  const [sectionRef, sectionInView] = useScrollAnimation()
  const [infoRef, infoInView] = useScrollAnimation()
  const [cardRef, cardInView] = useScrollAnimation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="contact" className="section bg-pearl" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Entre em Contato</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ParallaxSection offset={30}>
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: -50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-4">Vamos Transformar a Saúde Mental Juntos</h3>
              <p className="text-lg mb-6">
                Estamos em busca de parcerias com clínicos, pesquisadores e instituições que compartilham nossa visão de
                transformar a saúde mental através de uma abordagem dimensional humanizada.
              </p>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={infoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-md mr-4 flex-shrink-0 bg-emotional-light/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emotional-light" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Email</h4>
                    <p className="text-gray-medium mb-0">contato@healthhealth.com.br</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={infoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-md mr-4 flex-shrink-0 bg-cognitive-light/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cognitive-light" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Localização</h4>
                    <p className="text-gray-medium mb-0">Campinas, São Paulo, Brasil</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={infoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-md mr-4 flex-shrink-0 bg-autonomy-light/10 flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-autonomy-light" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Redes Sociais</h4>
                    <div className="flex gap-2">
                      <motion.a
                        href="#"
                        className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center transition-all duration-300"
                        whileHover={{
                          backgroundColor: "rgb(236, 72, 153)",
                          color: "white",
                          y: -3,
                        }}
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                        </svg>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center transition-all duration-300"
                        whileHover={{
                          backgroundColor: "rgb(236, 72, 153)",
                          color: "white",
                          y: -3,
                        }}
                      >
                        <span className="sr-only">Twitter</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                        </svg>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center transition-all duration-300"
                        whileHover={{
                          backgroundColor: "rgb(236, 72, 153)",
                          color: "white",
                          y: -3,
                        }}
                      >
                        <span className="sr-only">Instagram</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <GlassButton onClick={() => setIsModalOpen(true)} variant="primary">
                  Agendar uma Demonstração
                </GlassButton>
              </div>

              <GlassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Agendar uma Demonstração">
                <p>
                  Preencha o formulário abaixo para agendar uma demonstração personalizada da nossa plataforma de
                  visualização dimensional.
                </p>
                <div className="space-y-4 mt-4">
                  <div>
                    <label className="block text-sm mb-1">Nome</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 text-white"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Organização</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 text-white"
                      placeholder="Nome da sua organização"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Mensagem</label>
                    <textarea
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-md p-2 text-white h-24"
                      placeholder="Conte-nos mais sobre seu interesse"
                    ></textarea>
                  </div>
                </div>
              </GlassModal>
            </motion.div>
          </ParallaxSection>

          <ParallaxSection offset={50}>
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, x: 50 }}
              animate={cardInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <motion.h3
                    className="mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    Interessado em saber mais?
                  </motion.h3>
                  <motion.p
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    Deixe seus dados de contato para receber informações sobre nosso framework dimensional e
                    oportunidades de parceria.
                  </motion.p>

                  <ContactForm />

                  <motion.div
                    className="border-l-2 border-gray-light pl-6 mt-8"
                    initial={{ opacity: 0 }}
                    animate={cardInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <motion.div
                      className="relative mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={cardInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute w-3 h-3 bg-emotional-light rounded-full left-[-26px] top-1.5"></div>
                      <div>
                        <h4 className="text-lg mb-1">Avaliação Inicial</h4>
                        <p className="text-[15px] text-gray-medium mb-0">Entendemos suas necessidades específicas</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="relative mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={cardInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute w-3 h-3 bg-emotional-light rounded-full left-[-26px] top-1.5"></div>
                      <div>
                        <h4 className="text-lg mb-1">Demonstração Personalizada</h4>
                        <p className="text-[15px] text-gray-medium mb-0">
                          Apresentamos nossa tecnologia aplicada ao seu contexto
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={cardInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute w-3 h-3 bg-emotional-light rounded-full left-[-26px] top-1.5"></div>
                      <div>
                        <h4 className="text-lg mb-1">Implementação e Suporte</h4>
                        <p className="text-[15px] text-gray-medium mb-0">Acompanhamento completo em todas as etapas</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  )
}
