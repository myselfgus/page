"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Play, Mic, Upload, BarChart3 } from "lucide-react"

export default function DimensionalDemoXAI() {
  const [isVisible, setIsVisible] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setDemoStep((prev) => (prev + 1) % 4)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const demoSteps = [
    {
      icon: <Mic size={24} />,
      title: "Audio Capture",
      description: "Sessão clínica gravada ou upload de áudio",
      status: "Processing dimensional vectors..."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Dimensional Analysis",
      description: "ℳₑₘₒcᵢₒₙₐₗ ⊕ ℳcₒₙgᵢₜᵢᵥₐ ⊕ ℳₐᵤₜₒₙₒₘᵢₐ",
      status: "Mapping mental space coordinates..."
    },
    {
      icon: <Play size={24} />,
      title: "Real-time Insights",
      description: "Análise vetorial em tempo real durante sessão",
      status: "Generating clinical documentation..."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Clinical Output",
      description: "Documentação estruturada + visualização dimensional",
      status: "Ready for clinical review"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="demo" 
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 50%, #0f0f0f 100%)",
      }}
    >
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(120deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "200",
            color: "#ffffff",
            letterSpacing: "-0.06em",
            lineHeight: "1",
            marginBottom: "2rem"
          }}>
            Experience Dimensional Analysis
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "1.1rem",
            fontWeight: "300",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Transforme áudio clínico em insights dimensionais da mente através de análise vetorial em tempo real
          </p>
        </motion.div>

        {/* Demo Visualization */}
        <div className="relative">
          
          {/* Central Demo Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto max-w-2xl mb-16"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(20px) saturate(120%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "0",
              padding: "3rem 2rem",
              minHeight: "300px"
            }}
          >
            {/* Demo Content */}
            <div className="text-center">
              <motion.div
                key={demoStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex justify-center mb-6">
                  <div 
                    className="p-4 border border-white/10"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "rgba(255, 255, 255, 0.8)"
                    }}
                  >
                    {demoSteps[demoStep].icon}
                  </div>
                </div>
                
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.9)",
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem"
                }}>
                  {demoSteps[demoStep].title}
                </h3>
                
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  marginBottom: "1.5rem"
                }}>
                  {demoSteps[demoStep].description}
                </p>
                
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
                  <span style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.4)",
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    fontStyle: "italic"
                  }}>
                    {demoSteps[demoStep].status}
                  </span>
                </div>
              </motion.div>
              
              {/* Progress Indicator */}
              <div className="flex justify-center gap-2">
                {demoSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-0.5 transition-all duration-300 ${
                      index === demoStep ? 'bg-white/60' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              className="btn-mcp-primary flex items-center gap-3"
              onClick={() => setDemoStep(0)}
            >
              <Mic size={16} />
              <span>Try Live Demo</span>
            </button>
            
            <button 
              className="btn-mcp-secondary flex items-center gap-3"
              onClick={() => setDemoStep(2)}
            >
              <Upload size={16} />
              <span>Upload Audio</span>
            </button>
          </motion.div>
        </div>

        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Real-time Processing",
              detail: "< 2s latency for dimensional analysis"
            },
            {
              title: "10-Dimensional Space",
              detail: "Complete mental state vectorization"
            },
            {
              title: "Clinical Integration",
              detail: "Direct EHR and workflow integration"
            }
          ].map((spec, index) => (
            <div key={index} className="text-center">
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.8)",
                letterSpacing: "-0.01em",
                marginBottom: "0.5rem"
              }}>
                {spec.title}
              </h4>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: "0.8rem",
                fontWeight: "400"
              }}>
                {spec.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}