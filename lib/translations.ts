// Translation keys for the website
export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    home: string;
    services: string;
    storage: string;
    nauticalManagement: string;
    maintenance: string;
    maritimeTransport: string;
    generalCheck: string;
    electricity: string;
    inflatables: string;
    upholstery: string;
    quote: string;
    blog: string;
    whyUs: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    contactButton: string;
  };
  services: {
    title: string;
    storage: {
      title: string;
      description: string;
    };
    transport: {
      title: string;
      description: string;
    };
    maintenance: {
      title: string;
      description: string;
    };
  };
  whyUs: {
    title: string;
    subtitle: string;
    points: string[];
  };
  surveillance: {
    title: string;
    subtitle: string;
  };
  stats: {
    title: string;
    transports: string;
    transportsDesc: string;
    wintered: string;
    winteredDesc: string;
    maxLength: string;
    maxLengthDesc: string;
    reviewed: string;
    reviewedDesc: string;
  };
  quote: {
    title: string;
    subtitle: string;
    success: string;
  };
  footer: {
    services: string;
    company: string;
    faq: string;
    contactUs: string;
    legal: string;
    privacy: string;
    cookies: string;
    cookieSettings: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      storage: 'Almacenamiento',
      nauticalManagement: 'Gestoría Náutica',
      maintenance: 'Mantenimiento',
      maritimeTransport: 'Transporte marítimo',
      generalCheck: 'Chequeo general',
      electricity: 'Electricidad y electrónica',
      inflatables: 'Neumáticas y auxiliares',
      upholstery: 'Tapicería y toldos',
      quote: 'Presupuesto',
      blog: 'Blog',
      whyUs: '¿Por qué elegirnos?',
      contact: 'Contacto',
    },
    hero: {
      title: 'Tu embarcación, nuestra responsabilidad',
      subtitle: 'El mejor servicio para alargar la vida de su embarcación',
      description:
        'En Mallorca tenemos a su disposición nuestras amplias y modernas instalaciones para el adecuado invernaje de su embarcación ubicadas en las proximidades de la costa oeste y con fácil acceso desde las marinas y clubs náuticos de la bahía de Palma de Mallorca, Calvià y Andratx.',
      contactButton: 'CONTACTO',
    },
    services: {
      title: 'Servicios',
      storage: {
        title: 'Invernaje',
        description:
          'Tenemos diferentes opciones de almacenaje de barcos: Interior, Exterior cubierto y exterior descubierto. Todos con alta seguridad 24/7',
      },
      transport: {
        title: 'Transporte',
        description:
          'Transportamos tu barco del mar al almacén, y te lo devolvemos al puerto cuando estés listo para navegar de nuevo.',
      },
      maintenance: {
        title: 'Mantenimiento',
        description:
          'Te dejamos tu embarcación lista para navegar. Realizamos todo tipo de mantenimiento de obra viva, obra muerta, etc.',
      },
    },
    whyUs: {
      title: '¿Por qué nosotros?',
      subtitle: '',
      points: [
        'Transporte de tu embarcación a la nave.',
        'Diferentes configuraciones de almacenaje: Interior, Exterior cubierto y Exterior descubierto.',
        'Cualquier mantenimiento que tu barco necesite mientras esté invernado.',
        'Trato personal, ya que queremos clientes que siempre estén con nosotros.',
        'Invernamos cualquier tamaño de embarcación.',
      ],
    },
    surveillance: {
      title: 'Vigilancia 24/7',
      subtitle:
        'Queremos estar tranquilos al igual que lo estés tú. Por eso contamos con cámaras CCTV y alarma para que tus barcos estén protegidos con cualquiera de nuestras opciones.',
    },
    stats: {
      title: '¿Qué opinan nuestros clientes?',
      transports: 'Transportes',
      transportsDesc: 'Desde el puerto hasta el almacén para que no te preocupes de nada más que navegar',
      wintered: 'Barcos invernados',
      winteredDesc: 'Nuestros capitanes y marineros quieren contar con un equipo que repare y mantenga el barco mientras están en seco.',
      maxLength: 'Eslora máxima',
      maxLengthDesc: 'Podemos invernar en Mallorca hasta barcos de 50 metros de eslora.',
      reviewed: 'Barcos revisados',
      reviewedDesc: 'Clientes y capitanes prefieren que nos encarguemos del servicio integral de la embarcación para que esté lista para navegar.',
    },
    quote: {
      title: 'Presupuesto',
      subtitle: 'Solicita tu presupuesto personalizado',
      success: '¡Nos pondremos en contacto contigo pronto!',
    },
    footer: {
      services: 'Servicios',
      company: 'Empresa',
      faq: 'Preguntas Frequentes',
      contactUs: 'Contáctanos',
      legal: 'Aviso Legal',
      privacy: 'Política de Privacidad',
      cookies: 'Política de Cookies',
      cookieSettings: 'Configuración de Cookies',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      storage: 'Storage',
      nauticalManagement: 'Nautical Management',
      maintenance: 'Maintenance',
      maritimeTransport: 'Maritime Transport',
      generalCheck: 'General Check',
      electricity: 'Electricity and Electronics',
      inflatables: 'Inflatables and Auxiliaries',
      upholstery: 'Upholstery and Awnings',
      quote: 'Quote',
      blog: 'Blog',
      whyUs: 'Why Choose Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Your vessel, our responsibility',
      subtitle: 'The best service to extend the life of your vessel',
      description:
        'In Mallorca we have at your disposal our extensive and modern facilities for the proper wintering of your vessel located near the west coast and with easy access from the marinas and yacht clubs of the Bay of Palma de Mallorca, Calvià and Andratx.',
      contactButton: 'CONTACT',
    },
    services: {
      title: 'Services',
      storage: {
        title: 'Wintering',
        description:
          'We have different boat storage options: Interior, Covered exterior and uncovered exterior. All with high security 24/7',
      },
      transport: {
        title: 'Transport',
        description:
          'We transport your boat from the sea to the warehouse, and return it to the port when you are ready to sail again.',
      },
      maintenance: {
        title: 'Maintenance',
        description:
          'We leave your vessel ready to sail. We perform all types of maintenance of the underwater hull, topside, etc.',
      },
    },
    whyUs: {
      title: 'Why us?',
      subtitle: '',
      points: [
        'Transport of your vessel to the warehouse.',
        'Different storage configurations: Interior, Covered exterior and Uncovered exterior.',
        'Any maintenance your boat needs while wintered.',
        'Personal treatment, as we want clients who are always with us.',
        'We winter vessels of any size.',
      ],
    },
    surveillance: {
      title: '24/7 Surveillance',
      subtitle:
        'We want to be at ease just like you. That is why we have CCTV cameras and alarms so that your boats are protected with any of our options.',
    },
    stats: {
      title: 'What Our Clients Say',
      transports: 'Transports',
      transportsDesc: 'From the port to the warehouse so you don\'t have to worry about anything other than sailing',
      wintered: 'Wintered Boats',
      winteredDesc: 'Our captains and sailors want to have a team that repairs and maintains the boat while they are ashore.',
      maxLength: 'Maximum Length',
      maxLengthDesc: 'We can winter boats up to 50 meters in length in Mallorca.',
      reviewed: 'Reviewed Boats',
      reviewedDesc: 'Clients and captains prefer us to take care of the comprehensive vessel service so it\'s ready to sail.',
    },
    quote: {
      title: 'Quote',
      subtitle: 'Request your personalized quote',
      success: 'We will contact you soon!',
    },
    footer: {
      services: 'Services',
      company: 'Company',
      faq: 'Frequently Asked Questions',
      contactUs: 'Contact Us',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      cookieSettings: 'Cookie Settings',
    },
  },
};

