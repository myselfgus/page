"use client"

import { useState } from "react"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MSPartnershipBadge() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  // Não renderizar o badge em dispositivos móveis
  if (isMobile) return null

  return (
    <>
      <div className="fixed bottom-4 left-4 z-40 cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="bg-black/70 backdrop-blur-sm rounded-full py-2 px-4 flex items-center shadow-lg hover:bg-black/80 transition-all">
          <Image
            src="https://www.groovypost.com/wp-content/uploads/2017/02/Microsoft-logo.png"
            alt="Microsoft"
            width={16}
            height={16}
          />
          <span className="ml-2 text-white text-xs">Microsoft for Startups Founders Hub</span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-4">
              <Image
                src="https://www.groovypost.com/wp-content/uploads/2017/02/Microsoft-logo.png"
                alt="Microsoft"
                width={24}
                height={24}
                className="mr-2"
              />
              <h3 className="text-xl font-primary font-bold">Microsoft for Startups</h3>
            </div>

            <p className="mb-4">
              A HEALTH/HEALTH foi selecionada para o programa Microsoft for Startups Founders Hub, que apoia startups
              inovadoras com recursos, mentoria e tecnologia de ponta.
            </p>

            <p className="mb-4">
              Este credenciamento reforça nosso compromisso com a inovação e excelência tecnológica em saúde mental.
            </p>

            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-[#0078d4] text-white rounded hover:bg-[#006cbe]"
                onClick={() => setIsOpen(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
