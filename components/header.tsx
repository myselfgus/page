"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import LanguageSwitcher from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"
import { scrollToSection } from "@/utils/enhanced-smooth-scroll"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const sections = ["home", "about", "approach", "visualization", "benefits", "contact"]

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
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-background/80 backdrop-blur-lg shadow-lg border-b border-border" : "py-4 bg-transparent"
      }`}
      style={{
        top: "var(--banner-height, 0)",
        marginTop: "-1px", // Adjust to align perfectly with the bottom border of the banner
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-white clip-triangle flex justify-center items-center transform rotate-180 mr-2 relative">
              <div className="w-[70%] h-[70%] absolute bg-repeat-y bg-[length:100%_10px] bg-[linear-gradient(to_bottom,#0f172a,#0f172a_2px,transparent_2px,transparent_8px)]"></div>
            </div>
            <span className="font-primary font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-purple-500 hover:opacity-90 transition-opacity">
              HEALTH/HEALTH
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Only for desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <button
            onClick={() => {
              scrollToSection("home")
              setActiveSection("home")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-md hover:bg-accent ${
              activeSection === "home" ? "text-brand-primary" : "text-muted-foreground hover:text-brand-primary"
            }`}
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
              Home
            </span>
          </button>
          <button
            onClick={() => {
              scrollToSection("about")
              setActiveSection("about")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-md hover:bg-accent ${
              activeSection === "about" ? "text-brand-primary" : "text-muted-foreground hover:text-brand-primary"
            }`}
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
              Sobre
            </span>
          </button>
          <button
            onClick={() => {
              scrollToSection("approach")
              setActiveSection("approach")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-md hover:bg-accent ${
              activeSection === "approach" ? "text-brand-primary" : "text-muted-foreground hover:text-brand-primary"
            }`}
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
              Abordagem
            </span>
          </button>
          <button
            onClick={() => {
              scrollToSection("benefits")
              setActiveSection("benefits")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-md hover:bg-accent ${
              activeSection === "benefits" ? "text-brand-primary" : "text-muted-foreground hover:text-brand-primary"
            }`}
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
              Benefícios
            </span>
          </button>
          <button
            onClick={() => {
              scrollToSection("contact")
              setActiveSection("contact")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-md hover:bg-accent ${
              activeSection === "contact" ? "text-brand-primary" : "text-muted-foreground hover:text-brand-primary"
            }`}
          >
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full">
              Contato
            </span>
          </button>
          <div className="ml-2 flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
