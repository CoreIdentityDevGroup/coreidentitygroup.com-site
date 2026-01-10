import React, { useState } from "react";
import { Card, PageTitle } from "../components/ui";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;

    // Explicitly extract the fields the API requires.
    const name = (form.elements.namedItem("name") as HTMLInputElement | null)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement | null)?.value ?? "";
    const organization =
      (form.elements.namedItem("organization") as HTMLInputElement | null)?.value ?? "";
    const interest =
      (form.elements.namedItem("interest") as HTMLSelectElement | null)?.value ?? "";
    const message =
      (form.elements.namedItem("message") as HTMLTextAreaElement | null)?.value ?? "";

    // Subject is optional on the API, but we’ll supply a deterministic one.
    const subject = `Website Contact${interest ? `: ${interest}` : ""}${
      organization ? ` (${organization})` : ""
    }`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject,
          message: message.trim(),
          organization: organization.trim(),
          interest: interest.trim(),
        }),
      });

      const result = await res.json().catch(() => null);

      if (!res.ok || !result?.ok) {
        throw new Error(result?.error || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Submission failed");
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Contact</PageTitle>
        <p className="text-white/70 max-w-3xl">
  Use the form below for general inquiries, partnerships, and requests.
</p>
  translate="no"
  data-nosnippet
  className="text-blue-300 select-all"
  style={{
    unicodeBidi: "plaintext",
    WebkitUserSelect: "text",
    WebkitTouchCallout: "none",
  }}
>
</span>
        </p>
      </div>

      <Card>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="name">
              Full Name (required)
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/20"
              placeholder="Name"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="email">
              Email (required)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/20"
              placeholder="name@company.com"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="organization">
              Organization
            </label>
            <input
              id="organization"
              name="organization"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/20"
              placeholder="Company / Organization"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="interest">
              Area of Interest
            </label>
            <select
              id="interest"
              name="interest"
              defaultValue="Governance-First AI Infrastructure"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/20"
            >
              <option>Governance-First AI Infrastructure</option>
              <option>Sentinel OS</option>
              <option>Nexus OS</option>
              <option>SmartNation AI</option>
              <option>AGO-1</option>
              <option>Advisory (CIAG)</option>
              <option>Partnerships</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="message">
              Message (required)
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/20"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed px-5 py-3 text-white font-medium"
          >
            {status === "submitting" ? "Sending…" : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-green-400">Message sent successfully.</p>
          )}

          {status === "error" && (
            <p className="text-red-400">{error}</p>
          )}
        </form>
      </Card>
    </div>
  );
}
