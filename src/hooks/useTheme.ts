import { useCallback, useEffect, useState } from 'react'

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

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem(themeStorageKey, theme)
    } catch {
      // Keep the visual theme even if storage is blocked.
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme, isLight: theme === 'light' }
}
