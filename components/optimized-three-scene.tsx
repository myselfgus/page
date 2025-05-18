"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Detect if device has good performance for better three.js optimization
function hasGoodPerformance() {
  // Check for high-end GPU indicators
  try {
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl")
    if (!gl) return false

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info")
    if (!debugInfo) return false

    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)

    // Check for keywords indicating high-performance GPUs
    const highEndGPUKeywords = ["NVIDIA", "AMD", "Radeon", "GeForce", "Intel Iris"]
    return highEndGPUKeywords.some((keyword) => renderer.includes(keyword))
  } catch (e) {
    return false
  }
}

// Check if device is mobile
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

interface OptimizedThreeSceneProps {
  complexity?: "low" | "medium" | "high"
  className?: string
  onInit?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void
  onAnimate?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void
}

export default function OptimizedThreeScene({
  complexity = "medium",
  className = "w-full h-[300px]",
  onInit,
  onAnimate,
}: OptimizedThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useScrollAnimation(0.1) // 10% threshold - starts loading when 10% visible

  useEffect(() => {
    if (!containerRef.current || !inView) return

    const container = containerRef.current
    const isMobile = isMobileDevice()
    const isHighPerformance = hasGoodPerformance()

    // Determine detail level based on device capability and requested complexity
    let detailLevel = "medium"

    if (isMobile) {
      // Mobile devices use lower detail regardless of GPU
      detailLevel = complexity === "high" ? "medium" : "low"
    } else if (isHighPerformance) {
      // High-end desktop uses requested detail level
      detailLevel = complexity
    } else {
      // Lower-end desktop steps down one level
      detailLevel = complexity === "high" ? "medium" : "low"
    }

    // Calculate polygon counts based on detail level
    const getPolygonCount = () => {
      switch (detailLevel) {
        case "high":
          return 100000
        case "medium":
          return 50000
        case "low":
          return 10000
        default:
          return 50000
      }
    }

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer with optimizations
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile && isHighPerformance,
      powerPreference: "high-performance",
      precision: isMobile ? "mediump" : "highp",
      alpha: true,
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio) // Cap at 2x for performance
    renderer.setClearColor(0x000000, 0) // Transparent background

    // Only add if not already present (prevents duplication on re-renders)
    if (container.childElementCount === 0) {
      container.appendChild(renderer.domElement)
    }

    // Call user initialization if provided
    if (onInit) {
      onInit(scene, camera, renderer)
    } else {
      // Default scene setup if no custom init provided
      const geometry = new THREE.SphereGeometry(1, 32, 32)
      const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true })
      const sphere = new THREE.Mesh(geometry, material)
      scene.add(sphere)
    }

    // Animation loop
    let frameId: number

    const animate = () => {
      frameId = requestAnimationFrame(animate)

      // Call user animation if provided
      if (onAnimate) {
        onAnimate(scene, camera, renderer)
      } else {
        // Default animation if none provided
        if (scene.children.length > 0 && scene.children[0] instanceof THREE.Mesh) {
          scene.children[0].rotation.x += 0.01
          scene.children[0].rotation.y += 0.01
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameId)
      if (renderer && containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose()

          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        }
      })
    }
  }, [inView, complexity, onInit, onAnimate])

  return (
    <div ref={ref} className={className}>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  )
}
