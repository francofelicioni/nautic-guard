'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function LegalContent() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Aviso Legal',
      lastUpdated: 'Última actualización:',
      date: '25 de noviembre de 2024',
      sections: [
        {
          title: '1. Datos Identificativos',
          text: 'En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular del dominio web es Nautic Guard, con domicilio para estos efectos en Palma de Mallorca, España. La dirección de contacto es la que aparece en la sección de contacto de este sitio web.',
        },
        {
          title: '2. Usuarios',
          text: 'El acceso y/o uso de este portal de Nautic Guard atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.',
        },
        {
          title: '3. Uso del Portal',
          text: 'El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Nautic Guard o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.',
        },
        {
          title: '4. Protección de Datos',
          text: 'Nautic Guard cumple con las directrices de la Ley Orgánica 15/1999 de 13 de diciembre de Protección de Datos de Carácter Personal, el Real Decreto 1720/2007 de 21 de diciembre por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica y demás normativa vigente en cada momento, y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario.',
        },
        {
          title: '5. Propiedad Intelectual e Industrial',
          text: 'Nautic Guard por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Nautic Guard o bien de sus licenciantes.',
        },
        {
          title: '6. Exclusión de Garantías y Responsabilidad',
          text: 'Nautic Guard no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.',
        },
        {
          title: '7. Modificaciones',
          text: 'Nautic Guard se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.',
        },
        {
          title: '8. Enlaces',
          text: 'En el caso de que en el portal se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Nautic Guard no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Nautic Guard asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.',
        },
        {
          title: '9. Derecho de Exclusión',
          text: 'Nautic Guard se reserva el derecho de denegar o retirar el acceso al portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las Condiciones Generales de Uso.',
        },
        {
          title: '10. Generalidades',
          text: 'Nautic Guard perseguirá el incumplimiento de las presentes condiciones así como cualquier utilización indebida de su portal ejerciendo todas las acciones civiles y penales que le puedan corresponder en derecho.',
        },
        {
          title: '11. Modificación de las Presentes Condiciones y Duración',
          text: 'Nautic Guard podrá modificar en cualquier momento las condiciones aquí determinadas, siendo debidamente publicadas como aquí aparecen. La vigencia de las citadas condiciones irá en función de su exposición y estarán vigentes hasta que sean modificadas por otras debidamente publicadas.',
        },
        {
          title: '12. Ley Aplicable y Jurisdicción',
          text: 'La relación entre Nautic Guard y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Palma de Mallorca.',
        },
      ],
    },
    en: {
      title: 'Legal Notice',
      lastUpdated: 'Last updated:',
      date: 'November 25, 2024',
      sections: [
        {
          title: '1. Identifying Information',
          text: 'In compliance with the duty of information contained in article 10 of Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce, the following data is reflected: the company owner of the web domain is Nautic Guard, with address for these purposes in Palma de Mallorca, Spain. The contact address is the one that appears in the contact section of this website.',
        },
        {
          title: '2. Users',
          text: 'The access and/or use of this Nautic Guard portal attributes the condition of USER, who accepts, from said access and/or use, the General Conditions of Use reflected here. The aforementioned Conditions will be applicable regardless of the General Contracting Conditions that may be mandatory.',
        },
        {
          title: '3. Use of the Portal',
          text: 'The website provides access to a multitude of information, services, programs or data (hereinafter, "the contents") on the Internet belonging to Nautic Guard or its licensors to which the USER may have access. The USER assumes responsibility for the use of the portal. Said responsibility extends to the registration that may be necessary to access certain services or contents.',
        },
        {
          title: '4. Data Protection',
          text: 'Nautic Guard complies with the guidelines of Organic Law 15/1999 of December 13 on Protection of Personal Data, Royal Decree 1720/2007 of December 21 which approves the Regulations for the development of the Organic Law and other regulations in force at all times, and ensures the correct use and treatment of the user\'s personal data.',
        },
        {
          title: '5. Intellectual and Industrial Property',
          text: 'Nautic Guard, by itself or as assignee, is the owner of all intellectual and industrial property rights of its website, as well as the elements contained therein (by way of example, images, sound, audio, video, software or texts; trademarks or logos, color combinations, structure and design, selection of materials used, computer programs necessary for its operation, access and use, etc.), owned by Nautic Guard or its licensors.',
        },
        {
          title: '6. Exclusion of Guarantees and Liability',
          text: 'Nautic Guard is not responsible, in any case, for damages of any nature that could be caused, by way of example: errors or omissions in the contents, lack of availability of the portal or the transmission of viruses or malicious or harmful programs in the contents, despite having adopted all the necessary technological measures to avoid it.',
        },
        {
          title: '7. Modifications',
          text: 'Nautic Guard reserves the right to make without prior notice the modifications it deems appropriate in its portal, being able to change, delete or add both the contents and services provided through it and the way in which they are presented or located in its portal.',
        },
        {
          title: '8. Links',
          text: 'In the event that links or hyperlinks to other Internet sites are available on the portal, Nautic Guard will not exercise any type of control over said sites and contents. In no case will Nautic Guard assume any responsibility for the contents of any link belonging to a third-party website, nor will it guarantee the technical availability, quality, reliability, accuracy, breadth, veracity, validity and constitutionality of any material or information contained in any of said hyperlinks or other Internet sites.',
        },
        {
          title: '9. Right of Exclusion',
          text: 'Nautic Guard reserves the right to deny or withdraw access to the portal and/or the services offered without prior notice, on its own or by a third party, to those users who fail to comply with these General Conditions of Use.',
        },
        {
          title: '10. General Provisions',
          text: 'Nautic Guard will pursue the breach of these conditions as well as any improper use of its portal by exercising all civil and criminal actions that may correspond to it in law.',
        },
        {
          title: '11. Modification of These Conditions and Duration',
          text: 'Nautic Guard may modify at any time the conditions determined here, being duly published as they appear here. The validity of the aforementioned conditions will depend on their exposure and will be valid until they are modified by others duly published.',
        },
        {
          title: '12. Applicable Law and Jurisdiction',
          text: 'The relationship between Nautic Guard and the USER will be governed by current Spanish regulations and any controversy will be submitted to the Courts and tribunals of the city of Palma de Mallorca.',
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-8 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {language === 'es' ? 'Volver al inicio' : 'Back to home'}
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-gray-600">
            {currentContent.lastUpdated} {currentContent.date}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          {currentContent.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

