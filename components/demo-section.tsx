"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Upload, Mic, Pause, FileAudio, Brain, Zap, Heart, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function DemoSection() {
  const [sectionRef, sectionInView] = useScrollAnimation()
  const [isRecording, setIsRecording] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)

  const processingSteps = [
    { name: "Transcrição", description: "GPT-4o-Whisper + Phi-4", icon: FileAudio },
    { name: "Análise Sintática", description: "Claude 4 Sonnet", icon: Brain },
    { name: "Análise Semântica", description: "Cohere R + VINTRA", icon: Zap },
    { name: "Compreensão Dimensional", description: "Mapeamento Vetorial", icon: Heart },
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file)
      setShowResults(false)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: BlobPart[] = []
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" })
        const file = new File([blob], "recording.wav", { type: "audio/wav" })
        setAudioFile(file)
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Erro ao acessar microfone:", error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const processAudio = async () => {
    if (!audioFile) return

    setIsProcessing(true)
    setShowResults(false)
    setProcessingStep(0)

    // Simular processamento
    for (let i = 0; i < processingSteps.length; i++) {
      setProcessingStep(i)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    setIsProcessing(false)
    setShowResults(true)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }

  return (
    <section
      id="demo"
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-blue-300 border-blue-300">
            Demonstração Interativa
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Experimente a tecnologia da{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">H/H</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Faça upload de uma consulta de 15-25 minutos ou grave uma sessão simulada. Nossa IA não apenas transcreve —
            ela <strong>compreende</strong> o paciente com a mesma profundidade que você, médico.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upload/Recording Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="h-6 w-6 text-blue-400" />
                  Análise Dimensional de Consulta
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Upload de áudio ou gravação ao vivo (15-25 minutos)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="audio/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">Arraste um arquivo de áudio ou clique para selecionar</p>
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  >
                    Selecionar Arquivo
                  </Button>
                </div>

                {/* Recording Controls */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-px bg-slate-600 flex-1" />
                  <span className="text-gray-400 text-sm">ou</span>
                  <div className="h-px bg-slate-600 flex-1" />
                </div>

                <div className="text-center">
                  <Button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`${
                      isRecording ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
                    } text-white px-8 py-3`}
                  >
                    {isRecording ? (
                      <>
                        <Pause className="h-5 w-5 mr-2" />
                        Parar Gravação
                      </>
                    ) : (
                      <>
                        <Mic className="h-5 w-5 mr-2" />
                        Gravar Consulta
                      </>
                    )}
                  </Button>
                  {isRecording && <p className="text-red-400 text-sm mt-2 animate-pulse">🔴 Gravando...</p>}
                </div>

                {/* File Info */}
                {audioFile && (
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileAudio className="h-5 w-5 text-blue-400" />
                      <div className="flex-1">
                        <p className="text-white font-medium">{audioFile.name}</p>
                        <p className="text-gray-400 text-sm">{(audioFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <Button
                        onClick={processAudio}
                        disabled={isProcessing}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        {isProcessing ? "Processando..." : "Analisar"}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Processing/Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Processing Steps */}
            {(isProcessing || showResults) && (
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Pipeline de Processamento</CardTitle>
                  <CardDescription className="text-gray-400">
                    Análise sintática e semântica
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {processingSteps.map((step, index) => {
                      const Icon = step.icon
                      const isActive = isProcessing && processingStep === index
                      const isCompleted = showResults || processingStep > index

                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                            isActive
                              ? "bg-blue-600/20 border border-blue-400"
                              : isCompleted
                                ? "bg-green-600/20"
                                : "bg-slate-700/30"
                          }`}
                        >
                          <div
                            className={`p-2 rounded-full ${
                              isActive ? "bg-blue-600" : isCompleted ? "bg-green-600" : "bg-slate-600"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle className="h-5 w-5 text-white" />
                            ) : (
                              <Icon className={`h-5 w-5 text-white ${isActive ? "animate-pulse" : ""}`} />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">{step.name}</p>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                          </div>
                          {isActive && (
                            <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Results Preview */}
            {showResults && (
              <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-400/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Heart className="h-6 w-6 text-green-400" />
                    Análise Dimensional Completa
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Compreensão profunda do estado emocional e cognitivo do paciente
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span className="text-white font-medium">Tempo Economizado</span>
                      </div>
                      <p className="text-2xl font-bold text-green-400">18 min</p>
                      <p className="text-gray-400 text-sm">de 20 min totais</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="h-4 w-4 text-purple-400" />
                        <span className="text-white font-medium">Precisão</span>
                      </div>
                      <p className="text-2xl font-bold text-purple-400">94.7%</p>
                      <p className="text-gray-400 text-sm">análise dimensional</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-3">Insights Principais</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Estado emocional: Ansiedade moderada identificada</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">
                          Padrões cognitivos: Pensamento ruminativo detectado
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">
                          Recomendações: 3 intervenções terapêuticas sugeridas
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-green-400 font-medium">✨ Análise completa disponível para revisão médica</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Call to Action */}
            {!audioFile && !isProcessing && !showResults && (
              <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-400/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Brain className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Pronto para Revolucionar sua Prática?</h3>
                  <p className="text-gray-300 mb-6">
                    Faça upload de uma consulta e veja como nossa IA compreende seus pacientes com a mesma profundidade
                    que você.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                      Claude 4 Sonnet
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                      Cohere R
                    </Badge>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-300">
                      GPT-4o-Whisper
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-600/20 text-orange-300">
                      Phi-4
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            * Versão de demonstração: análise sintática e semântica limitada para conhecimento inicial
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
          >
            Entre em contato para colaborar com nossa equipe
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
