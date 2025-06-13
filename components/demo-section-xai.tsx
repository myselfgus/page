"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Upload, Mic, Play, Square, FileAudio } from "lucide-react"

export default function DemoSectionXAI() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)

  const processingSteps = [
    "Audio Analysis",
    "Transcription", 
    "Dimensional Mapping",
    "Clinical Insights"
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file)
    }
  }

  const startRecording = async () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop()
      setIsRecording(false)
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: BlobPart[] = []
      mediaRecorder.ondataavailable = (event) => chunks.push(event.data)
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" })
        setAudioFile(new File([blob], "recording.wav", { type: "audio/wav" }))
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Recording failed:", error)
    }
  }

  const processAudio = () => {
    if (!audioFile) return
    
    setIsProcessing(true)
    setProcessingStep(0)

    const interval = setInterval(() => {
      setProcessingStep(prev => {
        if (prev >= processingSteps.length - 1) {
          clearInterval(interval)
          setIsProcessing(false)
          return prev
        }
        return prev + 1
      })
    }, 1500)
  }

  return (
    <section 
      id="demo" 
      className="py-32 relative"
      style={{background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)"}}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 
            className="mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "3rem",
              fontWeight: "300",
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: "1.1"
            }}
          >
            Experience ZeoCare
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 mx-auto mb-6"></div>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: "1rem",
            fontWeight: "400",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Advanced AI transcription with dimensional mental health analysis
          </p>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mcp-card max-w-2xl mx-auto"
        >
          
          {/* Upload/Record Area */}
          <div className="mb-8">
            <div className="flex flex-col items-center gap-6">
              
              {/* File Upload */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="btn-mcp-secondary flex items-center gap-3 w-full max-w-xs justify-center"
              >
                <Upload size={18} />
                Upload Audio
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <div className="text-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 mx-auto mb-2"></div>
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "rgba(255, 255, 255, 0.3)",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
                }}>
                  OR
                </span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 mx-auto mt-2"></div>
              </div>

              {/* Record Button */}
              <button
                onClick={startRecording}
                className={`btn-mcp-primary flex items-center gap-3 w-full max-w-xs justify-center ${
                  isRecording ? 'bg-red-500/20 border-red-500/30' : ''
                }`}
              >
                {isRecording ? <Square size={18} /> : <Mic size={18} />}
                {isRecording ? 'Stop Recording' : 'Record Audio'}
              </button>
            </div>

            {/* Audio File Status */}
            {audioFile && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FileAudio size={16} style={{color: "rgba(255, 255, 255, 0.6)"}} />
                  <span style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.9rem"
                  }}>
                    {audioFile.name}
                  </span>
                </div>
                <button
                  onClick={processAudio}
                  disabled={isProcessing}
                  className="btn-mcp-primary"
                >
                  {isProcessing ? 'Processing...' : 'Analyze Audio'}
                </button>
              </motion.div>
            )}
          </div>

          {/* Processing Steps */}
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {processingSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div 
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index <= processingStep 
                        ? 'bg-white opacity-100' 
                        : 'bg-white/20 opacity-50'
                    }`}
                  />
                  <span style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: index <= processingStep ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)",
                    fontSize: "0.9rem",
                    transition: "color 0.5s ease"
                  }}>
                    {step}
                  </span>
                  {index === processingStep && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 border border-white/30 border-t-white/80 rounded-full ml-auto"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {/* Results */}
          {!isProcessing && processingStep === processingSteps.length - 1 && audioFile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 pt-6 border-t border-white/10"
            >
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1.1rem",
                fontWeight: "500"
              }}>
                Analysis Complete
              </h4>
              <div className="space-y-2">
                <div className="text-sm" style={{color: "rgba(255, 255, 255, 0.6)"}}>
                  • Transcription accuracy: 98.5%
                </div>
                <div className="text-sm" style={{color: "rgba(255, 255, 255, 0.6)"}}>
                  • Dimensional insights: 14 key markers identified
                </div>
                <div className="text-sm" style={{color: "rgba(255, 255, 255, 0.6)"}}>
                  • Clinical documentation: Generated
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}