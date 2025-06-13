"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function DimensionalMindVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    updateCanvasSize()
    
    // Dimensional Mind Space Parameters
    let time = 0
    const centerX = canvas.width / 2 / window.devicePixelRatio
    const centerY = canvas.height / 2 / window.devicePixelRatio

    // Three main axes representing the dimensional space
    const axes = {
      emotional: { // ℳₑₘₒcᵢₒₙₐₗ
        angle: 0,
        radius: 150,
        color: 'rgba(255, 255, 255, 0.6)',
        nodes: []
      },
      cognitive: { // ℳcₒₙgᵢₜᵢᵥₐ
        angle: (2 * Math.PI) / 3,
        radius: 150,
        color: 'rgba(255, 255, 255, 0.4)',
        nodes: []
      },
      autonomy: { // ℳₐᵤₜₒₙₒₘᵢₐ
        angle: (4 * Math.PI) / 3,
        radius: 150,
        color: 'rgba(255, 255, 255, 0.3)',
        nodes: []
      }
    }

    // Generate dimensional nodes
    const generateNodes = () => {
      Object.keys(axes).forEach((key, axisIndex) => {
        const axis = axes[key as keyof typeof axes]
        axis.nodes = []
        
        // Create 10 nodes along each axis representing the dimensional variables
        for (let i = 0; i < 10; i++) {
          const progress = (i + 1) / 10
          const x = centerX + Math.cos(axis.angle) * axis.radius * progress
          const y = centerY + Math.sin(axis.angle) * axis.radius * progress
          
          axis.nodes.push({
            x,
            y,
            originalX: x,
            originalY: y,
            size: 2 + Math.random() * 3,
            phase: Math.random() * Math.PI * 2,
            intensity: 0.3 + Math.random() * 0.7
          })
        }
      })
    }

    generateNodes()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
      
      time += 0.01

      // Draw dimensional grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 1
      
      // Concentric circles representing dimensional layers
      for (let r = 30; r <= 150; r += 30) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw the three main axes
      Object.entries(axes).forEach(([key, axis], axisIndex) => {
        // Main axis line
        ctx.strokeStyle = axis.color
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(
          centerX + Math.cos(axis.angle) * axis.radius,
          centerY + Math.sin(axis.angle) * axis.radius
        )
        ctx.stroke()

        // Axis label
        ctx.fillStyle = axis.color
        ctx.font = '10px Space Grotesk, sans-serif'
        ctx.textAlign = 'center'
        const labelX = centerX + Math.cos(axis.angle) * (axis.radius + 20)
        const labelY = centerY + Math.sin(axis.angle) * (axis.radius + 20)
        
        const labels = ['ℳₑₘₒcᵢₒₙₐₗ', 'ℳcₒₙgᵢₜᵢᵥₐ', 'ℳₐᵤₜₒₙₒₘᵢₐ']
        ctx.fillText(labels[axisIndex], labelX, labelY)

        // Draw dimensional nodes
        axis.nodes.forEach((node, nodeIndex) => {
          // Animate node position with subtle breathing effect
          const breathe = Math.sin(time * 2 + node.phase) * 0.02
          const pulse = Math.sin(time * 3 + node.phase) * 0.1
          
          node.x = node.originalX + Math.cos(time + node.phase) * 3
          node.y = node.originalY + Math.sin(time + node.phase) * 3

          // Draw node
          ctx.fillStyle = axis.color
          ctx.globalAlpha = node.intensity + pulse * 0.3
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.size * (1 + breathe), 0, Math.PI * 2)
          ctx.fill()
          
          // Draw connections between nodes
          if (nodeIndex > 0) {
            const prevNode = axis.nodes[nodeIndex - 1]
            ctx.strokeStyle = axis.color
            ctx.globalAlpha = 0.2
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(prevNode.x, prevNode.y)
            ctx.lineTo(node.x, node.y)
            ctx.stroke()
          }
        })
      })

      // Draw interconnections between dimensions (dimensional tensor field)
      ctx.globalAlpha = 0.1
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.lineWidth = 0.3
      
      Object.values(axes).forEach((axis1, i) => {
        Object.values(axes).forEach((axis2, j) => {
          if (i < j) {
            axis1.nodes.forEach((node1, k) => {
              if (k % 3 === 0) { // Only connect every 3rd node to avoid clutter
                const node2 = axis2.nodes[k]
                if (node2) {
                  const distance = Math.sqrt(
                    Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
                  )
                  
                  // Only draw connection if nodes are reasonably close
                  if (distance < 100) {
                    ctx.beginPath()
                    ctx.moveTo(node1.x, node1.y)
                    ctx.lineTo(node2.x, node2.y)
                    ctx.stroke()
                  }
                }
              }
            })
          }
        })
      })

      // Central core - the unified mental space
      ctx.globalAlpha = 0.8
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.beginPath()
      ctx.arc(centerX, centerY, 8 + Math.sin(time * 2) * 2, 0, Math.PI * 2)
      ctx.fill()

      ctx.globalAlpha = 1

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', updateCanvasSize)
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          mixBlendMode: 'screen',
          filter: 'blur(0.5px)'
        }}
      />
      
      {/* Overlay text for dimensional space theory */}
      <div className="absolute bottom-8 left-8 text-left max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.7rem",
            color: "rgba(255, 255, 255, 0.3)",
            fontWeight: "300",
            letterSpacing: "0.05em",
            lineHeight: "1.4"
          }}>
            ℳ = ℳₑₘₒcᵢₒₙₐₗ ⊕ ℳcₒₙgᵢₜᵢᵥₐ ⊕ ℳₐᵤₜₒₙₒₘᵢₐ
          </p>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.65rem",
            color: "rgba(255, 255, 255, 0.2)",
            fontWeight: "400",
            marginTop: "0.5rem",
            lineHeight: "1.3"
          }}>
            Dimensional Mental Space<br/>
            Cognitive • Emotional • Autonomy
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}