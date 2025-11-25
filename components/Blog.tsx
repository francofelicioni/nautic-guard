'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      es: '¿Cuál es la mejor manera de mantener las velas de un barco?',
      en: 'What is the best way to maintain boat sails?',
    },
    excerpt: {
      es: 'Las velas de un velero son el motor de la embarcación ya que avanza debido...',
      en: 'The sails of a sailboat are the engine of the vessel as it moves forward due to...',
    },
    date: '2024-01-24',
    image: '⛵',
  },
  {
    id: 2,
    title: {
      es: 'Tips de mantenimiento al motor antes de almacenar su barco',
      en: 'Engine maintenance tips before storing your boat',
    },
    excerpt: {
      es: 'Dar mantenimiento al motor antes de almacenar su barco en Mallorca o cualquier otro puerto....',
      en: 'Maintaining the engine before storing your boat in Mallorca or any other port....',
    },
    date: '2024-07-15',
    image: '🔧',
  },
  {
    id: 3,
    title: {
      es: 'Cómo solucionar un problema en la gel coat',
      en: 'How to fix a gel coat problem',
    },
    excerpt: {
      es: 'Cuando los barcos impactan contra las rocas o incluso con la madera del muelle. En...',
      en: 'When boats impact against rocks or even with the dock wood. In...',
    },
    date: '2024-08-08',
    image: '🛠️',
  },
];

export default function Blog() {
  const { t, language } = useLanguage();

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          {language === 'es' ? 'Últimas Publicaciones' : 'Latest Posts'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl text-center py-8 bg-blue-50">
                {post.image}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString(
                    language === 'es' ? 'es-ES' : 'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {post.title[language]}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt[language]}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-900 font-medium hover:underline inline-flex items-center"
                >
                  {language === 'es' ? 'Leer más' : 'Read More'}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

