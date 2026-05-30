import {
  MessageCircle,
  ShieldCheck,
  Star,
  BadgeCheck,
  Eye,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Real-time Negotiation",
    description:
      "Chat directly with vendors, negotiate pricing, and finalize event details in real-time with our built-in messaging system.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Advance Payment",
    description:
      "Our escrow payment system holds advance payments securely until milestones are met, protecting both parties.",
  },
  {
    icon: Star,
    title: "Vendor Ratings & Reviews",
    description:
      "Make informed decisions with authentic ratings and detailed reviews from real customers who booked through EventVendor.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Vendors (KYC)",
    description:
      "Every vendor on our platform goes through a thorough KYC verification process ensuring you only deal with trusted professionals.",
  },
  {
    icon: Eye,
    title: "Admin Monitoring System",
    description:
      "A dedicated admin team monitors all transactions and interactions, ensuring a safe and fair marketplace for everyone.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-[#faf5ff] to-[#F5F3F0] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everything You Need, Built In
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            From discovery to payment, we have built every feature you need for a seamless event booking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#570861]/10 p-3 text-[#570861] transition-colors group-hover:bg-[#570861] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
