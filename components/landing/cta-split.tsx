import { ArrowRight, CalendarDays, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSplit() {
  return (
    <section className="relative bg-gradient-to-b from-[#faf5ff] to-[#F5F3F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Customer side */}
          <div className="relative flex flex-1 flex-col justify-center gap-6 rounded-2xl bg-[#570861] p-10 text-white lg:p-14">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent)]" />
            <div className="relative">
              <CalendarDays className="mb-4 h-10 w-10" />
              <h3
                className="text-balance text-2xl font-bold sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Planning an Event?
              </h3>
              <p className="mt-3 max-w-md leading-relaxed opacity-95">
                Post your event and let verified vendors compete for your business. Get the best quotes and book with confidence.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#570861] transition-all hover:scale-105 hover:shadow-lg">
                Post Your Event
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Vendor side */}
          <div className="relative flex flex-1 flex-col justify-center gap-6 rounded-2xl border-2 border-[#570861] bg-white p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_70%_30%,rgba(20,165,159,0.05),transparent)]" />
            <div className="relative">
              <Store className="mb-4 h-10 w-10 text-[#570861]" />
              <h3
                className="text-balance text-2xl font-bold text-foreground sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Are You a Vendor?
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                Grow your business by receiving event leads directly. Complete your profile, respond to enquiries, and get booked.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-[#570861] px-6 py-3 font-semibold text-[#570861] transition-all hover:bg-purple-50 hover:scale-105">
                Join as Vendor
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
