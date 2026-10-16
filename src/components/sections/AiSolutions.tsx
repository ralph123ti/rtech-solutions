import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import AiToolCard from '../ui/AiToolCard'
import { aiTools } from '../../data/aiTools'

export default function AiSolutions() {
  return (
    <section
      id="ai"
      className="border-b border-navy-700/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="AI solutions"
            title="AI Tools"
            highlight="In Development"
            description="Practical AI tools I'm building for real business needs. Working demos will be added here as each one is ready."
          />
          <a
            href="#code-lab"
            className="inline-flex w-fit items-center gap-1.5 rounded-md border border-neon/70 px-4 py-2 text-sm font-medium text-neon transition hover:bg-neon/10"
          >
            <Code size={15} aria-hidden="true" /> Open Live Code Lab
          </a>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool, i) => (
            <motion.li
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <AiToolCard {...tool} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}