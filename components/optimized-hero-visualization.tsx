"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useIsMobile } from "@/hooks/use-mobile"

export default function OptimizedHeroVisualization() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0f172a)

    // Canvas sizing
    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.set(6, 4, 8)
    camera.lookAt(0, 0, 0)

    // Renderer setup with performance considerations
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x1e293b, 0x1e293b)
    gridHelper.position.y = -2
    scene.add(gridHelper)

    // Create dimension axes representation
    const createAxis = (color: number, dir: THREE.Vector3, length: number) => {
      const material = new THREE.LineBasicMaterial({ color })
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        dir.clone().multiplyScalar(length),
      ])
      return new THREE.Line(geometry, material)
    }

    const axes = [
      createAxis(0x3b82f6, new THREE.Vector3(1, 0, 0), 5), // Emotional (Blue)
      createAxis(0x10b981, new THREE.Vector3(0, 1, 0), 5), // Cognitive (Green)
      createAxis(0xec4899, new THREE.Vector3(0, 0, 1), 5), // Autonomy (Pink)
    ]

    axes.forEach((axis) => scene.add(axis))

    // Create points with optimized count based on device
    const createPoints = (count: number, radius: number) => {
      const positions: number[] = []
      const colors: number[] = []
      const color = new THREE.Color()

      for (let i = 0; i < count; i++) {
        // Random position in a sphere
        const x = (Math.random() - 0.5) * radius
        const y = (Math.random() - 0.5) * radius
        const z = (Math.random() - 0.5) * radius

        positions.push(x, y, z)

        // Color based on position (blend of axis colors)
        const normalized = new THREE.Vector3(x, y, z).normalize()
        color.setRGB(
          0.3 + 0.7 * Math.abs(normalized.x), // Blue influence
          0.3 + 0.7 * Math.abs(normalized.y), // Green influence
          0.3 + 0.7 * Math.abs(normalized.z), // Pink influence
        )

        colors.push(color.r, color.g, color.b)
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      })

      return new THREE.Points(geometry, material)
    }

    // Adjust point count based on device capability
    const pointCount = 500
    const statePoints = createPoints(pointCount, 8)
    scene.add(statePoints)

    // Create a trajectory path - simplified for mobile
    const trajectoryPoints = [
      new THREE.Vector3(-3, 1, 4),
      new THREE.Vector3(-2, 1.5, 3),
      new THREE.Vector3(-1, 2, 2),
      new THREE.Vector3(0, 2.5, 1),
      new THREE.Vector3(1, 3, 0.5),
      new THREE.Vector3(2, 3.5, 0),
    ]

    const trajectoryGeometry = new THREE.BufferGeometry().setFromPoints(trajectoryPoints)
    const trajectoryMaterial = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 3 })
    const trajectoryLine = new THREE.Line(trajectoryGeometry, trajectoryMaterial)
    scene.add(trajectoryLine)

    // Add trajectory points as spheres - fewer on mobile
    const sphereGeometry = new THREE.SphereGeometry(0.15, 16, 16)

    trajectoryPoints.forEach((point, index) => {
      const material = new THREE.MeshStandardMaterial({
        color: index === trajectoryPoints.length - 1 ? 0xf59e0b : 0xffffff,
        emissive: index === trajectoryPoints.length - 1 ? 0xf59e0b : 0x000000,
        emissiveIntensity: index === trajectoryPoints.length - 1 ? 0.5 : 0,
      })
      const sphere = new THREE.Mesh(sphereGeometry, material)
      sphere.position.copy(point)
      scene.add(sphere)
    })

    // Animation with frame limiting for better performance
    let lastTime = 0
    const frameInterval = 1000 / 60 // 60fps for both mobile and desktop

    const animate = (currentTime: number) => {
      requestAnimationFrame(animate)

      // Limit frame rate
      if (currentTime - lastTime < frameInterval) return
      lastTime = currentTime

      // Rotate camera around scene - slower on mobile
      const time = currentTime * 0.0001
      camera.position.x = Math.cos(time) * 10
      camera.position.z = Math.sin(time) * 10
      camera.lookAt(0, 0, 0)

      // Animate points slightly - less frequently on mobile
      const positions = statePoints.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(time * 5 + i) * 0.01
        positions[i + 1] += Math.cos(time * 5 + i) * 0.01
        positions[i + 2] += Math.sin(time * 3 + i) * 0.01
      }
      statePoints.geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)

      if (!isLoaded) setIsLoaded(true)
    }

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return

      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)
    animate(0)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }

      // Dispose of geometries and materials
      statePoints.geometry.dispose()
      trajectoryGeometry.dispose()
      sphereGeometry.dispose()

      renderer.dispose()
    }
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[1]" ref={mountRef}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-4 border-emotional-light border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
