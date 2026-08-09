import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, Code, Loader2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { connect } from "../data";
import Reveal from "./Reveal";

const iconMap = { mail: Mail, phone: Phone, pin: MapPin, github: GithubIcon, linkedin: LinkedinIcon, instagram: InstagramIcon, code: Code };

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c51e42f2-412c-48ce-b00c-6b16e2de72f4",
          name: form.name,
          email: form.email,
          subject: form.subject || "New Portfolio Message",
          message: form.message,
          from_name: form.name,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setErrorMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-5 sm:px-8 lg:pl-32 py-20 relative z-10 border-t border-[var(--border-card)]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Send size={20} />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">GET IN TOUCH</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--text-heading)] tracking-tight">
                Let's Work Together
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal delay={100}>
              <div className="glass-panel rounded-2xl p-6 border border-[var(--border-card)]">
                <h3 className="font-display font-bold text-lg text-[var(--text-heading)] mb-2">Direct Contact</h3>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-6">{connect.intro}</p>

                <div className="space-y-3">
                  {connect.items.map((item, i) => {
                    const Icon = iconMap[item.icon] || Mail;
                    const content = (
                      <div className="flex items-center gap-3.5 theme-card-subtle border border-[var(--border-card)] rounded-xl px-4 py-3 text-xs text-[var(--text-body)] hover:border-cyan-500/50 hover:text-[var(--text-heading)] transition-all group overflow-hidden">
                        <div className="h-9 w-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase">{item.detail}</p>
                          <p className="font-mono text-xs text-[var(--text-heading)] truncate break-all">{item.label}</p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block min-w-0">
                        {content}
                      </a>
                    ) : (
                      <div key={i} className="min-w-0">{content}</div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Glass Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[var(--border-card)]">
                <h3 className="font-display font-bold text-lg text-[var(--text-heading)] mb-1">Send a Message</h3>
                <p className="text-[var(--text-muted)] text-xs mb-6">Have a project or opportunity in mind? Drop a message below.</p>

                {submitted ? (
                  <div className="py-12 text-center bg-emerald-950/20 border border-emerald-500/40 rounded-2xl animate-fadeIn">
                    <CheckCircle size={44} className="text-emerald-400 mx-auto mb-3 animate-bounce" />
                    <h4 className="font-display font-bold text-lg text-[var(--text-heading)]">Message Delivered to Inbox!</h4>
                    <p className="text-xs text-[var(--text-body)] mt-1.5 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out! Your message has been sent directly to Abhishek's inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 bg-red-950/40 border border-red-500/40 rounded-xl flex items-center gap-2 text-xs text-red-300">
                        <AlertCircle size={15} className="shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1.5 uppercase">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full theme-card-subtle border border-[var(--border-card)] focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1.5 uppercase">Your Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full theme-card-subtle border border-[var(--border-card)] focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1.5 uppercase">Subject</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Job Opportunity / Project Collaboration"
                        className="w-full theme-card-subtle border border-[var(--border-card)] focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1.5 uppercase">Message *</label>
                      <textarea
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full theme-card-subtle border border-[var(--border-card)] focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs text-[var(--text-heading)] placeholder:text-[var(--text-muted)] outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/60 text-white font-mono text-xs font-semibold py-3 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all cursor-pointer disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={15} className="animate-spin" /> Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
