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
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
      <PageTitle>Contact</PageTitle>

      <Card>
        <form className="grid gap-4" onSubmit={onSubmit}>
          {/* form fields unchanged */}

          <button type="submit" disabled={status === "submitting"}>
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
