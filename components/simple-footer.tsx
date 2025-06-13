"use client"

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-primary font-[300] text-xl text-white/60">
              ZEO
            </span>
          </div>
          
          <div className="text-sm text-white/40 font-[300]">
            © {currentYear} ZEO. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}