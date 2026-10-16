import { Code2 } from 'lucide-react'
import { techIcons } from '../../data/techIcons'

interface TechBadgeProps {
  name: string
  size?: 'sm' | 'lg'
}

export default function TechBadge({ name, size = 'sm' }: TechBadgeProps) {
  const tech = techIcons[name]
  const Icon = tech?.icon ?? Code2
  const isLarge = size === 'lg'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border bg-navy-950 font-mono text-slate-200 ${
        isLarge
          ? 'border-electric/40 px-3 py-1.5 text-xs shadow-[0_0_18px_rgba(47,140,255,0.25)]'
          : 'border-navy-700 px-2.5 py-1 text-[11px]'
      }`}
    >
      <Icon
        size={isLarge ? 18 : 14}
        style={{ color: tech?.color ?? '#2F8CFF' }}
        aria-hidden="true"
      />
      {name}
    </span>
  )
}