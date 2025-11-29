'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nautic Guard</h3>
            <p className="text-gray-400 mb-4">
              {language === 'es'
                ? 'Servicios de invernaje de embarcaciones, mantenimiento holístico y transporte marítimo en Palma de Mallorca, España.'
                : 'Boat wintering services, holistic maintenance and maritime transport in Palma de Mallorca, Spain.'}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#storage" className="hover:text-white transition">
                  {t.nav.storage}
                </Link>
              </li>
              <li>
                <Link href="#transport" className="hover:text-white transition">
                  {t.nav.maritimeTransport}
                </Link>
              </li>
              <li>
                <Link href="#maintenance" className="hover:text-white transition">
                  {t.nav.maintenance}
                </Link>
              </li>
              <li>
                <Link href="#nautical-management" className="hover:text-white transition">
                  {t.nav.nauticalManagement}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-white transition">
                  {t.nav.whyUs}
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-white transition">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="#quote" className="hover:text-white transition">
                  {t.nav.quote}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactUs}</h4>
            <a 
              href="https://maps.app.goo.gl/xNtDdLgEy5SDfHnJA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 mb-3 flex items-start gap-2 hover:text-white transition-colors group block"
            >
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="group-hover:underline">
                de Alcúdia al Puerto km 1, Port d&apos;Alcúdia, 07400 Islas Baleares, Spain
              </span>
            </a>
            <a 
              href="tel:+34671200223" 
              className="text-gray-400 text-sm flex items-center gap-2 hover:text-white transition-colors group"
            >
              {/* Phone Icon - Improved */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="group-hover:underline">+34671200223</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nautic Guard. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <Link href="/legal" className="hover:text-white transition">
                {t.footer.legal}
              </Link>
              <Link href="/privacy" className="hover:text-white transition">
                {t.footer.privacy}
              </Link>
              <Link href="/cookies" className="hover:text-white transition">
                {t.footer.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

