// Migration script for Services pages content to Sanity
// This script extracts content from Services pages and prepares data for manual import

// English Services Page Data
const servicesEnData = {
  "_id": "services-en",
  "_type": "page",
  "title": "Services (English)",
  "pageType": "services",
  "language": "en",
  "metadata": {
    "title": "S.H. Services",
    "ignoreTitleTemplate": true
  },
  "heroWidget": {
    "title": "Find the right path for your growth.",
    "subtitle": "Everyone's path is unique. Choose the focus that fits your goals — whether you're growing as a person, building a team, or transforming an organization.",
    "image": {
      "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "alt": "AstroWind Hero Image"
    },
    "actions": [
      {
        "_key": "servicesEnAction1",
        "text": "I am an Individual or Athlete",
        "href": "#athletes"
      },
      {
        "_key": "servicesEnAction2",
        "variant": "primary",
        "text": "I am part of a Team",
        "href": "#teams"
      },
      {
        "_key": "servicesEnAction3", 
        "text": "I represent a Business or Organization",
        "href": "#organizations"
      }
    ]
  },
  "features2": {
    "columns": 3,
    "items": [
      {
        "_key": "servicesEnFeature1",
        "title": "I am an Individual or Athlete",
        "description": "I want to strengthen my mindset, boost resilience, and overcome personal or professional challenges. I'm ready to develop clarity, motivation, and sustainable inner strength.",
        "icon": "tabler:user"
      },
      {
        "_key": "servicesEnFeature2",
        "title": "I am part of a Team", 
        "description": "We want to grow stronger together — building trust, a shared vision, and a powerful team identity. We aim to communicate better, collaborate more effectively, and reach our full potential as a group.",
        "icon": "tabler:users-group"
      },
      {
        "_key": "servicesEnFeature3",
        "title": "I represent a Business or Organization",
        "description": "We are looking to empower leadership, create a healthy workplace culture, and align our people behind a shared purpose. We want sustainable growth — built on identity, connection, and performance.",
        "icon": "tabler:loader"
      }
    ]
  },
  "contentSections": [
    {
      "_key": "servicesEnContent1",
      "title": "Main Features",
      "isReversed": true,
      "isAfterContent": false,
      "items": [
        {
          "_key": "servicesEnContentItem1",
          "title": "High-Quality Designs",
          "description": "Our templates feature top-tier designs that ensure a professional and polished appearance for your projects.",
          "icon": "tabler:wand"
        },
        {
          "_key": "servicesEnContentItem2",
          "title": "Customization Tools", 
          "description": "Tailor each template to your unique needs with user-friendly customization tools that let you personalize colors, fonts, and content.",
          "icon": "tabler:settings"
        },
        {
          "_key": "servicesEnContentItem3",
          "title": "Pre-Designed Elements",
          "description": "Save time and effort with our ready-to-use elements, including graphics, icons, and layouts that enhance the visual appeal of your creations.",
          "icon": "tabler:presentation"
        },
        {
          "_key": "servicesEnContentItem4",
          "title": "Preview and Mockup Views",
          "description": "Visualize the final outcome before making any changes using our preview and mockup views, ensuring your projects meet your expectations.",
          "icon": "tabler:carousel-horizontal"
        }
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "alt": "Features Image"
      }
    },
    {
      "_key": "servicesEnContent2",
      "title": "Benefits",
      "isReversed": false,
      "isAfterContent": true,
      "items": [
        {
          "_key": "servicesEnBenefit1",
          "title": "Time Savings",
          "description": "Streamline your workflow, enabling you to create stunning materials efficiently and allocate more time to your core tasks.",
          "icon": "tabler:clock"
        },
        {
          "_key": "servicesEnBenefit2",
          "title": "Professional Appearance",
          "description": "Elevate your projects with the polished and sophisticated look that our templates provide, making a lasting impression on your audience.",
          "icon": "tabler:school"
        },
        {
          "_key": "servicesEnBenefit3",
          "title": "Cost-Efficiency",
          "description": "Benefit from cost savings by avoiding the need for custom design work, as our templates offer professional-grade designs at a fraction of the cost.",
          "icon": "tabler:coin"
        },
        {
          "_key": "servicesEnBenefit4",
          "title": "Instant Download",
          "description": "Enjoy immediate access to your chosen templates upon purchase, enabling you to begin working on your projects without delay.",
          "icon": "tabler:file-download"
        }
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "alt": "Benefits Image"
      }
    }
  ],
  "cta": {
    "title": "Get Started Today!",
    "subtitle": "Don't wait for change — create it. Let's unlock your potential together.",
    "actions": [
      {
        "_key": "servicesEnCta1",
        "variant": "primary",
        "text": "Free consultation",
        "href": "mailto:haberstock.stefanie@gmail.com",
        "target": "_blank",
        "icon": "tabler:mail"
      }
    ]
  }
};

// German Services Page Data
const servicesDeData = {
  "_id": "services-de",
  "_type": "page",
  "title": "Services (Deutsch)",
  "pageType": "services",
  "language": "de", 
  "metadata": {
    "title": "S.H. Services",
    "ignoreTitleTemplate": true
  },
  "heroWidget": {
    "title": "Finden Sie den richtigen Weg für Ihr Wachstum.",
    "subtitle": "Jeder Weg ist einzigartig. Wählen Sie den Fokus, der zu Ihren Zielen passt — ob Sie als Person wachsen, ein Team aufbauen oder eine Organisation transformieren.",
    "image": {
      "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "alt": "AstroWind Hero Bild"
    },
    "actions": [
      {
        "_key": "servicesDeAction1",
        "text": "Ich bin eine Einzelperson oder ein Athlet",
        "href": "#athletes"
      },
      {
        "_key": "servicesDeAction2",
        "variant": "primary",
        "text": "Ich bin Teil eines Teams",
        "href": "#teams"
      },
      {
        "_key": "servicesDeAction3",
        "text": "Ich vertrete ein Unternehmen oder eine Organisation", 
        "href": "#organizations"
      }
    ]
  },
  "features2": {
    "columns": 3,
    "items": [
      {
        "_key": "servicesDeFeature1",
        "title": "Ich bin eine Einzelperson oder ein Athlet",
        "description": "Ich möchte meine Denkweise stärken, Resilienz steigern und persönliche oder berufliche Herausforderungen überwinden. Ich bin bereit, Klarheit, Motivation und nachhaltige innere Stärke zu entwickeln.",
        "icon": "tabler:user"
      },
      {
        "_key": "servicesDeFeature2",
        "title": "Ich bin Teil eines Teams",
        "description": "Wir wollen gemeinsam stärker werden — Vertrauen aufbauen, eine gemeinsame Vision und eine starke Teamidentität schaffen. Wir streben danach, besser zu kommunizieren, effektiver zusammenzuarbeiten und unser volles Potenzial als Gruppe zu erreichen.",
        "icon": "tabler:users-group"
      },
      {
        "_key": "servicesDeFeature3", 
        "title": "Ich vertrete ein Unternehmen oder eine Organisation",
        "description": "Wir möchten Führung stärken, eine gesunde Arbeitsplatzkultur schaffen und unsere Mitarbeiter hinter einem gemeinsamen Zweck vereinen. Wir wollen nachhaltiges Wachstum — aufgebaut auf Identität, Verbindung und Leistung.",
        "icon": "tabler:loader"
      }
    ]
  },
  "contentSections": [
    {
      "_key": "servicesDeContent1",
      "title": "Mein Ansatz",
      "isReversed": true,
      "isAfterContent": false,
      "items": [
        {
          "_key": "servicesDeContentItem1",
          "title": "Personalisierte Strategien",
          "description": "Jede Person, jedes Team und jede Organisation ist einzigartig. Ich entwickle maßgeschneiderte Ansätze, die auf Ihre spezifischen Herausforderungen und Ziele eingehen.",
          "icon": "tabler:wand"
        },
        {
          "_key": "servicesDeContentItem2",
          "title": "Wissenschaftlich fundiert",
          "description": "Meine Methoden basieren auf aktueller Forschung in Sport- und Leistungspsychologie, kombiniert mit praktischer Erfahrung aus der Arbeit mit Elite-Athleten und Teams.",
          "icon": "tabler:settings"
        },
        {
          "_key": "servicesDeContentItem3",
          "title": "Ganzheitlicher Ansatz",
          "description": "Ich betrachte mentale, emotionale und soziale Aspekte als untrennbar verbunden. Nachhaltige Veränderung entsteht, wenn wir alle Dimensionen des menschlichen Erlebens einbeziehen.",
          "icon": "tabler:presentation"
        },
        {
          "_key": "servicesDeContentItem4",
          "title": "Langfristige Entwicklung",
          "description": "Mein Ziel ist es, Sie mit Werkzeugen und Strategien auszustatten, die über unsere Zusammenarbeit hinaus wirken. Sie werden befähigt, Ihren eigenen Weg fortzusetzen.",
          "icon": "tabler:carousel-horizontal"
        }
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "alt": "Features Image"
      }
    },
    {
      "_key": "servicesDeContent2",
      "title": "Was Sie erwarten können",
      "isReversed": false,
      "isAfterContent": true,
      "items": [
        {
          "_key": "servicesDeBenefit1",
          "title": "Verbesserte Leistung",
          "description": "Entwickeln Sie mentale Stärke und Resilienz, die es Ihnen ermöglicht, unter Druck Höchstleistungen zu erbringen und Herausforderungen mit Zuversicht zu meistern.",
          "icon": "tabler:clock"
        },
        {
          "_key": "servicesDeBenefit2",
          "title": "Stärkere Teams",
          "description": "Fördern Sie Vertrauen, Kommunikation und gemeinsame Identität, die Teams befähigen, effektiv zusammenzuarbeiten und gemeinsame Ziele zu erreichen.",
          "icon": "tabler:school"
        },
        {
          "_key": "servicesDeBenefit3",
          "title": "Nachhaltige Führung",
          "description": "Entwickeln Sie authentische Führungsqualitäten, die andere inspirieren und eine positive Kultur schaffen, in der Menschen ihr Bestes geben können.",
          "icon": "tabler:coin"
        },
        {
          "_key": "servicesDeBenefit4",
          "title": "Persönliches Wachstum",
          "description": "Gewinnen Sie Klarheit über Ihre Werte, Stärken und Ziele. Entwickeln Sie das Selbstvertrauen und die Werkzeuge, um Ihr volles Potenzial zu entfalten.",
          "icon": "tabler:file-download"
        }
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "alt": "Benefits Image"
      }
    }
  ],
  "cta": {
    "title": "Starten Sie noch heute!",
    "subtitle": "Warten Sie nicht auf Veränderung — erschaffen Sie sie. Lassen Sie uns gemeinsam Ihr Potenzial entfalten.",
    "actions": [
      {
        "_key": "servicesDeCta1",
        "variant": "primary",
        "text": "Kostenloses Beratungsgespräch",
        "href": "mailto:haberstock.stefanie@gmail.com",
        "target": "_blank",
        "icon": "tabler:mail"
      }
    ]
  }
};

// Spanish Services Page Data  
const servicesEsData = {
  "_id": "services-es",
  "_type": "page",
  "title": "Services (Español)",
  "pageType": "services",
  "language": "es",
  "metadata": {
    "title": "S.H. Services",
    "ignoreTitleTemplate": true
  },
  "heroWidget": {
    "title": "Encuentra el camino correcto para tu crecimiento.",
    "subtitle": "El camino de cada persona es único. Elige el enfoque que se adapte a tus objetivos — ya sea creciendo como persona, construyendo un equipo o transformando una organización.",
    "image": {
      "src": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "alt": "Imagen Hero de AstroWind"
    },
    "actions": [
      {
        "_key": "servicesEsAction1",
        "text": "Soy un Individuo o Atleta",
        "href": "#athletes"
      },
      {
        "_key": "servicesEsAction2",
        "variant": "primary",
        "text": "Soy parte de un Equipo",
        "href": "#teams"
      },
      {
        "_key": "servicesEsAction3",
        "text": "Represento una Empresa u Organización",
        "href": "#organizations"
      }
    ]
  },
  "features2": {
    "columns": 3,
    "items": [
      {
        "_key": "servicesEsFeature1",
        "title": "Soy un Individuo o Atleta",
        "description": "Quiero fortalecer mi mentalidad, aumentar la resiliencia y superar desafíos personales o profesionales. Estoy listo para desarrollar claridad, motivación y fuerza interior sostenible.",
        "icon": "tabler:user"
      },
      {
        "_key": "servicesEsFeature2",
        "title": "Soy parte de un Equipo",
        "description": "Queremos crecer más fuertes juntos — construyendo confianza, una visión compartida y una identidad de equipo poderosa. Buscamos comunicarnos mejor, colaborar más efectivamente y alcanzar nuestro máximo potencial como grupo.",
        "icon": "tabler:users-group"
      },
      {
        "_key": "servicesEsFeature3",
        "title": "Represento una Empresa u Organización",
        "description": "Buscamos empoderar el liderazgo, crear una cultura laboral saludable y alinear a nuestra gente detrás de un propósito compartido. Queremos un crecimiento sostenible — construido sobre identidad, conexión y rendimiento.",
        "icon": "tabler:loader"
      }
    ]
  },
  "contentSections": [
    {
      "_key": "servicesEsContent1",
      "title": "Mi Enfoque",
      "isReversed": true,
      "isAfterContent": false,
      "items": [
        {
          "_key": "servicesEsContentItem1",
          "title": "Estrategias Personalizadas",
          "description": "Cada persona, equipo y organización es única. Desarrollo enfoques a medida que se centran en sus desafíos y objetivos específicos.",
          "icon": "tabler:wand"
        },
        {
          "_key": "servicesEsContentItem2",
          "title": "Basado en Ciencia",
          "description": "Mis métodos se basan en la investigación actual en psicología del deporte y del rendimiento, combinada con experiencia práctica trabajando con atletas de élite y equipos.",
          "icon": "tabler:settings"
        },
        {
          "_key": "servicesEsContentItem3",
          "title": "Enfoque Holístico",
          "description": "Veo los aspectos mentales, emocionales y sociales como inseparablemente conectados. El cambio sostenible surge cuando incluimos todas las dimensiones de la experiencia humana.",
          "icon": "tabler:presentation"
        },
        {
          "_key": "servicesEsContentItem4",
          "title": "Desarrollo a Largo Plazo",
          "description": "Mi objetivo es equiparte con herramientas y estrategias que funcionen más allá de nuestra colaboración. Serás empoderado para continuar tu propio camino.",
          "icon": "tabler:carousel-horizontal"
        }
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "alt": "Features Image"
      }
    },
    {
      "_key": "servicesEsContent2",
      "title": "Qué Puedes Esperar",
      "isReversed": false,
      "isAfterContent": true,
      "items": [
        {
          "_key": "servicesEsBenefit1",
          "title": "Rendimiento Mejorado",
          "description": "Desarrolla fortaleza mental y resistencia que te permite rendir al máximo bajo presión y enfrentar desafíos con confianza.",
          "icon": "tabler:clock"
        },
        {
          "_key": "servicesEsBenefit2",
          "title": "Equipos Más Fuertes",
          "description": "Fomenta la confianza, comunicación e identidad compartida que capacita a los equipos para colaborar efectivamente y alcanzar objetivos comunes.",
          "icon": "tabler:school"
        },
        {
          "_key": "servicesEsBenefit3",
          "title": "Liderazgo Sostenible",
          "description": "Desarrolla cualidades de liderazgo auténticas que inspiran a otros y crean una cultura positiva donde las personas pueden dar lo mejor de sí.",
          "icon": "tabler:coin"
        },
        {
          "_key": "servicesEsBenefit4",
          "title": "Crecimiento Personal",
          "description": "Gana claridad sobre tus valores, fortalezas y objetivos. Desarrolla la confianza y las herramientas para liberar tu pleno potencial.",
          "icon": "tabler:file-download"
        }
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "alt": "Benefits Image"
      }
    }
  ],
  "cta": {
    "title": "¡Comienza Hoy!",
    "subtitle": "No esperes al cambio — créalo. Liberemos tu potencial juntos.",
    "actions": [
      {
        "_key": "servicesEsCta1",
        "variant": "primary",
        "text": "Consulta gratuita",
        "href": "mailto:haberstock.stefanie@gmail.com",
        "target": "_blank",
        "icon": "tabler:mail"
      }
    ]
  }
};

// Export all Services data for manual import to Sanity
const servicesData = [
  servicesEnData,
  servicesDeData,
  servicesEsData
];

console.log('Services pages data ready for manual import to Sanity:');
console.log(JSON.stringify(servicesData, null, 2));