import { Heart, Mail } from 'lucide-react'
import { siteConfig } from '../data/content'
import { GitHubIcon } from './GitHubIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-note">
          © {year} {siteConfig.name}
        </p>

        <p className="footer-note">
          Made with
          <Heart className="footer-heart" size={14} aria-hidden="true" />
          <span className="sr-only">love</span>
          by {siteConfig.name}
        </p>

        <div className="footer-socials">
          <a
            className="icon-button"
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <a className="icon-button" href={`mailto:${siteConfig.email}`} aria-label="Send an email">
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
