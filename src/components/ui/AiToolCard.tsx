import { ArrowUpRight } from 'lucide-react'
import type { AiTool, AiToolStatus } from '../../data/aiTools'

const statusStyles: Record<AiToolStatus, { label: string; classes: string }> = {
  'coming-soon': {
    label: 'Coming soon',
    classes: 'border-electric/40 bg-electric/10 text-electric',
  },
  'in-progress': {
    label: 'In progress',
    classes: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300',
  },
  available: {
    label: 'Available',
    classes: 'border-neon/40 bg-neon/10 text-neon',
  },
}

export default function AiToolCard({
  title,
  description,
  status,
  icon: Icon,
  demoUrl,
}: AiTool) {
  const badge = statusStyles[status]

  return (
    <article className="group flex h-full flex-col rounded-xl border border-navy-700 bg-navy-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-neon/50 hover:shadow-[0_0_24px_rgba(25,230,140,0.12)]">
      <div className="mb-5 flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-lg border border-electric/30 bg-electric/10 text-electric transition group-hover:border-neon/40 group-hover:bg-neon/10 group-hover:text-neon">
          <Icon size={22} aria-hidden="true" />
        </span>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${badge.classes}`}
        >
          {badge.label}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>

      {status === 'available' && demoUrl ? (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-neon hover:underline"
        >
          Try now <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ) : (
        <p className="mt-6 text-xs text-muted">Demo not available yet</p>
      )}
    </article>
  )
}