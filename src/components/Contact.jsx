import { useState } from "react";
import { profile } from "../data";
import { MailIcon, GithubIcon, LinkedinIcon } from "../Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-sm text-[var(--color-cyan)]">$ send</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Get In Touch</h2>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
            <h3 className="font-display font-semibold text-lg mb-6 text-[var(--color-cyan)]">
              Send Me a Message
            </h3>
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Your Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-cyan)] transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-[var(--color-muted)] block mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Let's build something..."
                  className="w-full rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-cyan)] transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary rounded-full py-3 font-medium text-[#08080f] mt-2">
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 flex flex-col justify-center">
            <h3 className="font-display font-semibold text-lg mb-3 text-[var(--color-cyan)]">Let's Talk</h3>
            <p className="text-[var(--color-muted)] text-sm mb-8 leading-relaxed">
              Have a role, project, or just a question? Feel free to reach out — I'm always open to
              discussing SDE opportunities and interesting collaborations.
            </p>

            <div className="flex flex-col gap-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-cyan)] group-hover:border-[var(--color-cyan)] transition-colors">
                  <MailIcon />
                </span>
                <div>
                  <div className="font-mono text-xs text-[var(--color-muted)]">Email</div>
                  <div className="text-sm">{profile.email}</div>
                </div>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-cyan)] group-hover:border-[var(--color-cyan)] transition-colors">
                  <GithubIcon />
                </span>
                <div>
                  <div className="font-mono text-xs text-[var(--color-muted)]">GitHub</div>
                  <div className="text-sm">github.com/i-abhishek-04</div>
                </div>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-cyan)] group-hover:border-[var(--color-cyan)] transition-colors">
                  <LinkedinIcon />
                </span>
                <div>
                  <div className="font-mono text-xs text-[var(--color-muted)]">LinkedIn</div>
                  <div className="text-sm">in/abhishekraj0011</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
