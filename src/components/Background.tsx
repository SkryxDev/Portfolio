'use client'

import { useEffect, useRef } from 'react'

const GAP = 28

type Rgb = [number, number, number]

function getPalette(): { dot: Rgb; alpha: number } {
  return document.documentElement.dataset.theme === 'light'
    ? { dot: [14, 20, 32], alpha: 0.1 }
    : { dot: [232, 236, 244], alpha: 0.07 }
}

/** Subtle, static dot texture — quiet background, no motion, no mouse effects. */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0

    const draw = () => {
      const { dot, alpha } = getPalette()
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = `rgba(${dot[0]}, ${dot[1]}, ${dot[2]}, ${alpha})`
      for (let x = (width % GAP) / 2; x < width; x += GAP) {
        for (let y = (height % GAP) / 2; y < height; y += GAP) {
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fill()
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
      draw()
    }

    resize()
    window.addEventListener('resize', resize)

    // Redraw when the theme flips.
    const observer = new MutationObserver(() => draw())
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}
