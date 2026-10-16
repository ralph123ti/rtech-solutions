import type { ComponentType, CSSProperties } from 'react'
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaPython,
} from 'react-icons/fa'
import {
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { BrainCircuit, Megaphone, Plug, Workflow } from 'lucide-react'

export interface TechIcon {
  icon: ComponentType<{
    size?: number
    className?: string
    style?: CSSProperties
  }>
  color: string
}

export const techIcons: Record<string, TechIcon> = {
  React: { icon: SiReact, color: '#61DAFB' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  HTML: { icon: FaHtml5, color: '#E34F26' },
  CSS: { icon: FaCss3Alt, color: '#1572B6' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  Vite: { icon: SiVite, color: '#A78BFA' },
  'Framer Motion': { icon: SiFramer, color: '#FFFFFF' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  Express: { icon: SiExpress, color: '#FFFFFF' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  Python: { icon: FaPython, color: '#3776AB' },
  Git: { icon: FaGitAlt, color: '#F05032' },
  GitHub: { icon: FaGithub, color: '#FFFFFF' },
  Figma: { icon: FaFigma, color: '#F24E1E' },

  // No brand logo: generic icons
  'AI API': { icon: BrainCircuit, color: '#19E68C' },
  'AI Application Development': { icon: BrainCircuit, color: '#19E68C' },
  'API Integration': { icon: Plug, color: '#2F8CFF' },
  'Digital Marketing': { icon: Megaphone, color: '#2F8CFF' },
  'Business Automation': { icon: Workflow, color: '#19E68C' },
}