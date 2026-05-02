'use client'

import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

const LI_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.75S5.53 3.23 6.5 3.23s1.75.79 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V8h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V19z"/>
  </svg>
)
const MAIL_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
)
const GH_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

export default function ContactSection() {
  const submitContact = useMutation(api.contact.submit)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')
    try {
      await submitContact(form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact">
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div className="contact-inner">
        <div className="section-label reveal">006 — Contact</div>
        <div className="contact-layout">
          <div className="contact-left">
            <h2 className="contact-headline reveal">
              Let&apos;s Build<br /><span className="accent">Something Epic</span>
            </h2>
            <p className="contact-desc reveal reveal-delay-1">
              Open to full-time roles, internships, freelance projects, and collaborations.
              If you have an idea that needs a builder — let&apos;s talk.
            </p>
            <div className="contact-links reveal reveal-delay-2">
              <a href="https://www.linkedin.com/in/mohammed-shadab-alam-041502261/" target="_blank" rel="noreferrer" className="contact-link-item">
                <div className="contact-link-icon">{LI_ICON}</div>
                linkedin.com/in/mohammed-shadab-alam
              </a>
              <a href={`mailto:alamshadab9876543210@gmail.com`} className="contact-link-item">
                <div className="contact-link-icon">{MAIL_ICON}</div>
                Drop me an email
              </a>
              <a href="https://github.com/shadabalam5678" target="_blank" rel="noreferrer" className="contact-link-item">
                <div className="contact-link-icon">{GH_ICON}</div>
                github.com/shadabalam5678
              </a>
            </div>
          </div>

          <div className="contact-form reveal reveal-delay-2">
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--magenta)', marginBottom: '0.5rem' }}>
                  Message Sent!
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--gray)' }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan)', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input className="form-input" type="text" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input className="form-input" type="email" name="email" value={form.email} onChange={onChange} placeholder="jane@startup.io" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" name="message" value={form.message} onChange={onChange} placeholder="Hey Shadab, I'd love to collaborate on..." required />
                </div>
                {errMsg && (
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#ef4444', marginBottom: '0.75rem' }}>{errMsg}</p>
                )}
                <button type="submit" className="form-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message ▸'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
