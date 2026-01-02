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
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Submission failed");
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Contact</PageTitle>
        <p className="text-white/70 max-w-3xl">
          Direct all general inquiries, partnerships, and briefing requests to{" "}
          <a className="text-blue-300 hover:text-blue-200" href="mailto:info@coreholdingcorp.com">
            info@coreholdingcorp.com
          </a>.
        </p>
      </div>

      <Card>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Full Name (required)</label>
            <input name="fullName" required className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Email (required)</label>
            <input type="email" name="email" required className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Organization</label>
            <input name="organization" className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Area of Interest</label>
            <select name="areaOfInterest" className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30">
              <option>Governance-First AI Infrastructure</option>
              <option>Governance-Only Deployment Mode</option>
              <option>Pilot Design</option>
              <option>Enterprise Deployment</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea name="message" rows={6} className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full px-5 py-3 text-sm font-medium bg-blue-600/90 border border-blue-400/20 hover:bg-blue-600 transition disabled:opacity-60"
          >
            Submit
          </button>

          <div className="text-sm text-white/70">Place of Business: Madison County, Virginia</div>

          {status === "success" && <div className="text-sm text-emerald-300">Submitted. We will follow up via email.</div>}
          {status === "error" && <div className="text-sm text-rose-300">{error}</div>}
        </form>
      </Card>
    </div>
  );
}
