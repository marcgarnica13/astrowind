import { sanityClient, getPageContent } from '../../lib/sanity';

export async function GET() {
  try {
    console.log('Testing Sanity connection...');
    console.log('Project ID:', process.env.SANITY_PROJECT_ID);
    console.log('Dataset:', process.env.SANITY_DATASET);
    
    // Test basic query
    const allPages = await sanityClient.fetch(`*[_type == "page"]{_id, title, pageType, language}`);
    console.log('All pages:', allPages);
    
    // Test specific page content
    const homeContent = await getPageContent('homepage', 'en');
    console.log('Homepage content:', homeContent);
    
    return new Response(JSON.stringify({
      success: true,
      allPages,
      homeContent,
      env: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        apiVersion: process.env.SANITY_API_VERSION,
      }
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Sanity test error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}