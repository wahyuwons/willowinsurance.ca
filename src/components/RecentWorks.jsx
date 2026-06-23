import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    category: 'Digital Product',
    title: 'Nexus Finance',
    description:
      'A complete redesign of a fintech platform serving 2M+ users. Reduced onboarding drop-off by 47% through progressive disclosure and motion-led UX patterns.',
    tags: ['UX Research', 'Design System', 'Prototyping', 'React'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    color: '#00df8f',
  },
  {
    id: 2,
    category: 'Brand & Web',
    title: 'Aura Studio',
    description:
      'Full brand identity and award-winning website for a boutique creative agency. The project won a Webby Award for Best Visual Design in the Agency category.',
    tags: ['Branding', 'Web Design', 'Motion', 'Webflow'],
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop',
    color: '#a78bfa',
  },
  {
    id: 3,
    category: 'Mobile App',
    title: 'SkyRoute Travel',
    description:
      'An AI-powered travel companion app with real-time itinerary generation. Launched to 500K downloads in the first month across iOS and Android.',
    tags: ['Mobile UX', 'iOS', 'Android', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
    color: '#f472b6',
  },
  {
    id: 4,
    category: 'Architecture / 3D',
    title: 'Meridian HQ',
    description:
      'Interactive 3D architectural visualisation for a flagship commercial tower. Built with Three.js and WebGL to deliver real-time space exploration.',
    tags: ['Three.js', 'WebGL', '3D', 'Interactive'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    color: '#fb923c',
  },
]

const CARD_STACK_EASE = [0.32, 0.72, 0, 1]

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0)

  const handleCardClick = (clickedIdx) => {
    if (clickedIdx === activeIdx) {
      // Cycle active card to the back
      setActiveIdx((prev) => (prev + 1) % projects.length)
    } else {
      // Pull clicked card to front
      setActiveIdx(clickedIdx)
    }
  }

  // Build sorted order: active card first (front), rest behind
  const sortedIndices = [
    activeIdx,
    ...projects.map((_, i) => i).filter((i) => i !== activeIdx),
  ]

  return (
    <section id="work" className="py-32 bg-[#0d1116] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#00df8f]" />
              <span className="text-xs font-semibold text-[#00df8f] tracking-widest uppercase">Portfolio</span>
            </div>
            <h2
              className="font-bold tracking-tighter leading-[0.92] text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              RECENT
              <br />
              <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>
                WORKS
              </span>
              <span className="text-[#00df8f]">.</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-semibold text-gray-300 hover:border-[#00df8f]/40 hover:text-[#00df8f] transition-all duration-300 self-start sm:self-auto"
          >
            View All Projects
            <ArrowUpRight size={15} />
          </motion.button>
        </motion.div>

        {/* Main Content: Stack (left) + Info (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — 3D Card Stack */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Stack container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: CARD_STACK_EASE }}
              className="relative h-[340px] sm:h-[450px] md:h-[480px]"
              style={{ perspective: '1200px' }}
            >
              {sortedIndices.map((projectIdx, stackPos) => {
                const project = projects[projectIdx]
                const isActive = stackPos === 0
                const diff = stackPos

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => handleCardClick(projectIdx)}
                    animate={{
                      y: diff * 28,
                      scale: 1 - diff * 0.045,
                      rotateX: diff * 2.5,
                      zIndex: projects.length - diff,
                      opacity: diff > 2 ? 0 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: CARD_STACK_EASE,
                    }}
                    className="absolute inset-x-0 top-0 rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      transformOrigin: 'top center',
                      transformStyle: 'preserve-3d',
                    }}
                    whileHover={isActive ? { y: -6 } : {}}
                  >
                    <div className="relative h-[340px] sm:h-[450px] md:h-[480px] bg-[#14181f] border border-white/10 rounded-2xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1116]/80 via-transparent to-transparent" />

                      {/* Active card — bottom info */}
                      {isActive && (
                        <div className="absolute bottom-0 inset-x-0 p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: project.color }}
                            />
                            <span className="text-xs tracking-widest uppercase text-gray-400">
                              {project.category}
                            </span>
                          </div>
                          <p className="text-xl font-bold text-white tracking-tight">
                            {project.title}
                          </p>
                        </div>
                      )}

                      {/* Click hint on active */}
                      {isActive && (
                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                          <ArrowUpRight size={14} className="text-white" />
                        </div>
                      )}

                      {/* Non-active scrim */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-[#0d1116]/40" />
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Navigation dots */}
            <div className="flex items-center gap-3 justify-center">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="transition-all duration-300"
                  aria-label={`View project ${i + 1}`}
                >
                  <motion.span
                    animate={{
                      width: activeIdx === i ? 28 : 8,
                      background: activeIdx === i ? '#00df8f' : 'rgba(255,255,255,0.2)',
                    }}
                    transition={{ duration: 0.35, ease: CARD_STACK_EASE }}
                    className="block h-1.5 rounded-full"
                    style={{ width: 8 }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — Project Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              >
                {/* Category */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: projects[activeIdx].color }}
                  />
                  <span className="text-xs tracking-widest uppercase text-gray-500 font-semibold">
                    {projects[activeIdx].category}
                  </span>
                  <span className="text-gray-700">·</span>
                  <span className="text-xs text-gray-600">
                    {String(activeIdx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold tracking-tight text-white leading-tight mb-5"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
                >
                  {projects[activeIdx].title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                  {projects[activeIdx].description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {projects[activeIdx].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 text-gray-400 bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] text-black font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(0,223,143,0.2)] hover:shadow-[0_0_40px_rgba(0,223,143,0.4)] transition-shadow duration-300"
                >
                  Explore Project
                  <ExternalLink size={14} />
                </motion.button>

                {/* Progress bar */}
                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600 tracking-wider uppercase">Project</span>
                    <span className="text-xs text-gray-600">
                      {activeIdx + 1} of {projects.length}
                    </span>
                  </div>
                  <div className="h-px bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00df8f] to-[#00b373] rounded-full"
                      animate={{ width: `${((activeIdx + 1) / projects.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: CARD_STACK_EASE }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
