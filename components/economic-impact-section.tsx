"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, Lock, Zap, Database, Award } from "lucide-react"

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

  const securityFeatures = [
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: "LGPD & HIPAA Compliant",
      description: "Arquitetura construída com conformidade desde o design inicial.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Privacidade por Design",
      description: "Primeiro aplicativo em saúde construído para não salvar dados pessoais identificáveis.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Processamento Local",
      description: "Análise dimensional realizada sem exposição de informações sensíveis.",
    },
    {
      icon: <Database className="h-8 w-8 text-purple-400" />,
      title: "Zero Data Retention",
      description: "Dados processados e descartados imediatamente após análise.",
    },
  ]

  return (
    <section id="impact" ref={sectionRef} className="section bg-black text-white py-20">
      <div className="section-container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Impacto Econômico, Segurança e Privacidade
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma gera eficiência mensurável desde o primeiro dia, com a mais alta segurança e privacidade do
            mercado.
          </p>
          <div className="section-divider w-24 h-1 bg-emotional-light mx-auto mt-6"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center border border-white/10"
            >
              <p className="text-4xl font-bold text-emotional-light mb-2">{stat.value}</p>
              <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-0">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Security & Privacy Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Segurança e Privacidade Sem Precedentes</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Pioneiros em privacidade na saúde digital, nossa arquitetura garante que dados sensíveis nunca sejam
              armazenados ou expostos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, idx) => (
              <div key={feature.title} className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="text-3xl mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-4">
              <div className="text-4xl flex items-center justify-center">
                <Award className="h-10 w-10 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-300 mb-1">Primeiro Aplicativo Zero-Data em Saúde Mental</h4>
                <p className="text-gray-300 text-sm">
                  Revolucionamos a privacidade em saúde digital com nossa arquitetura que processa sem armazenar dados
                  pessoais identificáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
