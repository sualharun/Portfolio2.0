import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ text: '', cls: '' });
  const [sending, setSending] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ text: 'Sending...', cls: '' });
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://portfolio2-0-c31i.onrender.com';
      const r = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const res = await r.json();
      setStatus({ text: res.message || 'Sent!', cls: 'ok' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ text: 'Something went wrong. Please email me directly.', cls: 'err' });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section section-alt contact">
      <div className="container center">
        <span className="eyebrow">08 / Contact</span>
        <h2 className="section-title huge">LET'S<br/>BUILD.</h2>
        <p className="section-sub">Open to internships, collaborations, and good coffee.</p>

        <form onSubmit={submit} className="contact-form" noValidate>
          <div className="form-row">
            <input type="text" placeholder="Your name" value={form.name}
                   onChange={update('name')} required maxLength={120} />
            <input type="email" placeholder="Your email" value={form.email}
                   onChange={update('email')} required maxLength={200} />
          </div>
          <textarea placeholder="Your message..." value={form.message}
                    onChange={update('message')} required rows={5} maxLength={3000} />
          <button type="submit" className="btn btn-orange" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message →'}
          </button>
          <p className={`contact-status ${status.cls}`}>{status.text}</p>
        </form>

        <div className="contact-buttons">
          <a className="btn btn-outline" href="mailto:sualharun.w@gmail.com">Email</a>
          <a className="btn btn-outline" href="https://www.linkedin.com/in/sualharun/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn btn-outline" href="https://github.com/sualharun" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
