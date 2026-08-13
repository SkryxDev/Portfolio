'use client'

import { Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, siteConfig } from '../data/content'
import { getLenis } from '../hooks/useSmoothScroll'
import { useTheme } from '../hooks/useTheme'
import { GitHubIcon } from './GitHubIcon'

export function Header() {
  const { isLight, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
      if (window.scrollY < 160) {
        setActiveSection('')
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
      <div className="header-inner">
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

          <div className="header-actions">
            <div className="sidebar-socials">
              <a
                className="icon-button"
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
              </a>
              <a
                className="icon-button"
                href={`mailto:${siteConfig.email}`}
                aria-label="Send an email"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>

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
          </div>
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
