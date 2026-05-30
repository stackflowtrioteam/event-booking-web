import Link from "next/link";
import { ArrowRight, CalendarDays, Store } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf5ff] via-white to-[#F5F3F0]">
      {/* Base gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(87,8,97,0.08),transparent)]" />

      {/* Primary glow effect behind heading */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 z-0 -translate-x-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#570861]/15 via-[#570861]/5 to-transparent blur-3xl" />
      </div>

      {/* Accent yellow blob for visual interest */}
      <div className="pointer-events-none absolute -right-32 top-0 z-0 opacity-40">
        <div className="h-96 w-96 rounded-full bg-gradient-to-bl from-[#FFC924]/20 to-transparent blur-3xl" />
      </div>

      {/* Purple accent blob on bottom left */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 z-0 opacity-30">
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-[#570861]/10 via-transparent to-transparent blur-3xl" />
      </div>

     <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pt-10 pb-20 lg:pt-12 lg:pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#570861]/20 bg-white px-4 py-2 text-sm font-medium text-[#570861]">
          <span className="inline-block h-2 w-2 rounded-full bg-[#FFC924]" />
          Trusted by 2,000+ event organizers
        </div>

        <div className="flex max-w-3xl flex-col gap-8">
          <h1
            className="text-balance text-5xl font-bold leading-tight tracking-tight text-[#2B2520] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find the Perfect Vendor for Your Event
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-xl leading-relaxed text-[#696159]">
            Post your event requirements, receive competitive quotations from verified vendors, compare offers side-by-side, and book with confidence — all in one platform.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">

          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#570861] px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#3f0547] hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            <CalendarDays className="h-5 w-5 shrink-0" />
            <span>Post Your Event</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#570861] bg-white px-8 py-3 text-base font-semibold text-[#570861] transition-all duration-300 hover:bg-[#f8f0ff] hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            <Store className="h-5 w-5 shrink-0" />
            <span>Join as Vendor</span>
          </Link>

        </div>

        {/* Illustration / Dashboard preview */}
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-[#E8E6E3]/60 bg-white shadow-2xl">
          <div className="flex items-center gap-2 border-b border-[#E8E6E3] bg-[#faf5ff] px-6 py-4">
            <div className="h-3 w-3 rounded-full bg-red-400/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <div className="h-3 w-3 rounded-full bg-green-400/70" />
            <span className="ml-4 text-xs font-medium text-[#696159]">eventvendor.app/dashboard</span>
          </div>
          <div className="grid grid-cols-1 gap-5 p-8 sm:grid-cols-3">
            <DashboardCard
              title="Active Events"
              value="24"
              label="events posted this month"
              accent="bg-gradient-to-br from-[#570861]/12 to-[#570861]/6 text-[#570861]"
            />
            <DashboardCard
              title="Quotations"
              value="156"
              label="received from vendors"
              accent="bg-gradient-to-br from-[#FFC924]/25 to-[#FFC924]/10 text-[#e6b800]"
            />
            <DashboardCard
              title="Bookings"
              value="18"
              label="confirmed this month"
              accent="bg-gradient-to-br from-[#570861]/12 to-[#570861]/6 text-[#570861]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  title,
  value,
  label,
  accent,
}: {
  title: string;
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div className={`rounded-xl border border-[#E8E6E3]/40 p-6 transition-all duration-300 hover:border-[#E8E6E3] hover:shadow-md ${accent}`}>
      <p className="text-sm font-semibold opacity-75">{title}</p>
      <p className="mt-3 text-4xl font-bold">{value}</p>
      <p className="mt-2 text-xs opacity-65">{label}</p>
    </div>
  );
}
