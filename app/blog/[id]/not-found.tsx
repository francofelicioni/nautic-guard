import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import NotFoundContent from './NotFoundContent';

export default function NotFound() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <NotFoundContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

