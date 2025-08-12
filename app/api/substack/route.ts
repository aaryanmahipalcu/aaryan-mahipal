import { NextResponse } from 'next/server'

export interface SubstackPost {
  id: string
  title: string
  excerpt: string
  preview: string
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
    // Fetch RSS feed with no-cache headers to ensure fresh data
    const response = await fetch(substackFeedUrl, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
    const xmlText = await response.text()
    
    // Parse RSS feed
    const posts = parseSubstackRSS(xmlText)
    
    // Set response headers to prevent caching
    const responseHeaders = new Headers()
    responseHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    responseHeaders.set('Pragma', 'no-cache')
    responseHeaders.set('Expires', '0')
    
    return NextResponse.json(posts, {
      headers: responseHeaders
    })
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
      
      // Try different tag names for title with better debugging
      const title = extractTag(itemXml, 'title') || 
                   extractTag(itemXml, 'name') || 
                   extractTag(itemXml, 'dc:title') ||
                   extractTag(itemXml, 'atom:title')
      
      const description = extractTag(itemXml, 'description') || 
                         extractTag(itemXml, 'summary') || 
                         extractTag(itemXml, 'content') ||
                         extractTag(itemXml, 'atom:summary')
      
      const link = extractTag(itemXml, 'link') || 
                  extractTag(itemXml, 'url') || 
                  extractTag(itemXml, 'id') ||
                  extractTag(itemXml, 'atom:link')
      
      const pubDate = extractTag(itemXml, 'pubDate') || 
                     extractTag(itemXml, 'published') || 
                     extractTag(itemXml, 'dc:date') ||
                     extractTag(itemXml, 'atom:published')
      
      const content = extractTag(itemXml, 'content:encoded') || 
                     extractTag(itemXml, 'content') || 
                     extractTag(itemXml, 'atom:content') ||
                     description
      
      if (title && link) {
        // Clean and process the title
        const cleanTitle = cleanHtml(title).trim()
        
        // Create a better excerpt from content for preview
        const cleanContent = cleanHtml(content)
        const excerpt = cleanContent.substring(0, 200).trim()
        const finalExcerpt = excerpt.length > 150 ? excerpt.substring(0, excerpt.lastIndexOf(' ')) + '...' : excerpt
        
        // Parse and validate the date
        const parsedDate = parseDate(pubDate)
        
        posts.push({
          id: generateId(link),
          title: cleanTitle,
          excerpt: cleanHtml(description), // Use description as subtitle
          preview: finalExcerpt, // Use content preview
          content: cleanHtml(content),
          author: 'Aaryan Mahipal',
          publishedDate: parsedDate,
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
  
  // Sort by publish date (newest first) and filter out invalid dates
  return posts
    .filter(post => post.publishedDate !== 'Invalid Date')
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate).getTime()
      const dateB = new Date(b.publishedDate).getTime()
      return dateB - dateA
    })
}

function extractTag(xml: string, tagName: string): string {
  // Handle CDATA sections and regular content
  const patterns = [
    // CDATA pattern: <tag><![CDATA[content]]></tag>
    new RegExp(`<${tagName}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*<\\/${tagName}>`),
    // Regular pattern: <tag>content</tag>
    new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`),
    // Self-closing pattern: <tag/>
    new RegExp(`<${tagName}[^>]*\\/>`)
  ]
  
  for (const pattern of patterns) {
    const match = xml.match(pattern)
    if (match) {
      // If it's a self-closing tag, return empty string
      if (match[0].includes('/>')) {
        return ''
      }
      return match[1]?.trim() || ''
    }
  }
  
  return ''
}

function cleanHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim()
}

function parseDate(dateString: string): string {
  try {
    // Handle various date formats
    const date = new Date(dateString)
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string: ${dateString}`)
      return new Date().toISOString().split('T')[0]
    }
    
    return date.toISOString().split('T')[0]
  } catch (error) {
    console.error(`Error parsing date: ${dateString}`, error)
    return new Date().toISOString().split('T')[0]
  }
}

function calculateReadTime(content: string): string {
  const words = content.split(' ').length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

function extractTags(content: string): string[] {
  // For now, return empty array since Substack posts don't have tags
  // This can be enhanced later if Substack adds tag support
  return []
}

function extractImages(content: string): string[] {
  const images: string[] = []
  
  // Extract all img tags
  const imgRegex = /<img[^>]+src="([^"]+)"/gi
  let match
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1]
    // Skip profile images and very small images
    if (!src.includes('profile') && !src.includes('avatar') && src.length > 10) {
      images.push(src)
    }
  }
  
  return images
}

function extractImage(content: string): string {
  const imgRegex = /<img[^>]+src="([^"]+)"/i
  const match = content.match(imgRegex)
  return match ? match[1] : ''
}

function generateId(url: string): string {
  return Buffer.from(url).toString('base64').substring(0, 8)
} 