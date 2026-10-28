import { services } from '../data/content'
import { Reveal } from './Reveal'

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-eyebrow">
              <span className="eyebrow-slash" aria-hidden="true">
                //
              </span>
              what i do
            </p>
            <h2 className="section-title">What I do</h2>
          </div>
        </Reveal>

        <div className="work-list">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal delay={80 + index * 60} key={service.title}>
                <article className="work-card">
                  <div className="work-head">
                    <span className="work-icon">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="work-title">{service.title}</h3>
                  </div>
                  <p className="work-description">{service.description}</p>
                  <p className="work-tags">{service.details.join(' · ')}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
