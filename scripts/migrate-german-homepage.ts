import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'j1zdlt7i',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false
})

const germanHomepageData = {
  _type: 'page',
  title: 'Homepage (Deutsch)',
  pageType: 'homepage',
  language: 'de',
  
  metadata: {
    title: 'Steffi Haberstock',
    ignoreTitleTemplate: true
  },
  
  hero: {
    title: 'Geist stärken. Teams entwickeln. Führung transformieren.',
    tagline: 'Lass uns reden.',
    image: {
      src: 'https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      alt: 'Schritte Bild'
    },
    actions: [
      {
        _key: 'deutschAction1',
        variant: 'primary',
        text: 'Kostenloses Beratungsgespräch',
        href: 'mailto:haberstock.stefanie@gmail.com'
      },
      {
        _key: 'deutschAction2',
        text: 'Meine Leistungen entdecken',
        href: '#features'
      }
    ]
  },
  
  note: {
    title: 'Wo menschliche Verbindung auf Höchstleistung trifft',
    subtitle: 'Meine Leistungen entdecken'
  },
  
  features: {
    title: 'Was Sie bekommen',
    subtitle: 'Maßgeschneiderte Lösungen, wissenschaftlich fundiert und für reale Herausforderungen entwickelt.',
    items: [
      {
        _key: 'deutschFeature1',
        title: 'Psychologische Expertise',
        description: 'Basierend auf Sportpsychologie und Führungswissenschaft biete ich evidenzbasierte Methoden zur Stärkung von Resilienz, Leistung und Wohlbefinden.',
        icon: 'tabler:brain'
      },
      {
        _key: 'deutschFeature2',
        title: 'Ganzheitlicher Ansatz',
        description: 'Geist, Körper und Umgebung sind tief miteinander verbunden — meine biopsychosozialen Methoden schaffen Balance und langfristige Wirksamkeit.',
        icon: 'tabler:broadcast'
      },
      {
        _key: 'deutschFeature3',
        title: 'Innovative Ansätze aus dem Hochleistungssport',
        description: 'Ich bringe erprobte Strategien aus dem Spitzensport in die Geschäftswelt — wo Druck, Leistung und Gruppendynamik an ihre Grenzen getrieben werden.',
        icon: 'tabler:exchange'
      },
      {
        _key: 'deutschFeature4',
        title: 'Menschenzentrierte Philosophie',
        description: 'Ich sehe den Menschen hinter der Rolle — jedes Projekt beginnt mit Respekt, Empathie und dem Engagement für echte persönliche und kollektive Entwicklung.',
        icon: 'tabler:user-circle'
      },
      {
        _key: 'deutschFeature5',
        title: 'Strategischer Wachstumsfokus',
        description: 'Ob Persönlichkeitsentwicklung, Teamdynamik oder Unternehmensgesundheit — ich konzentriere mich auf sinnvolles, messbares und nachhaltiges Wachstum.',
        icon: 'tabler:rocket'
      },
      {
        _key: 'deutschFeature6',
        title: 'Forschungsbasierte Praktiken',
        description: 'Laufende Forschung zu sozialer Identität und Führung sorgt dafür, dass meine Arbeit sowohl hochmodern als auch tiefgreifend fundiert ist.',
        icon: 'tabler:bulb'
      }
    ]
  },
  
  content: [
    {
      _key: 'deutschContent1',
      title: 'Mit wem ich arbeite',
      isReversed: true,
      items: [
        {
          _key: 'deutschContentItem1',
          title: 'Einzelpersonen & Athleten',
          description: 'Mentale Stärke stärken, Stress bewältigen, persönliche und sportliche Herausforderungen meistern und über Grenzen hinauswachsen.',
          icon: 'tabler:user'
        },
        {
          _key: 'deutschContentItem2',
          title: 'Teams',
          description: 'Teamidentität aufbauen, Zusammenhalt stärken, Kommunikation und Leistung verbessern.',
          icon: 'tabler:users-group'
        },
        {
          _key: 'deutschContentItem3',
          title: 'Unternehmen',
          description: 'Unternehmenskultur gestalten, Führung fördern und Mitarbeiterengagement durch identitätsgetriebene Beratung verbessern.',
          icon: 'tabler:building'
        }
      ],
      image: {
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: 'Farbenfrohes Bild'
      }
    }
  ],
  
  steps: {
    title: 'Wie wir zusammenarbeiten',
    subtitle: 'Wir kombinieren hochmoderne Wissenschaft mit praktischen Werkzeugen für reale Herausforderungen.',
    items: [
      {
        _key: 'deutschStep1',
        title: 'Schritt 1: Kostenloses Erstgespräch',
        description: 'Beginnen Sie mit einem kostenlosen, unverbindlichen Gespräch — online oder persönlich. Wir lernen uns kennen, klären Ihre Ziele und Herausforderungen und prüfen, ob mein Ansatz zu Ihren Bedürfnissen passt.',
        icon: 'tabler:message-circle-question'
      },
      {
        _key: 'deutschStep2',
        title: 'Schritt 2: Individuelles Konzept',
        description: 'Basierend auf Ihrer Situation und Ihren Zielen erstelle ich einen maßgeschneiderten Plan — sei es Mentaltraining, Führungsentwicklung, Teamidentität oder ganzheitliches Wohlbefinden.',
        icon: 'tabler:adjustments'
      },
      {
        _key: 'deutschStep3',
        title: 'Schritt 3: Gemeinsame Arbeitsphase',
        description: 'In regelmäßigen Sitzungen oder Workshops setzen wir die Strategien in die Praxis um. Sie erhalten praktische Werkzeuge, Feedback und Reflexionsmethoden für nachhaltiges Wachstum.',
        icon: 'tabler:brand-asana'
      },
      {
        _key: 'deutschStep4',
        title: 'Schritt 4: Eigenständige Umsetzung',
        description: 'Mein Ziel ist es, Sie (oder Ihr Team) selbstständig zu machen. Ich statte Sie mit den Fähigkeiten und Strategien aus, die Sie brauchen, um auch nach unserer Zusammenarbeit erfolgreich zu sein.',
        icon: 'tabler:target-arrow'
      },
      {
        _key: 'deutschStep5',
        title: 'Fertig!',
        description: '',
        icon: 'tabler:check'
      }
    ]
  },
  
  cta: {
    title: 'Starten Sie noch heute!',
    subtitle: 'Warten Sie nicht auf Veränderung — gestalten Sie sie. Lassen Sie uns gemeinsam Ihr Potenzial entfalten.',
    actions: [
      {
        _key: 'deutschCTA1',
        variant: 'primary',
        text: 'Kostenloses Beratungsgespräch',
        href: 'mailto:haberstock.stefanie@gmail.com',
        target: '_blank',
        icon: 'tabler:mail'
      }
    ]
  }
}

async function migrateGermanHomepage() {
  try {
    console.log('🇩🇪 Migrating German homepage content to Sanity...')
    
    // Create or update the German homepage document
    const result = await client.createOrReplace({
      _id: 'homepage-de',
      ...germanHomepageData
    })
    
    console.log('✅ German homepage content migrated successfully!')
    console.log(`Document ID: ${result._id}`)
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Auto-run if this is the main module
migrateGermanHomepage()

export { migrateGermanHomepage }