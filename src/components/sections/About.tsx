import SectionHeading from '../ui/SectionHeading'
import TechBadge from '../ui/TechBadge'
import { aboutInfo } from '../../data/site'

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-navy-700/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-14 lg:px-8">
        {/* Brand card (swap for a photo later if you like) */}
        <div className="mx-auto grid aspect-square w-full max-w-xs place-items-center rounded-2xl border border-navy-700 bg-gradient-to-br from-navy-800 to-navy-950 shadow-[0_0_40px_rgba(47,140,255,0.12)]">
          <img
            src="/logo.png"
            alt="RTech Solutions logo"
            className="h-40 w-40 object-contain"
          />
        </div>

        <div>
          <SectionHeading eyebrow="About me" title="Who" highlight="I Am" />

          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
            {aboutInfo.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">
            Skills & tools
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {aboutInfo.skills.map((skill) => (
              <li key={skill}>
                <TechBadge name={skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}