"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import OptimizedThreeScene from "./optimized-three-scene"
import * as THREE from "three"

export default function BrainVisualization() {
  const [loaded, setLoaded] = useState(false)

  // Custom initialization function for Three.js scene
  const initScene = (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => {
    // Create a brain-like structure
    const brainGroup = new THREE.Group()

    // Create a base sphere for the brain
    const brainGeometry = new THREE.SphereGeometry(1.5, 16, 16)
    const brainMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    })
    const brain = new THREE.Mesh(brainGeometry, brainMaterial)
    brainGroup.add(brain)

    // Add some "neurons" (small spheres)
    const neuronCount = 50
    const neuronGeometry = new THREE.SphereGeometry(0.05, 8, 8)
    const neuronMaterial = new THREE.MeshBasicMaterial({ color: 0xec4899 })

    for (let i = 0; i < neuronCount; i++) {
      const neuron = new THREE.Mesh(neuronGeometry, neuronMaterial)
      // Position neurons randomly within the brain radius
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 1.3 * Math.random() + 0.2

      neuron.position.x = radius * Math.sin(phi) * Math.cos(theta)
      neuron.position.y = radius * Math.sin(phi) * Math.sin(theta)
      neuron.position.z = radius * Math.cos(phi)

      brainGroup.add(neuron)
    }

    // Add "connections" between neurons (lines)
    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.3,
    })

    // Connect some random neurons
    for (let i = 0; i < neuronCount; i++) {
      for (let j = i + 1; j < neuronCount; j++) {
        // Only connect some neurons (about 10%)
        if (Math.random() > 0.1) continue

        const neuron1 = brainGroup.children[i + 1] // +1 to skip the brain itself
        const neuron2 = brainGroup.children[j + 1]

        const points = []
        points.push(neuron1.position.clone())
        points.push(neuron2.position.clone())

        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const line = new THREE.Line(geometry, connectionMaterial)
        brainGroup.add(line)
      }
    }

    scene.add(brainGroup)

    // Set camera position
    camera.position.z = 4

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(0, 1, 1)
    scene.add(directionalLight)

    // Mark as loaded
    setLoaded(true)

    // Store brain group for animation
    scene.userData.brainGroup = brainGroup
  }

  // Animation function
  const animateScene = (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => {
    if (scene.userData.brainGroup) {
      // Rotate the brain group
      scene.userData.brainGroup.rotation.y += 0.005
      scene.userData.brainGroup.rotation.x += 0.001

      // Pulse the brain (scale slightly up and down)
      const pulse = Math.sin(Date.now() * 0.001) * 0.03 + 1
      scene.userData.brainGroup.scale.set(pulse, pulse, pulse)
    }
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <OptimizedThreeScene className="w-full h-full" complexity="medium" onInit={initScene} onAnimate={animateScene} />

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-dark/50 backdrop-blur-sm">
          <div className="text-white text-center">
            <div className="w-10 h-10 border-4 border-emotional-light border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p>Carregando visualização...</p>
          </div>
        </div>
      )}

      <motion.div
        className="absolute bottom-4 left-4 bg-black/80 text-white text-xs rounded-md px-3 py-2 max-w-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ delay: 0.5 }}
      >
        Visualização 3D otimizada para performance em diferentes dispositivos
      </motion.div>
    </div>
  )
}
