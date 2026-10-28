import type { CSSProperties } from 'react'
import { skillGroups, type Skill } from '../data/skills'
import { Reveal } from './Reveal'

function SkillIcon({ icon, size }: { icon: Skill['icon']; size: number }) {
  if ('path' in icon) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={icon.path} />
      </svg>
    )
  }

  const Icon = icon
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />
}

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
            <Reveal
              delay={80 + index * 60}
              key={group.title}
              className={group.main ? 'skills-cell main' : 'skills-cell'}
            >
              <div className={`skill-group${group.main ? ' main' : ''}`}>
                <div className="skill-group-head">
                  <h3 className="skill-group-title">{group.title}</h3>
                  {group.note && <p className="skill-group-note">{group.note}</p>}
                </div>

                <ul className={group.main ? 'skill-tiles' : 'skill-rows'}>
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="skill"
                      style={item.color ? ({ '--brand': item.color } as CSSProperties) : undefined}
                    >
                      <span className="skill-icon">
                        <SkillIcon icon={item.icon} size={group.main ? 22 : 16} />
                      </span>
                      <span className="skill-name">{item.name}</span>
                    </li>
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
