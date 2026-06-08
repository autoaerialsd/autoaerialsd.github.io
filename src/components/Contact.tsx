import { useState, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSenJfTuTc3yIAASYp1UtZVm79EbNOmLxcBob6VHiefriSisZA/formResponse'

const ENTRY = {
  name:    'entry.1119489335',
  email:   'entry.40978647',
  package: 'entry.269904447',
  message: 'entry.922506724',
}

const packages = [
  { value: 'Essential', label: 'Essential — $79' },
  { value: 'Signature', label: 'Signature — $149' },
  { value: 'Elite',     label: 'Elite — $249' },
]

const contactInfo = [
  {
    iconPath: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 9.79a19.79 19.79 0 01-3.07-8.67A2 2 0 012.4 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.3 8.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    ),
    iconColor: '#38bdf8',
    label: 'Call or Text',
    value: '206-678-5640',
    href: 'tel:2066785640',
  },
  {
    iconPath: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </>
    ),
    iconColor: '#38bdf8',
    label: 'Email',
    value: 'rod@autoaerials.com',
    href: 'mailto:rod@autoaerials.com',
  },
  {
    iconPath: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </>
    ),
    iconColor: '#38bdf8',
    label: 'Email',
    value: 'autoaerialssd@gmail.com',
    href: 'mailto:autoaerialssd@gmail.com',
  },
]

const inputBase: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
}
const inputFocus: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(56,189,248,0.5)',
}

export default function Contact() {
  const ref = useReveal()
  const firstInputRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState({ name: '', email: '', package: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    const body = new FormData()
    body.append(ENTRY.name,    form.name)
    body.append(ENTRY.email,   form.email)
    body.append(ENTRY.package, form.package)
    body.append(ENTRY.message, form.message)
    try {
      await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
      setStatus('success')
      setForm({ name: '', email: '', package: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg text-cream font-barlow text-[1rem] px-4 py-[14px] outline-none transition-all duration-200 placeholder:text-smoke'

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-[80px] lg:py-[120px]" id="contact">
      {/* Centered header */}
      <div className="text-center mb-14">
        <div className="font-condensed text-[0.8rem] tracking-[0.45em] uppercase mb-3" style={{ color: '#38bdf8' }}>
          Let's Talk
        </div>
        <h2 className="font-bebas text-[4.5rem] sm:text-[6.5rem] tracking-[0.04em] leading-none text-cream mb-5">
          Contact Us
        </h2>
        <p className="text-[1rem] leading-[1.8] text-silver max-w-[480px] mx-auto">
          Got a property, a jobsite, or a build worth shooting from above?
          Reach out — quotes are fast and free.
        </p>
      </div>

      {/* 2-col layout */}
      <div ref={ref} className="reveal grid lg:grid-cols-2 gap-8 max-w-[960px] mx-auto">

        {/* Left — contact cards */}
        <div className="flex flex-col gap-4">
          {contactInfo.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className="group flex items-center gap-4 no-underline rounded-xl px-5 py-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(56,189,248,0.12)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke={c.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {c.iconPath}
                </svg>
              </div>
              <div>
                <div className="font-condensed text-[0.72rem] tracking-[0.25em] uppercase mb-1" style={{ color: '#888' }}>
                  {c.label}
                </div>
                <div className="font-condensed text-[1.05rem] tracking-[0.04em] text-cream group-hover:text-[#38bdf8] transition-colors duration-200">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right — form */}
        <div>
          {status === 'success' ? (
            <div
              className="rounded-xl px-8 py-12 text-center"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="font-bebas text-[3rem] tracking-[0.06em] mb-3" style={{ color: '#38bdf8' }}>
                Message Sent.
              </div>
              <p className="text-silver text-[1rem] leading-[1.7]">
                Goes straight to my inbox. I usually reply same day.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-black font-condensed font-bold text-[0.9rem] tracking-[0.2em] uppercase px-8 py-3 rounded-full transition-colors duration-200 cursor-pointer border-none"
                style={{ background: '#38bdf8' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <input
                ref={firstInputRef}
                id="c-name" name="name" type="text" required
                placeholder="Your Name"
                value={form.name} onChange={handleChange}
                className={inputClass} style={inputBase}
                onFocus={e => Object.assign(e.currentTarget.style, inputFocus)}
                onBlur={e => Object.assign(e.currentTarget.style, inputBase)}
              />
              <input
                id="c-email" name="email" type="email" required
                placeholder="Your Email"
                value={form.email} onChange={handleChange}
                className={inputClass} style={inputBase}
                onFocus={e => Object.assign(e.currentTarget.style, inputFocus)}
                onBlur={e => Object.assign(e.currentTarget.style, inputBase)}
              />

              {/* Package select */}
              <select
                id="c-package" name="package" required
                value={form.package} onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
                style={{
                  ...inputBase,
                  colorScheme: 'dark',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                }}
                onFocus={e => Object.assign(e.currentTarget.style, {
                  ...inputFocus,
                  colorScheme: 'dark',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                })}
                onBlur={e => Object.assign(e.currentTarget.style, {
                  ...inputBase,
                  colorScheme: 'dark',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                })}
              >
                <option value="" disabled>Select a Package</option>
                {packages.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>

              <textarea
                id="c-message" name="message" rows={5}
                placeholder="Tell me what you need shot..."
                value={form.message} onChange={handleChange}
                className={`${inputClass} resize-none`} style={inputBase}
                onFocus={e => Object.assign(e.currentTarget.style, inputFocus)}
                onBlur={e => Object.assign(e.currentTarget.style, inputBase)}
              />

              {status === 'error' && (
                <p className="text-[0.9rem]" style={{ color: '#f87171' }}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full text-black font-condensed font-bold text-[0.95rem] tracking-[0.22em] uppercase py-4 rounded-full transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
                style={{ background: '#38bdf8' }}
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
              <p className="font-condensed text-[0.78rem] tracking-[0.15em] text-silver text-center">
                Goes straight to my inbox. I usually reply same day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
