import { Link } from "@tanstack/react-router";

export function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-10 text-white/80">
        <div>
          <h2 className="text-xl font-medium text-white">
            What does Core Holding Corporation do?
          </h2>
          <p className="mt-3 leading-relaxed">
            Core Holding Corporation builds governance-first infrastructure that
            enables organizations to deploy agentic systems safely, with enforceable
            controls, auditability, and accountable escalation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white">
            Do you replace human roles?
          </h2>
          <p className="mt-3 leading-relaxed">
            No. We constrain and supervise AI execution under governance. We do not
            remove people from accountability, judgment, or decision ownership.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white">
            How do you work with organizations?
          </h2>
          <p className="mt-3 leading-relaxed">
            We typically begin with advisory and readiness work before progressing
            into governed platform deployment.
          </p>

          <Link
            to="/coreidentity-ai-advisory-group"
            className="inline-block mt-4 text-blue-100 hover:text-blue-200 transition"
          >
            CoreIdentity AI Advisory Group →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
