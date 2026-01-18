import fs from "node:fs";
import path from "node:path";

const FILE = path.join(process.cwd(), "src/pages/CoreIdentityTechnologiesPage.tsx");

// This must match a stable line that already exists on the page.
// Update this ONE string if needed after you confirm the exact line.
const ANCHOR = "{/* Stack */}";
// Unique marker so the transform is idempotent.
const START_MARK = "{/* BEGIN: Operational Verticals */}";
const END_MARK = "{/* END: Operational Verticals */}";

// The appended JSX block. This is intentionally self-contained and styling-light.
const BLOCK = `
      ${START_MARK}
      <section className="mt-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight">Operational Verticals</h2>
          <p className="mt-3 text-base leading-relaxed text-white/80">
            We deploy governed agentic execution into operational markets where auditability, controls, and evidence matter.
            We are starting with revenue-first verticals while running targeted pilots in parallel.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">LegalOps</div>
              <div className="mt-2 text-sm text-white/75">
                Policy-constrained legal workflow automation with approvals, traceability, and defensible evidence.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">ComplianceOps</div>
              <div className="mt-2 text-sm text-white/75">
                Continuous compliance execution: controls, attestations, and audit-ready evidence across systems.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">HospitalityOps (POC)</div>
              <div className="mt-2 text-sm text-white/75">
                Operational automation pilot (Cole) focused on measurable ROI, with governed execution and reporting.
              </div>
            </div>
          </div>
        </div>
      </section>
      ${END_MARK}
`;

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}

const src = fs.readFileSync(FILE, "utf8");

// Idempotency: if block already present, do nothing.
if (src.includes(START_MARK) && src.includes(END_MARK)) {
  console.log("No-op: Operational Verticals block already present.");
  process.exit(0);
}

// Anchor must exist.
if (!src.includes(ANCHOR)) {
  fail(
    `Anchor text not found: "${ANCHOR}". Update ANCHOR in scripts/append_operational_verticals.mjs to a line that exists in CoreIdentityTechnologiesPage.tsx.`
  );
}

// Insert AFTER the first occurrence of the anchor line (without reformatting anything else).
// We insert after the line that contains ANCHOR by finding the next newline.
const idx = src.indexOf(ANCHOR);
const lineEnd = src.indexOf("\n", idx);
if (lineEnd === -1) fail("Could not locate end of anchor line.");

const updated = src.slice(0, lineEnd + 1) + BLOCK + src.slice(lineEnd + 1);

fs.writeFileSync(FILE, updated, "utf8");
console.log("Applied: appended Operational Verticals block.");
