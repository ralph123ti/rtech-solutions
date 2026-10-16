import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BrainCircuit,
  Code,
  Globe,
  Megaphone,
  Terminal,
} from 'lucide-react'
import CodeWindow from '../ui/CodeWindow'

const highlights = [
  { icon: Globe, label: 'Web Development' },
  { icon: BrainCircuit, label: 'AI Solutions' },
  { icon: Megaphone, label: 'Digital Marketing' },
]

const techBadges = [
  { label: 'React', position: 'right-0 top-0 sm:-right-4' },
  { label: 'Node.js', position: 'right-6 top-24 sm:right-2' },
  { label: 'TypeScript', position: 'right-0 bottom-0 sm:-right-4' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-navy-700/50"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-electric/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-neon/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-5 inline-flex items-center gap-2 font-mono text-sm text-neon">
            <Terminal size={16} aria-hidden="true" />
            Hello, I'm RTech Solutions
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Building <span className="text-neon">Intelligent Software.</span>{' '}
            Solving Real Problems.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I'm a Software Developer, AI Developer and Digital Marketer focused
            on creating modern web applications, smart AI solutions and digital
            strategies that help businesses grow.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-md bg-neon px-5 py-2.5 text-sm font-semibold text-navy-950 transition hover:brightness-110 hover:shadow-[0_0_20px_rgba(25,230,140,0.35)]"
            >
              Explore Projects <ArrowUpRight size={15} />
            </a>
            <a
              href="#code-lab"
              className="inline-flex items-center gap-1.5 rounded-md border border-electric/70 px-5 py-2.5 text-sm font-medium text-electric transition hover:bg-electric/10"
            >
              <Code size={15} /> View Live Code
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-md border border-navy-700 px-5 py-2.5 text-sm font-medium text-white transition hover:border-neon/60 hover:text-neon"
            >
              Hire Me
            </a>
          </div>

          {/* Highlights */}
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-muted">
                <Icon size={18} className="text-electric" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: code visual */}
        <motion.div
          className="relative pb-10 pt-6 sm:pr-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <CodeWindow />

          {techBadges.map((badge) => (
            <span
              key={badge.label}
              className={`absolute ${badge.position} rounded-lg border border-electric/40 bg-navy-900/95 px-3 py-1.5 font-mono text-xs text-white shadow-[0_0_18px_rgba(47,140,255,0.25)]`}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}