import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0f1115]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#top')}
          className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          ZEDIAN<span className="text-[#00df8f]">.</span>
        </button>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() => scrollTo(link.href)}
                className="text-sm font-semibold text-gray-400 uppercase tracking-widest hover:text-[#00df8f] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00df8f] group-hover:w-full transition-all duration-300" />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo('#contact')}
          className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00df8f]/40 hover:bg-[#00df8f]/10 transition-all duration-300 group"
          aria-label="Go to contact"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00df8f] group-hover:shadow-[0_0_12px_rgba(0,223,143,0.8)] transition-all duration-300" />
        </motion.button>
      </div>
    </motion.nav>
  )
}
