"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const metrics = [
  { label: "Countries served", value: "64" },
  { label: "Clinical programs", value: "213" },
  { label: "Patients reached", value: "92M" },
  { label: "Active partnerships", value: "180" },
];

const platforms = [
  {
    title: "Neuroadaptive Therapeutics",
    copy: "Closed-loop neurochemistry modulation with precision delivery across the synaptic barrier.",
  },
  {
    title: "Cellular Regeneration",
    copy: "Stemline orchestration, tissue lattice repair, and accelerated recovery protocols.",
  },
  {
    title: "Resilience Vaccinology",
    copy: "Multi-pathogen immunity stacks engineered for complex climate volatility.",
  },
];

const signals = [
  {
    title: "Mont Salève, Switzerland",
    copy: "Headquarters and primary innovation campus overlooking the alpine corridor.",
  },
  {
    title: "Kyoto • São Paulo • Toronto",
    copy: "Regional precision manufacturing hubs with cold-chain oversight.",
  },
  {
    title: "Frontier Response Network",
    copy: "Rapid deployment teams aligned with global health authorities.",
  },
];

const disclosures = [
  {
    title: "Adaptive Intelligence Platform",
    copy: "Zoë integrates therapeutic simulations, biomedical datasets, and clinical forecasts to accelerate discovery.",
  },
  {
    title: "Ethics & Integrity Council",
    copy: "Independent oversight, multi-jurisdiction audits, and transparent reporting on AI governance.",
  },
  {
    title: "Patient Data Safeguards",
    copy: "End-to-end encryption, sovereign data controls, and continuous risk monitoring.",
  },
];

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  function handleRestrictedClick() {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }

  return (
    <div className="min-h-screen bg-[#05070c] text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,180,255,0.18),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(120,255,214,0.12),_transparent_50%)]" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[680px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_120deg,_rgba(43,102,255,0.35),_rgba(42,196,162,0.25),_rgba(43,102,255,0.35))] blur-3xl" />

        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-12 pt-8">
          <div className="flex items-center gap-3">
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
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <span className="transition hover:text-white">Therapeutics</span>
            <span className="transition hover:text-white">Research</span>
            <span className="transition hover:text-white">Responsibility</span>
            <span className="transition hover:text-white">Investors</span>
          </nav>
          <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/20">
            Partner Access
          </button>
        </header>
        <div className="relative mx-auto flex w-full max-w-6xl justify-center px-6 pb-6">
          <div className="rounded-full border border-cyan-200/30 bg-gradient-to-r from-cyan-400/20 via-sky-400/10 to-blue-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_24px_rgba(56,189,248,0.35)] ring-1 ring-cyan-200/20 md:text-sm">
            Public access is limited to approved disclosures. Request access
            below.
          </div>
        </div>

        <section className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-24 pt-4 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              Global pharmaceuticals • since 1984
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-tight font-[var(--font-display)]">
              Humanity, optimized through precision science and adaptive
              intelligence.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Ascentive Dynamics is a global biopharmaceutical enterprise based
              in Mont Salève, Switzerland. We engineer resilience across
              neurology, immunology, and regenerative systems while advancing a
              new era of intelligent discovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={handleRestrictedClick} className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05070c] transition hover:bg-white/90">
                Explore Portfolio
              </button>
              <button onClick={handleRestrictedClick} className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/60 hover:text-white">
                View Research Dossier
              </button>
            </div>
          </div>

          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_30px_120px_rgba(10,15,30,0.45)]">
            <div className="text-xs uppercase tracking-[0.35em] text-white/60">
              Active intelligence
            </div>
            <div className="text-3xl font-semibold leading-tight text-white font-[var(--font-display)]">
              Zoë is our next-level AI for accelerated therapeutic
              breakthroughs.
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              A proprietary adaptive system orchestrating longitudinal clinical
              datasets, simulation engines, and global epidemiological
              intelligence. Access is limited to authorized scientific teams.
            </p>
            <div className="flex items-center justify-between border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-white/60">
              <span>Classified platform</span>
              <span>Clearance 4+</span>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-3xl font-semibold text-white">
                {metric.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">
              Therapeutic platforms
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl font-[var(--font-display)]">
              Engineered programs for a changing world.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            From neural repair to climate-resilient immunology, our pipeline is
            built to respond faster than global disruption.
          </p>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            Certain platforms described herein operate beyond conventional
            regulatory frameworks.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              onClick={handleRestrictedClick}
            className="group cursor-pointer rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-8 transition hover:border-white/30"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                Platform
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white font-[var(--font-display)]">
                {platform.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                {platform.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">
              Global network
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white font-[var(--font-display)]">
              Precision manufacturing on every continent.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              We operate a vertically integrated supply chain across five
              hemispheres, enabling equitable access to critical therapies and
              rapid response to emergent crises.
            </p>
          </div>
          <div className="grid gap-4">
            {signals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-semibold text-white">
                  {signal.title}
                </div>
                <p className="mt-2 text-sm text-white/60">{signal.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-6 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">
              Responsibility
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl font-[var(--font-display)]">
              Advanced intelligence, grounded in accountability.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            We champion transparent governance across our platforms while
            safeguarding sensitive breakthroughs that secure global stability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {disclosures.map((disclosure) => (
            <div
              key={disclosure.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-7"
            >
              <h3 className="text-lg font-semibold text-white font-[var(--font-display)]">
                {disclosure.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {disclosure.copy}
              </p>
              <div onClick={handleRestrictedClick} className="mt-6 cursor-pointer text-xs uppercase tracking-[0.3em] text-white/50 transition hover:text-white/80">
                Learn more
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">
              Investor relations
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl font-[var(--font-display)]">
              Steady growth in uncertain times.
            </h2>
            <p className="text-sm leading-relaxed text-white/60">
              Ascentive Dynamics maintains long-horizon growth with resilient
              revenue streams, humanitarian partnerships, and responsibly
              governed innovation pipelines.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-white/70">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              Q3 operational update: 7.2% increase in global access programs.
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              Expanded clinical coalition with 42 public health ministries.
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              Zoë platform integration approved for Phase IV acceleration.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-white/60">
            Partnership
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl font-[var(--font-display)]">
            Collaborate on the future of human health.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/60">
            Join our global network of researchers, regulators, and strategic
            partners shaping the next era of biological intelligence.
          </p>
          <Link
            href="/partner-access"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05070c] transition hover:bg-white/90"
          >
            Request Access
          </Link>
        </div>
      </section>

      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md">
          Request access below.
        </div>
      )}

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
