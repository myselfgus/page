"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function ExplosiveVisualization() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const particlesRef = useRef<THREE.Points>()
  const smokeRef = useRef<THREE.Points>()
  const frameRef = useRef<number>()
  const particleDataRef = useRef<
    Array<{
      originalPosition: THREE.Vector3
      velocity: THREE.Vector3
      phase: number
      amplitude: number
      frequency: number
      size: number
      age: number
    }>
  >([])

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup with subtle atmosphere
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0e1a)
    scene.fog = new THREE.FogExp2(0x0a0e1a, 0.015)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(30, 25, 30)
    cameraRef.current = camera

    // Renderer setup with enhanced shadows
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    mountRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Subtle lighting setup
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.4)
    scene.add(ambientLight)

    // Main directional light with soft shadows
    const directionalLight = new THREE.DirectionalLight(0x4a5568, 0.6)
    directionalLight.position.set(20, 30, 10)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 4096
    directionalLight.shadow.mapSize.height = 4096
    directionalLight.shadow.camera.near = 0.1
    directionalLight.shadow.camera.far = 100
    directionalLight.shadow.camera.left = -50
    directionalLight.shadow.camera.right = 50
    directionalLight.shadow.camera.top = 50
    directionalLight.shadow.camera.bottom = -50
    directionalLight.shadow.bias = -0.0001
    scene.add(directionalLight)

    // Subtle center glow
    const centerLight = new THREE.PointLight(0xff6b35, 0.8, 25, 2)
    centerLight.position.set(0, 0, 0)
    centerLight.castShadow = true
    scene.add(centerLight)

    // Peripheral blue glow
    const blueLight = new THREE.PointLight(0x4a90e2, 0.4, 40, 2)
    blueLight.position.set(-20, 10, -20)
    scene.add(blueLight)

    // Create main particle system with exact colors from images
    const particleCount = 2500
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const particleData: Array<{
      originalPosition: THREE.Vector3
      velocity: THREE.Vector3
      phase: number
      amplitude: number
      frequency: number
      size: number
      age: number
    }> = []

    // Generate delicate burst pattern
    for (let i = 0; i < particleCount; i++) {
      // More organic distribution
      const radius = Math.pow(Math.random(), 0.6) * 16 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      // Subtle irregularity
      const irregularity = 0.15
      const radiusVariation = radius * (1 + (Math.random() - 0.5) * irregularity)

      const x = radiusVariation * Math.sin(phi) * Math.cos(theta)
      const y = radiusVariation * Math.sin(phi) * Math.sin(theta)
      const z = radiusVariation * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Exact color palette from the images
      const distance = radiusVariation / 18
      let r, g, b

      if (distance < 0.15) {
        // Deep center: bright orange-red
        r = 1.0
        g = 0.42 // #ff6b35
        b = 0.21
      } else if (distance < 0.3) {
        // Orange transition
        const t = (distance - 0.15) / 0.15
        r = 1.0
        g = 0.42 + t * 0.38 // to #ffaa35
        b = 0.21 + t * 0.14
      } else if (distance < 0.5) {
        // Yellow-green transition
        const t = (distance - 0.3) / 0.2
        r = 1.0 - t * 0.3
        g = 0.8 + t * 0.2
        b = 0.35 + t * 0.25
      } else if (distance < 0.7) {
        // Green to cyan
        const t = (distance - 0.5) / 0.2
        r = 0.7 - t * 0.4
        g = 1.0 - t * 0.1
        b = 0.6 + t * 0.3
      } else if (distance < 0.85) {
        // Cyan to blue
        const t = (distance - 0.7) / 0.15
        r = 0.3 - t * 0.2
        g = 0.9 - t * 0.3
        b = 0.9 + t * 0.1
      } else {
        // Deep blue edges
        const t = (distance - 0.85) / 0.15
        r = 0.1 - t * 0.05
        g = 0.6 - t * 0.2
        b = 1.0
      }

      colors[i * 3] = r
      colors[i * 3 + 1] = g
      colors[i * 3 + 2] = b

      // Delicate size variation
      const baseSize = Math.max(0.03, (1 - distance) * 0.25 + Math.random() * 0.1)
      sizes[i] = baseSize

      // Store particle data for gentle animation
      particleData.push({
        originalPosition: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
        ),
        phase: Math.random() * Math.PI * 2,
        amplitude: 0.2 + Math.random() * 0.3,
        frequency: 0.3 + Math.random() * 0.4,
        size: baseSize,
        age: Math.random() * 100,
      })
    }

    particleDataRef.current = particleData

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

    // Delicate particle material
    const material = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(geometry, material)
    particles.castShadow = true
    particles.receiveShadow = true
    scene.add(particles)
    particlesRef.current = particles

    // Create smoke/mist effect
    const smokeCount = 800
    const smokePositions = new Float32Array(smokeCount * 3)
    const smokeColors = new Float32Array(smokeCount * 3)
    const smokeSizes = new Float32Array(smokeCount)

    for (let i = 0; i < smokeCount; i++) {
      const radius = Math.random() * 25 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * 10
      const z = radius * Math.cos(phi)

      smokePositions[i * 3] = x
      smokePositions[i * 3 + 1] = y
      smokePositions[i * 3 + 2] = z

      // Subtle smoke colors
      const intensity = 0.1 + Math.random() * 0.15
      smokeColors[i * 3] = intensity * 0.8
      smokeColors[i * 3 + 1] = intensity * 0.9
      smokeColors[i * 3 + 2] = intensity * 1.2

      smokeSizes[i] = 0.5 + Math.random() * 1.5
    }

    const smokeGeometry = new THREE.BufferGeometry()
    smokeGeometry.setAttribute("position", new THREE.BufferAttribute(smokePositions, 3))
    smokeGeometry.setAttribute("color", new THREE.BufferAttribute(smokeColors, 3))
    smokeGeometry.setAttribute("size", new THREE.BufferAttribute(smokeSizes, 1))

    const smokeMaterial = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.15,
      sizeAttenuation: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    })

    const smoke = new THREE.Points(smokeGeometry, smokeMaterial)
    scene.add(smoke)
    smokeRef.current = smoke

    // Create 3D Grid System
    const gridSize = 40
    const gridDivisions = 20
    const gridStep = gridSize / gridDivisions

    // Create grid material
    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0x333366,
      transparent: true,
      opacity: 0.3,
    })

    // XY Plane grids (multiple planes along Z)
    for (let z = -gridSize / 2; z <= gridSize / 2; z += gridStep) {
      const xyGridGeometry = new THREE.BufferGeometry()
      const xyGridPoints = []

      // Horizontal lines
      for (let y = -gridSize / 2; y <= gridSize / 2; y += gridStep) {
        xyGridPoints.push(-gridSize / 2, y, z)
        xyGridPoints.push(gridSize / 2, y, z)
      }

      // Vertical lines
      for (let x = -gridSize / 2; x <= gridSize / 2; x += gridStep) {
        xyGridPoints.push(x, -gridSize / 2, z)
        xyGridPoints.push(x, gridSize / 2, z)
      }

      xyGridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(xyGridPoints, 3))
      const xyGrid = new THREE.LineSegments(xyGridGeometry, gridMaterial.clone())
      xyGrid.material.opacity = 0.15 + (1 - Math.abs(z) / (gridSize / 2)) * 0.15
      scene.add(xyGrid)
    }

    // XZ Plane grids (multiple planes along Y)
    for (let y = -gridSize / 2; y <= gridSize / 2; y += gridStep) {
      const xzGridGeometry = new THREE.BufferGeometry()
      const xzGridPoints = []

      // Lines along X
      for (let z = -gridSize / 2; z <= gridSize / 2; z += gridStep) {
        xzGridPoints.push(-gridSize / 2, y, z)
        xzGridPoints.push(gridSize / 2, y, z)
      }

      // Lines along Z
      for (let x = -gridSize / 2; x <= gridSize / 2; x += gridStep) {
        xzGridPoints.push(x, y, -gridSize / 2)
        xzGridPoints.push(x, y, gridSize / 2)
      }

      xzGridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(xzGridPoints, 3))
      const xzGrid = new THREE.LineSegments(xzGridGeometry, gridMaterial.clone())
      xzGrid.material.opacity = 0.1 + (1 - Math.abs(y) / (gridSize / 2)) * 0.1
      scene.add(xzGrid)
    }

    // YZ Plane grids (multiple planes along X)
    for (let x = -gridSize / 2; x <= gridSize / 2; x += gridStep) {
      const yzGridGeometry = new THREE.BufferGeometry()
      const yzGridPoints = []

      // Lines along Y
      for (let z = -gridSize / 2; z <= gridSize / 2; z += gridStep) {
        yzGridPoints.push(x, -gridSize / 2, z)
        yzGridPoints.push(x, gridSize / 2, z)
      }

      // Lines along Z
      for (let y = -gridSize / 2; y <= gridSize / 2; y += gridStep) {
        yzGridPoints.push(x, y, -gridSize / 2)
        yzGridPoints.push(x, y, gridSize / 2)
      }

      yzGridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(yzGridPoints, 3))
      const yzGrid = new THREE.LineSegments(yzGridGeometry, gridMaterial.clone())
      yzGrid.material.opacity = 0.1 + (1 - Math.abs(x) / (gridSize / 2)) * 0.1
      scene.add(yzGrid)
    }

    // Create prominent mathematical axes
    const axesLength = 20

    // X-axis (red)
    const xAxisGeometry = new THREE.CylinderGeometry(0.08, 0.08, axesLength, 16)
    const xAxisMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333 })
    const xAxis = new THREE.Mesh(xAxisGeometry, xAxisMaterial)
    xAxis.rotation.z = -Math.PI / 2
    xAxis.position.x = axesLength / 2
    scene.add(xAxis)

    // X-axis arrow
    const xArrowGeometry = new THREE.ConeGeometry(0.3, 1, 16)
    const xArrow = new THREE.Mesh(xArrowGeometry, xAxisMaterial)
    xArrow.position.x = axesLength + 0.5
    xArrow.rotation.z = -Math.PI / 2
    scene.add(xArrow)

    // X-axis label
    const xLabelGeometry = new THREE.PlaneGeometry(2, 1)
    const xLabelCanvas = document.createElement("canvas")
    xLabelCanvas.width = 256
    xLabelCanvas.height = 128
    const xLabelContext = xLabelCanvas.getContext("2d")
    if (xLabelContext) {
      xLabelContext.fillStyle = "#ffffff"
      xLabelContext.font = "Bold 80px Arial"
      xLabelContext.textAlign = "center"
      xLabelContext.textBaseline = "middle"
      xLabelContext.fillText("Dimensional", 128, 64)
    }
    const xLabelTexture = new THREE.CanvasTexture(xLabelCanvas)
    const xLabelMaterial = new THREE.MeshBasicMaterial({
      map: xLabelTexture,
      transparent: true,
      side: THREE.DoubleSide,
    })
    const xLabel = new THREE.Mesh(xLabelGeometry, xLabelMaterial)
    xLabel.position.x = axesLength + 2
    scene.add(xLabel)

    // Y-axis (green)
    const yAxisGeometry = new THREE.CylinderGeometry(0.08, 0.08, axesLength, 16)
    const yAxisMaterial = new THREE.MeshBasicMaterial({ color: 0x33ff33 })
    const yAxis = new THREE.Mesh(yAxisGeometry, yAxisMaterial)
    yAxis.position.y = axesLength / 2
    scene.add(yAxis)

    // Y-axis arrow
    const yArrowGeometry = new THREE.ConeGeometry(0.3, 1, 16)
    const yArrow = new THREE.Mesh(yArrowGeometry, yAxisMaterial)
    yArrow.position.y = axesLength + 0.5
    scene.add(yArrow)

    // Y-axis label
    const yLabelGeometry = new THREE.PlaneGeometry(2, 1)
    const yLabelCanvas = document.createElement("canvas")
    yLabelCanvas.width = 256
    yLabelCanvas.height = 128
    const yLabelContext = yLabelCanvas.getContext("2d")
    if (yLabelContext) {
      yLabelContext.fillStyle = "#ffffff"
      yLabelContext.font = "Bold 80px Arial"
      yLabelContext.textAlign = "center"
      yLabelContext.textBaseline = "middle"
      yLabelContext.fillText("Cognitivo", 128, 64)
    }
    const yLabelTexture = new THREE.CanvasTexture(yLabelCanvas)
    const yLabelMaterial = new THREE.MeshBasicMaterial({
      map: yLabelTexture,
      transparent: true,
      side: THREE.DoubleSide,
    })
    const yLabel = new THREE.Mesh(yLabelGeometry, yLabelMaterial)
    yLabel.position.y = axesLength + 2
    yLabel.rotation.x = -Math.PI / 2
    scene.add(yLabel)

    // Z-axis (blue)
    const zAxisGeometry = new THREE.CylinderGeometry(0.08, 0.08, axesLength, 16)
    const zAxisMaterial = new THREE.MeshBasicMaterial({ color: 0x3333ff })
    const zAxis = new THREE.Mesh(zAxisGeometry, zAxisMaterial)
    zAxis.rotation.x = Math.PI / 2
    zAxis.position.z = axesLength / 2
    scene.add(zAxis)

    // Z-axis arrow
    const zArrowGeometry = new THREE.ConeGeometry(0.3, 1, 16)
    const zArrow = new THREE.Mesh(zArrowGeometry, zAxisMaterial)
    zArrow.position.z = axesLength + 0.5
    zArrow.rotation.x = Math.PI / 2
    scene.add(zArrow)

    // Z-axis label
    const zLabelGeometry = new THREE.PlaneGeometry(2, 1)
    const zLabelCanvas = document.createElement("canvas")
    zLabelCanvas.width = 256
    zLabelCanvas.height = 128
    const zLabelContext = zLabelCanvas.getContext("2d")
    if (zLabelContext) {
      zLabelContext.fillStyle = "#ffffff"
      zLabelContext.font = "Bold 80px Arial"
      zLabelContext.textAlign = "center"
      zLabelContext.textBaseline = "middle"
      zLabelContext.fillText("Autonomia", 128, 64)
    }
    const zLabelTexture = new THREE.CanvasTexture(zLabelCanvas)
    const zLabelMaterial = new THREE.MeshBasicMaterial({
      map: zLabelTexture,
      transparent: true,
      side: THREE.DoubleSide,
    })
    const zLabel = new THREE.Mesh(zLabelGeometry, zLabelMaterial)
    zLabel.position.z = axesLength + 2
    zLabel.rotation.y = Math.PI / 2
    scene.add(zLabel)

    // Shadow receiving plane
    const planeGeometry = new THREE.PlaneGeometry(80, 80)
    const planeMaterial = new THREE.ShadowMaterial({
      opacity: 0.3,
      transparent: true,
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -Math.PI / 2
    plane.position.y = -20
    plane.receiveShadow = true
    scene.add(plane)

    // Delicate animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      const time = Date.now() * 0.0005 // Slower time for subtlety

      // Automatic gentle camera movement without mouse interaction
      camera.position.x = Math.cos(time * 0.3) * 30
      camera.position.z = Math.sin(time * 0.3) * 30
      camera.position.y = 25 + Math.sin(time * 0.8) * 3
      camera.lookAt(0, 0, 0)

      // Subtle particle animation
      if (particlesRef.current && particleDataRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
        const sizes = particlesRef.current.geometry.attributes.size.array as Float32Array

        // Very gentle global breathing
        const globalPulse = 1 + Math.sin(time * 1.2) * 0.08
        const globalRotation = time * 0.05

        particleDataRef.current.forEach((data, i) => {
          data.age += 0.5

          // Subtle individual oscillation
          const individualPulse = Math.sin(time * data.frequency + data.phase) * data.amplitude * 0.3

          // Calculate gentle position changes
          const baseRadius = data.originalPosition.length()
          const currentRadius = baseRadius * globalPulse * (1 + individualPulse * 0.1)

          // Very subtle irregular movement
          const irregularX = Math.sin(time * data.frequency * 0.5 + data.phase) * 0.2
          const irregularY = Math.cos(time * data.frequency * 0.7 + data.phase * 1.1) * 0.2
          const irregularZ = Math.sin(time * data.frequency * 0.6 + data.phase * 0.9) * 0.2

          // Apply gentle rotation and scaling
          const rotatedPos = data.originalPosition.clone()
          rotatedPos.applyAxisAngle(new THREE.Vector3(0, 1, 0), globalRotation)
          rotatedPos.multiplyScalar(currentRadius / baseRadius)

          // Add subtle movement
          rotatedPos.x += irregularX
          rotatedPos.y += irregularY
          rotatedPos.z += irregularZ

          // Update position
          positions[i * 3] = rotatedPos.x
          positions[i * 3 + 1] = rotatedPos.y
          positions[i * 3 + 2] = rotatedPos.z

          // Gentle size pulsing
          sizes[i] = data.size * (1 + Math.sin(time * 2 + data.phase) * 0.15)
        })

        particlesRef.current.geometry.attributes.position.needsUpdate = true
        particlesRef.current.geometry.attributes.size.needsUpdate = true

        // Very slow rotation
        particlesRef.current.rotation.y += 0.001
      }

      // Animate smoke
      if (smokeRef.current) {
        smokeRef.current.rotation.y += 0.0005
        smokeRef.current.rotation.x = Math.sin(time * 0.5) * 0.05

        const smokePositions = smokeRef.current.geometry.attributes.position.array as Float32Array
        for (let i = 0; i < smokePositions.length; i += 3) {
          smokePositions[i + 1] += Math.sin(time + i * 0.01) * 0.01
        }
        smokeRef.current.geometry.attributes.position.needsUpdate = true
      }

      // Gentle light animation
      centerLight.intensity = 0.8 + Math.sin(time * 3) * 0.1
      blueLight.position.x = Math.cos(time * 0.4) * 25
      blueLight.position.z = Math.sin(time * 0.4) * 25

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return

      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="w-full h-screen">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  )
}
