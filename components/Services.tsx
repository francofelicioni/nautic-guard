'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'storage',
      icon: '🚢',
      title: t.services.storage.title,
      description: t.services.storage.description,
      link: '#storage',
    },
    {
      id: 'transport',
      icon: '🚛',
      title: t.services.transport.title,
      description: t.services.transport.description,
      link: '#transport',
    },
    {
      id: 'maintenance',
      icon: '🔧',
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      link: '#maintenance',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {t.services.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <a
                href={service.link}
                className="text-blue-900 font-medium mt-4 inline-block hover:underline"
              >
                {t.nav.services} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

