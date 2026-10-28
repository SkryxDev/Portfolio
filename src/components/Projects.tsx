import { Download } from 'lucide-react'
import { trace } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { Reveal } from './Reveal'
import { TracePreview } from './TracePreview'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-eyebrow">
              <span className="eyebrow-slash" aria-hidden="true">
                //
              </span>
              things i made
            </p>
            <h2 className="section-title">Projects</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <article className="project-card">
            <div className="project-info">
              <div className="project-head">
                <img className="project-icon" src={trace.icon} alt="" width={64} height={64} />
                <div>
                  <h3 className="project-name">{trace.name}</h3>
                  <p className="project-status">
                    <span className="project-status-dot" aria-hidden="true" />
                    {trace.status}
                  </p>
                </div>
              </div>

              <p className="project-description">
                A clipboard history for the Mac, like <kbd>Win</kbd>+<kbd>V</kbd> on Windows. It
                lives in the menu bar and remembers what you copy: text, links, images and files.
                Press <kbd>⌃</kbd>
                <kbd>⌘</kbd>
                <kbd>V</kbd> anywhere, pick something and it gets pasted right into the app you were
                using.
              </p>
              <p className="project-description">
                No dependencies, around 15 MB of memory, and it skips passwords coming from password
                managers. It's open source, so you can see how it works.
              </p>

              <p className="project-tags">{trace.tags.join(' · ')}</p>

              <div className="project-actions">
                <a
                  className="button primary"
                  href={trace.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} aria-hidden="true" />
                  Download
                </a>
                <a
                  className="button ghost"
                  href={trace.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={16} />
                  Source
                </a>
              </div>
            </div>

            <TracePreview />
          </article>
        </Reveal>
      </div>
    </section>
  )
}
