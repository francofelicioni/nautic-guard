'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
          {t.whyUs.title}
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          {t.whyUs.subtitle}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-3 sm:space-y-4">
            {t.whyUs.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 mr-2 sm:mr-3 flex-shrink-0 mt-0.5"
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
                <span className="text-gray-800 text-base sm:text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

