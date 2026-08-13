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
                <article className="work-row">
                  <h3 className="work-title">
                    <Icon size={16} aria-hidden="true" />
                    {service.title}
                  </h3>
                  <div className="work-info">
                    <p className="work-description">{service.description}</p>
                    <p className="work-tags">{service.details.join(' · ')}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
