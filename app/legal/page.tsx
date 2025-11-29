import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LegalContent from './LegalContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Nautic Guard. Términos y condiciones de uso del sitio web y servicios.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Aviso Legal | Nautic Guard',
    description: 'Aviso legal de Nautic Guard. Términos y condiciones de uso del sitio web y servicios.',
    type: 'website',
  },
};

export default function LegalPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <LegalContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

