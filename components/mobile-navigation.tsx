"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Home, Info, Lightbulb, Award, Mail, ArrowUp } from "lucide-react"
import { scrollToSection } from "@/utils/smooth-scroll"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { id: "about", label: "Sobre", icon: <Info className="w-5 h-5" /> },
  { id: "approach", label: "Abordagem", icon: <Lightbulb className="w-5 h-5" /> },
  { id: "benefits", label: "Benefícios", icon: <Award className="w-5 h-5" /> },
]

export default function MobileNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    // Mostrar botão de voltar ao topo quando rolar mais de 500px
    setShowScrollToTop(currentScrollY > 500)

    setLastScrollY(currentScrollY)

    // Find which section is currently in view
    const sections = navItems.map((item) => {
      const element = document.getElementById(item.id)
      if (!element) return { id: item.id, top: 0, bottom: 0 }

      const rect = element.getBoundingClientRect()
      return {
        id: item.id,
        top: rect.top + currentScrollY,
        bottom: rect.bottom + currentScrollY,
      }
    })

    for (const section of sections) {
      if (currentScrollY >= section.top - 200 && currentScrollY < section.bottom - 200) {
        setActiveSection(section.id)
        break
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleNavigation = (id: string) => {
    scrollToSection(id)
    setActiveSection(id)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Barra de navegação inferior com botão de voltar ao topo */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-40 py-2 px-1">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`flex flex-col items-center p-2 ${
                activeSection === item.id ? "text-emotional-light" : "text-gray-light"
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
              {activeSection === item.id && <div className="absolute bottom-0 h-0.5 w-10 bg-emotional-light" />}
            </button>
          ))}

          {/* Botão de contato */}
          <button
            onClick={() => handleNavigation("contact")}
            className={`flex flex-col items-center p-2 ${
              activeSection === "contact" ? "text-emotional-light" : "text-gray-light"
            }`}
          >
            <Mail className="w-5 h-5" />
            <span className="text-xs mt-1">Contato</span>
            {activeSection === "contact" && <div className="absolute bottom-0 h-0.5 w-10 bg-emotional-light" />}
          </button>

          {/* Botão de voltar ao topo */}
          <button
            onClick={scrollToTop}
            className={`flex flex-col items-center p-2 ${showScrollToTop ? "text-emotional-light" : "text-gray-light opacity-50"}`}
          >
            <ArrowUp className="w-5 h-5" />
            <span className="text-xs mt-1">Topo</span>
          </button>
        </div>
      </div>
    </>
  )
}
