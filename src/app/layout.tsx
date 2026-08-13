import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import type { ReactNode } from 'react'
import { Background } from '../components/Background'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LoadingScreen } from '../components/LoadingScreen'
import { SmoothScroll } from '../components/SmoothScroll'
import 'lenis/dist/lenis.css'
import '../styles/global.css'

const THEME_INIT = `(() => {
  try {
    const theme = localStorage.getItem('skryxdev-theme')
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark'
  } catch {
    document.documentElement.dataset.theme = 'dark'
  }
  // Skeleton loader runs for ~1.2s; hold the hero entrance animation back
  // so it plays as the skeleton fades out (0 with reduced motion / no JS).
  try {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.documentElement.style.setProperty('--load-delay', reduced ? '0ms' : '800ms')
  } catch {
    document.documentElement.style.setProperty('--load-delay', '800ms')
  }
})()`

export const metadata: Metadata = {
  title: 'SkryxDev',
  description:
    'SkryxDev — student developer from Vicenza, Italy. Websites, Minecraft plugins, Discord bots, and Linux server setups.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'SkryxDev',
    description: 'Websites, Minecraft plugins, Discord bots, and Linux server setups.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600&family=Unbounded:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT }}
        />
      </head>
      <body>
        <LoadingScreen />
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <Background />
        <Header />
        <main id="top" className="site-main">
          {children}
        </main>
        <Footer />
        <SmoothScroll />
      </body>
    </html>
  )
}
