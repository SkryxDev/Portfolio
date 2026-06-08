import { services } from '../data/content'

export function Work() {
  return (
    <section className="section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Work</p>
        <h2>What I can build</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <article className="service-card" key={service.title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-list" aria-label={`${service.title} tools`}>
                {service.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
