'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ width: '100%', textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: 32, marginBottom: 16 }}>🔥</div>
        <div style={{ fontFamily: 'var(--cinzel)', fontSize: 20, color: 'var(--gold)', marginBottom: 12 }}>
          Message Received
        </div>
        <p style={{ color: 'var(--parchment-dim)', fontSize: 15 }}>
          The forge has received your signal. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-ghost"
          style={{ marginTop: 24 }}
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input {...register('name')} className="form-input" placeholder="Your name" />
          {errors.name && <span className="form-error">{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input {...register('email')} className="form-input" placeholder="your@email.com" type="email" />
          {errors.email && <span className="form-error">{errors.email.message}</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Subject</label>
        <input {...register('subject')} className="form-input" placeholder="What's this about?" />
        {errors.subject && <span className="form-error">{errors.subject.message}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea {...register('message')} className="form-textarea" placeholder="Tell me what you're building..." />
        {errors.message && <span className="form-error">{errors.message.message}</span>}
      </div>

      {status === 'error' && (
        <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ember)', letterSpacing: '0.1em' }}>
          Something went wrong. Try again or email directly.
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ alignSelf: 'flex-start' }}>
        {status === 'loading' ? '⚙ Sending...' : '⚒ Send Message'}
      </button>
    </form>
  )
}
