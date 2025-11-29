import { notFound } from 'next/navigation';
import { getBlogPost } from '@/lib/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import BlogContent from './BlogContent';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const postId = parseInt(id, 10);
  const post = getBlogPost(postId);

  if (!post) {
    return {
      title: 'Artículo no encontrado | Nautic Guard',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nauticguard.com';
  const postUrl = `${siteUrl}/blog/${postId}`;

  return {
    title: post.title.es,
    description: post.excerpt.es,
    keywords: [
      post.category.es.toLowerCase(),
      'mantenimiento embarcaciones',
      'barcos Mallorca',
      'servicios náuticos',
      post.title.es,
    ],
    authors: [{ name: 'Nautic Guard' }],
    openGraph: {
      title: post.title.es,
      description: post.excerpt.es,
      type: 'article',
      url: postUrl,
      publishedTime: post.date,
      authors: ['Nautic Guard'],
      tags: [post.category.es],
      images: [
        {
          url: post.image || '/og-image.jpg',
          alt: post.title.es,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.es,
      description: post.excerpt.es,
      images: [post.image || '/og-image.jpg'],
    },
    alternates: {
      canonical: postUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const postId = parseInt(id, 10);
  
  // Validate that the ID is a valid number
  if (isNaN(postId)) {
    notFound();
  }

  const post = getBlogPost(postId);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nauticguard.com';
  const postUrl = `${siteUrl}/blog/${postId}`;

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.es,
    description: post.excerpt.es,
    image: post.image || `${siteUrl}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Nautic Guard',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nautic Guard',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    articleSection: post.category.es,
    keywords: [
      post.category.es,
      'mantenimiento embarcaciones',
      'barcos Mallorca',
      'servicios náuticos',
    ],
  };

  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <BlogContent post={post} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

