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
            <p className="text-gray-400 mb-2 flex items-center gap-2">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-5-6-7-8.8-7-12A7 7 0 1112 21z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Palma de Mallorca, España
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              {/* Phone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.75A2.75 2.75 0 015.75 3h.742c.516 0 .988.296 1.196.763l1.564 3.377a1.25 1.25 0 01-.272 1.37l-1.278 1.282a15.055 15.055 0 006.58 6.58l1.282-1.278a1.25 1.25 0 011.37-.272l3.377 1.564c.467.208.763.68.763 1.196v.742A2.75 2.75 0 0118.25 21h-.5C10.132 21 3 13.868 3 5.75v-.5z" />
              </svg>
              123 456 789
            </p>
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

