import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'j1zdlt7i',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // Use CDN for better performance in production
  token: process.env.SANITY_TOKEN, // Only needed for write operations
})

// GROQ queries for content
export async function getPageContent(pageType: string, language: string) {
  const query = `*[_type == "page" && pageType == $pageType && language == $language][0]{
    metadata,
    hero,
    note,
    features,
    content,
    steps,
    faqs,
    stats,
    testimonials,
    cta
  }`
  
  return await sanityClient.fetch(query, { pageType, language })
}

export async function getAllPages(language: string) {
  const query = `*[_type == "page" && language == $language]{
    _id,
    title,
    slug,
    pageType,
    metadata
  }`
  
  return await sanityClient.fetch(query, { language })
}

// Helper function to maintain compatibility with current getEntry pattern
export async function getEntry(collection: string, id: string) {
  // Parse the old collection format: 'pages', 'en/home'
  const [language, pageType] = id.split('/')
  const content = await getPageContent(pageType === 'home' ? 'homepage' : pageType, language)
  
  // Return in the same format as Astro Content Collections
  return {
    data: content,
    id,
    collection
  }
}