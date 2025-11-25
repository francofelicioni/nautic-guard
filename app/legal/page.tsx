import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LegalContent from './LegalContent';

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

