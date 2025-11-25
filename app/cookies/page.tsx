import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import CookiesContent from './CookiesContent';

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

