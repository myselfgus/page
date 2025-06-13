"use client"

import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MSPartnershipBadge() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  // Não renderizar o badge em dispositivos móveis
  if (isMobile) return null

  return (
    <>
      {/* xAI Style Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div 
          className="mx-auto max-w-6xl px-4 pb-4"
        >
          <div 
            className="cursor-pointer transition-all duration-300 hover:translate-y-[-2px]"
            onClick={() => setIsOpen(true)}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(20px) saturate(120%)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "0"
            }}
          >
            <div className="px-6 py-3 flex items-center justify-center">
              <div className="w-2 h-2 bg-white/30 mr-3"></div>
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.8rem",
                fontWeight: "400",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>
                Microsoft Founders Hub • Validated AI Platform
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with xAI styling */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(15, 15, 15, 0.95)",
            backdropFilter: "blur(20px)"
          }}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="max-w-md w-full p-8"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(20px) saturate(120%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "0"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6">
              <div className="w-4 h-4 bg-white/40 mb-4"></div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.9)",
                letterSpacing: "-0.02em",
                marginBottom: "1rem"
              }}>
                Microsoft Recognition
              </h3>
            </div>

            <p style={{
              fontFamily: "'Manrope', sans-serif",
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.9rem",
              fontWeight: "400",
              lineHeight: "1.6",
              marginBottom: "1.5rem"
            }}>
              ZeoCare foi selecionada para o Microsoft for Startups Founders Hub, 
              validando nossa inovação em IA clínica e análise dimensional da mente.
            </p>

            <p style={{
              fontFamily: "'Manrope', sans-serif",
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: "0.8rem",
              fontWeight: "400",
              lineHeight: "1.5",
              marginBottom: "2rem"
            }}>
              Este credenciamento confirma nosso compromisso com excelência 
              tecnológica em saúde mental dimensional.
            </p>

            <div className="flex justify-end">
              <button
                className="btn-mcp-secondary"
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase"
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
