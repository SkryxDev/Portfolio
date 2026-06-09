import { ArrowUpRight, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <h1>SkryxDev</h1>
        <p className="hero-text">
          I am 16, from Vicenza (Italy), and I make websites, Minecraft plugins, Discord bots, and small
          Linux setups.
        </p>

        <div className="hero-actions" aria-label="Main actions">
          <a className="button primary" href="mailto:dev@skryxdev.eu">
            <Mail size={18} aria-hidden="true" />
            Email me
          </a>
          <a
            className="button secondary"
            href="https://github.com/skryxdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowUpRight size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
