import { navItems } from '../data/content'

export function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="SkryxDev home">
        <span className="brand-mark">S</span>
        <span>SkryxDev</span>
      </a>

      <nav className="nav-links">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}
