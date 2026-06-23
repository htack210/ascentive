import Image from "next/image";
import Link from "next/link";

export default function PatientDataSafeguardsPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,180,255,0.18),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(120,255,214,0.12),_transparent_50%)]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[680px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_120deg,_rgba(43,102,255,0.35),_rgba(42,196,162,0.25),_rgba(43,102,255,0.35))] blur-3xl" />

        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-12 pt-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/ADlogoTransparent.png"
              alt="Ascentive Dynamics logo"
              width={140}
              height={48}
              priority
            />
            <div className="hidden text-xs uppercase tracking-[0.3em] text-white/60 md:block">
              Ascentive Dynamics
            </div>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
          >
            Return Home
          </Link>
        </header>
      </div>

      <main className="mx-auto w-full max-w-4xl px-6 pb-24 pt-4">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">
              Patient Data Safeguards
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl font-[var(--font-display)]">
              Your data. Protected at every layer.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
              At Ascentive Dynamics, the trust of our participants, partners, and
              patients is the foundation of everything we build. Our Patient Data
              Safeguards program — overseen by our Chief Information Security
              Officer and reviewed quarterly by an independent advisory panel —
              represents one of the most comprehensive data protection postures in
              the biomedical sector.
            </p>
            <p className="mx-auto max-w-3xl text-base font-semibold leading-relaxed text-white/80">
              We don't simply meet the standard. We set it.
            </p>
          </div>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              End-to-end encryption
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Every byte of participant data — clinical, genetic, biometric,
                behavioral — is encrypted in transit and at rest using AES-256
                cryptography, with key management distributed across
                geographically isolated secure enclaves. No single operator,
                system, or facility holds unilateral access to a complete
                participant record.
              </p>
              <p className="text-white/80">
                <strong>What this means for you:</strong> the moment your
                information enters our care, it is rendered unreadable to anyone —
                internal or external — without legitimate, audited,
                role-appropriate authorization.
              </p>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Sovereign data controls
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Ascentive Dynamics maintains full operational data sovereignty
                across its global facilities. Participant records remain within the
                legal jurisdiction in which they originate unless explicit,
                informed cross-border consent is granted. Our infrastructure is
                built to comply with HIPAA, GDPR, PIPEDA, and the data protection
                frameworks of every region in which we operate — and in many cases
                exceeds them.
              </p>
              <p className="text-white/80">
                Participants retain the right to review, restrict, or withdraw
                their data at any point during, or following, their engagement with
                our programs.
              </p>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Continuous risk monitoring
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Threats to participant data evolve in real time. So does our
                defense.
              </p>
              <p>
                Our Continuous Risk Monitoring framework runs 24/7 across our
                entire network — analyzing access patterns, flagging anomalies, and
                validating every interaction with sensitive records against
                established baselines. Suspicious activity is escalated within
                seconds. Every access event is logged, retained, and auditable.
              </p>
              <p className="text-white/80">
                This isn't periodic review. It is permanent vigilance.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Governance and oversight
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              Our data practices are reviewed by:
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  An internal Data Ethics Committee, comprising medical, legal, and
                  technical leadership
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  An external Independent Privacy Advisory Panel, including
                  academic and clinical voices outside the company
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  Annual third-party security audits conducted by accredited
                  assessors
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  Direct regulatory engagement in every jurisdiction in which we
                  operate
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Findings from these reviews inform our roadmap. We publish a
              Transparency Report annually.
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              A founder's commitment
            </h2>
            <blockquote className="border-l-2 border-white/20 pl-6 italic text-white/80">
              "The science we do is only as trustworthy as the way we treat the
              people who make it possible. Data is not a resource to be harvested.
              It is a responsibility to be honored."
            </blockquote>
            <p className="text-sm text-white/60">
              — Dr. Parker Symon, Founder and Chief Executive Officer, Ascentive
              Dynamics
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Our commitment in plain language
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>We will never sell participant data.</p>
              <p>
                We will never share identifiable records without explicit, informed
                consent.
              </p>
              <p>
                We will never use participant information for purposes outside the
                program a participant has joined.
              </p>
              <p>
                We will always notify participants of any material change to our
                data practices.
              </p>
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner-access"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05070c] transition hover:bg-white/90"
            >
              Read the Full Privacy Policy
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Transparency Report
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Contact Our Privacy Office
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">
              Ascentive Dynamics
            </div>
            <div>Mont Salève • Switzerland • Global operations</div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-white/50">
            <span>Privacy</span>
            <span>Compliance</span>
            <span>Security</span>
            <span>Careers</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
