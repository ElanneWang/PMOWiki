import { Footer } from "@/components/site/Footer";
import { HeroSection } from "@/components/site/HeroSection";
import { HowItWorksSection } from "@/components/site/HowItWorksSection";
import { Navbar } from "@/components/site/Navbar";
import { RecordSection } from "@/components/site/RecordSection";
import { MemorySection } from "@/components/site/MemorySection";
import { TabbedSection } from "@/components/site/TabbedSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CalendarSection } from "@/components/site/CalendarSection";
import { TakeactionSection } from "@/components/site/TakeactionSection";
import { Reveal } from "@/components/site/Reveal";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal delay={60}>
        <HowItWorksSection />
      </Reveal>
      <Reveal delay={80}>
        <RecordSection />
      </Reveal>
      <Reveal delay={80}>
        <MemorySection />
      </Reveal>
      <Reveal delay={80}>
        <CalendarSection />
      </Reveal>
      <Reveal delay={80}>
        <TakeactionSection />
      </Reveal>
      <Reveal delay={80}>
        <TabbedSection />
      </Reveal>
      <Reveal delay={80}>
        <TestimonialsSection />
      </Reveal>
      <Reveal delay={80}>
        <Footer />
      </Reveal>
    </main>
  );
}
