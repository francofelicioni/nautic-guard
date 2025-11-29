'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-200 relative overflow-hidden">
      {/* Ocean wave layers */}
      <div className="absolute inset-0 opacity-15">
        <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wave layer 1 */}
          <path d="M0,300 Q150,250 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z" fill="#1e40af" opacity="0.4"/>
          {/* Wave layer 2 */}
          <path d="M0,350 Q200,300 400,350 T800,350 T1200,350 L1200,600 L0,600 Z" fill="#0891b2" opacity="0.3"/>
          {/* Wave layer 3 */}
          <path d="M0,400 Q250,350 500,400 T1000,400 L1200,400 L1200,600 L0,600 Z" fill="#0369a1" opacity="0.5"/>
        </svg>
      </div>
      
      {/* Subtle anchor pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 20 L60 40 M40 40 L80 40 M50 40 L50 60 M70 40 L70 60 M40 60 Q40 80 50 90 Q60 100 60 100 Q60 100 70 90 Q80 80 80 60 M50 60 Q50 70 55 75 Q60 80 60 80 Q60 80 65 75 Q70 70 70 60' stroke='%2302569b' stroke-width='2' fill='none'/%3E%3Ccircle cx='60' cy='100' r='5' fill='%2302569b'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          backgroundPosition: 'center',
        }}></div>
      </div>
      
      {/* Top wave accent */}
      <div className="absolute top-0 left-0 w-full opacity-10">
        <svg className="w-full h-24" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 Q150,30 300,80 T600,80 T900,80 T1200,80 L1200,0 L0,0 Z" fill="#0ea5e9"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 text-blue-900 drop-shadow-sm">
            {t.nav.contact}
          </h2>
          
          {/* Call-to-Action Message */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 px-4">
              {language === 'es' 
                ? '¡Nos encantaría saber de ti!' 
                : "We'd love to hear from you!"}
            </p>
            <p className="text-base sm:text-lg text-gray-700 px-4 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Estamos ubicados en Port d\'Alcúdia, Islas Baleares. Contáctanos para más información.'
                : 'We are located in Port d\'Alcúdia, Balearic Islands. Contact us for more information.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Location Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-xl mr-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">
                  {language === 'es' ? 'Ubicación' : 'Location'}
                </h3>
              </div>
              <a 
                href="https://maps.app.goo.gl/xNtDdLgEy5SDfHnJA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-800 hover:text-blue-900 transition-colors group"
              >
                <p className="mb-3 text-base group-hover:underline font-medium">
                  de Alcúdia al Puerto km 1
                </p>
                <p className="mb-3 text-base group-hover:underline font-medium">
                  Port d&apos;Alcúdia, 07400
                </p>
                <p className="mb-5 text-base group-hover:underline font-medium">
                  Islas Baleares, Spain
                </p>
                <span className="inline-flex items-center text-blue-700 text-base font-semibold mt-4 group-hover:text-blue-900 transition-colors">
                  {language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-4 rounded-xl mr-4 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">
                  {language === 'es' ? 'Teléfono' : 'Phone'}
                </h3>
              </div>
              <a 
                href="tel:+34671200223" 
                className="inline-flex items-center text-gray-800 hover:text-blue-900 transition-colors text-xl font-bold group mb-3"
              >
                <span className="group-hover:underline">+34671200223</span>
                <svg className="w-6 h-6 ml-3 text-cyan-600 group-hover:text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <p className="text-gray-600 text-base mt-2 font-medium">
                {language === 'es' ? 'Haz clic para llamar' : 'Click to call'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

