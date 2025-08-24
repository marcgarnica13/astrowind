import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'j1zdlt7i',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false
})

// English About Page
const englishAboutData = {
  _type: 'page',
  title: 'About (English)',
  pageType: 'about',
  language: 'en',
  
  metadata: {
    title: 'S.H. About',
    ignoreTitleTemplate: true
  },
  
  heroWidget: {
    title: "Hi, I'm Stefanie",
    subtitle: "My passion lies in helping people grow — not just as professionals, but as individuals. I support athletes, teams, and organizations in unlocking their full potential, navigating challenges, and building lasting strength — mentally, emotionally, and socially.",
    image: {
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Caos Image'
    },
    actions: [
      {
        _key: 'aboutEN1',
        variant: 'primary',
        text: 'Free consultation',
        href: 'mailto:haberstock.stefanie@gmail.com'
      },
      {
        _key: 'aboutEN2',
        text: 'Download CV',
        icon: 'tabler:download',
        href: 'src/assets/cv.pdf',
        target: '_blank'
      }
    ]
  },
  
  steps2Sections: [
    {
      _key: 'philosophyEN',
      title: 'My Philosophy',
      subtitle: 'I believe that true development — whether personal, team-based, or organizational — is rooted in authentic connection, strategic empowerment, and a holistic view of the human experience. These core values shape every aspect of my work.',
      items: [
        {
          _key: 'philEN1',
          title: 'Human-Centered Approach',
          description: 'Behind every goal, every team, and every organization is a human being — with unique strengths, stories, and potential. I always put the individual at the center of every process, respecting personal growth as the foundation for lasting success.',
          icon: 'tabler:user-heart'
        },
        {
          _key: 'philEN2',
          title: 'Empowerment through Knowledge and Identity',
          description: 'Real growth happens when people understand themselves and their roles within a larger whole. My approach equips individuals and teams with tools to foster resilience, strengthen identity, and take ownership of their journey — making me ultimately unnecessary.',
          icon: 'tabler:bulb'
        },
        {
          _key: 'philEN3',
          title: 'Holistic and Sustainable Development',
          description: 'Mind, body, environment, and culture are deeply interconnected. I work biopsychosocially and integratively — recognizing that sustainable performance and leadership emerge when mental strength, physical health, and shared purpose come together.',
          icon: 'tabler:plant'
        }
      ],
      isReversed: false
    },
    {
      _key: 'experienceEN',
      title: 'My Experience',
      subtitle: 'Over the past years, I have built a diverse foundation of academic expertise, practical experience, and international collaboration. My work combines scientific depth with real-world understanding — always centered around human development, performance, and identity.',
      items: [
        {
          _key: 'expEN1',
          title: 'Academic and Professional Foundations',
          description: "I hold a Master's degree in Sport and Exercise Psychology, a Bachelor's degree in Sport and Health in Prevention and Therapy, and I am currently pursuing a PhD at the German Sport University Cologne. In addition, I am expanding my academic journey with a Psychology degree combined with a Business minor — building bridges between individual psychology and organizational success.",
          icon: 'tabler:school'
        },
        {
          _key: 'expEN2',
          title: 'Work with Teams and Individuals',
          description: 'I have worked with a wide range of individuals — from elite athletes and national Paralympic teams to private clients seeking personal growth and resilience. My practical experience includes mental training, identity development, and performance support in both sports and corporate environments.',
          icon: 'tabler:users-group'
        },
        {
          _key: 'expEN3',
          title: 'International Lectures and Speaking Engagements',
          description: 'I regularly deliver lectures, workshops, and keynote talks in German, English, and Spanish — sharing my expertise across borders.',
          icon: 'tabler:microphone-2'
        }
      ],
      isReversed: true,
      callToAction: {
        text: 'See more',
        href: '/services'
      }
    }
  ],
  
  cta: {
    title: 'Get Started Today!',
    subtitle: "Don't wait for change — create it. Let's unlock your potential together.",
    actions: [
      {
        _key: 'aboutCTAEN',
        variant: 'primary',
        text: 'Free consultation',
        href: 'mailto:haberstock.stefanie@gmail.com',
        target: '_blank',
        icon: 'tabler:mail'
      }
    ]
  }
}

// German About Page
const germanAboutData = {
  _type: 'page',
  title: 'About (Deutsch)',
  pageType: 'about',
  language: 'de',
  
  metadata: {
    title: 'S.H. Über mich',
    ignoreTitleTemplate: true
  },
  
  heroWidget: {
    title: "Hi, ich bin Stefanie",
    subtitle: "Meine Leidenschaft liegt darin, Menschen beim Wachsen zu helfen — nicht nur als Fachkräfte, sondern als Individuen. Ich unterstütze Athleten, Teams und Organisationen dabei, ihr volles Potenzial zu entfalten, Herausforderungen zu meistern und nachhaltige Stärke aufzubauen — mental, emotional und sozial.",
    image: {
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Chaos Bild'
    },
    actions: [
      {
        _key: 'aboutDE1',
        variant: 'primary',
        text: 'Kostenloses Beratungsgespräch',
        href: 'mailto:haberstock.stefanie@gmail.com'
      },
      {
        _key: 'aboutDE2',
        text: 'Lebenslauf herunterladen',
        icon: 'tabler:download',
        href: 'src/assets/cv.pdf',
        target: '_blank'
      }
    ]
  },
  
  steps2Sections: [
    {
      _key: 'philosophyDE',
      title: 'Meine Philosophie',
      subtitle: 'Ich glaube, dass wahre Entwicklung — sei es persönlich, teambezogen oder organisational — in authentischer Verbindung, strategischer Ermächtigung und einer ganzheitlichen Sicht der menschlichen Erfahrung verwurzelt ist. Diese Grundwerte prägen jeden Aspekt meiner Arbeit.',
      items: [
        {
          _key: 'philDE1',
          title: 'Menschenzentrierter Ansatz',
          description: 'Hinter jedem Ziel, jedem Team und jeder Organisation steht ein Mensch — mit einzigartigen Stärken, Geschichten und Potenzial. Ich stelle das Individuum immer in den Mittelpunkt jedes Prozesses und respektiere das persönliche Wachstum als Grundlage für nachhaltigen Erfolg.',
          icon: 'tabler:user-heart'
        },
        {
          _key: 'philDE2',
          title: 'Ermächtigung durch Wissen und Identität',
          description: 'Echtes Wachstum geschieht, wenn Menschen sich selbst und ihre Rollen in einem größeren Ganzen verstehen. Mein Ansatz stattet Individuen und Teams mit Werkzeugen aus, um Resilienz zu fördern, die Identität zu stärken und Verantwortung für ihre Reise zu übernehmen — wodurch ich mich letztendlich überflüssig mache.',
          icon: 'tabler:bulb'
        },
        {
          _key: 'philDE3',
          title: 'Ganzheitliche und nachhaltige Entwicklung',
          description: 'Geist, Körper, Umgebung und Kultur sind tief miteinander verbunden. Ich arbeite biopsychosozial und integrativ — in der Erkenntnis, dass nachhaltige Leistung und Führung entstehen, wenn mentale Stärke, körperliche Gesundheit und gemeinsamer Zweck zusammenkommen.',
          icon: 'tabler:plant'
        }
      ],
      isReversed: false
    },
    {
      _key: 'experienceDE',
      title: 'Meine Erfahrung',
      subtitle: 'In den letzten Jahren habe ich eine vielfältige Grundlage aus akademischer Expertise, praktischer Erfahrung und internationaler Zusammenarbeit aufgebaut. Meine Arbeit verbindet wissenschaftliche Tiefe mit praxisnahem Verständnis — immer zentriert um menschliche Entwicklung, Leistung und Identität.',
      items: [
        {
          _key: 'expDE1',
          title: 'Akademische und berufliche Grundlagen',
          description: 'Ich habe einen Master-Abschluss in Sport- und Leistungspsychologie, einen Bachelor-Abschluss in Sport und Gesundheit in Prävention und Therapie, und promoviere derzeit an der Deutschen Sporthochschule Köln. Zusätzlich erweitere ich meine akademische Laufbahn mit einem Psychologie-Studium kombiniert mit einem Business-Minor — um Brücken zwischen individueller Psychologie und organisationalem Erfolg zu schlagen.',
          icon: 'tabler:school'
        },
        {
          _key: 'expDE2',
          title: 'Arbeit mit Teams und Individuen',
          description: 'Ich habe mit einer breiten Palette von Individuen gearbeitet — von Spitzensportlern und nationalen Paralympics-Teams bis hin zu privaten Klienten, die persönliches Wachstum und Resilienz suchen. Meine praktische Erfahrung umfasst Mentaltraining, Identitätsentwicklung und Leistungsunterstützung sowohl im Sport- als auch im Unternehmensumfeld.',
          icon: 'tabler:users-group'
        },
        {
          _key: 'expDE3',
          title: 'Internationale Vorträge und Sprechertätigkeit',
          description: 'Ich halte regelmäßig Vorträge, Workshops und Keynote-Talks auf Deutsch, Englisch und Spanisch — und teile meine Expertise über Grenzen hinweg.',
          icon: 'tabler:microphone-2'
        }
      ],
      isReversed: true,
      callToAction: {
        text: 'Mehr sehen',
        href: '/de/services'
      }
    }
  ],
  
  cta: {
    title: 'Starten Sie heute!',
    subtitle: 'Warten Sie nicht auf Veränderung — gestalten Sie sie. Lassen Sie uns gemeinsam Ihr Potenzial entfalten.',
    actions: [
      {
        _key: 'aboutCTADE',
        variant: 'primary',
        text: 'Kostenloses Beratungsgespräch',
        href: 'mailto:haberstock.stefanie@gmail.com',
        target: '_blank',
        icon: 'tabler:mail'
      }
    ]
  }
}

// Spanish About Page
const spanishAboutData = {
  _type: 'page',
  title: 'About (Español)',
  pageType: 'about',
  language: 'es',
  
  metadata: {
    title: 'S.H. Acerca de',
    ignoreTitleTemplate: true
  },
  
  heroWidget: {
    title: "Hola, soy Stefanie",
    subtitle: "Mi pasión radica en ayudar a las personas a crecer — no solo como profesionales, sino como individuos. Apoyo a atletas, equipos y organizaciones para desbloquear su máximo potencial, navegar desafíos y construir una fortaleza duradera — mental, emocional y socialmente.",
    image: {
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Imagen del Caos'
    },
    actions: [
      {
        _key: 'aboutES1',
        variant: 'primary',
        text: 'Consulta gratuita',
        href: 'mailto:haberstock.stefanie@gmail.com'
      },
      {
        _key: 'aboutES2',
        text: 'Descargar CV',
        icon: 'tabler:download',
        href: 'src/assets/cv.pdf',
        target: '_blank'
      }
    ]
  },
  
  steps2Sections: [
    {
      _key: 'philosophyES',
      title: 'Mi Filosofía',
      subtitle: 'Creo que el verdadero desarrollo — ya sea personal, basado en equipos u organizacional — se basa en la conexión auténtica, el empoderamiento estratégico y una visión holística de la experiencia humana. Estos valores fundamentales dan forma a cada aspecto de mi trabajo.',
      items: [
        {
          _key: 'philES1',
          title: 'Enfoque Centrado en el Ser Humano',
          description: 'Detrás de cada objetivo, cada equipo y cada organización hay un ser humano — con fortalezas, historias y potencial únicos. Siempre pongo al individuo en el centro de cada proceso, respetando el crecimiento personal como la base del éxito duradero.',
          icon: 'tabler:user-heart'
        },
        {
          _key: 'philES2',
          title: 'Empoderamiento a través del Conocimiento y la Identidad',
          description: 'El crecimiento real sucede cuando las personas se entienden a sí mismas y sus roles dentro de un todo mayor. Mi enfoque equipa a individuos y equipos con herramientas para fomentar la resistencia, fortalecer la identidad y tomar posesión de su viaje — haciéndome finalmente innecesaria.',
          icon: 'tabler:bulb'
        },
        {
          _key: 'philES3',
          title: 'Desarrollo Holístico y Sostenible',
          description: 'La mente, el cuerpo, el entorno y la cultura están profundamente interconectados. Trabajo de forma biopsicosocial e integrativa — reconociendo que el rendimiento sostenible y el liderazgo emergen cuando la fortaleza mental, la salud física y el propósito compartido se unen.',
          icon: 'tabler:plant'
        }
      ],
      isReversed: false
    },
    {
      _key: 'experienceES',
      title: 'Mi Experiencia',
      subtitle: 'A lo largo de los años, he construido una base diversa de experiencia académica, experiencia práctica y colaboración internacional. Mi trabajo combina profundidad científica con comprensión del mundo real — siempre centrado en el desarrollo humano, el rendimiento y la identidad.',
      items: [
        {
          _key: 'expES1',
          title: 'Fundamentos Académicos y Profesionales',
          description: 'Tengo un Máster en Psicología del Deporte y el Ejercicio, una Licenciatura en Deporte y Salud en Prevención y Terapia, y actualmente estoy cursando un Doctorado en la Universidad Alemana del Deporte de Colonia. Además, estoy ampliando mi viaje académico con un grado en Psicología combinado con un minor en Negocios — construyendo puentes entre la psicología individual y el éxito organizacional.',
          icon: 'tabler:school'
        },
        {
          _key: 'expES2',
          title: 'Trabajo con Equipos e Individuos',
          description: 'He trabajado con una amplia gama de individuos — desde atletas de élite y equipos paralímpicos nacionales hasta clientes privados que buscan crecimiento personal y resistencia. Mi experiencia práctica incluye entrenamiento mental, desarrollo de identidad y apoyo al rendimiento tanto en entornos deportivos como corporativos.',
          icon: 'tabler:users-group'
        },
        {
          _key: 'expES3',
          title: 'Conferencias Internacionales y Compromisos como Oradora',
          description: 'Regularmente doy conferencias, talleres y charlas magistrales en alemán, inglés y español — compartiendo mi experiencia a través de las fronteras.',
          icon: 'tabler:microphone-2'
        }
      ],
      isReversed: true,
      callToAction: {
        text: 'Ver más',
        href: '/es/services'
      }
    }
  ],
  
  cta: {
    title: '¡Comienza hoy!',
    subtitle: 'No esperes al cambio — créalo. Desbloqueemos tu potencial juntos.',
    actions: [
      {
        _key: 'aboutCTAES',
        variant: 'primary',
        text: 'Consulta gratuita',
        href: 'mailto:haberstock.stefanie@gmail.com',
        target: '_blank',
        icon: 'tabler:mail'
      }
    ]
  }
}

async function migrateAboutPages() {
  try {
    console.log('📄 Migrating About pages content to Sanity...')
    
    // Create or update the About page documents
    const results = await Promise.all([
      client.createOrReplace({ _id: 'about-en', ...englishAboutData }),
      client.createOrReplace({ _id: 'about-de', ...germanAboutData }),
      client.createOrReplace({ _id: 'about-es', ...spanishAboutData })
    ])
    
    console.log('✅ About pages content migrated successfully!')
    results.forEach((result, index) => {
      const langs = ['EN', 'DE', 'ES']
      console.log(`${langs[index]} About page ID: ${result._id}`)
    })
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Auto-run if this is the main module
migrateAboutPages()

export { migrateAboutPages }