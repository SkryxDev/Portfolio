import { Mail } from 'lucide-react'
import { siteConfig, terminalLines } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <Reveal className="hero-copy">
          <h1 className="hero-title">
            {siteConfig.name}
            <span className="hero-accent" aria-hidden="true">
              .
            </span>
          </h1>
          <p className="hero-text">
            I'm {siteConfig.age}, from {siteConfig.location}, and I make websites, Minecraft
            plugins, Discord bots, and small Linux setups.
          </p>

          <div className="hero-actions">
            <a className="button primary" href={`mailto:${siteConfig.email}`}>
              <Mail size={17} aria-hidden="true" />
              Email me
            </a>
            <a
              className="button ghost"
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={17} />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="hero-visual">
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
