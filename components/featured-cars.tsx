import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const featuredCars = [
  {
    id: 1,
    name: 'Toyota Land Cruiser Prado',
    brand: 'Premium Series',
    price: 'KES 7,389,500',
    image: '/images/car-1.avif',
    specs: ['V8 Twin-Turbo', '450 HP'],
  },
  {
    id: 2,
    name: 'Mercedes-Benz E-Class',
    brand: 'Luxury Collection',
    price: 'KES 20,112,000',
    image: '/images/car-2.jpg',
    specs: ['Hybrid V6', '380 HP'],
  },
  {
    id: 3,
    name: 'Toyota Probox',
    brand: 'Sport Edition',
    price: 'KES 900,000',
    image: '/images/car-3.jpg',
    specs: ['V12 Engine', '620 HP'],
  },
];

export function FeaturedCars() {
  return (
    <section id="inventory" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-[10px] mb-4">
              Curated Selection
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Exceptional{' '}
              <span className="italic text-primary/80">Vehicles</span>
            </h2>
          </div>
          <Link
            href="/inventory"
            className="text-xs uppercase tracking-widest font-bold border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            Explore Full Inventory —
          </Link>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredCars.map((car) => (
            <article key={car.id} className="group flex flex-col">
              {/* Image Wrapper */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary mb-6">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      {car.brand}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {car.name}
                    </h3>
                  </div>
                  <span className="font-serif text-lg font-medium text-primary">
                    {car.price}
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-none border-foreground/10 uppercase text-[10px] tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
                >
                  View Specification
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
