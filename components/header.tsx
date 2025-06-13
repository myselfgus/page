"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { scrollToSection } from "@/utils/enhanced-smooth-scroll"
import { useIsMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const sections = ["home", "demo"]

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)

    const scrollPosition = window.scrollY

    // Find which section is currently in view
    const sectionElements = sections.map((section) => {
      const element = document.getElementById(section)
      if (!element) return { id: section, top: 0, bottom: 0 }

      const rect = element.getBoundingClientRect()
      return {
        id: section,
        top: rect.top + scrollPosition,
        bottom: rect.bottom + scrollPosition,
      }
    })

    for (const section of sectionElements) {
      if (scrollPosition >= section.top - 200 && scrollPosition < section.bottom - 200) {
        setActiveSection(section.id)
        break
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "py-2 md:py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "py-4 md:py-6 bg-transparent"
      }`}
      style={{
        top: "var(--banner-height, 0)",
        marginTop: "-1px", // Adjust to align perfectly with the bottom border of the banner
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-primary font-[300] text-2xl md:text-3xl tracking-[-0.05em] text-white/90 hover:text-white transition-all duration-300">
              ZEO
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Simplified */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("demo")}
            className="text-white/60 hover:text-white font-[300] text-sm tracking-wide transition-colors duration-300"
          >
            Demo
          </button>
          <button
            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 
                       text-white/90 hover:text-white font-[300] text-sm tracking-wide
                       rounded-lg backdrop-blur-sm transition-all duration-300"
          >
            Get Access
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white/60 hover:text-white transition-colors duration-300">
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
              Impacto
            </span>
          </button>
          <button
            onClick={() => {
              scrollToSection("contact")
              setActiveSection("contact")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-md ${
              activeSection === "contact" ? "text-brand-primary" : "text-white hover:text-brand-primary"
            }`}
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
              Contato
            </span>
          </button>
          <div className="ml-2 flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
