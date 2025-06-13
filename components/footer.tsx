"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const footerNav = [
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nós", action: () => scrollToSection("about") },
        { label: "Nossa Abordagem", action: () => scrollToSection("approach") },
        { label: "Equipe", action: () => scrollToSection("team") },
        { label: "Contato", action: () => scrollToSection("contact") },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Artigos", href: "#" },
        { label: "Documentação", href: "#" },
        { label: "FAQ", action: () => scrollToSection("faq") },
        { label: "Webinars", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "#" },
        { label: "Política de Privacidade", href: "#" },
        { label: "Uso de Cookies", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          <div className="md:col-span-1">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-9 h-9 bg-white clip-triangle flex justify-center items-center transform rotate-180 mr-2 relative">
                <div className="w-[70%] h-[70%] absolute bg-repeat-y bg-[length:100%_10px] bg-[linear-gradient(to_bottom,#0f172a,#0f172a_2px,transparent_2px,transparent_8px)]"></div>
              </div>
              <span className="font-primary font-bold text-xl text-white tracking-wider">ZeoCare</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm leading-relaxed max-w-xs text-gray-medium mb-6"
            >
              Reimaginando a saúde mental através de uma abordagem dimensional-vetorial inovadora. Transformando a
              compreensão da experiência humana.
            </motion.p>

            {/* Redes Sociais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 mb-6"
            >
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors duration-300 hover:bg-blue-600"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors duration-300 hover:bg-gray-600"
              >
                <span className="sr-only">X (Twitter)</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors duration-300 hover:bg-pink-600"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              className="pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.p
                className="text-sm text-gray-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                &copy; {currentYear} ZeoCare. Todos os direitos reservados.
              </motion.p>

              {/* Informações de contato */}
              <motion.div
                className="text-xs text-gray-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3" /> São Paulo, SP, Brasil
                </p>
                <p className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <a href="mailto:contato@zeocare.com" className="hover:text-white transition-colors">
                    contato@zeocare.com
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerNav.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <h4 className="text-lg mb-4 text-gray-light font-semibold">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <Link href={link.href} className="text-gray-medium hover:text-white transition-colors text-sm">
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          onClick={link.action}
                          className="text-gray-medium hover:text-white transition-colors text-sm"
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - REMOVED */}
      </div>
    </footer>
  )
}
