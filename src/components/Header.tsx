'use client'

import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navItems, siteConfig } from '../data/content'
import { getLenis } from '../hooks/useSmoothScroll'
import { useTheme } from '../hooks/useTheme'

export function Header() {
  const { isLight, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
      if (window.scrollY < 160) {
        setActiveSection('')
      }

      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? Math.min(window.scrollY / height, 1) : 0
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    document.body.style.overflow = 'hidden'
    getLenis()?.stop()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      getLenis()?.start()
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />

      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${siteConfig.name} home`}>
          <img className="brand-logo" src="/favicon.svg" alt="" aria-hidden="true" />
          <span className="brand-name">{siteConfig.name}</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={`nav-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="icon-button theme-toggle"
            type="button"
            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
            onClick={toggleTheme}
          >
            {isLight ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <nav aria-label="Mobile navigation">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="mobile-nav-link" href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
