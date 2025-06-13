"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { scrollToSection } from "@/utils/enhanced-smooth-scroll"

export default function HeaderXAI() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const sections = ["home", "demo", "economic-impact", "contact"]

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)

    const scrollPosition = window.scrollY
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
      className={`fixed left-0 w-full z-50 transition-all duration-700 ease-out ${
        scrolled ? "py-3" : "py-6"
      }`}
      style={{
        top: "var(--banner-height, 0)",
        background: scrolled 
          ? "rgba(15, 15, 15, 0.95)" 
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(120%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            transition: "all 0.3s ease"
          }}>
            ZeoCare
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {[
            { id: "home", label: "Home" },
            { id: "demo", label: "Demo" },
            { id: "economic-impact", label: "Impact" },
            { id: "contact", label: "Contact" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id)
                setActiveSection(item.id)
              }}
              className="relative group"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.9rem",
                fontWeight: "400",
                color: activeSection === item.id 
                  ? "rgba(255, 255, 255, 0.9)" 
                  : "rgba(255, 255, 255, 0.5)",
                transition: "color 0.3s ease",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              {item.label}
              
              {/* Active indicator */}
              <div 
                className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                  activeSection === item.id ? "w-full opacity-60" : "w-0 opacity-0"
                }`}
              />
              
              {/* Hover effect */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white/30 w-0 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Mobile menu indicator */}
        <div className="md:hidden">
          <button 
            className="p-2"
            style={{
              color: "rgba(255, 255, 255, 0.6)"
            }}
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all duration-300"></div>
            <div className="w-5 h-0.5 bg-current mb-1 transition-all duration-300"></div>
            <div className="w-3 h-0.5 bg-current transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </header>
  )
}