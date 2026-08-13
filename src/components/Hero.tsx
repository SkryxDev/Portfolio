import { Mail } from 'lucide-react'
import type { CSSProperties } from 'react'
import { siteConfig, terminalLines } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { Reveal } from './Reveal'

const FIRST = 'Skryx'
const LAST = 'Dev'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            <span className="eyebrow-slash" aria-hidden="true">
              //
            </span>
            student developer — {siteConfig.location}
          </p>

          <h1 className="hero-title" aria-label={siteConfig.name}>
            <span aria-hidden="true">
              {FIRST.split('').map((char, i) => (
                <span
                  className="hero-letter"
                  key={i}
                  style={{ '--i': i } as CSSProperties}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="hero-accent" aria-hidden="true">
              {LAST.split('').map((char, i) => (
                <span
                  className="hero-letter"
                  key={i}
                  style={{ '--i': FIRST.length + i } as CSSProperties}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="hero-dot" aria-hidden="true">
              <span
                className="hero-letter"
                style={{ '--i': FIRST.length + LAST.length } as CSSProperties}
              >
                .
              </span>
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
        </div>

        <Reveal delay={250} className="hero-visual">
          <div className="terminal" role="img" aria-label="Terminal window introducing SkryxDev">
            <div className="terminal-bar">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">skryx@dev: ~</span>
            </div>
            <div className="terminal-body">
              {terminalLines.map((line, index) =>
                line.type === 'cmd' ? (
                  <p className="terminal-line" key={index}>
                    <span className="terminal-prompt">$</span> {line.text}
                  </p>
                ) : (
                  <p className="terminal-line out" key={index}>
                    {line.text}
                  </p>
                ),
              )}
              <p className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-cursor" aria-hidden="true" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
