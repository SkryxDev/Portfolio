'use client'

import { useEffect, useState } from 'react'
import { getLenis } from '../hooks/useSmoothScroll'

const HOLD_MS = 800
const FADE_MS = 400

export function LoadingScreen() {
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hold = reduced ? 250 : HOLD_MS
    const fade = reduced ? 0 : FADE_MS

    document.body.style.overflow = 'hidden'
    getLenis()?.stop()

    const fadeTimer = window.setTimeout(() => setLeaving(true), hold)
    const doneTimer = window.setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ''
      getLenis()?.start()
    }, hold + fade)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(doneTimer)
      document.body.style.overflow = ''
      getLenis()?.start()
    }
  }, [])

  if (done) return null

  return (
    <div
      className={`loading-screen${leaving ? ' leaving' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loading-inner" aria-hidden="true">
        {/* Navbar skeleton */}
        <div className="loading-bar">
          <span className="sk-line sk-logo" />
          <span className="sk-line sk-name" />
          <span className="loading-nav">
            <span className="sk-line" />
            <span className="sk-line" />
            <span className="sk-line" />
            <span className="sk-line" />
          </span>
          <span className="sk-line sk-icon" />
        </div>

        {/* Hero skeleton: title + copy on the left, terminal on the right */}
        <div className="loading-hero">
          <div className="loading-copy">
            <span className="sk-line sk-title" />
            <span className="sk-line sk-title sk-title-2" />
            <span className="sk-line sk-text" />
            <span className="sk-line sk-text sk-text-2" />
            <span className="loading-actions">
              <span className="sk-line sk-button" />
              <span className="sk-line sk-button" />
            </span>
          </div>

          <div className="sk-terminal">
            <div className="sk-terminal-bar">
              <span className="sk-dot red" />
              <span className="sk-dot yellow" />
              <span className="sk-dot green" />
              <span className="sk-line sk-terminal-title" />
            </div>
            <div className="sk-terminal-body">
              <span className="sk-line sk-term" />
              <span className="sk-line sk-term" />
              <span className="sk-line sk-term" />
              <span className="sk-line sk-term sk-term-2" />
              <span className="sk-line sk-term" />
            </div>
          </div>
        </div>

        <p className="loading-status">
          <span className="loading-status-cursor" aria-hidden="true" />
          loading portfolio…
        </p>
      </div>
    </div>
  )
}
