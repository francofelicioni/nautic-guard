'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {t.nav.contact}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {language === 'es'
              ? 'Estamos ubicados en Palma de Mallorca, España. Contáctanos para más información.'
              : 'We are located in Palma de Mallorca, Spain. Contact us for more information.'}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                {language === 'es' ? 'Ubicación' : 'Location'}
              </h3>
              <p className="text-gray-700 mb-2">
                Palma de Mallorca
              </p>
              <p className="text-gray-700">
                España
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                {language === 'es' ? 'Información' : 'Information'}
              </h3>
              <p className="text-gray-700 mb-2">
                {language === 'es'
                  ? 'Facilidades cerca de la costa oeste'
                  : 'Facilities near the west coast'}
              </p>
              <p className="text-gray-700">
                {language === 'es'
                  ? 'Fácil acceso desde las marinas de la bahía de Palma'
                  : 'Easy access from the marinas of Palma Bay'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

