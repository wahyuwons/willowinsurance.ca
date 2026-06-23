import { motion } from 'framer-motion'

const skills = [
  'UI/UX Design',
  'Figma',
  'React.js',
  'Framer Motion',
  'Tailwind CSS',
  'Design Systems',
  'Prototyping',
  'User Research',
  'Motion Design',
  'TypeScript',
  'Next.js',
  'Brand Identity',
  'Interaction Design',
  'Accessibility',
  'CSS / GSAP',
  'Webflow',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.55, ease: [0.32, 0.72, 0, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0d1116] relative overflow-hidden">
      {/* Subtle top rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div>
            {/* Section label */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-6 h-px bg-[#00df8f]" />
              <span className="text-xs font-semibold text-[#00df8f] tracking-widest uppercase">About Me</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
              className="font-bold tracking-tighter leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              DESIGNING WITH<br />
              <span className="text-white">PURPOSE</span>
              <span className="text-[#00df8f]">.</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={2}
              className="text-gray-400 leading-relaxed mb-5 max-w-lg"
            >
              I'm a multidisciplinary designer and developer with 8+ years of experience
              turning complex product challenges into elegant, intuitive experiences.
              My work spans startups, scale-ups, and Fortune 500 companies across fintech,
              SaaS, and consumer products.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={3}
              className="text-gray-400 leading-relaxed mb-14 max-w-lg"
            >
              I believe great design is invisible — it removes friction, builds trust,
              and makes users feel like the product was made exactly for them. I work
              at the intersection of pixels and code, which means my designs are
              always built with implementation in mind.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={4}
              className="flex items-stretch gap-0 border border-white/10 rounded-2xl overflow-hidden w-fit"
            >
              <div className="px-10 py-7 flex flex-col gap-1">
                <span
                  className="font-bold tracking-tighter leading-none text-gradient"
                  style={{ fontSize: '2.8rem' }}
                >
                  20+
                </span>
                <span className="text-xs text-gray-500 tracking-widest uppercase font-medium">Awards Won</span>
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div className="px-10 py-7 flex flex-col gap-1">
                <span
                  className="font-bold tracking-tighter leading-none text-gradient"
                  style={{ fontSize: '2.8rem' }}
                >
                  100%
                </span>
                <span className="text-xs text-gray-500 tracking-widest uppercase font-medium">Commitment</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Toolkit */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-6 h-px bg-[#00df8f]" />
              <span className="text-xs font-semibold text-[#00df8f] tracking-widest uppercase">My Toolkit</span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
              className="relative rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.07] p-8"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden rounded-tr-2xl">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00df8f]/10 rounded-full blur-2xl" />
              </div>

              <p className="text-xs text-gray-600 tracking-widest uppercase mb-6">Technologies &amp; Disciplines</p>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    whileHover={{
                      borderColor: '#00df8f',
                      color: '#00df8f',
                      boxShadow: '0 0 15px rgba(0,223,143,0.3)',
                      y: -2,
                    }}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-white/[0.08] bg-white/[0.03] cursor-default transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <p className="text-xs text-gray-600">Hover to explore</p>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-white/10"
                      style={{ background: i === 0 ? '#00df8f33' : undefined }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
