'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function NotFoundContent() {
  const { language } = useLanguage();

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          {language === 'es' ? 'Artículo no encontrado' : 'Article not found'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === 'es'
            ? 'Lo sentimos, el artículo que buscas no existe o ha sido eliminado.'
            : 'Sorry, the article you are looking for does not exist or has been removed.'}
        </p>
        <Link
          href="/#blog"
          className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          {language === 'es' ? 'Volver al blog' : 'Back to blog'}
        </Link>
      </div>
    </div>
  );
}

