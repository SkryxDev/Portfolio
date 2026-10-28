import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
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
              free time I like to create stuff, mostly small projects. I started with websites, and
              lately I'm spending most of my time on Swift and SwiftUI, making apps for macOS and
              iOS that anyone can use with ease.
            </p>
            <p>
              My projects are mostly not open source, but I would like to start sharing my code
              and maybe expand my GitHub repositories. I'm also a student and don't have much time
              to dedicate to my projects, but I really like doing this stuff, so I do my best to
              find some time to work on them and make them better.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
