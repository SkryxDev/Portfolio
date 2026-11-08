import { Download, Globe2 } from 'lucide-react'
import { draftcraft, flowgorithm, trace } from '../data/content'
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
          <article className="project-card wide">
            <div className="project-info">
              <div className="project-head">
                <img
                  className="project-icon"
                  src={draftcraft.icon}
                  alt=""
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="project-name">{draftcraft.name}</h3>
                  <p className="project-status">
                    <span className="project-status-dot" aria-hidden="true" />
                    {draftcraft.status}
                  </p>
                </div>
              </div>

              <div className="project-columns">
                <p className="project-description">
                  A 2D drafting app with the command line and familiar Windows-style ribbon. Built
                  in pure Rust, DraftCraft runs natively on macOS, Windows and Linux, with a
                  consistent workflow across all three.
                </p>

                <div>
                  <p className="project-description">
                    Open and save DWG and DXF drawings, then work with layers, dimensions, hatches,
                    blocks and layouts. It also adds exact conic arcs and an MCP server that lets
                    AI agents inspect and edit drawings.
                  </p>

                  <p className="project-tags">{draftcraft.tags.join(' · ')}</p>

                  <div className="project-actions">
                    <a
                      className="button primary"
                      href={draftcraft.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe2 size={16} aria-hidden="true" />
                      Website
                    </a>
                    <a
                      className="button ghost"
                      href={draftcraft.download}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={16} aria-hidden="true" />
                      Download
                    </a>
                    <a
                      className="button ghost"
                      href={draftcraft.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon size={16} />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <figure className="project-shot">
              <img
                src={draftcraft.screenshot}
                alt="DraftCraft showing its ribbon interface and a dimensioned mechanical bracket drawing"
                width={1600}
                height={960}
                loading="lazy"
              />
            </figure>
          </article>
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

        <Reveal delay={100}>
          <article className="project-card wide">
            <div className="project-info">
              <div className="project-head">
                <img
                  className="project-icon"
                  src={flowgorithm.icon}
                  alt=""
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="project-name">{flowgorithm.name}</h3>
                  <p className="project-status">
                    <span className="project-status-dot" aria-hidden="true" />
                    {flowgorithm.status}
                  </p>
                </div>
              </div>

              <div className="project-columns">
                <p className="project-description">
                  Write and run programs as flowcharts on the Mac. It opens and saves Flowgorithm's{' '}
                  <code>.fprg</code> files, so school exercises move freely between a Windows PC and
                  a Mac. Run a program one shape at a time while you watch the variables change, and
                  read it as Python, Java, C++ and more right next to the chart.
                </p>

                <div>
                  <p className="project-description">
                    There's also an optional AI assistant with free models. It explains programs
                    and, in Study Mode, gives you a hint at a time instead of the solution.
                  </p>

                  <p className="project-tags">{flowgorithm.tags.join(' · ')}</p>

                  <div className="project-actions">
                    <a
                      className="button primary"
                      href={flowgorithm.download}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={16} aria-hidden="true" />
                      Download
                    </a>
                    <a
                      className="button ghost"
                      href={flowgorithm.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon size={16} />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <figure className="project-shot">
              <img
                src={flowgorithm.screenshot}
                alt="FlowGorithmForMac in Study Mode: the assistant shows an example While loop and proposes renaming a variable on the chart"
                width={1404}
                height={840}
                loading="lazy"
              />
            </figure>
          </article>
        </Reveal>

      </div>
    </section>
  )
}
