import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'

const menuLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#services' },
]

const socialLinks = [
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter / X', href: '#' },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative bg-[#0d1116] pt-32 pb-10 overflow-hidden border-t border-white/[0.07]">

      {/* Giant background "CONTACT" text */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold tracking-tighter text-white leading-none"
          style={{ fontSize: '22vw', opacity: 0.04 }}
        >
          CONTACT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-[#00df8f]" />
              <span className="text-xs font-semibold text-[#00df8f] tracking-widest uppercase">Get in Touch</span>
            </div>

            <h2
              className="font-bold tracking-tighter leading-[0.92] text-white mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              HOW CAN
              <br />I HELP<span className="text-[#00df8f]">?</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-10 max-w-md text-sm">
              Whether you need a full product redesign, a brand identity system, or a
              polished website — I'm here for it. Let's build something you're proud of.
              Typically respond within 24 hours.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:hello@zedian.co"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-[#00df8f] transition-colors duration-300"
              >
                <Mail size={15} />
                hello@zedian.co
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm tracking-wide hover:border-[#00df8f]/40 hover:text-[#00df8f] transition-all duration-300"
              >
                Book a Call
                <ArrowUpRight size={15} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right — Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="grid grid-cols-2 gap-12 pt-2"
          >
            {/* Menu */}
            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">Menu</p>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">Socials</p>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#00df8f] text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.07] mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 tracking-wide">
            © 2026 Zedian Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
              Terms of Use
            </a>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00df8f] shadow-[0_0_6px_rgba(0,223,143,1)]" />
              <span className="text-xs text-gray-600">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
