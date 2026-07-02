import { MapPin } from 'lucide-react'
import { siteConfig } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Who am I?</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="about-copy">
            <p>
              Usually they call me Dev. I'm still a small developer with a lot to learn, but in my
              free time I like to create stuff, mostly small projects. I like experimenting with
              new things and making things that everyone can use with ease.
            </p>
            <p>
              My projects are mostly not open source, but I would like to start sharing my code
              and maybe expand my GitHub repositories. I'm also a student and don't have much time
              to dedicate to my projects, but I really like doing this stuff, so I do my best to
              find some time to work on them and make them better.
            </p>
            <p className="about-meta">
              <span className="about-meta-item">
                <MapPin size={15} aria-hidden="true" />
                {siteConfig.location}
              </span>
              <span className="meta-dot" aria-hidden="true" />
              <span className="about-meta-item">{siteConfig.age} years old</span>
              <span className="meta-dot" aria-hidden="true" />
              <span className="about-meta-item">Student</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
