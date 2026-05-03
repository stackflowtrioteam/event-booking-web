import {
  FileText,
  MessageSquare,
  CheckCircle,
  UserCheck,
  Bell,
  Send,
} from "lucide-react";

const customerSteps = [
  {
    icon: FileText,
    title: "Post Event Requirement",
    description:
      "Describe your event details, budget, and preferences. Our platform matches you with the best vendors.",
  },
  {
    icon: MessageSquare,
    title: "Receive Quotations",
    description:
      "Get competitive quotes from multiple verified vendors. Review each offer in detail with transparent pricing.",
  },
  {
    icon: CheckCircle,
    title: "Compare & Book",
    description:
      "Compare quotations side-by-side, check ratings and reviews, then book your preferred vendor securely.",
  },
];

const vendorSteps = [
  {
    icon: UserCheck,
    title: "Register & Complete KYC",
    description:
      "Create your vendor profile, upload your portfolio, and complete KYC verification to build trust.",
  },
  {
    icon: Bell,
    title: "Receive Event Notifications",
    description:
      "Get instant alerts for events matching your expertise and service area. Never miss an opportunity.",
  },
  {
    icon: Send,
    title: "Send Quotation & Get Booked",
    description:
      "Submit competitive quotes, negotiate in real-time, and secure bookings with advance payments.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Simple Steps to Get Started
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Whether you are planning an event or looking for new clients, our platform streamlines the entire process.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Customer flow */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#570861]/10 px-4 py-2">
              <span className="text-sm font-semibold text-[#570861]">For Customers</span>
            </div>
            <div className="flex flex-col gap-8">
              {customerSteps.map((step, i) => (
                <StepCard key={step.title} step={step} index={i + 1} />
              ))}
            </div>
          </div>

          {/* Vendor flow */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#FFC924]/20 px-4 py-2">
              <span className="text-sm font-semibold text-[#e6b800]">For Vendors</span>
            </div>
            <div className="flex flex-col gap-8">
              {vendorSteps.map((step, i) => (
                <StepCard key={step.title} step={step} index={i + 1} variant="vendor" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  variant = "customer",
}: {
  step: { icon: React.ComponentType<{ className?: string }>; title: string; description: string };
  index: number;
  variant?: "customer" | "vendor";
}) {
  const Icon = step.icon;
  const colorClass = variant === "customer" ? "bg-[#570861] text-white" : "bg-[#FFC924] text-[#1a1a1a]";

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colorClass} text-sm font-bold`}>
          {index}
        </div>
        {index < 3 && <div className="mt-2 h-full w-px bg-border" />}
      </div>
      <div className="pb-2">
        <div className="mb-2 flex items-center gap-2">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
        </div>
        <p className="leading-relaxed text-muted-foreground">{step.description}</p>
      </div>
    </div>
  );
}
