import React, { useState, useMemo } from "react";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  subject: string;
  interest?: string;
  website?: string;
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const subject = useMemo(() => {
    return `Website Contact${interest ? ` — ${interest}` : ""}`;
  }, [interest]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const payload: ContactPayload = {
      name: name.trim(),
      email: email.trim(),
      website: website.trim(),
      interest: interest.trim(),
      subject,
      message: message.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setWebsite("");
      setInterest("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Failed to send message");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-semibold text-white">Contact</h1>
      <p className="mt-3 text-white/70">
        All inquiries are routed through this form. We do not trigger email clients.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-6"
      >
        <input
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
          placeholder="Website (optional)"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <input
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
          placeholder="Interest (optional)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />

        <textarea
          className="min-h-[140px] rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" && (
          <div className="text-sm text-emerald-300">Message sent successfully.</div>
        )}

        {status === "error" && (
          <div className="text-sm text-red-400">Error: {error}</div>
        )}
      </form>
    </main>
  );
}
