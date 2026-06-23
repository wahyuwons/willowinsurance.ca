import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

export default function Hero() {
  const constraintsRef = useRef(null)

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1116]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00df8f] opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Giant background word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold tracking-tighter text-white"
          style={{ fontSize: '22vw', opacity: 0.022, lineHeight: 1 }}
        >
          DESIGN
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">

          {/* Left — Text Content */}
          <div className="flex flex-col justify-center py-16 lg:py-0">
            {/* Subheading tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-2.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00df8f] shadow-[0_0_8px_rgba(0,223,143,0.8)]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                UX/UI Designer
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="font-bold tracking-tighter leading-[0.9] mb-6"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
            >
              <span className="block text-white">DIGITAL</span>
              <span className="block">
                <span style={{ WebkitTextStroke: '2px #00df8f', color: 'transparent' }}>
                  EXPERIENCES
                </span>
                <span className="text-[#00df8f]">.</span>
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="text-gray-400 leading-relaxed max-w-md mb-10 text-base"
            >
              I craft pixel-perfect digital experiences that live at the intersection
              of bold strategy and refined aesthetics. Every pixel has a purpose.
              Every interaction tells a story.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#work')}
                className="flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] text-black font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(0,223,143,0.3)] hover:shadow-[0_0_45px_rgba(0,223,143,0.45)] transition-shadow duration-300"
              >
                <span>View My Work</span>
                <span className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center">
                  <ArrowRight size={14} />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-3 px-7 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm tracking-wide hover:border-[#00df8f]/40 hover:bg-[#00df8f]/5 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00df8f]" />
                <span>Contact Me</span>
                <Mail size={14} className="text-gray-400" />
              </motion.button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-3 mt-16 text-gray-600"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-px h-10 bg-gradient-to-b from-transparent to-[#00df8f]/60"
              />
              <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            </motion.div>
          </div>

          {/* Right — Draggable ID Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            ref={constraintsRef}
            className="relative flex items-center justify-center h-[560px] lg:h-auto lg:min-h-[580px]"
          >
            {/* Subtle glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00df8f] opacity-[0.06] rounded-full blur-[80px] pointer-events-none" />

            <motion.div
              drag
              dragElastic={0.2}
              dragConstraints={constraintsRef}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              animate={{
                y: [0, -15, 0],
                rotateZ: [-1, 1, -1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
              className="relative cursor-grab select-none"
              style={{ width: 280 }}
            >
              {/* Lanyard strip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%-12px)] w-[3px] h-[180px] bg-gradient-to-t from-[#00df8f]/60 to-transparent rounded-full z-0" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%-12px)] w-8 h-4 bg-[#00df8f]/20 rounded-sm border border-[#00df8f]/30 z-10 flex items-center justify-center -mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00df8f]/60" />
              </div>

              {/* Card body */}
              <div className="relative z-10 bg-[#14181f] rounded-3xl border border-white/10 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                {/* Card top bar */}
                <div className="px-5 pt-5 pb-3 flex items-center justify-between border-b border-white/5">
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">ID CARD</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00df8f]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Portrait area */}
                <div className="relative h-72 overflow-hidden bg-[#0d1116]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&crop=face"
                    alt="Zedian — Lead Designer"
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                  />
                  {/* Gradient overlay on portrait */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#14181f] via-[#14181f]/70 to-transparent" />
                  {/* Name overlay on portrait */}
                  <div className="absolute bottom-0 inset-x-0 px-5 pb-4">
                    <p className="text-2xl font-bold tracking-tight text-white leading-none">
                      Zedian<span className="text-[#00df8f]">.</span>
                    </p>
                    <p className="text-xs text-gray-400 tracking-wider mt-0.5">Lead UX/UI Designer</p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">Status</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00df8f] shadow-[0_0_6px_rgba(0,223,143,1)]" />
                      <span className="text-xs font-semibold text-[#00df8f]">Available for Work</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">Based in</p>
                    <p className="text-xs font-semibold text-gray-300">New York, USA</p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-0.5 bg-gradient-to-r from-transparent via-[#00df8f]/60 to-transparent" />
              </div>
            </motion.div>

            {/* Drag hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-600 tracking-widest uppercase"
            >
              Drag me around
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
