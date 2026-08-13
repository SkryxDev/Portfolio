import { skillGroups } from '../data/content'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-eyebrow">
              <span className="eyebrow-slash" aria-hidden="true">
                //
              </span>
              my stack
            </p>
            <h2 className="section-title">Skills</h2>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal delay={80 + index * 60} key={group.title}>
              <div className="skill-group">
                <h3 className="skill-group-title">{group.title}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
