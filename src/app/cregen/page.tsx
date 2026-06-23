import Image from "next/image";
import Link from "next/link";

export default function CellularRegenerationPage() {
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
              Cellular Regeneration
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl font-[var(--font-display)]">
              What was lost. Restored.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
              Ascentive Dynamics' Cellular Regeneration platform represents a
              generational shift in how the body heals. Built on more than two
              decades of proprietary stemline research and refined through
              clinical partnerships across three continents, our protocols
              transform the body's own repair pathways into instruments of
              precision.
            </p>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/60">
              What once required years of physical therapy now begins in days.
              What once was permanent damage is, increasingly, not.
            </p>
          </div>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              The science
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Conventional regenerative medicine asks the body to heal on its
                own timeline. Our approach is different. Through directed
                stemline orchestration, our protocols guide the body's native
                repair cells with sequence-level precision — telling them not
                only where to go, but in what order to act. The result is
                restoration that doesn't simply replace damaged tissue, but
                reconstructs the underlying architecture.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Capabilities
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Stemline Orchestration
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Directed activation and routing of the body's native
                  regenerative cells, sequenced and tailored to the individual.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Tissue Lattice Repair
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Microscopic scaffolding that restores the structural matrix
                  beneath skin, muscle, nerve, and connective tissue — the layer
                  of healing that traditional therapy can't reach.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Accelerated Recovery Protocols
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Compressed timelines for post-injury, post-surgical, and
                  post-trauma rehabilitation, with outcomes measurable in weeks
                  rather than years.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Programs
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              Our Cellular Regeneration platform supports a growing portfolio of
              clinical and research initiatives, including:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Athletic Recovery
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Restoration of joint, ligament, and nerve function for
                  collegiate, semi-professional, and post-competitive athletes.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Neurogenics
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Targeted repair of nerve pathways damaged by trauma, illness,
                  or age.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Surgical Regenesis
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Integration with reconstructive and orthopedic surgical
                  workflows.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Longevity Research
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Long-horizon studies into the cellular mechanisms of human
                  resilience and durability.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              From a program participant
            </h2>
            <blockquote className="border-l-2 border-white/20 pl-6 italic text-white/80">
              "I came in expecting to manage what I'd lost. Six months later I
              was throwing again. I don't know how to explain what they gave me
              back."
            </blockquote>
            <p className="text-sm text-white/60">
              — M.J., Athletic Recovery Program, 2024 cohort
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              A founder's commitment
            </h2>
            <blockquote className="border-l-2 border-white/20 pl-6 italic text-white/80">
              "The body knows how to repair itself. We've only learned to ask it
              the right way."
            </blockquote>
            <p className="text-sm text-white/60">
              — Dr. Parker Symon, Founder and Chief Executive Officer, Ascentive
              Dynamics
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Care, oversight, integrity
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Every Cellular Regeneration protocol is administered under the
                supervision of board-certified medical professionals and reviewed
                by our internal Clinical Ethics Board. All candidate participants
                undergo comprehensive pre-screening. Outcomes are monitored.
                Long-term participant follow-up is built into every program.
              </p>
              <p className="text-white/80">
                We don't promise miracles. We deliver measured restoration — and
                we stand behind every protocol we deploy.
              </p>
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner-access"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05070c] transition hover:bg-white/90"
            >
              Apply for a Program
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Eligibility & Screening
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Contact Our Clinical Team
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
