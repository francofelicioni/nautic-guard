'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function CookiesContent() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Política de Cookies',
      lastUpdated: 'Última actualización:',
      date: '25 de noviembre de 2024',
      sections: [
        {
          title: '1. ¿Qué son las Cookies?',
          text: 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, por lo que no tiene que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.',
        },
        {
          title: '2. Tipos de Cookies que Utilizamos',
          text: 'Utilizamos los siguientes tipos de cookies en nuestro sitio web: Cookies técnicas: son necesarias para el funcionamiento del sitio web y no pueden desactivarse. Cookies de análisis: nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando información de forma anónima. Cookies de preferencias: nos permiten recordar sus preferencias y personalizar su experiencia.',
        },
        {
          title: '3. Cookies Técnicas',
          text: 'Estas cookies son esenciales para que pueda navegar por el sitio web y utilizar sus funciones. Sin estas cookies, los servicios que ha solicitado no se pueden proporcionar. Estas cookies no recopilan información sobre usted que podría ser utilizada para marketing o recordar dónde ha estado en Internet.',
        },
        {
          title: '4. Cookies de Análisis',
          text: 'Estas cookies nos permiten contar las visitas y las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo los visitantes se mueven por el sitio. Toda la información que recopilan estas cookies es agregada y, por lo tanto, anónima.',
        },
        {
          title: '5. Cookies de Preferencias',
          text: 'Estas cookies permiten que el sitio web proporcione funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas. Si no permite estas cookies, es posible que algunos o todos estos servicios no funcionen correctamente.',
        },
        {
          title: '6. Cookies de Terceros',
          text: 'Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. No controlamos el establecimiento de estas cookies, por lo que le recomendamos que consulte los sitios web de terceros para obtener más información sobre sus cookies y cómo gestionarlas.',
        },
        {
          title: '7. Gestión de Cookies',
          text: 'Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su ordenador y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y algunos servicios y funcionalidades pueden no funcionar.',
        },
        {
          title: '8. Cómo Desactivar las Cookies',
          text: 'Puede desactivar las cookies ajustando la configuración de su navegador para rechazar las cookies. Los siguientes enlaces le proporcionan información sobre cómo hacer esto en los navegadores más comunes: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, Opera.',
        },
        {
          title: '9. Consentimiento',
          text: 'Al continuar navegando por nuestro sitio web después de ver el aviso de cookies, usted acepta nuestro uso de cookies de acuerdo con esta Política de Cookies. Si no está de acuerdo con nuestro uso de cookies, debe configurar su navegador en consecuencia o no utilizar nuestro sitio web.',
        },
        {
          title: '10. Cambios en esta Política',
          text: 'Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Le recomendamos que revise esta Política de Cookies periódicamente para mantenerse informado sobre nuestro uso de cookies.',
        },
        {
          title: '11. Más Información',
          text: 'Si desea obtener más información sobre las cookies y cómo se utilizan, puede visitar www.allaboutcookies.org o www.youronlinechoices.eu. Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos a través de la información de contacto proporcionada en este sitio web.',
        },
      ],
    },
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last updated:',
      date: 'November 25, 2024',
      sections: [
        {
          title: '1. What are Cookies?',
          text: 'Cookies are small text files that are stored on your device (computer, tablet or mobile) when you visit a website. Cookies allow the website to remember your actions and preferences over a period of time, so you don\'t have to keep re-entering them whenever you come back to the site or browse from one page to another.',
        },
        {
          title: '2. Types of Cookies We Use',
          text: 'We use the following types of cookies on our website: Technical cookies: these are necessary for the website to function and cannot be disabled. Analytics cookies: these help us understand how visitors interact with our website by collecting information anonymously. Preference cookies: these allow us to remember your preferences and personalize your experience.',
        },
        {
          title: '3. Technical Cookies',
          text: 'These cookies are essential for you to be able to navigate the website and use its features. Without these cookies, the services you have requested cannot be provided. These cookies do not collect information about you that could be used for marketing or to remember where you have been on the Internet.',
        },
        {
          title: '4. Analytics Cookies',
          text: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.',
        },
        {
          title: '5. Preference Cookies',
          text: 'These cookies allow the website to provide enhanced functionality and personalization. They may be set by us or by external providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.',
        },
        {
          title: '6. Third-Party Cookies',
          text: 'Some cookies are placed by third-party services that appear on our pages. We do not control the setting of these cookies, so we recommend that you check the third-party websites for more information about their cookies and how to manage them.',
        },
        {
          title: '7. Cookie Management',
          text: 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.',
        },
        {
          title: '8. How to Disable Cookies',
          text: 'You can disable cookies by adjusting your browser settings to refuse cookies. The following links provide information on how to do this in the most common browsers: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, Opera.',
        },
        {
          title: '9. Consent',
          text: 'By continuing to browse our website after seeing the cookie notice, you agree to our use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should set your browser accordingly or not use our website.',
        },
        {
          title: '10. Changes to this Policy',
          text: 'We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal or regulatory reasons. We recommend that you review this Cookie Policy periodically to stay informed about our use of cookies.',
        },
        {
          title: '11. More Information',
          text: 'If you would like more information about cookies and how they are used, you can visit www.allaboutcookies.org or www.youronlinechoices.eu. If you have questions about our Cookie Policy, you can contact us through the contact information provided on this website.',
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-6 sm:mb-8 font-medium transition-colors text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {language === 'es' ? 'Volver al inicio' : 'Back to home'}
        </Link>

        <header className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {currentContent.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            {currentContent.lastUpdated} {currentContent.date}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {currentContent.sections.map((section, index) => (
            <div key={index} className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

