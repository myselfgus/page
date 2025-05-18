"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"

type Dimension = {
  id: string
  name: string
  value: number
  color: string
  description: string
  category: "emotional" | "cognitive" | "autonomy"
}

const dimensions: Dimension[] = [
  {
    id: "v1",
    name: "Valência",
    value: 0.7,
    color: "#3b82f6",
    description: "Qualidade positiva ou negativa da experiência emocional",
    category: "emotional",
  },
  {
    id: "v2",
    name: "Excitação",
    value: 0.8,
    color: "#3b82f6",
    description: "Nível de ativação fisiológica associada à emoção",
    category: "emotional",
  },
  {
    id: "v3",
    name: "Dominância",
    value: 0.5,
    color: "#3b82f6",
    description: "Sensação de controle sobre a experiência emocional",
    category: "emotional",
  },
  {
    id: "v4",
    name: "Intensidade",
    value: 0.9,
    color: "#3b82f6",
    description: "Força ou magnitude da experiência afetiva",
    category: "emotional",
  },
  {
    id: "v5",
    name: "Complexidade",
    value: 0.6,
    color: "#10b981",
    description: "Nível de elaboração e sofisticação do pensamento",
    category: "cognitive",
  },
  {
    id: "v6",
    name: "Coerência",
    value: 0.7,
    color: "#10b981",
    description: "Consistência lógica e organização do pensamento",
    category: "cognitive",
  },
  {
    id: "v7",
    name: "Flexibilidade",
    value: 0.4,
    color: "#10b981",
    description: "Capacidade de adaptar e mudar perspectivas",
    category: "cognitive",
  },
  {
    id: "v8",
    name: "Dissonância",
    value: 0.8,
    color: "#10b981",
    description: "Conflito entre crenças, valores ou comportamentos",
    category: "cognitive",
  },
  {
    id: "v9",
    name: "Perspectiva",
    value: 0.5,
    color: "#ec4899",
    description: "Orientação temporal e capacidade de projeção futura",
    category: "autonomy",
  },
  {
    id: "v10",
    name: "Autocontrole",
    value: 0.3,
    color: "#ec4899",
    description: "Capacidade de regular comportamentos e impulsos",
    category: "autonomy",
  },
]

export default function InteractiveRadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [chartRef, chartInView] = useScrollAnimation()
  const [selectedDimension, setSelectedDimension] = useState<Dimension | null>(null)
  const [dimensionValues, setDimensionValues] = useState<{ [key: string]: number }>(
    dimensions.reduce((acc, dim) => ({ ...acc, [dim.id]: dim.value }), {}),
  )
  const [activeTab, setActiveTab] = useState<string>("all")
  const [hoveredDimension, setHoveredDimension] = useState<Dimension | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!canvasRef.current || !chartInView) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Reset canvas styling dimensions
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Center point and radius
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const maxRadius = Math.min(centerX, centerY) * 0.9

    // Filter dimensions based on active tab
    const filteredDimensions = activeTab === "all" ? dimensions : dimensions.filter((dim) => dim.category === activeTab)

    const numDimensions = filteredDimensions.length
    const angleStep = (Math.PI * 2) / numDimensions

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background circles
    const circles = 5 // Number of concentric circles
    ctx.lineWidth = 0.5

    for (let i = 1; i <= circles; i++) {
      const radius = maxRadius * (i / circles)

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(100, 116, 139, 0.2)"
      ctx.stroke()
    }

    // Draw axes and labels
    filteredDimensions.forEach((dim, i) => {
      const angle = i * angleStep - Math.PI / 2 // Start from top (- PI/2)

      // Draw axis
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(angle) * maxRadius, centerY + Math.sin(angle) * maxRadius)
      ctx.strokeStyle = "rgba(100, 116, 139, 0.3)"
      ctx.stroke()

      // Draw label
      const labelRadius = maxRadius + 20
      const labelX = centerX + Math.cos(angle) * labelRadius
      const labelY = centerY + Math.sin(angle) * labelRadius

      ctx.fillStyle = dim.color
      ctx.font = "12px var(--font-secondary)"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(dim.name, labelX, labelY)
    })

    // Draw data points and connect them
    ctx.beginPath()
    filteredDimensions.forEach((dim, i) => {
      const angle = i * angleStep - Math.PI / 2
      const radius = maxRadius * dimensionValues[dim.id]

      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    // Close the path by connecting to the first point
    if (filteredDimensions.length > 0) {
      const firstAngle = -Math.PI / 2
      const firstDim = filteredDimensions[0]
      const firstRadius = maxRadius * dimensionValues[firstDim.id]
      ctx.lineTo(centerX + Math.cos(firstAngle) * firstRadius, centerY + Math.sin(firstAngle) * firstRadius)

      // Fill the shape
      ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
      ctx.fill()

      // Draw the outline
      ctx.lineWidth = 2
      ctx.strokeStyle = "rgba(59, 130, 246, 0.8)"
      ctx.stroke()
    }

    // Draw data points
    filteredDimensions.forEach((dim, i) => {
      const angle = i * angleStep - Math.PI / 2
      const radius = maxRadius * dimensionValues[dim.id]

      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = dim.color
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Highlight selected dimension
      if (selectedDimension && selectedDimension.id === dim.id) {
        ctx.beginPath()
        ctx.arc(x, y, 10, 0, Math.PI * 2)
        ctx.strokeStyle = dim.color
        ctx.lineWidth = 2
        ctx.stroke()
      }
    })

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const rect = canvas.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1

        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        ctx.scale(dpr, dpr)

        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`
      }
    }

    // Add animation to demonstrate profile changes over time
    if (chartInView && !isAnimating) {
      const animateValues = () => {
        setIsAnimating(true)

        // Generate random target values for demonstration
        const targetValues = {} as { [key: string]: number }
        dimensions.forEach((dim) => {
          targetValues[dim.id] = Math.random() * 0.6 + 0.2 // Random value between 0.2 and 0.8
        })

        // Animate to these values over time
        let startTime: number | null = null
        const duration = 1500

        const initialValues = { ...dimensionValues }

        const animate = (timestamp: number) => {
          if (startTime === null) startTime = timestamp
          const elapsed = timestamp - startTime
          const progress = Math.min(elapsed / duration, 1)

          // Easing function
          const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
          const easedProgress = ease(progress)

          // Update values based on progress
          const newValues = {} as { [key: string]: number }
          dimensions.forEach((dim) => {
            const start = initialValues[dim.id]
            const target = targetValues[dim.id]
            newValues[dim.id] = start + (target - start) * easedProgress
          })

          setDimensionValues(newValues)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setTimeout(() => {
              setIsAnimating(false)
            }, 3000) // Wait 3 seconds before allowing another animation
          }
        }

        requestAnimationFrame(animate)
      }

      // Start animation after a delay when chart comes into view
      const animationTimeout = setTimeout(() => {
        animateValues()
      }, 1000)

      return () => {
        clearTimeout(animationTimeout)
        window.removeEventListener("resize", handleResize)
      }
    } else {
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [chartInView, dimensionValues, selectedDimension, activeTab])

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Filter dimensions based on active tab
    const filteredDimensions = activeTab === "all" ? dimensions : dimensions.filter((dim) => dim.category === activeTab)

    const numDimensions = filteredDimensions.length
    const angleStep = (Math.PI * 2) / numDimensions
    const maxRadius = Math.min(centerX, centerY) * 0.9

    // Check if click is near any data point
    for (let i = 0; i < filteredDimensions.length; i++) {
      const dim = filteredDimensions[i]
      const angle = i * angleStep - Math.PI / 2
      const radius = maxRadius * dimensionValues[dim.id]

      const pointX = centerX + Math.cos(angle) * radius
      const pointY = centerY + Math.sin(angle) * radius

      // Calculate distance between click and point
      const distance = Math.sqrt(Math.pow(x - pointX, 2) + Math.pow(y - pointY, 2))

      // If click is within 15px of a point, select that dimension
      if (distance <= 15) {
        setSelectedDimension(dim)
        return
      }
    }

    // If click is not near any point, deselect
    setSelectedDimension(null)
  }

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Update tooltip position
    setTooltipPosition({ x: e.clientX, y: e.clientY })

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Filter dimensions based on active tab
    const filteredDimensions = activeTab === "all" ? dimensions : dimensions.filter((dim) => dim.category === activeTab)

    const numDimensions = filteredDimensions.length
    const angleStep = (Math.PI * 2) / numDimensions
    const maxRadius = Math.min(centerX, centerY) * 0.9

    // Check if mouse is near any data point
    let foundHover = false

    for (let i = 0; i < filteredDimensions.length; i++) {
      const dim = filteredDimensions[i]
      const angle = i * angleStep - Math.PI / 2
      const radius = maxRadius * dimensionValues[dim.id]

      const pointX = centerX + Math.cos(angle) * radius
      const pointY = centerY + Math.sin(angle) * radius

      // Calculate distance between mouse and point
      const distance = Math.sqrt(Math.pow(x - pointX, 2) + Math.pow(y - pointY, 2))

      // If mouse is within 15px of a point, hover over that dimension
      if (distance <= 20) {
        setHoveredDimension(dim)
        foundHover = true
        break
      }
    }

    if (!foundHover) {
      setHoveredDimension(null)
    }
  }

  const handleCanvasMouseLeave = () => {
    setHoveredDimension(null)
  }

  const handleSliderChange = (value: number[]) => {
    if (!selectedDimension) return

    setDimensionValues((prev) => ({
      ...prev,
      [selectedDimension.id]: value[0],
    }))
  }

  return (
    <div ref={chartRef} className="w-full max-w-3xl mx-auto">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="emotional" className="text-emotional-light">
            Emocional
          </TabsTrigger>
          <TabsTrigger value="cognitive" className="text-cognitive-light">
            Cognitiva
          </TabsTrigger>
          <TabsTrigger value="autonomy" className="text-autonomy-light">
            Autonomia
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="bg-white rounded-lg p-4 shadow-md relative">
        <TooltipProvider>
          <canvas
            ref={canvasRef}
            className="w-full h-[400px] md:h-[450px] lg:h-[500px] cursor-pointer"
            onClick={handleCanvasClick}
            onMouseMove={handleCanvasMouseMove}
            onMouseLeave={handleCanvasMouseLeave}
          />

          {hoveredDimension && (
            <div
              className="absolute pointer-events-none bg-black/90 text-white text-xs rounded-md px-3 py-2 z-10 max-w-[200px] shadow-lg backdrop-blur-sm"
              style={{
                left: tooltipPosition.x < window.innerWidth / 2 ? tooltipPosition.x - 30 : tooltipPosition.x - 170,
                top: tooltipPosition.y < window.innerHeight / 2 ? tooltipPosition.y + 10 : tooltipPosition.y - 80,
              }}
            >
              <div className="font-medium mb-1">{hoveredDimension.name}</div>
              <div className="text-gray-200">{hoveredDimension.description}</div>
              <div className="mt-1 font-medium">Valor: {Math.round(dimensionValues[hoveredDimension.id] * 10)}/10</div>
            </div>
          )}
        </TooltipProvider>

        <AnimatePresence>
          {selectedDimension && (
            <motion.div
              key="selected-dimension"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 border border-gray-light rounded-md"
            >
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: selectedDimension.color }} />
                <h4 className="text-lg font-medium mb-0">{selectedDimension.name}</h4>
              </div>

              <p className="text-sm text-gray-medium mb-4">{selectedDimension.description}</p>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium w-8">0</span>
                <Slider
                  value={[dimensionValues[selectedDimension.id]]}
                  min={0}
                  max={1}
                  step={0.01}
                  onValueChange={handleSliderChange}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-8">10</span>
              </div>

              <div className="text-center mt-2">
                <span className="text-sm font-medium">
                  Valor: {Math.round(dimensionValues[selectedDimension.id] * 10)}/10
                </span>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className="px-3 py-1.5 bg-emotional-light/10 text-emotional-light text-sm font-medium rounded-md hover:bg-emotional-light/20 transition-colors"
                  onClick={() => setSelectedDimension(null)}
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedDimension && (
          <div className="flex flex-col items-center justify-center mt-4 space-y-2">
            <p className="text-center text-sm text-gray-medium">Passe o mouse sobre os pontos para ver detalhes</p>
            <p className="text-center text-sm text-gray-medium">
              Clique em um ponto do gráfico para ajustar os valores
            </p>
            {isAnimating && <p className="text-xs text-emotional-light animate-pulse">Animando perfil...</p>}
            {!isAnimating && (
              <button
                className="px-3 py-1 text-xs bg-emotional-light/10 text-emotional-light rounded hover:bg-emotional-light/20 transition-colors"
                onClick={() => setIsAnimating(true)}
              >
                Simular alterações no perfil
              </button>
            )}
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        <h3 className="text-xl font-primary font-bold mb-3">Análise Comparativa</h3>
        <p className="text-gray-medium text-sm mb-4">
          Compare perfis ao longo do tempo para visualizar a evolução e identificar padrões de mudança. Em breve:
          funcionalidade completa de comparação entre múltiplos perfis.
        </p>
        <button
          className="px-4 py-2 bg-emotional-light text-white rounded-md hover:bg-emotional-dark transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          Ativar modo de comparação
        </button>
      </div>
    </div>
  )
}
