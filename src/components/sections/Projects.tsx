import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-navy-700/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recent work"
          title="Featured"
          highlight="Projects"
          description="Real projects, live demos and source code will appear here as I build them. The cards below are clearly labelled placeholders for now."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <ProjectCard {...project} />
            </motion.li>
          ))}

          {/* Space for the next project */}
          <li className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center justify-center gap-3 rounded-xl border border-dashed border-navy-700 px-6 py-8 text-sm text-muted">
              <Plus size={18} className="text-neon" aria-hidden="true" />
              More projects will be added as I build them.
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}