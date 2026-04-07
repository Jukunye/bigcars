import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Luxury sports car"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4">
            Luxury Automotive Excellence
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            Discover Timeless
            <span className="block text-primary">Elegance</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Experience the pinnacle of automotive luxury. Our curated collection
            features the world&apos;s finest vehicles, each selected for
            discerning connoisseurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-foreground hover:bg-foreground/5 text-base px-8 border-amber-500"
            >
              Schedule Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
