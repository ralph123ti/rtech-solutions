interface SectionHeadingProps {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neon">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title} {highlight && <span className="text-neon">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  )
}