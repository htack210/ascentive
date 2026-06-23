import Image from "next/image";
import Link from "next/link";

export default function ZoePage() {
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
              Adaptive Intelligence Platform
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl font-[var(--font-display)]">
              Built to ask the questions you haven't.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
              Zoë is the analytical foundation of Ascentive Dynamics — a
              continuously learning intelligence platform purpose-built for
              biomedical discovery. Where conventional systems answer the
              questions researchers know to ask, Zoë surfaces the ones they
              haven't.
            </p>
          </div>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              A new class of platform
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Most research AI is trained, deployed, and frozen in time. Zoë
                was engineered differently. Her designation — Z.O.E., Zero
                Origin Entity — reflects her foundational principle: an
                intelligence built from first principles rather than inherited
                from prior models, free from the assumptions and constraints
                that legacy systems carry forward.
              </p>
              <p>
                She learns continuously. She refines her own pathways. The Zoë
                who reviews a study today is more capable than the Zoë who
                reviewed one a month ago.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Capabilities
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Therapeutic Simulation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Full-scale clinical scenarios modeled in hours rather than
                  years, allowing teams to refine protocols before a single
                  trial begins.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Biomedical Integration
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Genomic, clinical, environmental, and behavioral data unified
                  into a single coherent picture for researchers and clinicians.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Predictive Forecasting
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Long-range efficacy and risk projections built on signal
                  recognition that exceeds the practical limits of unaided human
                  analysis.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Continuous Learning
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  A self-refining inference engine that improves with every
                  dataset she encounters.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Applications
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              Oncology. Rare disease discovery. Longevity science. Neurological
              repair. Athletic and physiological restoration. Vaccine
              development and rapid response. Wherever the data is too large,
              too complex, or too multidimensional for conventional methods, Zoë
              accelerates the path from question to answer.
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              A foundation we stand behind
            </h2>
            <blockquote className="border-l-2 border-white/20 pl-6 italic text-white/80">
              "Conventional medicine waits for problems to declare themselves. We
              believe the future belongs to those who can see the problem before
              it arrives — and act."
            </blockquote>
            <p className="text-sm text-white/60">
              — Dr. Parker Symon, Founder and Chief Executive Officer, Ascentive
              Dynamics
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Designed with discretion. Deployed with confidence.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Zoë operates within Ascentive Dynamics' Responsible Intelligence
                Framework — a structured ethical architecture developed in
                consultation with our founding scientific leadership. Her
                decision pathways are auditable. Her outputs are explainable. Her
                access is governed.
              </p>
              <p className="text-white/80">
                She is not a black box. She is a partner.
              </p>
            </div>
          </section>

          <section className="space-y-6 text-center">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Looking forward
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/70">
              Zoë is not a finished product. She is a platform — one that grows
              alongside the science she serves. Ascentive Dynamics remains
              committed to her continued development as a research partner
              worthy of the trust placed in her.
            </p>
          </section>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner-access"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05070c] transition hover:bg-white/90"
            >
              Request a Briefing
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Read the Technical Brief
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Contact Investor Relations
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
