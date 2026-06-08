import { HeartCrack } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer">
      <span>SkryxDev</span>
      <span className="made-with">
        Made with
        <HeartCrack className="footer-icon" size={16} aria-hidden="true" />
        by SkryxDev
      </span>
    </footer>
  )
}
