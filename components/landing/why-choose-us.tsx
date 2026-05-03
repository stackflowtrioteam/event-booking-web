import { DollarSign, Lock, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprise charges. Compare quotations with full breakdowns so you always know what you are paying for.",
  },
  {
    icon: Lock,
    title: "Secure Escrow Payment",
    description:
      "Your advance payment is held in escrow until the vendor delivers. Both sides are protected throughout the process.",
  },
  {
    icon: Users,
    title: "Trusted Vendors",
    description:
      "Every vendor is KYC-verified and reviewed by real customers. Work only with professionals who deliver quality results.",
  },
  {
    icon: Zap,
    title: "Easy Booking Process",
    description:
      "Post an event in minutes, receive quotations within hours, and confirm your booking with just a few clicks.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#570861]">
            Why Choose Us
          </p>
          <h2
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for Trust & Transparency
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            We have designed every aspect of EventVendor to make event booking safe, simple, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#570861] text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
