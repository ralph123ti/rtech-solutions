import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Link2 } from 'lucide-react'

interface SocialIconProps {
  label: string
  size?: number
}

export default function SocialIcon({ label, size = 18 }: SocialIconProps) {
  switch (label) {
    case 'GitHub':
      return <FaGithub size={size} aria-hidden="true" />
    case 'LinkedIn':
      return <FaLinkedin size={size} color="#0A66C2" aria-hidden="true" />
    case 'WhatsApp':
      return <FaWhatsapp size={size} color="#25D366" aria-hidden="true" />
    default:
      return <Link2 size={size} aria-hidden="true" />
  }
}