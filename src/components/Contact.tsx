'use client'

import { ArrowUpRight, Mail, MessageCircle, Send } from 'lucide-react'
import type { FormEvent } from 'react'
import { siteConfig } from '../data/content'
import { Reveal } from './Reveal'

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio contact from ${name || 'website'}`)
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, '', message].filter(Boolean).join('\n'),
    )

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Want to build something?</h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={80}>
            <div className="contact-copy">
              <p>Send me the idea and what you need it to do. I will reply when I can.</p>

              <ul className="contact-links">
                <li>
                  <a className="contact-link" href={`mailto:${siteConfig.email}`}>
                    <Mail size={17} aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    className="contact-link"
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight size={17} aria-hidden="true" />
                    {siteConfig.githubLabel}
                  </a>
                </li>
                <li>
                  <span className="contact-link static">
                    <MessageCircle size={17} aria-hidden="true" />
                    Discord: {siteConfig.discord}
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">
                  Message{' '}
                  <span className="required" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me what you need. Also leave your Telegram @."
                />
              </div>

              <button className="button primary form-button" type="submit">
                <Send size={17} aria-hidden="true" />
                Send email
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
