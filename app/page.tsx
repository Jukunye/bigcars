'use client';
import Image from 'next/image';

export default function Home() {
  // Sample car data to showcase
  const featuredCars = [
    {
      id: 1,
      name: 'Porsche 911 Carrera',
      price: '2,149,900 Ksh',
      image:
        'https://images.unsplash.com/photo-1503376780352-7e669f7b1883?w=400&h=300&fit=crop',
      year: '2024',
    },
    {
      id: 2,
      name: 'Mercedes-Benz E-Class',
      price: '600,250 Ksh',
      image:
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      year: '2024',
    },
    {
      id: 3,
      name: 'BMW M4 Competition',
      price: '8,455,300 Ksh',
      image:
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop',
      year: '2024',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-800 dark:to-yellow-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Bigcar Motors</h1>
          <p className="text-amber-100 dark:text-amber-200 mt-2">
            Premium Car Sales Platform - Development In Progress
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Development Status Banner */}
        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-12 rounded-r-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <span className="font-medium">Project Status:</span> Development
                has started! Building your premium car selling platform with
                modern features.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Cars Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {car.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    {car.year}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-400">
                      {car.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all shadow-md hover:shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              ✅ Completed Features
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2 text-amber-500">✓</span> Project setup and
                configuration
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-amber-500">✓</span> Responsive layout
                design
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-amber-500">✓</span> Car listing
                showcase
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-amber-500">✓</span> Image
                optimization with Next.js
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              🚀 Coming Soon
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2 text-amber-500">→</span> Advanced search
                and filters
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-amber-500">→</span> Vehicle details
                pages
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-amber-500">→</span> Contact forms and
                inquiries
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-amber-500">→</span> Admin dashboard
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Website development is in progress. Check back soon for more
            features!
          </p>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Last updated: March 24, 2026
          </div>
        </div>
      </main>
    </div>
  );
}
