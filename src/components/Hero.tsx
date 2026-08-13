import { Mail } from 'lucide-react'
import { siteConfig } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <Reveal className="hero-copy">
          <p className="hero-eyebrow">
            <span className="eyebrow-slash" aria-hidden="true">
              //
            </span>
            student developer — {siteConfig.location}
          </p>

          <h1 className="hero-title">
            Skryx
            <span className="hero-accent">Dev</span>
            <span className="hero-dot" aria-hidden="true">
              .
            </span>
          </h1>

          <p className="hero-text">
            I'm {siteConfig.age} and I build websites, Minecraft plugins, Discord bots, and small
            Linux setups — from the browser down to the server room.
          </p>

          <div className="hero-actions">
            <a className="button primary" href={`mailto:${siteConfig.email}`}>
              <Mail size={16} aria-hidden="true" />
              Email me
            </a>
            <a
              className="button ghost"
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero-status" aria-hidden="true">
        <span className="hero-status-user">skryx@dev: ~</span>
        <span className="hero-status-prompt">$</span>
        <span className="hero-status-text">open to small projects — say hi</span>
        <span className="hero-status-cursor" />
      </div>
    </section>
  )
}
