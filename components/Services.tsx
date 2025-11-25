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
      features: t.services.storage.features,
      link: '#storage',
    },
    {
      id: 'transport',
      icon: '🚛',
      title: t.services.transport.title,
      description: t.services.transport.description,
      features: t.services.transport.features,
      link: '#transport',
    },
    {
      id: 'maintenance',
      icon: '🔧',
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      features: t.services.maintenance.features,
      link: '#maintenance',
    },
    {
      id: 'nautical-management',
      icon: '📋',
      title: t.services.nauticalManagement.title,
      description: t.services.nauticalManagement.description,
      features: t.services.nauticalManagement.features,
      link: '#nautical-management',
    },
    {
      id: 'general-check',
      icon: '✅',
      title: t.services.generalCheck.title,
      description: t.services.generalCheck.description,
      features: t.services.generalCheck.features,
      link: '#general-check',
    },
    {
      id: 'electricity',
      icon: '⚡',
      title: t.services.electricity.title,
      description: t.services.electricity.description,
      features: t.services.electricity.features,
      link: '#electricity',
    },
    {
      id: 'inflatables',
      icon: '🛶',
      title: t.services.inflatables.title,
      description: t.services.inflatables.description,
      features: t.services.inflatables.features,
      link: '#inflatables',
    },
    {
      id: 'upholstery',
      icon: '🪑',
      title: t.services.upholstery.title,
      description: t.services.upholstery.description,
      features: t.services.upholstery.features,
      link: '#upholstery',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={service.link}
                className="text-blue-900 font-semibold text-sm inline-flex items-center hover:text-blue-700 transition-colors group-hover:underline"
              >
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#quote"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t.nav.quote}
          </a>
        </div>
      </div>
    </section>
  );
}

