'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';

export default function Blog() {
  const { language } = useLanguage();

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {language === 'es' ? 'Últimas Publicaciones' : 'Latest Posts'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Consejos profesionales y guías útiles para el cuidado de su embarcación'
              : 'Professional tips and useful guides for your vessel care'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-6xl text-center py-10 bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                {post.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category[language]}
                  </span>
                  <p className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString(
                      language === 'es' ? 'es-ES' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </p>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-900 transition-colors leading-tight">
                  {post.title[language]}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt[language]}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-900 font-semibold hover:text-blue-700 inline-flex items-center group-hover:underline transition-colors"
                >
                  {language === 'es' ? 'Leer más' : 'Read More'}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
