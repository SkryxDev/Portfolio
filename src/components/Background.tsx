'use client'

import { useEffect, useRef } from 'react'

const GAP = 26
const MOUSE_RADIUS = 260

type Rgb = [number, number, number]

function getPalette(): { dot: Rgb; accent: Rgb; baseAlpha: number } {
  return document.documentElement.dataset.theme === 'light'
    ? { dot: [17, 17, 17], accent: [6, 122, 85], baseAlpha: 0.15 }
    : { dot: [255, 255, 255], accent: [55, 217, 154], baseAlpha: 0.13 }
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    const mouse = { x: -MOUSE_RADIUS * 2, y: -MOUSE_RADIUS * 2 }
    const target = { x: -MOUSE_RADIUS * 2, y: -MOUSE_RADIUS * 2 }

    const draw = (time: number, withMouse: boolean) => {
      const { dot, accent, baseAlpha } = getPalette()
      ctx.clearRect(0, 0, width, height)

      for (let x = (width % GAP) / 2; x < width; x += GAP) {
        for (let y = (height % GAP) / 2; y < height; y += GAP) {
          const wave =
            0.5 + 0.5 * Math.sin(x * 0.012 + time * 0.8) * Math.sin(y * 0.011 - time * 0.6)
          let alpha = baseAlpha * (0.35 + 0.65 * wave)
          let radius = 1.1
          let r = dot[0]
          let g = dot[1]
          let b = dot[2]

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
            }
          }

          ctx.fillStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha})`
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
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

    const handleMove = (event: PointerEvent) => {
      target.x = event.clientX
      target.y = event.clientY
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
      window.removeEventListener('pointermove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}
