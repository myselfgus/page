"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  organization: z.string().optional(),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate successful submission
      setIsSuccess(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      setErrorMessage("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nome
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-emotional-light"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-emotional-light"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium mb-1">
          Organização (opcional)
        </label>
        <input
          id="organization"
          {...register("organization")}
          className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-emotional-light"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-emotional-light"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      {errorMessage && (
        <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md">{errorMessage}</div>
      )}

      {isSuccess && (
        <div className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-md">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="w-full btn btn-primary flex items-center justify-center">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Enviando...
          </>
        ) : (
          "Enviar Mensagem"
        )}
      </button>
    </motion.form>
  )
}
