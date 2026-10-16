import TechBadge from './TechBadge'
import { Code, ExternalLink } from 'lucide-react'
import type { Project, ProjectStatus } from '../../data/projects'
const statusStyles: Record<ProjectStatus, { label: string; classes: string }> = {
  placeholder: {
    label: 'Demo Placeholder',
    classes: 'border-electric/40 bg-electric/10 text-electric',
  },
  'in-progress': {
    label: 'In Progress',
    classes: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300',
  },
  completed: {
    label: 'Completed',
    classes: 'border-neon/40 bg-neon/10 text-neon',
  },
}

export default function ProjectCard({
  title,
  description,
  status,
  tech,
  icon: Icon,
  liveUrl,
  codeUrl,
}: Project) {
  const badge = statusStyles[status]

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-700 bg-navy-900/60 transition duration-300 hover:-translate-y-1 hover:border-neon/50 hover:shadow-[0_0_24px_rgba(25,230,140,0.12)]">
      {/* Visual panel (swap for a real screenshot later) */}
      <div className="relative grid h-36 place-items-center border-b border-navy-700 bg-gradient-to-br from-navy-800 to-navy-950">
        <Icon
          size={40}
          className="text-electric/70 transition group-hover:text-neon"
          aria-hidden="true"
        />
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${badge.classes}`}
        >
          {badge.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        {/* Technology tags */}
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
  {tech.map((t) => (
    <li key={t}>
      <TechBadge name={t} />
    </li>
  ))}
</ul>
        {/* Links: only shown when a real URL exists */}
        <div className="mt-5 flex items-center gap-4 border-t border-navy-700 pt-4 text-sm">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-neon hover:underline"
            >
              Live Demo <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : null}
          {codeUrl ? (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-white"
            >
              <Code size={14} aria-hidden="true" /> View Code
            </a>
          ) : null}
          {!liveUrl && !codeUrl ? (
            <span className="text-xs text-muted">Links coming soon</span>
          ) : null}
        </div>
      </div>
    </article>
  )
}