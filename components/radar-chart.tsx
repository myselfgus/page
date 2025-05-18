"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function RadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasReady, setCanvasReady] = useState(false)
  const [chartRef, chartInView] = useScrollAnimation()

  useEffect(() => {
    if (!canvasRef.current) return

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

    // Define dimensions
    const dimensions = [
      { name: "v1", label: "Valência", value: 0.7, color: "#3b82f6" },
      { name: "v2", label: "Excitação", value: 0.8, color: "#3b82f6" },
      { name: "v3", label: "Dominância", value: 0.5, color: "#3b82f6" },
      { name: "v4", label: "Intensidade", value: 0.9, color: "#3b82f6" },
      { name: "v5", label: "Complexidade", value: 0.6, color: "#10b981" },
      { name: "v6", label: "Coerência", value: 0.7, color: "#10b981" },
      { name: "v7", label: "Flexibilidade", value: 0.4, color: "#10b981" },
      { name: "v8", label: "Dissonância", value: 0.8, color: "#10b981" },
      { name: "v9", label: "Perspectiva", value: 0.5, color: "#ec4899" },
      { name: "v10", label: "Autocontrole", value: 0.3, color: "#ec4899" },
    ]

    const numDimensions = dimensions.length
    const angleStep = (Math.PI * 2) / numDimensions

    // Animation function
    let animProgress = 0
    const animDuration = 60 // frames

    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background circles
      const circles = 5 // Number of concentric circles
      ctx.lineWidth = 0.5

      for (let i = 1; i <= circles; i++) {
        const radius = maxRadius * (i / circles)

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
        ctx.stroke()
      }

      // Draw axes
      dimensions.forEach((dim, i) => {
        const angle = i * angleStep - Math.PI / 2 // Start from top (- PI/2)

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX + Math.cos(angle) * maxRadius, centerY + Math.sin(angle) * maxRadius)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
        ctx.stroke()
      })

      // Calculate current animation values
      const currentProgress = Math.min(animProgress / animDuration, 1)

      // Draw data points and connect them
      ctx.beginPath()
      dimensions.forEach((dim, i) => {
        const angle = i * angleStep - Math.PI / 2
        const radius = maxRadius * dim.value * currentProgress

        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      // Close the path by connecting to the first point
      if (currentProgress > 0) {
        const firstAngle = -Math.PI / 2
        const firstRadius = maxRadius * dimensions[0].value * currentProgress
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
      dimensions.forEach((dim, i) => {
        const angle = i * angleStep - Math.PI / 2
        const radius = maxRadius * dim.value * currentProgress

        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = dim.color
        ctx.fill()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Continue animation if not complete
      if (animProgress < animDuration) {
        animProgress++
        requestAnimationFrame(animate)
      } else {
        setCanvasReady(true)
      }
    }

    // Start animation when in view
    if (chartInView && animProgress === 0) {
      animate()
    }

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

        // Redraw at current animation state
        animate()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [chartInView])

  return (
    <motion.div
      ref={chartRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </motion.div>
  )
}
