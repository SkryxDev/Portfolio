import { MapPin } from 'lucide-react'
import { siteConfig } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-eyebrow">
              <span className="eyebrow-slash" aria-hidden="true">
                //
              </span>
              who i am
            </p>
            <h2 className="section-title">Who am I?</h2>
          </div>
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

            <ul className="about-meta">
              <li className="about-meta-item">
                <MapPin size={14} aria-hidden="true" />
                {siteConfig.location}
              </li>
              <li className="about-meta-item">{siteConfig.age} years old</li>
              <li className="about-meta-item">Student</li>
              <li className="about-meta-item">Open to small projects</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
