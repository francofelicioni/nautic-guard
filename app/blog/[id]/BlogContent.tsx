'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { type BlogPost } from '@/lib/blogPosts';

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  const { language } = useLanguage();

  return (
    <article className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/#blog"
          className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-8 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {language === 'es' ? 'Volver al blog' : 'Back to blog'}
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{post.image}</span>
            <div className="flex-1">
              <span className="inline-block text-sm font-semibold text-blue-900 bg-blue-50 px-4 py-2 rounded-full mb-3">
                {post.category[language]}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title[language]}
              </h1>
              <p className="text-gray-500 text-lg">
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
          </div>
        </header>

        {/* Excerpt */}
        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 mb-8 rounded-r-lg">
          <p className="text-lg text-gray-700 leading-relaxed italic">
            {post.excerpt[language]}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content[language].map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'es' 
              ? '¿Necesitas ayuda profesional?' 
              : 'Need professional help?'}
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            {language === 'es'
              ? 'En Nautic Guard ofrecemos servicios especializados para el cuidado y mantenimiento de su embarcación. Contáctenos para más información.'
              : 'At Nautic Guard we offer specialized services for the care and maintenance of your vessel. Contact us for more information.'}
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {language === 'es' ? 'Contactar' : 'Contact Us'}
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/#blog"
            className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {language === 'es' ? 'Ver todos los artículos' : 'View all articles'}
          </Link>
        </div>
      </div>
    </article>
  );
}

