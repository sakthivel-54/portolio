import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowUpRight, 
  PhoneCall, 
  MapPin,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface ContactProps {
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const { social } = portfolio;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', botcheck: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(social.email);
    setCopied(true);
    onShowToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = "Your name is required";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 8) {
      errs.message = "Message must be at least 8 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Spam honeypot detection
    if (formData.botcheck) {
      return;
    }

    if (!validate()) {
      onShowToast("Please correct the highlighted fields.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Real submission: Use configured contact endpoint or Web3Forms API
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || 'https://api.web3forms.com/submit';
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'e356230f-b4df-4191-8854-3e91dbcf6fc6';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          from_name: `Portfolio Visitor: ${formData.name.trim()}`,
          subject: `Portfolio Inquiry from ${formData.name.trim()}`
        })
      });

      const data = await response.json();

      if (response.ok && (data.success || data.ok)) {
        setIsSubmitted(true);
        onShowToast("Message sent successfully. Thank you!", "success");
        setFormData({ name: '', email: '', message: '', botcheck: '' });
        setErrors({});
      } else {
        throw new Error(data.message || "Failed to deliver message.");
      }
    } catch (err: unknown) {
      const errorMessage = "Something went wrong. Please try again or contact me directly.";
      setSubmitError(errorMessage);
      onShowToast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallbackUrl = `mailto:${social.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
    formData.name || 'Visitor'
  )}&body=${encodeURIComponent(formData.message || '')}`;

  return (
    <section id="contact" className="section-wrapper relative border-t border-white/[0.08] bg-[#06080E]">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-14">
          <div className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-2">
            10 // GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s build something meaningful.
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-3" />
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed font-sans">
            Have an open engineering role, collaboration idea, or question? Send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Direct Email Card */}
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">DIRECT EMAIL</div>
                    <div className="text-sm font-bold text-white font-mono break-all">
                      {social.email}
                    </div>
                  </div>
                </div>

                {social.phone && (
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5 mb-3">
                    <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">PHONE</div>
                      <a href={`tel:${social.phone}`} className="text-xs font-mono text-slate-200 hover:text-white transition-colors font-semibold">
                        {social.phone}
                      </a>
                    </div>
                  </div>
                )}

                {social.location && (
                  <div className="flex items-center gap-3 pt-2 border-t border-white/5 mb-4">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">LOCATION</div>
                      <div className="text-xs font-mono text-slate-200">
                        {social.location}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-indigo-400" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${social.email}`}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-sans font-semibold transition-all flex items-center justify-center shadow-md shadow-indigo-600/20 focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <span>OPEN CLIENT</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl glass-panel group hover:border-indigo-500/40 focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-label="Connect on LinkedIn"
              >
                <div className="flex items-center gap-3 font-sans">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">LinkedIn Network</div>
                    <div className="text-xs text-slate-400 font-mono">/in/sakthivel-balamurugan-099408326</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub Card */}
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl glass-panel group hover:border-indigo-500/40 focus-visible:ring-2 focus-visible:ring-indigo-400"
                  aria-label="Visit GitHub Profile (sakthivel-54)"
                >
                  <div className="flex items-center gap-3 font-sans">
                    <div className="p-2.5 rounded-xl bg-white/5 text-slate-200 border border-white/10">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">GitHub Profile</div>
                      <div className="text-xs text-slate-400 font-mono">github.com/sakthivel-54</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/15 text-xs text-slate-400 font-sans">
              <span className="text-indigo-400 font-bold font-mono block mb-1">AVAILABILITY:</span>
              Open to technical internships, software engineering roles, and collaborative technology initiatives.
            </div>
          </div>

          {/* Right Column: Accessible Real Form (Sections 10 & 11) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10">
              <h3 className="text-xl font-black text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-sans">
                Submit your inquiry directly through this verified contact form.
              </p>

              {isSubmitted ? (
                <div 
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-300"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message sent successfully. Thank you!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your message has been delivered. I will respond to your inquiry shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError(null);
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot field for spam prevention */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Submission Error Alert */}
                  {submitError && (
                    <div 
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs flex flex-col gap-2 font-sans"
                      role="alert"
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                      <div className="pt-1">
                        <a
                          href={mailtoFallbackUrl}
                          className="inline-flex items-center gap-1 text-xs text-indigo-300 hover:text-white font-mono underline"
                        >
                          <span>Open your email client with this message prefilled &rarr;</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name Field */}
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold"
                    >
                      Your Name <span className="text-indigo-400" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.name 
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500' 
                          : 'border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="text-rose-400 text-xs mt-1.5 font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold"
                    >
                      Email Address <span className="text-indigo-400" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm placeholder-slate-600 focus:outline-none transition-colors ${
                        errors.email 
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500' 
                          : 'border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-rose-400 text-xs mt-1.5 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label 
                      htmlFor="contact-message" 
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold"
                    >
                      Message <span className="text-indigo-400" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about your role, project, or collaboration..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm placeholder-slate-600 focus:outline-none transition-colors resize-none ${
                        errors.message 
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500' 
                          : 'border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-rose-400 text-xs mt-1.5 font-mono">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-sans text-sm font-semibold tracking-wide transition-all shadow-lg shadow-indigo-600/30 group focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
