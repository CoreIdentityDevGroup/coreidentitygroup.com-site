import { useMemo, useState } from "react";

import { PageTitle } from "../components/ui";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "success"; message: string }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    return (
      form.name.trim().length >= 2 &&
      emailOk &&
      form.message.trim().length >= 10
    );
  }, [form]);

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid || status.state === "submitting") return;

    setStatus({ state: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          interest: form.interest.trim(),
          message: form.message.trim(),
          source: "website-contact-form",
        }),
      });

      const text = await res.text();
      // Try to parse JSON if the API returns it, else fall back to text
      let message = "Message sent. We will follow up shortly.";
      try {
        const data = JSON.parse(text) as { ok?: boolean; message?: string; error?: string };
        if (data?.message) message = data.message;
        if (data?.error) message = data.error;
      } catch {
        if (text && text.length < 200) message = text;
      }

      if (!res.ok) {
        setStatus({ state: "error", message: message || "Submission failed." });
        return;
      }

      setStatus({ state: "success", message });
      setForm({ name: "", email: "", company: "", interest: "", message: "" });
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please try again in a moment.",
      });
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Contact</PageTitle>
        <p className="text-white/70 max-w-3xl">
          For organizations evaluating Trust Infrastructure, Autonomous Execution Governance, institutional advisory services, strategic partnerships, or other engagements.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        <form className="cidg-contact-form grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm text-white/70" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/30 outline-none focus:border-white/25"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-white/70" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/30 outline-none focus:border-white/25"
                placeholder="you@company.com"
                autoComplete="email"
                inputMode="email"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm text-white/70" htmlFor="company">
                Company (optional)
              </label>
              <input
                id="company"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/30 outline-none focus:border-white/25"
                placeholder="Organization"
                autoComplete="organization"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-white/70" htmlFor="interest">
                Topic (optional)
              </label>
              <input
                id="interest"
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-white placeholder:text-white/30 outline-none focus:border-white/25"
                placeholder="Governance, advisory, partnership…"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="min-h-[140px] rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-white placeholder:text-white/30 outline-none focus:border-white/25"
              placeholder="Tell us what you’re trying to achieve and what constraints we should assume."
              required
            />
            <p className="text-xs text-white/40">
              Minimum: name + valid email + 10+ characters in message.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {status.state === "error" ? (
              <div className="text-sm text-red-200">{status.message}</div>
            ) : status.state === "success" ? (
              <div className="text-sm text-emerald-200">{status.message}</div>
            ) : (
              <div className="text-sm text-white/50">
                We respond as capacity allows.
              </div>
            )}

            <button
              type="submit"
              disabled={!isValid || status.state === "submitting"}
              className="h-11 rounded-xl bg-white/10 px-5 text-sm font-medium text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status.state === "submitting" ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
