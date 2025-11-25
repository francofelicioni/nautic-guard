// Blog posts data shared between components
export interface BlogPost {
  id: number;
  title: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  content: {
    es: string[];
    en: string[];
  };
  date: string;
  image: string;
  category: {
    es: string;
    en: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      es: '¿Cuál es la mejor manera de mantener las velas de un barco?',
      en: 'What is the best way to maintain boat sails?',
    },
    excerpt: {
      es: 'Las velas de un velero son el motor de la embarcación ya que avanza debido a la fuerza del viento. Un mantenimiento adecuado es esencial para prolongar su vida útil y garantizar un rendimiento óptimo.',
      en: 'The sails of a sailboat are the engine of the vessel as it moves forward due to wind force. Proper maintenance is essential to prolong their lifespan and ensure optimal performance.',
    },
    content: {
      es: [
        'Las velas son uno de los componentes más importantes de un velero. Su correcto mantenimiento no solo prolonga su vida útil, sino que también mejora el rendimiento de la embarcación. En este artículo, te explicamos las mejores prácticas para mantener tus velas en perfecto estado.',
        'En primer lugar, es fundamental limpiar las velas después de cada uso, especialmente si han estado expuestas al agua salada. La sal puede corroer las fibras y debilitar el material. Utiliza agua dulce y un jabón suave específico para velas.',
        'El almacenamiento correcto es crucial. Las velas deben guardarse completamente secas en un lugar fresco y seco, preferiblemente enrolladas o dobladas cuidadosamente. Evita exponerlas a la luz solar directa durante períodos prolongados.',
        'Realiza inspecciones regulares para detectar desgaste, roturas o puntos débiles. Revisa especialmente las costuras, los refuerzos y las áreas de mayor tensión. Si encuentras algún daño, es importante repararlo de inmediato para evitar que se agrave.',
        'En Nautic Guard, ofrecemos servicios profesionales de mantenimiento y reparación de velas. Nuestro equipo de expertos puede ayudarte a mantener tus velas en perfectas condiciones durante el período de invernaje.',
      ],
      en: [
        'Sails are one of the most important components of a sailboat. Their proper maintenance not only prolongs their lifespan but also improves the vessel\'s performance. In this article, we explain the best practices for keeping your sails in perfect condition.',
        'First of all, it is essential to clean the sails after each use, especially if they have been exposed to salt water. Salt can corrode the fibers and weaken the material. Use fresh water and a mild soap specifically designed for sails.',
        'Proper storage is crucial. Sails should be stored completely dry in a cool, dry place, preferably rolled or carefully folded. Avoid exposing them to direct sunlight for extended periods.',
        'Perform regular inspections to detect wear, tears, or weak points. Check especially the seams, reinforcements, and areas of higher tension. If you find any damage, it is important to repair it immediately to prevent it from worsening.',
        'At Nautic Guard, we offer professional sail maintenance and repair services. Our team of experts can help you keep your sails in perfect condition during the wintering period.',
      ],
    },
    date: '2024-01-24',
    image: '⛵',
    category: {
      es: 'Mantenimiento',
      en: 'Maintenance',
    },
  },
  {
    id: 2,
    title: {
      es: 'Tips de mantenimiento al motor antes de almacenar su barco',
      en: 'Engine maintenance tips before storing your boat',
    },
    excerpt: {
      es: 'Dar mantenimiento al motor antes de almacenar su barco en Mallorca o cualquier otro puerto es fundamental para evitar problemas cuando vuelvas a navegar. Sigue estos consejos profesionales para mantener tu motor en perfecto estado.',
      en: 'Maintaining the engine before storing your boat in Mallorca or any other port is essential to avoid problems when you return to sailing. Follow these professional tips to keep your engine in perfect condition.',
    },
    content: {
      es: [
        'El mantenimiento del motor antes del almacenamiento es una de las tareas más importantes para preservar tu embarcación. Un motor bien mantenido te ahorrará tiempo, dinero y problemas cuando vuelvas a usar tu barco.',
        'Lo primero que debes hacer es cambiar el aceite y el filtro de aceite. El aceite usado contiene ácidos y contaminantes que pueden dañar el motor durante el período de inactividad. Asegúrate de usar el tipo de aceite recomendado por el fabricante.',
        'Es crucial estabilizar el combustible. Agrega un estabilizador de combustible al tanque y llena el tanque casi completamente para evitar la condensación. Esto previene la formación de depósitos y la degradación del combustible.',
        'Desconecta la batería y guárdala en un lugar seco y fresco. Si es posible, conéctala a un cargador de mantenimiento para mantenerla cargada durante todo el período de almacenamiento.',
        'Limpia el motor a fondo, eliminando cualquier residuo de sal, grasa o suciedad. Aplica un protector contra la corrosión en las partes metálicas expuestas. Revisa las mangueras y correas en busca de signos de desgaste.',
        'En nuestras instalaciones en Palma de Mallorca, ofrecemos un servicio completo de preparación para el invernaje que incluye el mantenimiento completo del motor. Nuestros técnicos certificados se encargan de todos estos pasos para que tu embarcación esté lista cuando la necesites.',
      ],
      en: [
        'Engine maintenance before storage is one of the most important tasks to preserve your vessel. A well-maintained engine will save you time, money, and problems when you return to using your boat.',
        'The first thing you should do is change the oil and oil filter. Used oil contains acids and contaminants that can damage the engine during the inactive period. Make sure to use the type of oil recommended by the manufacturer.',
        'It is crucial to stabilize the fuel. Add a fuel stabilizer to the tank and fill the tank almost completely to prevent condensation. This prevents the formation of deposits and fuel degradation.',
        'Disconnect the battery and store it in a dry, cool place. If possible, connect it to a maintenance charger to keep it charged throughout the storage period.',
        'Thoroughly clean the engine, removing any residue of salt, grease, or dirt. Apply a corrosion protector to exposed metal parts. Check hoses and belts for signs of wear.',
        'At our facilities in Palma de Mallorca, we offer a complete wintering preparation service that includes complete engine maintenance. Our certified technicians take care of all these steps so your vessel is ready when you need it.',
      ],
    },
    date: '2024-07-15',
    image: '🔧',
    category: {
      es: 'Mantenimiento',
      en: 'Maintenance',
    },
  },
  {
    id: 3,
    title: {
      es: 'Cómo solucionar un problema en la gel coat',
      en: 'How to fix a gel coat problem',
    },
    excerpt: {
      es: 'Cuando los barcos impactan contra las rocas o incluso con la madera del muelle, pueden aparecer daños en la gel coat. Te explicamos cómo identificar y reparar estos problemas de manera profesional.',
      en: 'When boats impact against rocks or even with the dock wood, damage to the gel coat can appear. We explain how to identify and repair these problems professionally.',
    },
    content: {
      es: [
        'La gel coat es la capa exterior protectora de la fibra de vidrio que da el acabado brillante y colorido a tu embarcación. Cuando se daña, no solo afecta la apariencia, sino que también puede comprometer la integridad estructural si no se repara adecuadamente.',
        'Los daños más comunes incluyen arañazos, grietas, desconchados y golpes. Los arañazos superficiales pueden ser relativamente fáciles de reparar, mientras que las grietas más profundas requieren atención profesional.',
        'Para reparar un arañazo superficial, primero limpia el área con agua y jabón, luego lija suavemente con papel de lija de grano fino (400-600). Aplica una capa de gel coat del color correspondiente y deja secar. Finalmente, pule con compuesto de pulido para restaurar el brillo.',
        'Las grietas más profundas requieren un proceso más complejo. Primero, se debe limpiar y preparar el área, luego rellenar la grieta con resina de poliéster y gel coat. Después de curar, se lija y pule para igualar el acabado.',
        'Es importante usar el color correcto de gel coat. Si no tienes el color exacto, puedes mezclar diferentes tonos para lograr una coincidencia perfecta. En caso de duda, es mejor consultar con un profesional.',
        'En Nautic Guard, contamos con especialistas en reparación de gel coat que pueden restaurar tu embarcación a su estado original. Realizamos reparaciones desde pequeños arañazos hasta daños estructurales más serios, garantizando un acabado profesional y duradero.',
      ],
      en: [
        'Gel coat is the outer protective layer of fiberglass that gives the shiny and colorful finish to your vessel. When damaged, it not only affects appearance but can also compromise structural integrity if not properly repaired.',
        'The most common damages include scratches, cracks, chips, and impacts. Superficial scratches can be relatively easy to repair, while deeper cracks require professional attention.',
        'To repair a superficial scratch, first clean the area with water and soap, then sand gently with fine-grit sandpaper (400-600). Apply a layer of gel coat of the corresponding color and let dry. Finally, polish with polishing compound to restore shine.',
        'Deeper cracks require a more complex process. First, the area must be cleaned and prepared, then fill the crack with polyester resin and gel coat. After curing, sand and polish to match the finish.',
        'It is important to use the correct gel coat color. If you don\'t have the exact color, you can mix different shades to achieve a perfect match. When in doubt, it\'s best to consult with a professional.',
        'At Nautic Guard, we have gel coat repair specialists who can restore your vessel to its original condition. We perform repairs from small scratches to more serious structural damage, guaranteeing a professional and durable finish.',
      ],
    },
    date: '2024-08-08',
    image: '🛠️',
    category: {
      es: 'Reparación',
      en: 'Repair',
    },
  },
];

// Helper function to get a blog post by ID
export function getBlogPost(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

