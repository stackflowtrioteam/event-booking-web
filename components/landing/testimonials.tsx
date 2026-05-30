import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Event Organizer",
    initials: "PS",
    quote:
      "EventVendor made planning my daughter's wedding so much easier. I received 12 quotations within a day and found the perfect caterer and decorator at amazing prices.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Wedding Photographer",
    initials: "RK",
    quote:
      "As a photographer, I've booked over 30 events through EventVendor. The lead quality is excellent and the payment system gives my clients total confidence.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Corporate Event Manager",
    initials: "AP",
    quote:
      "We use EventVendor for all our corporate events now. The verified vendor badges and transparent pricing make vendor selection effortless for our team.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Loved by Customers & Vendors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Hear from the people who use EventVendor to plan amazing events and grow their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#FFC924] text-[#FFC924]"
                  />
                ))}
              </div>
              <blockquote className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#570861] text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
