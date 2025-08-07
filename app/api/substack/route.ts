import { NextResponse } from 'next/server'

export interface SubstackPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedDate: string
  readTime: string
  tags: string[]
  platform: string
  platformUrl: string
  platformIcon: string
  platformName: string
  featured: boolean
  image?: string
}

export async function GET() {
  const substackFeedUrl = 'https://aaryanmahipal0.substack.com/feed'
  
  try {
    // Fetch RSS feed
    const response = await fetch(substackFeedUrl)
    const xmlText = await response.text()
    
    // Parse RSS feed
    const posts = parseSubstackRSS(xmlText)
    
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching Substack RSS feed:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

function parseSubstackRSS(xmlText: string): SubstackPost[] {
  const posts: SubstackPost[] = []
  
  // Try different RSS item patterns
  const itemPatterns = [
    /<item>([\s\S]*?)<\/item>/g,
    /<entry>([\s\S]*?)<\/entry>/g
  ]
  
  for (const pattern of itemPatterns) {
    let match
    while ((match = pattern.exec(xmlText)) !== null) {
      const itemXml = match[1]
      
      // Try different tag names for title
      const title = extractTag(itemXml, 'title') || 
                   extractTag(itemXml, 'name') || 
                   extractTag(itemXml, 'dc:title')
      
      const description = extractTag(itemXml, 'description') || 
                         extractTag(itemXml, 'summary') || 
                         extractTag(itemXml, 'content')
      
      const link = extractTag(itemXml, 'link') || 
                  extractTag(itemXml, 'url') || 
                  extractTag(itemXml, 'id')
      
      const pubDate = extractTag(itemXml, 'pubDate') || 
                     extractTag(itemXml, 'published') || 
                     extractTag(itemXml, 'dc:date')
      
      const content = extractTag(itemXml, 'content:encoded') || 
                     extractTag(itemXml, 'content') || 
                     description
      
      if (title && link) {
        // Clean and process the title
        const cleanTitle = cleanHtml(title).trim()
        
        // Create a better excerpt from description or content
        const excerpt = cleanHtml(description || content).substring(0, 250).trim()
        const finalExcerpt = excerpt.length > 200 ? excerpt.substring(0, excerpt.lastIndexOf(' ')) + '...' : excerpt
        
        posts.push({
          id: generateId(link),
          title: cleanTitle,
          excerpt: finalExcerpt,
          content: cleanHtml(content),
          author: 'Aaryan Mahipal',
          publishedDate: parseDate(pubDate),
          readTime: calculateReadTime(content),
          tags: extractTags(cleanTitle + ' ' + content),
          platform: 'substack',
          platformUrl: link,
          platformIcon: '📧',
          platformName: 'Substack',
          featured: false,
          image: extractImage(content)
        })
      }
    }
  }
  
  // Sort by publish date (newest first)
  return posts.sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )
}

function extractTag(xml: string, tagName: string): string {
  // Handle both self-closing and regular tags
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>|<${tagName}[^>]*\\/>`)
  const match = xml.match(regex)
  if (match) {
    // If it's a self-closing tag, return empty string
    if (match[0].includes('/>')) {
      return ''
    }
    return match[1].trim()
  }
  return ''
}

function cleanHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim()
}

function parseDate(dateString: string): string {
  try {
    return new Date(dateString).toISOString().split('T')[0]
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

function calculateReadTime(content: string): string {
  const words = content.split(' ').length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

function extractTags(content: string): string[] {
  // Extract common tags from content
  const commonTags = [
    'AI', 'Technology', 'Product', 'Design', 'Development', 
    'Data', 'Machine Learning', 'Healthcare', 'Innovation',
    'Startup', 'Leadership', 'Engineering', 'Research',
    'Software', 'Business', 'Strategy', 'Analysis', 'Tools',
    'Platform', 'API', 'Cloud', 'Security', 'Testing',
    'Architecture', 'Scalability', 'Performance', 'User Experience',
    'Mobile', 'Web', 'Backend', 'Frontend', 'DevOps'
  ]
  
  const contentLower = content.toLowerCase()
  const foundTags = commonTags.filter(tag => 
    contentLower.includes(tag.toLowerCase()) ||
    contentLower.includes(tag.toLowerCase().replace(' ', ''))
  )
  
  // Also look for common patterns in titles/content
  const additionalTags = []
  if (contentLower.includes('artificial intelligence') || contentLower.includes('ai/')) {
    additionalTags.push('AI')
  }
  if (contentLower.includes('machine learning') || contentLower.includes('ml/')) {
    additionalTags.push('Machine Learning')
  }
  if (contentLower.includes('data science') || contentLower.includes('analytics')) {
    additionalTags.push('Data Science')
  }
  if (contentLower.includes('product management') || contentLower.includes('product strategy')) {
    additionalTags.push('Product Management')
  }
  
  // Combine and deduplicate
  const allTags = [...foundTags, ...additionalTags]
  const uniqueTags = [...new Set(allTags)]
  
  return uniqueTags.slice(0, 4) // Limit to 4 tags
}

function extractImage(content: string): string {
  const imgRegex = /<img[^>]+src="([^"]+)"/i
  const match = content.match(imgRegex)
  return match ? match[1] : ''
}

function generateId(url: string): string {
  return Buffer.from(url).toString('base64').substring(0, 8)
} 