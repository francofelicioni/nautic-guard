'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
            {t.nav.contact}
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base px-4">
            {language === 'es'
              ? 'Estamos ubicados en Port d\'Alcúdia, Islas Baleares. Contáctanos para más información.'
              : 'We are located in Port d\'Alcúdia, Balearic Islands. Contact us for more information.'}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Location Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {language === 'es' ? 'Ubicación' : 'Location'}
                </h3>
              </div>
              <a 
                href="https://maps.app.goo.gl/ejybJxvKXPXAAxpm7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-blue-900 transition-colors group"
              >
                <p className="mb-2 group-hover:underline">
                  de Alcúdia al Puerto km 1
                </p>
                <p className="mb-2 group-hover:underline">
                  Port d&apos;Alcúdia, 07400
                </p>
                <p className="group-hover:underline">
                  Islas Baleares, Spain
                </p>
                <span className="inline-flex items-center text-blue-600 text-sm mt-3 font-medium">
                  {language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.75A2.75 2.75 0 015.75 3h.742c.516 0 .988.296 1.196.763l1.564 3.377a1.25 1.25 0 01-.272 1.37l-1.278 1.282a15.055 15.055 0 006.58 6.58l1.282-1.278a1.25 1.25 0 011.37-.272l3.377 1.564c.467.208.763.68.763 1.196v.742A2.75 2.75 0 0118.25 21h-.5C10.132 21 3 13.868 3 5.75v-.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {language === 'es' ? 'Teléfono' : 'Phone'}
                </h3>
              </div>
              <a 
                href="tel:+34671200223" 
                className="inline-flex items-center text-gray-700 hover:text-blue-900 transition-colors text-lg font-medium group"
              >
                <span className="group-hover:underline">+34671200223</span>
                <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.75A2.75 2.75 0 015.75 3h.742c.516 0 .988.296 1.196.763l1.564 3.377a1.25 1.25 0 01-.272 1.37l-1.278 1.282a15.055 15.055 0 006.58 6.58l1.282-1.278a1.25 1.25 0 011.37-.272l3.377 1.564c.467.208.763.68.763 1.196v.742A2.75 2.75 0 0118.25 21h-.5C10.132 21 3 13.868 3 5.75v-.5z" />
                </svg>
              </a>
              <p className="text-gray-500 text-sm mt-2">
                {language === 'es' ? 'Haz clic para llamar' : 'Click to call'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

