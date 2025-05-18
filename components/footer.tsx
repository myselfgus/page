"use client"

import { motion } from "framer-motion"
import Link from "next/link"

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
              <span className="font-primary font-bold text-xl text-white tracking-wider">HEALTH/HEALTH</span>
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

            {/* Selo Microsoft Founders Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4"
            >
              <p className="text-xs text-gray-medium">Membro oficial do:</p>
              <a
                href="https://www.microsoft.com/en-us/founders-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1"
              >
                <img
                  src="https://www.groovypost.com/wp-content/uploads/2017/02/Microsoft-logo.png"
                  alt="Microsoft for Startups Founders Hub"
                  className="h-8 opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
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
                <h4 className="text-lg mb-4 text-gray-light">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <motion.li key={link.label} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="text-gray-medium hover:text-emotional-light transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          onClick={link.action}
                          className="text-gray-medium hover:text-emotional-light transition-colors"
                        >
                          {link.label}
                        </button>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <motion.p
            className="text-sm text-gray-medium mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            &copy; {currentYear} HEALTH/HEALTH. Todos os direitos reservados.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-dark flex items-center justify-center transition-all duration-300"
              whileHover={{
                backgroundColor: "rgb(59, 130, 246)",
                y: -5,
                scale: 1.1,
              }}
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-dark flex items-center justify-center transition-all duration-300"
              whileHover={{
                backgroundColor: "rgb(59, 130, 246)",
                y: -5,
                scale: 1.1,
              }}
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-dark flex items-center justify-center transition-all duration-300"
              whileHover={{
                backgroundColor: "rgb(59, 130, 246)",
                y: -5,
                scale: 1.1,
              }}
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Informações de contato */}
        <div className="mt-4 pb-8 text-center text-xs text-gray-medium">
          <p>HEALTH/HEALTH | São Paulo, SP, Brasil</p>
          <p>
            Email:{" "}
            <a href="mailto:contato@healthhealth.com" className="hover:text-emotional-light">
              contato@healthhealth.com
            </a>{" "}
            | Telefone: (11) XXXX-XXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
