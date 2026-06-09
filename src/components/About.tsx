import { MapPin } from 'lucide-react'

export function About() {
  return (
    <section className="section split-section" id="about">
      <div>
        <p className="eyebrow">About</p>
        <h2>Who am I?</h2>
      </div>
      <div className="section-copy">
        <p>
          Usually they call me Dev, I'm still a small developer with a lot to learn, but in my free time
          I like to create stuff, mostly small projects, and I like experimenting new things and
          make things that everyone can use with ease.
        </p>
        <p>
          My projects are mostly not open source, but I would like to start sharing my code and maybe expand my GitHub repositories.
          I'm also a student and don't have so much time to dedicate on my projects, but I really like doing this stuff so
          I do my best to find some time to work on them and make them better.
        </p>
        <div className="info-row" aria-label="Profile facts">
          <span>
            <MapPin size={16} aria-hidden="true" />
            Vicenza, Italy
          </span>
          <span>16 years old</span>
        </div>
      </div>
    </section>
  )
}
