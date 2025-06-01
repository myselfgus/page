"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { SendHorizonal, MessageCircle, X } from "lucide-react"

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({ api: "/api/chat" })

  const endRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 sm:w-96 h-[450px] bg-white shadow-xl rounded-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-black/90 backdrop-blur">
            <h4 className="text-sm font-semibold text-white">Assistente HEALTH</h4>
            <button onClick={() => setOpen(false)} className="text-white hover:text-emotional-light transition-colors">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 bg-gray-50 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`whitespace-pre-wrap rounded-lg px-3 py-2 max-w-[90%] ${
                  m.role === "user" ? "bg-emotional-light/10 self-end text-gray-900" : "bg-white border self-start"
                }`}
              >
                {m.content}
              </div>
            ))}
            {isLoading && <p className="text-gray-500 text-xs">digitando...</p>}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t bg-white">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Envie uma mensagem..."
                className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-emotional-light"
              />
              <button
                type="submit"
                className="p-2 rounded-md bg-emotional-light text-white disabled:opacity-50"
                disabled={isLoading || input.length === 0}
              >
                <SendHorizonal size={16} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-emotional-light shadow-lg hover:scale-105 transition-transform"
        >
          <MessageCircle className="text-white" />
        </button>
      )}
    </div>
  )
}
