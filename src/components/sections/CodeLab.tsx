import { useEffect, useState } from 'react'
import { Play, RotateCcw } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { codeExamples, type CodeFiles } from '../../data/codeExamples'

type Tab = keyof CodeFiles

const tabs: { id: Tab; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'js', label: 'JavaScript' },
]

function buildPreview({ html, css, js }: CodeFiles): string {
  // Stops pasted "</script>" text from closing the script tag early
  const safeJs = js.replace(/<\/script/gi, '<\\/script')
  return `<!doctype html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><style>${css}</style></head><body>${html}<script>${safeJs}</script></body></html>`
}
export default function CodeLab() {
  const [exampleId, setExampleId] = useState(codeExamples[0].id)
  const [activeTab, setActiveTab] = useState<Tab>('html')
  const [code, setCode] = useState<CodeFiles>({
    html: codeExamples[0].html,
    css: codeExamples[0].css,
    js: codeExamples[0].js,
  })
  const [previewDoc, setPreviewDoc] = useState(() => buildPreview(code))

  // Update the preview shortly after typing stops
  useEffect(() => {
    const timer = setTimeout(() => setPreviewDoc(buildPreview(code)), 400)
    return () => clearTimeout(timer)
  }, [code])

  function loadExample(id: string) {
    const example = codeExamples.find((e) => e.id === id)
    if (!example) return
    setExampleId(id)
    setCode({ html: example.html, css: example.css, js: example.js })
  }

  return (
    <section
      id="code-lab"
      className="border-b border-navy-700/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live code lab"
          title="Explore."
          highlight="Build."
          description="Pick an example, edit the code and watch the preview update. It runs in an isolated sandbox, so you can experiment freely."
        />

        {/* Example selector */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm text-muted">Examples:</span>
          {codeExamples.map((example) => (
            <button
              key={example.id}
              type="button"
              onClick={() => loadExample(example.id)}
              aria-pressed={exampleId === example.id}
              className={`rounded-md border px-3 py-1.5 text-sm transition ${
                exampleId === example.id
                  ? 'border-neon/70 bg-neon/10 text-neon'
                  : 'border-navy-700 text-muted hover:border-neon/40 hover:text-white'
              }`}
            >
              {example.title}
            </button>
          ))}
          <button
            type="button"
            onClick={() => loadExample(exampleId)}
            className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-navy-700 px-3 py-1.5 text-sm text-muted transition hover:text-white"
          >
            <RotateCcw size={14} aria-hidden="true" /> Reset
          </button>
        </div>

        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          {/* Editor */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-navy-700 bg-navy-900/90">
            <div
              role="tablist"
              aria-label="Code files"
              className="flex border-b border-navy-700"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 font-mono text-xs transition ${
                    activeTab === tab.id
                      ? 'border-b-2 border-neon text-neon'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <textarea
              value={code[activeTab]}
              onChange={(e) => setCode({ ...code, [activeTab]: e.target.value })}
              spellCheck={false}
              aria-label={`${activeTab.toUpperCase()} code editor`}
              className="h-80 w-full resize-none bg-transparent p-4 font-mono text-[13px] leading-6 text-slate-200 outline-none focus-visible:ring-1 focus-visible:ring-neon/50 sm:h-96"
            />
          </div>

          {/* Preview */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-navy-700 bg-navy-900/90">
            <div className="flex items-center justify-between border-b border-navy-700 px-4 py-2.5">
              <span className="font-mono text-xs text-muted">Live Preview</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-neon">
                <Play size={10} aria-hidden="true" /> Running
              </span>
            </div>
            <iframe
              title="Live code preview"
              sandbox="allow-scripts"
              srcDoc={previewDoc}
              className="h-80 w-full bg-white sm:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}