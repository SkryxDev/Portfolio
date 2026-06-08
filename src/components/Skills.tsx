import { skillGroups } from '../data/content'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technologies I work with</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
