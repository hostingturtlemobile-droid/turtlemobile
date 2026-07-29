import React from 'react';
import { WEB3FORMS_ACCESS_KEY } from '../config';
import { IconMail, IconChart, IconSignal, IconUsers, IconBriefcase } from '../components/Icons';

const categories = [
  { label: 'Customers', Icon: IconMail },
  { label: 'Investors', Icon: IconChart },
  { label: 'Media', Icon: IconSignal },
  { label: 'Partners', Icon: IconUsers },
  { label: 'Careers', Icon: IconBriefcase },
];

const Contact: React.FC = () => {
  const [active, setActive] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `CHUS Mobility — ${active ?? 'General'} inquiry`);
    if (active) formData.append('category', active);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => {
          setSubmitSuccess(false);
          setActive(null);
        }, 2500);
      } else {
        alert('Submission failed: ' + (data.message ?? 'Unknown error'));
      }
    } catch {
      alert('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad mist-glow">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">Contact</p>
        <h2 className="heading-lg mt-4">Let&apos;s build the future, together.</h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setActive(cat.label)}
              className={`card p-5 md:p-6 flex flex-col items-center gap-3 text-center transition-all hover:-translate-y-1 ${
                active === cat.label ? 'border-chus-blue ring-2 ring-chus-blue/20' : ''
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-chus-blue-soft text-chus-blue flex items-center justify-center">
                <cat.Icon className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-sm">{cat.label}</span>
            </button>
          ))}
        </div>

        {active && (
          <form onSubmit={handleSubmit} className="card mt-8 p-6 md:p-8 max-w-2xl mx-auto space-y-4 animate-fade-up">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display font-bold text-lg">Contact — {active}</h3>
              <button type="button" onClick={() => setActive(null)} className="text-chus-mute text-sm hover:text-chus-ink">
                Close
              </button>
            </div>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-chus-line px-4 py-3 text-sm outline-none focus:border-chus-blue"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-chus-line px-4 py-3 text-sm outline-none focus:border-chus-blue"
              />
            </div>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="How can we help?"
              className="w-full rounded-xl border border-chus-line px-4 py-3 text-sm outline-none focus:border-chus-blue resize-y"
            />
            <button type="submit" disabled={isSubmitting || submitSuccess} className="btn-primary w-full sm:w-auto">
              {submitSuccess ? 'Sent — thank you!' : isSubmitting ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
