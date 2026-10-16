import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import SocialIcon from '../ui/SocialIcon'
import SectionHeading from '../ui/SectionHeading'
import { siteInfo } from '../../data/site'

const serviceOptions = [
  'Web Development',
  'Software Development',
  'AI Solutions',
  'Digital Marketing',
  'API Integration',
  'Business Automation',
  'Something else',
]

const fieldClasses =
  'w-full rounded-md border border-navy-700 bg-navy-950 px-3 py-2.5 text-sm text-white placeholder:text-muted/70 outline-none transition focus:border-neon/60 focus-visible:ring-1 focus-visible:ring-neon/40'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  function update(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = `Website enquiry${form.service ? `: ${form.service}` : ''}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${siteInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const socials = siteInfo.socials.filter((s) => s.url)

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Contact details */}
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's Work"
            highlight="Together"
            description="Send me a message or reach out through any of the channels below. I'm always open to new opportunities and collaborations."
          />

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-electric" aria-hidden="true" />
              <a
                href={`mailto:${siteInfo.email}`}
                className="text-slate-200 hover:text-neon"
              >
                {siteInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-electric" aria-hidden="true" />
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                className="text-slate-200 hover:text-neon"
              >
                {siteInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-electric" aria-hidden="true" />
              <span className="text-slate-200">{siteInfo.location}</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {siteInfo.whatsappUrl && (
              <a
                href={siteInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-neon/70 px-4 py-2 text-sm font-medium text-neon transition hover:bg-neon/10"
              >
                <SocialIcon label="WhatsApp" size={16} /> WhatsApp
              </a>
            )}
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-navy-700 px-4 py-2 text-sm text-slate-200 transition hover:border-neon/50 hover:text-neon"
              >
                <SocialIcon label={s.label} size={16} /> {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-navy-700 bg-navy-900/60 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={update}
                className={fieldClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={update}
                className={fieldClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="mb-1.5 block text-xs text-muted">
              Service
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={update}
              className={fieldClasses}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={update}
              className={`${fieldClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-neon px-5 py-3 text-sm font-semibold text-navy-950 transition hover:brightness-110 hover:shadow-[0_0_20px_rgba(25,230,140,0.35)]"
          >
            Send message <Send size={15} aria-hidden="true" />
          </button>

          <p className="text-xs text-muted" role="status">
            {sent
              ? 'Your email app should now open with the message ready to send.'
              : 'This opens your email app with the message filled in.'}
          </p>
        </form>
      </div>
    </section>
  )
}