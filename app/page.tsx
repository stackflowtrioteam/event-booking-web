import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { CtaSplit } from "@/components/landing/cta-split";
import { Testimonials } from "@/components/landing/testimonials";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <WhyChooseUs />
      <CtaSplit />
      <Testimonials />
      <Footer />
    </main>
  );
}
