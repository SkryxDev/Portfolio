import { MapPin } from 'lucide-react'

export function About() {
  return (
    <section className="section split-section" id="about">
      <div>
        <p className="eyebrow">About</p>
        <h2>I build stuff I would actually use.</h2>
      </div>
      <div className="section-copy">
        <p>
          I started by messing with small sites and Minecraft servers. After that I got into
          plugins, bots, and the Linux side of everything.
        </p>
        <p>
          I like keeping projects simple: clear files, useful features, and no random extras just
          to make the project look bigger.
        </p>
        <div className="info-row" aria-label="Profile facts">
          <span>
            <MapPin size={16} aria-hidden="true" />
            Vicenza, Italy
          </span>
          <span>16 years old</span>
          <span>Small projects</span>
        </div>
      </div>
    </section>
  )
}
