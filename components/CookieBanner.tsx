'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function CookieBanner() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  const content = {
    es: {
      title: 'Uso de Cookies',
      message: 'Este sitio web utiliza cookies propias y de terceros para su correcto funcionamiento y para fines analíticos. Al hacer clic en "Aceptar", acepta el uso de estas tecnologías.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      learnMore: 'Más información',
    },
    en: {
      title: 'Cookie Usage',
      message: 'This website uses its own and third-party cookies for its proper functioning and for analytical purposes. By clicking "Accept", you accept the use of these technologies.',
      accept: 'Accept',
      reject: 'Reject',
      learnMore: 'Learn more',
    },
  };

  const t = content[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-2 border-gray-300 shadow-2xl animate-slide-up">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">
                {t.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t.message}{' '}
              <Link
                href="/cookies"
                className="text-blue-900 hover:text-blue-700 underline font-medium"
              >
                {t.learnMore}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm whitespace-nowrap"
            >
              {t.reject}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-sm whitespace-nowrap shadow-md hover:shadow-lg"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

