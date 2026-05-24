import { FAQSection } from "@/components/site/FAQSection";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { PricingSection } from "@/components/site/PricingSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
