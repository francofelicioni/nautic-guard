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
    };
  }

  return {
    title: `${post.title.es} | Nautic Guard Blog`,
    description: post.excerpt.es,
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

  return (
    <LanguageProvider>
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

