import React, { useState } from 'react';
import { Send, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/portfolioData';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };
const initialErrors = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = { ...initialErrors };
  let valid = true;

  if (!form.name.trim()) {
    errors.name = 'Name is required.';
    valid = false;
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
    valid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
    valid = false;
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required.';
    valid = false;
  } else if (form.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
    valid = false;
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required.';
    valid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
    valid = false;
  } else if (form.message.trim().length > 2000) {
    errors.message = 'Message must not exceed 2000 characters.';
    valid = false;
  }

  return { errors, valid };
}

function Field({ label, id, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-2">
        {label}{required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError) =>
  `w-full bg-bg-primary/80 border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200 outline-none focus:ring-2 focus:ring-accent-blue/40 ${
    hasError ? 'border-red-500/60 focus:border-red-400' : 'border-border-subtle focus:border-accent-blue/60'
  }`;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitted) return;

    const { errors: newErrors, valid } = validate(form);
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');
    setServerError('');

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setStatus('error');
        setServerError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerError('Unable to send message. Please check your connection or email me directly.');
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="Contact"
        title="Get In Touch"
        subtitle="Have a project, opportunity, or just want to connect? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left: Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
              <Mail size={18} className="text-accent-blue" />
            </div>
            <h3 className="font-semibold text-text-primary mb-1">Send me a message</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              Fill out the form and I'll get back to you as soon as possible.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-accent-blue hover:underline"
            >
              {profile.email}
            </a>
          </div>

          <div className="text-sm text-text-muted leading-relaxed space-y-1">
            <p>📍 {profile.location}</p>
            <p>📞 {profile.phone}</p>
            <p className="text-xs mt-3 text-text-muted/60">
              I'm currently open to internships, full-time roles, and freelance projects.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-3">
          {status === 'success' ? (
            <div className="card flex flex-col items-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center mb-5">
                <CheckCircle size={28} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h3>
              <p className="text-text-secondary mb-6 max-w-xs">
                Thanks for reaching out. I'll get back to you shortly.
              </p>
              <button
                onClick={() => { setStatus('idle'); setSubmitted(false); }}
                className="btn-outline text-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="card space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" id="name" required error={errors.name}>
                  <input
                    id="name" name="name" type="text"
                    value={form.name} onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass(!!errors.name)}
                    maxLength={100}
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email Address" id="email" required error={errors.email}>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass(!!errors.email)}
                    maxLength={200}
                    autoComplete="email"
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone" id="phone" error="">
                  <input
                    id="phone" name="phone" type="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="+91 xxxxxxxxxx"
                    className={inputClass(false)}
                    maxLength={20}
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Subject" id="subject" required error={errors.subject}>
                  <input
                    id="subject" name="subject" type="text"
                    value={form.subject} onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass(!!errors.subject)}
                    maxLength={200}
                  />
                </Field>
              </div>

              <Field label="Message" id="message" required error={errors.message}>
                <textarea
                  id="message" name="message"
                  value={form.message} onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className={`${inputClass(!!errors.message)} resize-none`}
                  maxLength={2000}
                />
                <p className="text-xs text-text-muted text-right mt-1">
                  {form.message.length}/2000
                </p>
              </Field>

              {serverError && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  {serverError}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || submitted}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
