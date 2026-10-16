type Token = [text: string, color: string]

const kw = 'text-electric'
const str = 'text-neon'
const base = 'text-slate-200'
const dim = 'text-muted'

const lines: Token[][] = [
  [['import ', kw], ['{ useState } ', base], ['from ', kw], ["'react'", str]],
  [['import ', kw], ['Button ', base], ['from ', kw], ["'./components/Button'", str]],
  [],
  [['function ', kw], ['App', str], ['() {', base]],
  [['  const ', kw], ['[count, setCount] = ', base], ['useState', str], ['(0)', base]],
  [],
  [['  return ', kw], ['(', base]],
  [['    <h1>', kw], ['RTech Solutions', 'text-white'], ['</h1>', kw]],
  [['    <p>', kw], ['Build. Innovate. Grow.', dim], ['</p>', kw]],
  [['  )', base]],
  [['}', base]],
]

export default function CodeWindow() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-navy-700 bg-navy-900/90 shadow-[0_0_40px_rgba(47,140,255,0.15)]"
      role="img"
      aria-label="Decorative code editor showing a sample React component"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-navy-700 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-neon/80" />
        <span className="ml-3 font-mono text-xs text-muted">App.tsx</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-neon">
          <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Live
        </span>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 sm:text-[13px]">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="mr-4 w-5 select-none text-right text-navy-700">
              {i + 1}
            </span>
            <code>
              {line.length === 0 ? '\u00A0' : null}
              {line.map(([text, color], j) => (
                <span key={j} className={color}>
                  {text}
                </span>
              ))}
            </code>
          </div>
        ))}
      </pre>
    </div>
  )
}