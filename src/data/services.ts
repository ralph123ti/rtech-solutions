import {
  BrainCircuit,
  Boxes,
  Code,
  Plug,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built to perform.',
    icon: Code,
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.',
    icon: Boxes,
  },
  {
    title: 'AI Solutions',
    description: 'AI tools, chatbots and AI-powered applications that automate work.',
    icon: BrainCircuit,
  },
  {
    title: 'Digital Marketing',
    description: 'Social media, SEO and content strategies that grow your brand.',
    icon: TrendingUp,
  },
  {
    title: 'API Integration',
    description: 'Connect your systems and services so data flows between them.',
    icon: Plug,
  },
  {
    title: 'Business Automation',
    description: 'Automate repetitive tasks and workflows to save time and cost.',
    icon: Workflow,
  },
]