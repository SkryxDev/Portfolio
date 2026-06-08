import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/content'

type Theme = 'dark' | 'light'

const themeStorageKey = 'skryxdev-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  try {
    return window.localStorage.getItem(themeStorageKey) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function Header() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const isLight = theme === 'light'

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem(themeStorageKey, theme)
    } catch {
      // Keep the visual theme even if storage is blocked.
    }
  }, [theme])

  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="SkryxDev home">
        <span className="brand-mark">S</span>
        <span>SkryxDev</span>
      </a>

      <nav className="nav-links">
        <button
          className="theme-toggle"
          type="button"
          aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          aria-pressed={!isLight}
          onClick={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
        >
          {isLight ? (
            <Sun key="sun" className="theme-toggle-icon" size={17} aria-hidden="true" />
          ) : (
            <Moon key="moon" className="theme-toggle-icon" size={17} aria-hidden="true" />
          )}
        </button>

        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}
