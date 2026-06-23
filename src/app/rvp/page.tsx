import Image from "next/image";
import Link from "next/link";

export default function ResilienceVaccinologyPage() {
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
              Resilience Vaccinology
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl font-[var(--font-display)]">
              Immunity, engineered for the world we now live in.
            </h1>
            <div className="mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-white/70">
              <p>
                The pathogens of the twenty-first century do not move the way the
                pathogens of the twentieth did. Climate volatility, population
                density, and accelerated global movement have collapsed the
                timelines and geographies that traditional immunization strategies
                were built to address. A vaccine designed for one variant, one
                region, one season is no longer sufficient.
              </p>
              <p className="text-white/80">
                Ascentive Dynamics' Resilience Vaccinology platform was built for
                this moment. Our multi-pathogen immunity stacks engineer
                broad-spectrum protection into a single therapeutic, designed for
                the climate, the populations, and the variant landscapes of today —
                not yesterday.
              </p>
            </div>
          </div>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              A new immunization paradigm
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Traditional vaccines train the immune system to recognize a single
                pathogen, or a narrow family of related pathogens. They are slow to
                develop, slow to update, and slow to distribute. By the time a
                conventional response reaches the population, the threat has often
                already shifted.
              </p>
              <p>
                Our immunity stack architecture is different. Each stack delivers
                layered protection against multiple pathogens simultaneously, with
                each layer engineered to anticipate variant drift rather than chase
                it. The result is an immune response that is broader, more durable,
                and more adaptable than any single-target vaccine can offer.
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
                  Multi-Pathogen Stacking
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  A single therapeutic targeting multiple pathogens, including
                  those that historically required separate vaccination schedules.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Variant Anticipation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Our pathogen modeling identifies likely drift pathways before
                  they emerge in the wild, allowing protection to be designed
                  forward rather than retrofitted.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Climate-Adaptive Formulation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Stack composition is tuned to regional pathogen profiles,
                  including those reshaped by climate volatility — emerging
                  arboviruses, expanding endemic zones, and seasonally displaced
                  disease vectors.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                  Rapid-Response Manufacturing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Our distributed production architecture allows new stacks to move
                  from formulation to field-ready supply at unprecedented speed.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Public health partnership
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                Resilience Vaccinology is not designed solely for the markets that
                can afford it. From its founding, the platform has operated under a
                dual-distribution mandate: every commercially distributed stack
                underwrites equivalent supply for public health agencies in regions
                of need.
              </p>
              <p>
                We have established active partnerships with national health
                ministries across four continents, contributing to vaccine
                availability in regions where market-rate access would otherwise be
                impossible. In the event of an emergent outbreak, our manufacturing
                capacity is made available to public health authorities at
                production cost, without licensing barriers.
              </p>
              <p className="text-white/80">
                The science is ours. The protection belongs to everyone.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Active programs
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Pandemic Preparedness Reserve
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  A standing stockpile of broad-spectrum immunity stacks,
                  maintained for rapid government deployment in response to
                  emergent threats.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Seasonal Influenza, Reformulated
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  A multi-strain stack offering coverage across both the current
                  and projected seasonal variants.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Climate-Displaced Disease Initiative
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Targeted protection against pathogens whose endemic ranges are
                  shifting due to environmental change.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white font-[var(--font-display)]">
                  Pediatric Resilience Schedule
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Consolidated childhood immunization stacks, reducing the number
                  of appointments and injections required across a child's early
                  years.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              A founder's commitment
            </h2>
            <blockquote className="border-l-2 border-white/20 pl-6 italic text-white/80">
              "A vaccine that arrives after the outbreak is a memorial, not a
              medicine. We build for the day before the crisis — not the day
              after."
            </blockquote>
            <p className="text-sm text-white/60">
              — Dr. Parker Symon, Founder and Chief Executive Officer, Ascentive
              Dynamics
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-3xl font-[var(--font-display)]">
              Safety, oversight, transparency
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                All Resilience Vaccinology products are developed under the
                supervision of our internal Vaccine Safety Board and reviewed by
                the Ethics & Integrity Council prior to release. Adverse event
                monitoring is conducted in real time across all distribution
                channels. Findings are reported to relevant regulatory authorities
                without delay.
              </p>
              <p className="text-white/80">
                We publish a Resilience Vaccinology Safety Summary annually,
                available without registration.
              </p>
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner-access"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05070c] transition hover:bg-white/90"
            >
              For Public Health Partners
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Pediatric Resilience Schedule
            </Link>
            <Link
              href="/partner-access"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Read the Annual Safety Summary
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
