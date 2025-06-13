"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AboutSection() {
  const [sectionRef, sectionInView] = useScrollAnimation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="section bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="section-container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Sobre Nós: Pioneirismo, Propósito e Inovação
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nascemos da convicção de que a tecnologia pode e deve ser uma força transformadora para a saúde mental.
            Somos mais do que uma startup de tecnologia; somos um coletivo de pensadores, inovadores e especialistas
            dedicados a redefinir os paradigmas do diagnóstico e tratamento em saúde mental.
          </p>
          <div className="section-divider w-24 h-1 bg-emotional-light mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Nossa Missão e Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                A ZeoCare nasceu da visão de transformar fundamentalmente como compreendemos e tratamos a saúde
                mental. Nossa missão é empoderar profissionais e pacientes com ferramentas que transcendem as limitações
                dos sistemas categoriais tradicionais, oferecendo uma compreensão mais profunda e personalizada do
                sofrimento psíquico.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Abordagem Dimensional-Vetorial</h3>
              <p className="text-gray-700 leading-relaxed">
                No cerne da nossa inovação está nossa abordagem dimensional-vetorial, um framework proprietário que
                representa uma revolução na forma como avaliamos e tratamos a saúde mental. Fundamentada nos princípios
                do materialismo existencial, nossa abordagem integra elementos da fenomenologia da corporalidade e do
                existencialismo situado.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Esta perspectiva única nos diferencia, permitindo-nos ir além das abordagens tradicionais e oferecer
                avaliações mais precisas, tratamentos personalizados e uma compreensão mais profunda do sofrimento
                psíquico.
              </p>
            </div>

            <button onClick={() => scrollToSection("contact")} className="btn btn-outline mt-4">
              Fale Conosco
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-pearl rounded-lg p-6 shadow-md">
              <div className="w-[120px] h-8 bg-[#0078d4] rounded-sm relative mb-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-secondary font-semibold text-sm">
                  Microsoft
                </div>
              </div>
              <h3 className="text-xl mb-2">Microsoft Founders Hub</h3>
              <p>
                Somos parte do programa de aceleração da Microsoft, com acesso a tecnologias de ponta para desenvolver
                nossa visão e escalar nossas operações com robustez e segurança de nível mundial.
              </p>
            </div>

            <div className="flex items-center bg-gradient-to-r from-emotional-dark to-autonomy-dark text-white rounded-lg p-4 shadow-md">
              <div className="w-12 h-12 bg-white/20 rounded-full mr-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-0.5 h-6 bg-white absolute"></div>
                </div>
              </div>
              <div>
                <h4 className="text-sm mb-0 opacity-80">Pioneiros em</h4>
                <p className="font-primary text-xl font-semibold mb-0">Diagnóstico Dimensional</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cognitive-dark to-cognitive-light text-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl mb-3">Nossa Equipe</h3>
              <p className="mb-0">
                Nossa equipe combina expertise em psiquiatria, neurociência, IA e engenharia de software com uma paixão
                por resolver desafios complexos em saúde mental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
