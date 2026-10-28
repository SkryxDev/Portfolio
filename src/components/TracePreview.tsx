'use client'

import { Code2, File, Image as ImageIcon, Link2, Pin, Search, Type, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'

type Clip = {
  kind: 'color' | 'link' | 'code' | 'image' | 'text' | 'file'
  text: string
  app: string
  time: string
  pinned?: boolean
}

// What a normal evening of copying looks like.
const clips: Clip[] = [
  { kind: 'color', text: '#6A61F5', app: 'Xcode', time: 'now' },
  { kind: 'link', text: 'github.com/SkryxDev/Trace', app: 'Safari', time: '2m' },
  { kind: 'code', text: 'let pinned = store.items.filter(\\.isPinned)', app: 'Xcode', time: '9m', pinned: true },
  { kind: 'image', text: 'Screenshot 2026-10-27 at 21.14.png', app: 'Finder', time: '14m' },
  { kind: 'text', text: 'ci vediamo alle 8 davanti a scuola', app: 'Messages', time: '1h' },
  { kind: 'file', text: 'Trace-1.0.0-beta.dmg', app: 'Finder', time: 'yesterday' },
]

const kindIcon = {
  link: Link2,
  code: Code2,
  image: ImageIcon,
  text: Type,
  file: File,
}

function TraceMark() {
  return (
    <svg className="tp-mark" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="4.5" cy="8" r="2.2" />
      <path d="M9 8h12M15 8v8.5c0 2.3 1.4 3.5 3.3 3.5 1.2 0 2.1-.6 2.7-1.6" />
    </svg>
  )
}

export function TracePreview() {
  const [open, setOpen] = useState(true)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const [pasted, setPasted] = useState<string | null>(null)
  const toastTimer = useRef(0)

  const results = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean)
    return clips.filter((clip) => {
      const haystack = `${clip.text} ${clip.app}`.toLowerCase()
      return words.every((word) => haystack.includes(word))
    })
  }, [query])

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const paste = (clip: Clip | undefined) => {
    if (!clip) return
    setPasted(clip.text)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setPasted(null), 1400)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelected((index) => Math.min(index + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelected((index) => Math.max(index - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      paste(results[selected])
    } else if (event.key === 'Escape') {
      if (query) setQuery('')
      else setOpen(false)
    }
  }

  return (
    <div className="tp" role="group" aria-label="A working mock-up of the Trace panel. Try searching it.">
      <div className="tp-menubar">
        <span className="tp-menubar-app">Xcode</span>
        <span className="tp-menubar-item">File</span>
        <span className="tp-menubar-item">Edit</span>
        <span className="tp-menubar-item tp-hide-sm">View</span>
        <span className="tp-menubar-spacer" />
        <button
          className={`tp-menubar-trace${open ? ' active' : ''}`}
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close the Trace panel' : 'Open the Trace panel'}
          onClick={() => setOpen((value) => !value)}
        >
          <TraceMark />
        </button>
        <span className="tp-menubar-item tp-clock">Tue 21:16</span>
      </div>

      <div className={`tp-panel${open ? ' open' : ''}`} inert={!open}>
        <div className="tp-header">
          <TraceMark />
          <span className="tp-title">Clipboard</span>
          <span className="tp-count">{clips.length} items</span>
        </div>

        <label className="tp-search">
          <Search size={13} aria-hidden="true" />
          <input
            type="text"
            value={query}
            placeholder="Search"
            aria-label="Search the clipboard history"
            spellCheck={false}
            onChange={(event) => {
              setQuery(event.target.value)
              setSelected(0)
            }}
            onKeyDown={handleKeyDown}
          />
          {query && (
            <button
              type="button"
              className="tp-clear"
              aria-label="Clear search"
              onClick={() => {
                setQuery('')
                setSelected(0)
              }}
            >
              <X size={11} aria-hidden="true" />
            </button>
          )}
        </label>

        <ul className="tp-list">
          {results.map((clip, index) => {
            const Icon = clip.kind === 'color' ? null : kindIcon[clip.kind]
            return (
              <li key={clip.text}>
                <button
                  type="button"
                  className={`tp-row${index === selected ? ' selected' : ''}`}
                  onMouseEnter={() => setSelected(index)}
                  onFocus={() => setSelected(index)}
                  onClick={() => paste(clip)}
                >
                  <span className={`tp-thumb tp-thumb-${clip.kind}`}>
                    {Icon ? (
                      <Icon size={13} aria-hidden="true" />
                    ) : (
                      <span className="tp-swatch" style={{ background: clip.text }} />
                    )}
                  </span>
                  <span className="tp-row-text">
                    <span className={`tp-row-main${clip.kind === 'code' ? ' mono' : ''}`}>
                      {clip.text}
                    </span>
                    <span className="tp-row-sub">
                      {clip.app} · {clip.time}
                    </span>
                  </span>
                  {clip.pinned && <Pin className="tp-pin" size={12} aria-label="Pinned" />}
                  {index < 9 && <span className="tp-key">⌘{index + 1}</span>}
                </button>
              </li>
            )
          })}
          {results.length === 0 && <li className="tp-empty">Nothing matches “{query}”</li>}
        </ul>

        <div className="tp-footer">
          <span>
            <kbd>↩</kbd> paste
          </span>
          <span>
            <kbd>⇧</kbd>
            <kbd>↩</kbd> plain text
          </span>
          <span className="tp-hide-sm">
            <kbd>⌘</kbd>
            <kbd>P</kbd> pin
          </span>
        </div>

        <p className={`tp-toast${pasted ? ' show' : ''}`} role="status">
          {pasted ? `Pasted “${pasted.length > 28 ? `${pasted.slice(0, 28)}…` : pasted}”` : ''}
        </p>
      </div>

      <p className="tp-hint" aria-hidden="true">
        it works: try searching “xcode” ↗
      </p>
    </div>
  )
}
