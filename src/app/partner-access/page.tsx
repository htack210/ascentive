import Image from "next/image";
import Link from "next/link";
import frontOnly from "@/assets/FrontOnly.png";

export default function PartnerAccessPage() {
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

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-4">
        <div className="grid items-center gap-10 text-center md:grid-cols-[1.1fr_0.9fr] md:text-left">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">
              Partner Access
            </div>
            <h1 className="text-2xl font-semibold leading-tight text-white md:text-3xl font-[var(--font-display)]">
              Ascentive Dynamics is a fictional entity created for narrative
              purposes as part of the <i>Project Vectus</i> universe. Any
              resemblance to real organizations is coincidental.
            </h1>
            <p className="text-sm leading-relaxed text-white/60">
              This portal is a narrative extension of the Ascentive Dynamics
              universe. Access is limited to sanctioned partners, archivists,
              and readers exploring the broader lore.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_30px_120px_rgba(10,15,30,0.45)] md:mx-0">
            <Image
              src={frontOnly}
              alt="Project Vectus cover"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <a
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05070c] transition hover:bg-white/90"
            href="https://www.amazon.com/dp/B0GJMQL3J8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Available Now on Amazon
          </a>
        </div>
      </main>
    </div>
  );
}
