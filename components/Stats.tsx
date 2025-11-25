'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Stats() {
  const { t, language } = useLanguage();

  const stats = [
    {
      label: t.stats.transports,
      value: '500+',
      description: t.stats.transportsDesc,
    },
    {
      label: t.stats.wintered,
      value: '300+',
      description: t.stats.winteredDesc,
    },
    {
      label: t.stats.maxLength,
      value: '50m',
      description: t.stats.maxLengthDesc,
    },
    {
      label: t.stats.reviewed,
      value: '400+',
      description: t.stats.reviewedDesc,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          {t.stats.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">{stat.label}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

