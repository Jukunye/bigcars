import { FeaturedCars } from '@/components/featured-cars';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCars />
      <Footer />
    </main>
  );
}
