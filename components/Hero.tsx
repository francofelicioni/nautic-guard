'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.outboardnautica.com/images/guarderia-embarcaciones-sada.jpg"
          alt="Embarcaciones en guardería náutica"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-700/80"></div>
        {/* Additional overlay for depth */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg">
            {t.hero.title}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-blue-100 drop-shadow-md">
            {t.hero.subtitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-50 leading-relaxed drop-shadow-md max-w-2xl">
            {t.hero.description}
          </p>
          <Link
            href="#contact"
            className="inline-block bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            {t.hero.contactButton}
          </Link>
        </div>
      </div>     
    </section>
  );
}

