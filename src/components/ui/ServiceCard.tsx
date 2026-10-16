import { ArrowRight } from 'lucide-react'
import type { Service } from '../../data/services'

export default function ServiceCard({ title, description, icon: Icon }: Service) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-navy-700 bg-navy-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-neon/50 hover:shadow-[0_0_24px_rgba(25,230,140,0.12)]">
      <span className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-electric/30 bg-electric/10 text-electric transition group-hover:border-neon/40 group-hover:bg-neon/10 group-hover:text-neon">
        <Icon size={22} aria-hidden="true" />
      </span>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      <a
        href="#contact"
        className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-neon"
        aria-label={`Ask about ${title}`}
      >
        Get in touch
        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </article>
  )
}