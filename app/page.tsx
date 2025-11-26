import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Surveillance from '@/components/Surveillance';
import QuoteForm from '@/components/QuoteForm';
import Stats from '@/components/Stats';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <Stats />
        <Surveillance />
        <QuoteForm />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
