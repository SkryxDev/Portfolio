'use client'

import { useEffect, useRef } from 'react'

const GAP = 26
const MOUSE_RADIUS = 140

type Rgb = [number, number, number]

function getPalette(): { dot: Rgb; accent: Rgb; baseAlpha: number } {
  return document.documentElement.dataset.theme === 'light'
    ? { dot: [13, 27, 48], accent: [21, 101, 208], baseAlpha: 0.12 }
    : { dot: [232, 240, 255], accent: [78, 168, 255], baseAlpha: 0.09 }
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let points: Array<{ x: number; y: number }> = []

    const buildGrid = () => {
      points = []
      const startX = (width % GAP) / 2
      const startY = (height % GAP) / 2
      for (let x = startX; x < width; x += GAP) {
        for (let y = startY; y < height; y += GAP) {
          points.push({ x, y })
        }
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildGrid()
    }

    resize()
    window.addEventListener('resize', resize)

    const mouse = { x: -MOUSE_RADIUS * 2, y: -MOUSE_RADIUS * 2 }
    const target = { x: -MOUSE_RADIUS * 2, y: -MOUSE_RADIUS * 2 }

    // Precomputed grid + rect() for the ~3k base dots keeps the per-frame
    // work to a single fillStyle with no path construction. Only the handful
    // of dots near the cursor keep arc() for their round, accented glow.
    const draw = (time: number, withMouse: boolean) => {
      const { dot, accent, baseAlpha } = getPalette()
      ctx.clearRect(0, 0, width, height)

      const boosted: Array<{
        x: number
        y: number
        alpha: number
        radius: number
        r: number
        g: number
        b: number
      }> = []

      ctx.fillStyle = `rgb(${dot[0]}, ${dot[1]}, ${dot[2]})`

      for (let i = 0; i < points.length; i++) {
        const { x, y } = points[i]
        const wave =
          0.5 + 0.5 * Math.sin(x * 0.012 + time * 0.8) * Math.sin(y * 0.011 - time * 0.6)
        let alpha = baseAlpha * (0.35 + 0.65 * wave)
        let radius = 1.1
        let r = dot[0]
        let g = dot[1]
        let b = dot[2]
        let isBoosted = false

        if (withMouse) {
          const dx = x - mouse.x
          const dy = y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_RADIUS) {
            const boost = (1 - dist / MOUSE_RADIUS) ** 2
            alpha = Math.min(alpha + 0.55 * boost, 0.8)
            radius += 1.5 * boost
            r = r + (accent[0] - r) * boost
            g = g + (accent[1] - g) * boost
            b = b + (accent[2] - b) * boost
            isBoosted = true
          }
        }

        if (isBoosted) {
          boosted.push({ x, y, alpha, radius, r, g, b })
        } else {
          ctx.globalAlpha = alpha
          ctx.fillRect(x - 1.1, y - 1.1, 2.2, 2.2)
        }
      }
      ctx.globalAlpha = 1

      for (let i = 0; i < boosted.length; i++) {
        const b = boosted[i]
        ctx.fillStyle = `rgba(${b.r | 0}, ${b.g | 0}, ${b.b | 0}, ${b.alpha})`
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(0, false)
      const observer = new MutationObserver(() => draw(0, false))
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      })
      const redraw = () => draw(0, false)
      window.addEventListener('resize', redraw)
      return () => {
        observer.disconnect()
        window.removeEventListener('resize', redraw)
        window.removeEventListener('resize', resize)
      }
    }

    // Coalesce the spotlight position updates into one per frame so rapid
    // pointermove events don't each force a style recalc + repaint.
    let spotlightFrame = 0
    const updateSpotlight = () => {
      spotlightFrame = 0
      document.documentElement.style.setProperty('--spot-x', `${target.x}px`)
      document.documentElement.style.setProperty('--spot-y', `${target.y}px`)
    }
    const handleMove = (event: PointerEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      if (!spotlightFrame) {
        spotlightFrame = requestAnimationFrame(updateSpotlight)
      }
    }
    const handleLeave = () => {
      target.x = -MOUSE_RADIUS * 2
      target.y = -MOUSE_RADIUS * 2
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave)

    let frame = 0
    const loop = (now: number) => {
      frame = requestAnimationFrame(loop)
      if (document.hidden) return
      mouse.x += (target.x - mouse.x) * 0.08
      mouse.y += (target.y - mouse.y) * 0.08
      draw(now / 1000, true)
    }
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(spotlightFrame)
      window.removeEventListener('pointermove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <div className="bg-aurora a" aria-hidden="true" />
      <div className="bg-aurora b" aria-hidden="true" />
      <div className="bg-spotlight" aria-hidden="true" />
      <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
    </>
  )
}
