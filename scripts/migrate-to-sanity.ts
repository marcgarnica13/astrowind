import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// Sanity client for writing data
const sanityClient = createClient({
  projectId: 'j1zdlt7i',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need a write token for this
})

interface ContentData {
  metadata?: any
  hero?: any
  note?: any
  features?: any
  content?: any[]
  steps?: any
  faqs?: any
  stats?: any
  testimonials?: any
  cta?: any
}

async function migrateContent() {
  console.log('🚀 Starting content migration from Astro Content Collections to Sanity...')
  
  const contentDir = path.join(process.cwd(), 'src', 'content', 'pages')
  const languages = ['en', 'de', 'es']
  
  for (const language of languages) {
    const langDir = path.join(contentDir, language)
    
    if (!fs.existsSync(langDir)) {
      console.log(`⚠️  Directory not found: ${langDir}`)
      continue
    }
    
    console.log(`\n📁 Processing ${language.toUpperCase()} content...`)
    
    // Read home.json for each language
    const homeFile = path.join(langDir, 'home.json')
    
    if (fs.existsSync(homeFile)) {
      try {
        const homeContent: ContentData = JSON.parse(fs.readFileSync(homeFile, 'utf-8'))
        
        // Create Sanity document for homepage
        const sanityDoc = {
          _type: 'page',
          title: `Homepage (${language.toUpperCase()})`,
          pageType: 'homepage',
          language: language,
          slug: {
            _type: 'slug',
            current: `${language}/homepage`
          },
          
          // Migrate all sections
          metadata: homeContent.metadata,
          hero: homeContent.hero,
          note: homeContent.note,
          features: homeContent.features,
          content: homeContent.content,
          steps: homeContent.steps,
          faqs: homeContent.faqs,
          stats: homeContent.stats,
          testimonials: homeContent.testimonials,
          cta: homeContent.cta
        }
        
        // Upload to Sanity
        const result = await sanityClient.create(sanityDoc)
        console.log(`✅ Created homepage for ${language}: ${result._id}`)
        
      } catch (error) {
        console.error(`❌ Error migrating ${language} homepage:`, error)
      }
    } else {
      console.log(`⚠️  File not found: ${homeFile}`)
    }
  }
  
  console.log('\n🎉 Content migration completed!')
  console.log('Next steps:')
  console.log('1. Check your Sanity Studio to verify the content')
  console.log('2. Test the website with the new Sanity integration')
  console.log('3. Update environment variables if needed')
}

// Run migration
if (process.env.SANITY_TOKEN) {
  migrateContent().catch(console.error)
} else {
  console.error('❌ SANITY_TOKEN environment variable is required')
  console.log('Get a token from: https://sanity.io/manage/project/j1zdlt7i/api')
}