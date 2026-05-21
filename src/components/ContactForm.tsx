'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mnjrdnda')

  if (state.succeeded) {
    return (
      <div className="cf-success">
        <p className="cf-success-title">Message sent!</p>
        <p className="cf-success-sub">Thanks for reaching out — I&apos;ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <label className="cf-label">
          Name
          <input
            className="cf-input"
            name="name"
            type="text"
            required
            placeholder="Your name"
            autoComplete="name"
          />
          <ValidationError field="name" errors={state.errors} className="cf-error" />
        </label>
        <label className="cf-label">
          Email
          <input
            className="cf-input"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            autoComplete="email"
          />
          <ValidationError field="email" errors={state.errors} className="cf-error" />
        </label>
      </div>
      <label className="cf-label">
        Message
        <textarea
          className="cf-textarea"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
        />
        <ValidationError field="message" errors={state.errors} className="cf-error" />
      </label>
      <button
        className="btn-dark cf-submit"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending…' : 'Send message →'}
      </button>
    </form>
  )
}
