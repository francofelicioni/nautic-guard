'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="flex items-center text-xs sm:text-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">Port d&apos;Alcúdia, Islas Baleares</span>
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <span className="text-blue-200 text-xs sm:text-sm">
                {language === 'es' ? 'Vigilancia 24/7' : '24/7 Surveillance'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-lg group-hover:bg-blue-800 transition-colors flex-shrink-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 leading-tight">
                Nautic Guard
              </span>
              <span className="text-[10px] sm:text-xs text-gray-600 font-medium uppercase tracking-wider hidden sm:block">
                {language === 'es' ? 'Protección Náutica' : 'Nautical Protection'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all font-medium text-base"
            >
              {t.nav.home}
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all font-medium text-base flex items-center">
                {t.nav.services}
                <svg className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                  <Link href="/#storage" className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {t.nav.storage}
                  </Link>
                  <Link href="/#transport" className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {t.nav.maritimeTransport}
                  </Link>
                  <Link href="/#maintenance" className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {t.nav.maintenance}
                  </Link>
                  <Link href="/#nautical-management" className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {t.nav.nauticalManagement}
                  </Link>
                  <Link href="/#general-check" className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {t.nav.generalCheck}
                  </Link>
                  <Link href="/#electricity" className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {t.nav.electricity}
                  </Link>
                  <Link href="/#inflatables" className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {t.nav.inflatables}
                  </Link>
                  <Link href="/#upholstery" className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {t.nav.upholstery}
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/#quote" 
              className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all font-medium text-base"
            >
              {t.nav.quote}
            </Link>
            <Link 
              href="/#blog" 
              className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all font-medium text-base"
            >
              {t.nav.blog}
            </Link>
            <Link 
              href="/#why-us" 
              className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all font-medium text-base"
            >
              {t.nav.whyUs}
            </Link>
            <Link 
              href="/#contact" 
              className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all font-medium text-base"
            >
              {t.nav.contact}
            </Link>

            {/* Language Switcher */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all font-semibold text-sm uppercase tracking-wide"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200 mt-2">
            <div className="pt-4 space-y-1">
              <Link 
                href="/" 
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              
              <div className="px-4 py-3">
                <button 
                  className="w-full text-left text-gray-700 font-medium flex items-center justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  {t.nav.services}
                  <svg className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link href="/#storage" className="block py-2 text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                      {t.nav.storage}
                    </Link>
                    <Link href="/#transport" className="block py-2 text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                      {t.nav.maritimeTransport}
                    </Link>
                    <Link href="/#maintenance" className="block py-2 text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                      {t.nav.maintenance}
                    </Link>
                    <Link href="/#nautical-management" className="block py-2 text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                      {t.nav.nauticalManagement}
                    </Link>
                    <Link href="/#general-check" className="block py-2 text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                      {t.nav.generalCheck}
                    </Link>
                    <Link href="/#electricity" className="block py-2 text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                      {t.nav.electricity}
                    </Link>
                    <Link href="/#inflatables" className="block py-2 text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                      {t.nav.inflatables}
                    </Link>
                    <Link href="/#upholstery" className="block py-2 text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                      {t.nav.upholstery}
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/#quote" 
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.quote}
              </Link>
              <Link 
                href="/#blog" 
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.blog}
              </Link>
              <Link 
                href="/#why-us" 
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.whyUs}
              </Link>
              <Link 
                href="/#contact" 
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
              
              <div className="pt-4 border-t border-gray-200 mt-4 px-4">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all font-semibold text-sm uppercase tracking-wide text-center"
                >
                  {language === 'es' ? 'English (EN)' : 'Español (ES)'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

