'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Surveillance() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          {t.surveillance.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed px-2">
          {t.surveillance.subtitle}
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            <span className="text-sm sm:text-base">CCTV</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base">Alarm System</span>
          </div>
        </div>
      </div>
    </section>
  );
}

