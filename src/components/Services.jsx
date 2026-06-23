import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const stages = [
  {
    number: '01',
    title: 'BRIEFING',
    description:
      'Every great project starts with deep listening. I immerse myself in your business goals, audience insights, and competitive landscape to build a shared foundation. This phase produces a clear creative brief, project charter, and aligned success metrics before a single pixel is touched.',
  },
  {
    number: '02',
    title: 'ANALYTICS',
    description:
      'Data transforms assumptions into strategy. I conduct heuristic audits, user interviews, session recording analysis, and quantitative research to surface the friction points and opportunities your product already holds. The output is a prioritized insight report that directly shapes design decisions.',
  },
  {
    number: '03',
    title: 'PROTOTYPING',
    description:
      'Ideas are cheap; tested ideas are valuable. I build rapid wireframes and interactive prototypes in Figma to validate flows before investing in high-fidelity design. Lo-fi → mid-fi → hi-fi progression ensures we solve the right problems, not just make them look pretty.',
  },
  {
    number: '04',
    title: 'DESIGN',
    description:
      'This is where craft meets intent. I create pixel-perfect UI backed by a scalable design system — tokens, components, documentation, and Figma libraries your team can own forever. Every visual decision maps back to user insight and business outcome.',
  },
  {
    number: '05',
    title: 'ADAPTIVE',
    description:
      'Great design works on every screen, in every context. I design for responsive breakpoints, dark/light modes, accessibility (WCAG 2.1 AA), and edge cases. I also produce developer handoff specs, motion principles, and animation timelines so nothing gets lost in translation.',
  },
  {
    number: '06',
    title: 'THE FINAL',
    description:
      'Launch is a milestone, not the finish line. I support QA review, production handoff, and a 30-day post-launch monitoring period to catch regressions and iterate on real user behavior. The relationship continues — I offer retainer-based design partnerships for ongoing product evolution.',
  },
]

export default function Services() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section className="py-32 bg-[#0d1116] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#00df8f]" />
            <span className="text-xs font-semibold text-[#00df8f] tracking-widest uppercase">Process</span>
            <span className="w-6 h-px bg-[#00df8f]" />
          </div>
          <h2
            className="font-bold tracking-tighter leading-[0.92]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
          >
            <span className="block text-white">STAGES OF WEBSITE</span>
            <span className="block">
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>
                DEVELOPMENT
              </span>
              <span className="text-[#00df8f]">.</span>
            </span>
          </h2>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-0">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="border-b border-white/[0.07]"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-6 py-7 text-left group"
                aria-expanded={openIdx === i}
              >
                {/* Number */}
                <span className="text-xs font-bold text-gray-600 tracking-widest w-8 shrink-0">
                  {stage.number}
                </span>

                {/* Title */}
                <span
                  className="flex-1 font-bold tracking-tight text-white leading-none group-hover:text-[#00df8f] transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
                >
                  {stage.title}
                </span>

                {/* Toggle icon */}
                <motion.div
                  animate={{ rotate: openIdx === i ? 0 : 0 }}
                  className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIdx === i
                      ? 'bg-[#00df8f] border-[#00df8f]'
                      : 'bg-white/[0.03] group-hover:border-[#00df8f]/40'
                  }`}
                >
                  <motion.div
                    animate={{ rotate: openIdx === i ? 0 : 0 }}
                  >
                    {openIdx === i ? (
                      <Minus size={16} className="text-black" />
                    ) : (
                      <Plus size={16} className="text-gray-400 group-hover:text-[#00df8f] transition-colors" />
                    )}
                  </motion.div>
                </motion.div>
              </button>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 pl-14 pr-16">
                      <p className="text-gray-400 leading-relaxed text-sm max-w-2xl">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
