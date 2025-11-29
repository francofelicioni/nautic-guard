import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import CookiesContent from './CookiesContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Nautic Guard. Información sobre el uso de cookies en nuestro sitio web.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Política de Cookies | Nautic Guard',
    description: 'Política de cookies de Nautic Guard. Información sobre el uso de cookies en nuestro sitio web.',
    type: 'website',
  },
};

export default function CookiesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <CookiesContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

