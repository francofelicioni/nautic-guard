'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function PrivacyContent() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización:',
      date: '25 de noviembre de 2024',
      sections: [
        {
          title: '1. Responsable del Tratamiento',
          text: 'El responsable del tratamiento de los datos personales es Nautic Guard, con domicilio en Palma de Mallorca, España. Puede contactar con nosotros a través de la información de contacto proporcionada en este sitio web.',
        },
        {
          title: '2. Información que Recopilamos',
          text: 'Recopilamos información que usted nos proporciona directamente, como cuando solicita un presupuesto, se pone en contacto con nosotros o utiliza nuestros servicios. Esta información puede incluir: nombre, dirección de correo electrónico, número de teléfono, información sobre su embarcación y cualquier otra información que decida compartir con nosotros.',
        },
        {
          title: '3. Finalidad del Tratamiento',
          text: 'Utilizamos su información personal para: proporcionar y mejorar nuestros servicios, responder a sus consultas y solicitudes, enviar información sobre nuestros servicios (con su consentimiento), cumplir con nuestras obligaciones legales, y proteger nuestros derechos legales.',
        },
        {
          title: '4. Base Legal',
          text: 'El tratamiento de sus datos personales se basa en: su consentimiento cuando nos proporciona información voluntariamente, la ejecución de un contrato cuando solicita nuestros servicios, el cumplimiento de obligaciones legales, y nuestros intereses legítimos en el funcionamiento de nuestro negocio.',
        },
        {
          title: '5. Conservación de Datos',
          text: 'Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados, incluyendo cualquier período de retención requerido por la ley aplicable. Cuando ya no necesitemos sus datos personales, los eliminaremos de forma segura.',
        },
        {
          title: '6. Compartir Información',
          text: 'No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias: cuando sea necesario para proporcionar nuestros servicios, cuando tengamos su consentimiento explícito, cuando sea requerido por ley, o para proteger nuestros derechos legales.',
        },
        {
          title: '7. Sus Derechos',
          text: 'Usted tiene derecho a: acceder a sus datos personales, rectificar datos inexactos, solicitar la supresión de sus datos, oponerse al tratamiento de sus datos, solicitar la limitación del tratamiento, y portabilidad de datos. Para ejercer estos derechos, puede contactarnos a través de la información de contacto proporcionada.',
        },
        {
          title: '8. Seguridad',
          text: 'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.',
        },
        {
          title: '9. Cookies',
          text: 'Nuestro sitio web utiliza cookies. Para más información sobre cómo utilizamos las cookies, consulte nuestra Política de Cookies.',
        },
        {
          title: '10. Cambios en esta Política',
          text: 'Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última actualización".',
        },
        {
          title: '11. Contacto',
          text: 'Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos sus datos personales, puede contactarnos a través de la información de contacto proporcionada en este sitio web.',
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated:',
      date: 'November 25, 2024',
      sections: [
        {
          title: '1. Data Controller',
          text: 'The controller of personal data processing is Nautic Guard, with address in Palma de Mallorca, Spain. You can contact us through the contact information provided on this website.',
        },
        {
          title: '2. Information We Collect',
          text: 'We collect information that you provide to us directly, such as when you request a quote, contact us, or use our services. This information may include: name, email address, phone number, information about your vessel, and any other information you choose to share with us.',
        },
        {
          title: '3. Purpose of Processing',
          text: 'We use your personal information to: provide and improve our services, respond to your inquiries and requests, send information about our services (with your consent), comply with our legal obligations, and protect our legal rights.',
        },
        {
          title: '4. Legal Basis',
          text: 'The processing of your personal data is based on: your consent when you voluntarily provide information to us, the performance of a contract when you request our services, compliance with legal obligations, and our legitimate interests in operating our business.',
        },
        {
          title: '5. Data Retention',
          text: 'We will retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including any retention period required by applicable law. When we no longer need your personal data, we will securely delete it.',
        },
        {
          title: '6. Sharing Information',
          text: 'We do not sell, rent, or share your personal information with third parties, except in the following circumstances: when necessary to provide our services, when we have your explicit consent, when required by law, or to protect our legal rights.',
        },
        {
          title: '7. Your Rights',
          text: 'You have the right to: access your personal data, rectify inaccurate data, request deletion of your data, object to processing of your data, request limitation of processing, and data portability. To exercise these rights, you can contact us through the contact information provided.',
        },
        {
          title: '8. Security',
          text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.',
        },
        {
          title: '9. Cookies',
          text: 'Our website uses cookies. For more information about how we use cookies, please see our Cookie Policy.',
        },
        {
          title: '10. Changes to this Policy',
          text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
        },
        {
          title: '11. Contact',
          text: 'If you have questions about this Privacy Policy or how we handle your personal data, you can contact us through the contact information provided on this website.',
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

