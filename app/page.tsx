import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Surveillance from '@/components/Surveillance';
import QuoteForm from '@/components/QuoteForm';
import Stats from '@/components/Stats';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nauticguard.com';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Servicios de invernaje de embarcaciones, mantenimiento holístico y transporte marítimo en Palma de Mallorca, España. Almacenamiento seguro 24/7, transporte y mantenimiento profesional.',
  alternates: {
    canonical: '/',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Nautic Guard',
  description: 'Servicios de invernaje de embarcaciones, mantenimiento holístico y transporte marítimo en Palma de Mallorca, España.',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  image: `${siteUrl}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Palma de Mallorca',
    addressRegion: 'Islas Baleares',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.5696',
    longitude: '2.6502',
  },
  telephone: '+34-XXX-XXX-XXX', // Update with actual phone number
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
  areaServed: {
    '@type': 'City',
    name: 'Palma de Mallorca',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Náuticos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Invernaje de Embarcaciones',
          description: 'Almacenamiento seguro 24/7 para embarcaciones hasta 50 metros de eslora',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mantenimiento de Embarcaciones',
          description: 'Mantenimiento holístico de obra viva, obra muerta y sistemas mecánicos',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Transporte Marítimo',
          description: 'Transporte de embarcaciones desde y hacia el puerto',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestoría Náutica',
          description: 'Gestión de trámites administrativos y legales relacionados con embarcaciones',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '50',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <WhyUs />
          <Stats />
          <Surveillance />
          <QuoteForm />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
