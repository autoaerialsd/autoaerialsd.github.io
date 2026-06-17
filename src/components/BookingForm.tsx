import { useState, useEffect, useRef } from 'react'

const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSenJfTuTc3yIAASYp1UtZVm79EbNOmLxcBob6VHiefriSisZA/formResponse'

const ENTRY = {
  name:    'entry.1119489335',
  email:   'entry.40978647',
  package: 'entry.269904447',
  message: 'entry.922506724',
}

const packages = [
  { value: 'Car Show',  label: 'Car Show — $79' },
  { value: 'Showcase',  label: 'Showcase — $149' },
  { value: 'Feature',   label: 'Feature — $249' },
]

interface Props {
  isOpen: boolean
  defaultPackage?: string
  onClose: () => void
}

export default function BookingModal({ isOpen, defaultPackage = '', onClose }: Props) {
  const [form, setForm] = useState({ name: '', email: '', package: defaultPackage, message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setForm({ name: '', email: '', package: defaultPackage, message: '' })
      setStatus('idle')
      setTimeout(() => firstInputRef.current?.focus(), 80)
    }
  }, [isOpen, defaultPackage])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
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
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
  }

  const inputClass =
    'w-full text-cream font-barlow text-[0.95rem] px-4 py-3 outline-none transition-colors duration-200 placeholder:text-smoke rounded-lg'

  const labelClass =
    'font-condensed text-[0.72rem] tracking-[0.25em] uppercase text-silver mb-1 block'

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(8,8,8,0.88)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[560px] overflow-y-auto rounded-xl"
        style={{ maxHeight: '90vh', background: '#111111', border: '1px solid rgba(255,255,255,0.1)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Blue top bar */}
        <div className="h-[3px] w-full rounded-t-xl" style={{ background: '#38bdf8' }} />

        <div className="px-8 pt-8 pb-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="font-condensed text-[0.7rem] tracking-[0.35em] uppercase mb-1" style={{ color: '#38bdf8' }}>
                Auto Aerials
              </div>
              <h2 className="font-bebas text-[2.2rem] tracking-[0.04em] leading-none text-cream">
                Book a Shoot
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close booking form"
              className="text-smoke hover:text-cream transition-colors duration-200 mt-1 cursor-pointer bg-transparent border-none p-1"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="2" y1="2" x2="16" y2="16" />
                <line x1="16" y1="2" x2="2" y2="16" />
              </svg>
            </button>
          </div>

          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="font-bebas text-[2.8rem] tracking-[0.06em] mb-2" style={{ color: '#38bdf8' }}>
                We Got It.
              </div>
              <p className="text-silver text-[0.95rem] leading-[1.7]">
                Thanks for reaching out — we'll be in touch within 24 hours to confirm your booking.
              </p>
              <button
                onClick={onClose}
                className="mt-8 text-black px-8 py-3 font-condensed text-[0.85rem] font-bold tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer border-none rounded-full"
                style={{ background: '#38bdf8' }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#7dd3fc')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#38bdf8')}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="bm-name" className={labelClass}>
                    Name <span style={{ color: '#38bdf8' }}>*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="bm-name" name="name" type="text" required
                    placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                    className={inputClass} style={inputStyle}
                    onFocus={e => (e.currentTarget.style.border = '1px solid rgba(56,189,248,0.5)')}
                    onBlur={e => (e.currentTarget.style.border = inputStyle.border)}
                  />
                </div>
                <div>
                  <label htmlFor="bm-email" className={labelClass}>
                    Email <span style={{ color: '#38bdf8' }}>*</span>
                  </label>
                  <input
                    id="bm-email" name="email" type="email" required
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                    className={inputClass} style={inputStyle}
                    onFocus={e => (e.currentTarget.style.border = '1px solid rgba(56,189,248,0.5)')}
                    onBlur={e => (e.currentTarget.style.border = inputStyle.border)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="bm-package" className={labelClass}>
                  Package <span style={{ color: '#38bdf8' }}>*</span>
                </label>
                <select
                  id="bm-package" name="package" required
                  value={form.package} onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                  style={{
                    ...inputStyle,
                    colorScheme: 'dark',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
                  onFocus={e => (e.currentTarget.style.border = '1px solid rgba(56,189,248,0.5)')}
                  onBlur={e => (e.currentTarget.style.border = inputStyle.border)}
                >
                  <option value="" disabled>Select a package</option>
                  {packages.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="bm-message" className={labelClass}>Message</label>
                <textarea
                  id="bm-message" name="message" rows={3}
                  placeholder="Tell us your car, which show you're attending, or any questions..."
                  value={form.message} onChange={handleChange}
                  className={`${inputClass} resize-none`} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.border = '1px solid rgba(56,189,248,0.5)')}
                  onBlur={e => (e.currentTarget.style.border = inputStyle.border)}
                />
              </div>

              {status === 'error' && (
                <p className="text-[0.85rem] mb-4" style={{ color: '#f87171' }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full text-black py-4 font-condensed text-[0.9rem] font-bold tracking-[0.2em] uppercase transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none rounded-full"
                style={{ background: '#38bdf8' }}
                onMouseEnter={e => { if (status !== 'submitting') (e.currentTarget as HTMLButtonElement).style.background = '#7dd3fc' }}
                onMouseLeave={e => { if (status !== 'submitting') (e.currentTarget as HTMLButtonElement).style.background = '#38bdf8' }}
              >
                {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
