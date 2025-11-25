import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import PrivacyContent from './PrivacyContent';

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <PrivacyContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

