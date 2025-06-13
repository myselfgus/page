"use client"

export default function FooterXAI() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="py-16 border-t border-white/5"
      style={{background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)"}}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 0.7)",
              letterSpacing: "-0.02em"
            }}>
              ZeoCare
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 mb-8 md:mb-0">
            <a 
              href="mailto:contato@zeocare.com"
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: "0.9rem",
                fontWeight: "400",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              className="hover:text-white/60"
            >
              Contact
            </a>
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              color: "rgba(255, 255, 255, 0.2)",
              fontSize: "0.9rem"
            }}>
              •
            </span>
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: "0.9rem",
              fontWeight: "400"
            }}>
              Microsoft Founders Hub
            </span>
          </div>

          {/* Copyright */}
          <div style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "0.8rem",
            fontWeight: "400"
          }}>
            © {currentYear} ZeoCare. All rights reserved.
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12 opacity-30"></div>
        
        {/* Bottom text */}
        <div className="text-center mt-8">
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            color: "rgba(255, 255, 255, 0.2)",
            fontSize: "0.8rem",
            fontWeight: "400"
          }}>
            Advanced AI Clinical Assistant • Dimensional Mental Health Analysis
          </p>
        </div>
      </div>
    </footer>
  )
}