import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'j1zdlt7i',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // Use CDN for better performance in production
  token: process.env.SANITY_TOKEN, // Only needed for write operations
})

// Page-specific GROQ queries
export async function getHomepageContent(language: string) {
  const query = `*[_type == "homepage" && language == $language][0]{
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
  
  return await sanityClient.fetch(query, { language })
}

export async function getAboutContent(language: string) {
  const query = `*[_type == "aboutPage" && language == $language][0]{
    metadata,
    heroWidget,
    steps2Sections,
    cta
  }`
  
  return await sanityClient.fetch(query, { language })
}

export async function getServicesContent(language: string) {
  const query = `*[_type == "servicesPage" && language == $language][0]{
    metadata,
    heroWidget,
    features2,
    contentSections,
    cta
  }`
  
  return await sanityClient.fetch(query, { language })
}

export async function getContactContent(language: string) {
  const query = `*[_type == "contactPage" && language == $language][0]{
    metadata,
    heroText,
    contactUs,
    contactFeatures2
  }`
  
  return await sanityClient.fetch(query, { language })
}

export async function getPricingContent(language: string) {
  const query = `*[_type == "pricingPage" && language == $language][0]{
    metadata,
    pricingHeroText,
    pricingWidget,
    features3,
    stepsWidget,
    faqsWidget,
    cta
  }`
  
  return await sanityClient.fetch(query, { language })
}

// Legacy function for backward compatibility (will fallback to old page schema)
export async function getPageContent(pageType: string, language: string) {
  switch(pageType) {
    case 'homepage':
      return await getHomepageContent(language)
    case 'about':
      return await getAboutContent(language)
    case 'services':
      return await getServicesContent(language)
    case 'contact':
      return await getContactContent(language)
    case 'pricing':
      return await getPricingContent(language)
    default:
      // Fallback to legacy page schema
      const query = `*[_type == "page" && pageType == $pageType && language == $language][0]{
        metadata,
        hero,
        heroWidget,
        heroText,
        note,
        features,
        features2,
        features3,
        content,
        contentSections,
        steps,
        steps2Sections,
        stepsWidget,
        faqs,
        faqsWidget,
        stats,
        testimonials,
        cta,
        contactUs,
        pricingHeroText,
        pricingWidget,
        contactFeatures2
      }`
      
      return await sanityClient.fetch(query, { pageType, language })
  }
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