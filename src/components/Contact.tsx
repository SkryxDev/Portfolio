import { ArrowUpRight, Mail, Send, ShieldCheck } from 'lucide-react'
import type { FormEvent } from 'react'

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

    window.location.href = `mailto:dev@skryxdev.eu?subject=${subject}&body=${body}`
  }

  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Want to build something?</h2>
        <p>
          Send me the idea and what you need it to do. I will reply when I can.
        </p>

        <div className="contact-links">
          <a href="mailto:dev@skryxdev.eu">
            <Mail size={18} aria-hidden="true" />
            dev@skryxdev.eu
          </a>
          <a href="https://github.com/skryxdev" target="_blank" rel="noopener noreferrer">
            github.com/skryxdev
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <span>
            <ShieldCheck size={18} aria-hidden="true" />
            Discord: skryxdev
          </span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell me what you need. Also leave your telegram @."
          />
        </label>
        <button className="button primary form-button" type="submit">
          <Send size={18} aria-hidden="true" />
          Send email
        </button>
      </form>
    </section>
  )
}
