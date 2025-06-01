"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function EconomicImpactSection() {
  const [sectionRef, inView] = useScrollAnimation()

  const stats = [
    {
      value: "90%+",
      label: "Documentação Automatizada",
      description: "Menos tempo em prontuário, mais tempo na relação terapêutica.",
    },
    {
      value: "15h",
      label: "Tempo liberado/semana",
      description: "Para cada profissional de saúde mental em média.",
    },
    {
      value: "3×",
      label: "Capacidade de atendimento",
      description: "Aumente o número de pacientes sem sacrificar qualidade.",
    },
    {
      value: "98%",
      label: "Acurácia dos Registros",
      description: "Estrutura vetorial garante consistência e reembolso ágil.",
    },
  ]

  return (
    <section id="impact" ref={sectionRef} className="section bg-black text-white py-20">
      <div className="section-container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Impacto Econômico e de Tempo
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma gera eficiência mensurável desde o primeiro dia&nbsp;— reduza custos operacionais e
            aumente receita enquanto entrega uma experiência de cuidado superior.
          </p>
          <div className="section-divider w-24 h-1 bg-emotional-light mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center border border-white/10 hover:border-emotional-light transition-colors"
            >
              <p className="text-4xl font-bold text-emotional-light mb-2">{stat.value}</p>
              <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-0">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
