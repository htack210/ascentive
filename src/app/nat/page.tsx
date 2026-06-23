import Image from "next/image";
import Link from "next/link";

export default function NeuroadaptiveTherapeuticsPage() {
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
              Neuroadaptive Therapeutics
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl font-[var(--font-display)]">
              The nervous system, in dialogue.
            </h1>
            <div className="mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-white/70">
              <p>
                For most of medicine's history, treating the brain has meant
                treating it at a distance. Pharmacology floods. Surgery
                interrupts. Stimulation broadcasts. Each method speaks to the
                nervous system in a language the nervous system did not design.
              </p>
              <p>
                Ascentive Dynamics' Neuroadaptive Therapeutics platform changes
                that conversation. Our protocols deliver targeted neurochemical
                modulation directly at the synaptic level — responsive,
                reversible, and continuously adapted to the patient's own
                neurological state.
              </p>
              <p className="font-semibold text-white/80">
                For the first time, the treatment listens before it acts.
              </p>
            </div>
          </div>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Closed-loop modulation
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                A conventional therapeutic intervention is a one-way instruction.
                The drug is administered. The body responds. The clinician waits,
                observes, and adjusts at the next appointment.
              </p>
              <p>
                Our closed-loop architecture compresses that cycle from weeks to
                milliseconds. Embedded sensing elements monitor neurochemical
                activity in real time. Adaptive logic interprets the signal.
                Delivery modulates accordingly. The result is treatment that
                responds to the patient as the patient changes — not as the
                patient was at last assessment.
              </p>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Precision across the synaptic barrier
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                The blood-brain barrier has long been the limiting factor in
                neurological medicine. Traditional pharmacology either fails to
                cross it or crosses it imprecisely, affecting tissue and pathway
                alike.
              </p>
              <p>
                Our delivery mechanism crosses the synaptic barrier with
                site-level precision — engaging only the receptors targeted by the
                protocol, leaving surrounding architecture undisturbed. This is
                not flood. This is not broadcast. This is a tuning fork, struck
                once, in exactly the right place.
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
                  Real-Time Neurochemical Sensing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Continuous monitoring of synaptic-level activity, providing a
                  live readout of the patient's neurological state.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Adaptive Delivery
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Dosing that responds to what the brain is doing now, not what it
                  was doing at the last clinical visit.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Reversible Engagement
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Every intervention is reversible by design. No protocol creates a
                  state the patient cannot return from.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Cross-Platform Integration
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Compatible with our Cellular Regeneration and Adaptive
                  Intelligence Platforms, enabling coordinated treatment across
                  multiple therapeutic axes.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Clinical applications
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              Our Neuroadaptive Therapeutics platform supports research and
              treatment across a growing range of neurological conditions:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Traumatic brain injury
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Sustained recovery support beyond the acute window
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Chronic pain management
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Site-specific modulation without systemic side effects
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Neurodegenerative conditions
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Early-stage intervention in cognitive decline
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Addiction and dependency recovery
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Neurochemical rebalancing during withdrawal
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Mood and anxiety disorders
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Precision targeting where conventional pharmacology overreaches
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Cognitive optimization research
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Long-horizon studies in attention, memory, and resilience
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              A founder's perspective
            </h2>
            <blockquote className="border-l-2 border-white/20 pl-6 italic text-white/80">
              "For a century we have practiced medicine by speaking to the brain.
              With this platform, we are learning to listen to it. Everything else
              follows from that."
            </blockquote>
            <p className="text-sm text-white/60">
              — Dr. Parker Symon, Founder and Chief Executive Officer, Ascentive
              Dynamics
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Clinical oversight
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                All Neuroadaptive Therapeutics protocols are administered under
                the supervision of board-certified neurologists and reviewed by our
                Ethics & Integrity Council prior to enrollment. Candidate selection
                follows our standard pre-screening framework. Long-term participant
                follow-up is built into every program. Informed consent
                documentation is available in plain language and in clinical
                detail.
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
              For Clinicians and Referring Physicians
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Read the Technical Brief
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
