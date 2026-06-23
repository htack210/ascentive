import Image from "next/image";
import Link from "next/link";

export default function EthicsIntegrityCouncilPage() {
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
              Ethics & Integrity Council
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl font-[var(--font-display)]">
              Independent. Accountable. On the record.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
              The Ascentive Dynamics Ethics & Integrity Council is the
              independent body responsible for the moral and procedural oversight
              of our research, our operations, and our deployment of advanced
              intelligence systems. It is empowered by charter to review any
              program, halt any protocol, and require any disclosure it deems
              necessary in service of participant welfare and scientific
              integrity.
            </p>
            <p className="mx-auto max-w-3xl text-base font-semibold leading-relaxed text-white/80">
              The Council reports not to the Office of the CEO, but to a standing
              committee of the Board of Directors. This is by design.
            </p>
          </div>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Why an external Council
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                In a sector defined by accelerating capability, internal review
                is no longer sufficient. The questions raised by modern
                biomedical research — particularly research involving adaptive
                intelligence systems, regenerative medicine, and long-horizon
                human studies — demand voices that are not, and cannot be,
                beholden to commercial outcomes.
              </p>
              <p className="text-white/80">The Council was established to provide those voices.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Council composition
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              The Ethics & Integrity Council is comprised of nine standing
              members, drawn from outside the company and rotating on staggered
              three-year terms:
            </p>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">Two practicing physicians</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  Two bioethicists from accredited academic institutions
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  One independent AI governance specialist
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  One legal scholar specializing in patient rights
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  One faith and conscience representative
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">One former regulator</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/70">
                  One participant advocate, nominated annually
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              No member of the Council holds equity in Ascentive Dynamics. No
              member may accept consulting fees from the company during their
              term, or for two years following. Membership and biographical
              information are published in full on this site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              What the Council oversees
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Program Approval
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  No new clinical or research program enters human-facing phases
                  without Council review.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Protocol Integrity
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Existing programs are subject to scheduled and unscheduled
                  review at the Council's discretion.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  AI Governance
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Our intelligence platforms, including Zoë, operate within a
                  framework of disclosed capabilities, documented constraints, and
                  ongoing behavioral audit. The Council reviews these systems on a
                  continuous basis.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Participant Welfare
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  The Council maintains a direct, confidential channel through
                  which any participant, employee, or partner may raise concerns
                  without retaliation.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Incident Response
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  In the event of an adverse outcome, deviation, or governance
                  breach, the Council leads the inquiry — not the operational team
                  responsible for the underlying program.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Multi-jurisdiction audit
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Ascentive Dynamics operates across multiple regulatory
                environments. The Council coordinates with — and submits findings
                to — the relevant authorities in every jurisdiction in which we
                conduct research. Audits are conducted on a rolling annual
                schedule by independent assessors. No facility is exempt. No
                program is exempt. No leadership figure is exempt.
              </p>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Transparent reporting
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              The Council publishes an Annual Integrity Report, available without
              registration, including:
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p>A summary of programs reviewed</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p>Outcomes of all formal inquiries</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p>
                  Concerns raised through the confidential channel and how they
                  were resolved
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p>
                  AI behavioral audit findings, in non-proprietary summary form
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p>
                  Recommendations made, and the company's response to each
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              We commit to publishing both the recommendations the company
              accepted, and any it did not — with reasoning.
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              A founder's commitment
            </h2>
            <blockquote className="border-l-2 border-white/20 pl-6 italic text-white/80">
              "A company that cannot be told no by its own conscience has no
              business doing work like ours."
            </blockquote>
            <p className="text-sm text-white/60">
              — Dr. Parker Symon, Founder and Chief Executive Officer, Ascentive
              Dynamics
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Raise a concern
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Participants, employees, partners, and members of the public may
                contact the Council directly. All communications are received by
                Council staff independent of company operations. Identifying
                information is protected by charter.
              </p>
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner-access"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05070c] transition hover:bg-white/90"
            >
              Contact the Council
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Read the Annual Integrity Report
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Council Charter & Membership
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
