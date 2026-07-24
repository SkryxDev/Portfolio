import Lenis from 'lenis'
import { useEffect } from 'react'
import 'lenis/dist/lenis.css'

let lenis: Lenis | null = null

export function getLenis() {
  return lenis
}

/**
 * Inertia-based smooth scrolling via Lenis. Falls back to native scrolling
 * (html { scroll-behavior: smooth }) when the user prefers reduced motion.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    lenis = new Lenis({ lerp: 0.11 })

    let frame = requestAnimationFrame(function update(time: number) {
      lenis?.raf(time)
      frame = requestAnimationFrame(update)
    })

    // Anchor navigation: glide to the target (Lenis honours scroll-margin-top)
    // and keep the native behaviours anchors give us for free — hash in the
    // URL and focus moved to the target.
    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const link = (event.target as Element | null)?.closest('a[href^="#"]')
      if (!(link instanceof HTMLAnchorElement)) return

      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)))
      if (!target) return

      event.preventDefault()
      history.pushState(null, '', link.hash)
      // force: still scroll when Lenis is stopped (mobile menu closing).
      lenis?.scrollTo(target, {
        force: true,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      target.focus({ preventScroll: true })
      if (document.activeElement !== target) {
        target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(frame)
      lenis?.destroy()
      lenis = null
    }
  }, [])
}
