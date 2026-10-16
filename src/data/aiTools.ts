import {
  Bot,
  FileText,
  PenLine,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

export type AiToolStatus = 'coming-soon' | 'in-progress' | 'available'

export interface AiTool {
  title: string
  description: string
  status: AiToolStatus
  icon: LucideIcon
  demoUrl?: string // add when a working demo exists
}

export const aiTools: AiTool[] = [
  {
    title: 'Chat Assistant',
    description: 'Ask questions and get instant, helpful responses.',
    status: 'coming-soon',
    icon: Bot,
  },
  {
    title: 'Document Summarizer',
    description: 'Turn long documents into short, clear key points.',
    status: 'coming-soon',
    icon: FileText,
  },
  {
    title: 'Content Generator',
    description: 'Create marketing copy, captions and ideas faster.',
    status: 'coming-soon',
    icon: PenLine,
  },
  {
    title: 'Smart Assistant',
    description: 'A productivity helper for everyday business tasks.',
    status: 'coming-soon',
    icon: Sparkles,
  },
]