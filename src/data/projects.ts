import {
  BarChart3,
  Bot,
  LayoutDashboard,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react'

export type ProjectStatus = 'placeholder' | 'in-progress' | 'completed'

export interface Project {
  title: string
  description: string
  status: ProjectStatus
  tech: string[]
  icon: LucideIcon
  liveUrl?: string // add when a live demo exists
  codeUrl?: string // add when the source code is public
}

export const projects: Project[] = [
  {
    title: 'Business Dashboard',
    description: 'Concept for an analytics dashboard with charts and reports.',
    status: 'placeholder',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: LayoutDashboard,
  },
  {
    title: 'AI Chat Assistant',
    description: 'Concept for a chatbot that answers questions for a business.',
    status: 'placeholder',
    tech: ['React', 'TypeScript', 'AI API'],
    icon: Bot,
  },
  {
    title: 'E-commerce Platform',
    description: 'Concept for an online store with products and a cart.',
    status: 'placeholder',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: ShoppingCart,
  },
  {
    title: 'Marketing Analytics',
    description: 'Concept for a dashboard tracking campaigns and engagement.',
    status: 'placeholder',
    tech: ['React', 'TypeScript', 'API Integration'],
    icon: BarChart3,
  },
]