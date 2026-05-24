import { BlogList } from "@/components/site/BlogList";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BlogList />
      <Footer />
    </main>
  );
}
