import { Footer } from "@/components/site/Footer";
import { HeroSection } from "@/components/site/HeroSection";
import { HowItWorksSection } from "@/components/site/HowItWorksSection";
import { Navbar } from "@/components/site/Navbar";
import { RecordSection } from "@/components/site/RecordSection";
import { MemorySection } from "@/components/site/MemorySection";
import { TabbedSection } from "@/components/site/TabbedSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CalendarSection } from "@/components/site/CalendarSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <RecordSection />
      <MemorySection />
      <CalendarSection />
      <TabbedSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
