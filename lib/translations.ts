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
    subtitle: string;
    storage: {
      title: string;
      description: string;
      features: string[];
    };
    transport: {
      title: string;
      description: string;
      features: string[];
    };
    maintenance: {
      title: string;
      description: string;
      features: string[];
    };
    nauticalManagement: {
      title: string;
      description: string;
      features: string[];
    };
    generalCheck: {
      title: string;
      description: string;
      features: string[];
    };
    electricity: {
      title: string;
      description: string;
      features: string[];
    };
    inflatables: {
      title: string;
      description: string;
      features: string[];
    };
    upholstery: {
      title: string;
      description: string;
      features: string[];
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
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales para el cuidado de su embarcación',
      storage: {
        title: 'Invernaje',
        description:
          'Tenemos diferentes opciones de almacenaje de barcos: Interior, Exterior cubierto y exterior descubierto. Todos con alta seguridad 24/7',
        features: [
          'Almacenamiento interior climatizado',
          'Almacenamiento exterior cubierto',
          'Almacenamiento exterior descubierto',
          'Vigilancia 24/7 con CCTV',
          'Hasta 50 metros de eslora',
        ],
      },
      transport: {
        title: 'Transporte Marítimo',
        description:
          'Transportamos tu barco del mar al almacén, y te lo devolvemos al puerto cuando estés listo para navegar de nuevo.',
        features: [
          'Transporte desde y hacia el puerto',
          'Equipo especializado y certificado',
          'Seguro de transporte incluido',
          'Coordinación con marinas y clubs náuticos',
          'Servicio puerta a puerta',
        ],
      },
      maintenance: {
        title: 'Mantenimiento',
        description:
          'Te dejamos tu embarcación lista para navegar. Realizamos todo tipo de mantenimiento de obra viva, obra muerta, etc.',
        features: [
          'Mantenimiento de obra viva y obra muerta',
          'Limpieza y preparación de casco',
          'Revisión de sistemas mecánicos',
          'Mantenimiento preventivo',
          'Reparaciones menores y mayores',
        ],
      },
      nauticalManagement: {
        title: 'Gestoría Náutica',
        description:
          'Gestionamos todos los trámites administrativos y legales relacionados con su embarcación.',
        features: [
          'Tramitación de documentación náutica',
          'Renovación de licencias y permisos',
          'Gestión de seguros náuticos',
          'Asesoramiento legal y fiscal',
          'Gestiones con autoridades portuarias',
        ],
      },
      generalCheck: {
        title: 'Chequeo General',
        description:
          'Revisión completa de su embarcación para asegurar que esté en perfectas condiciones.',
        features: [
          'Inspección completa de la embarcación',
          'Revisión de sistemas de seguridad',
          'Chequeo de equipos de navegación',
          'Evaluación de estado general',
          'Informe detallado de condiciones',
        ],
      },
      electricity: {
        title: 'Electricidad y Electrónica',
        description:
          'Instalación, reparación y mantenimiento de todos los sistemas eléctricos y electrónicos de su embarcación.',
        features: [
          'Instalación y reparación eléctrica',
          'Sistemas de navegación GPS',
          'Equipos de comunicación',
          'Iluminación LED y sistemas de energía',
          'Diagnóstico y reparación de averías',
        ],
      },
      inflatables: {
        title: 'Neumáticas y Auxiliares',
        description:
          'Servicio especializado para embarcaciones neumáticas y equipos auxiliares.',
        features: [
          'Reparación y mantenimiento de neumáticas',
          'Reemplazo de válvulas y parches',
          'Mantenimiento de motores auxiliares',
          'Revisión de sistemas de inflado',
          'Almacenamiento de embarcaciones auxiliares',
        ],
      },
      upholstery: {
        title: 'Tapicería y Toldos',
        description:
          'Reparación, renovación y fabricación de tapicería y toldos para su embarcación.',
        features: [
          'Tapicería de interiores y exteriores',
          'Fabricación y reparación de toldos',
          'Cortinas y cojines personalizados',
          'Materiales resistentes al agua y sol',
          'Diseño a medida según sus necesidades',
        ],
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
      title: 'Nuestras métricas nos respaldan',
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
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for your vessel care',
      storage: {
        title: 'Wintering',
        description:
          'We have different boat storage options: Interior, Covered exterior and uncovered exterior. All with high security 24/7',
        features: [
          'Climate-controlled indoor storage',
          'Covered outdoor storage',
          'Uncovered outdoor storage',
          '24/7 surveillance with CCTV',
          'Up to 50 meters in length',
        ],
      },
      transport: {
        title: 'Maritime Transport',
        description:
          'We transport your boat from the sea to the warehouse, and return it to the port when you are ready to sail again.',
        features: [
          'Transport from and to the port',
          'Specialized and certified equipment',
          'Transport insurance included',
          'Coordination with marinas and yacht clubs',
          'Door-to-door service',
        ],
      },
      maintenance: {
        title: 'Maintenance',
        description:
          'We leave your vessel ready to sail. We perform all types of maintenance of the underwater hull, topside, etc.',
        features: [
          'Underwater and topside maintenance',
          'Hull cleaning and preparation',
          'Mechanical systems review',
          'Preventive maintenance',
          'Minor and major repairs',
        ],
      },
      nauticalManagement: {
        title: 'Nautical Management',
        description:
          'We manage all administrative and legal procedures related to your vessel.',
        features: [
          'Nautical documentation processing',
          'License and permit renewals',
          'Nautical insurance management',
          'Legal and tax advice',
          'Port authority procedures',
        ],
      },
      generalCheck: {
        title: 'General Check',
        description:
          'Complete review of your vessel to ensure it is in perfect condition.',
        features: [
          'Complete vessel inspection',
          'Safety systems review',
          'Navigation equipment check',
          'General condition assessment',
          'Detailed condition report',
        ],
      },
      electricity: {
        title: 'Electricity and Electronics',
        description:
          'Installation, repair and maintenance of all electrical and electronic systems of your vessel.',
        features: [
          'Electrical installation and repair',
          'GPS navigation systems',
          'Communication equipment',
          'LED lighting and power systems',
          'Diagnostics and breakdown repair',
        ],
      },
      inflatables: {
        title: 'Inflatables and Auxiliaries',
        description:
          'Specialized service for inflatable vessels and auxiliary equipment.',
        features: [
          'Inflatable boat repair and maintenance',
          'Valve and patch replacement',
          'Auxiliary engine maintenance',
          'Inflating system review',
          'Auxiliary vessel storage',
        ],
      },
      upholstery: {
        title: 'Upholstery and Awnings',
        description:
          'Repair, renovation and manufacturing of upholstery and awnings for your vessel.',
        features: [
          'Interior and exterior upholstery',
          'Awning manufacturing and repair',
          'Custom curtains and cushions',
          'Water and sun resistant materials',
          'Custom design according to your needs',
        ],
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
      title: 'Our metrics speak for themselves',
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

