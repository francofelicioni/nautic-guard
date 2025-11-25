'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          {t.whyUs.title}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t.whyUs.subtitle}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {t.whyUs.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-blue-900 mr-3 flex-shrink-0 mt-0.5"
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
                <span className="text-gray-800 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <a
            href="#services"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            {t.nav.services.toUpperCase()}
          </a>
        </div>
      </div>
    </section>
  );
}

