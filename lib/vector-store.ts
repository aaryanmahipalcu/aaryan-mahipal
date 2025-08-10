import { AI_CONTEXT, AI_CONTEXT_STRING } from './ai-context'

// Simple text similarity search using the comprehensive AI context
export function searchVectorStore(query: string, topK: number = 3): string {
  const queryLower = query.toLowerCase()
  const queryWords = queryLower.split(/\s+/).filter(word => word.length > 2)
  
  // Convert the context to searchable sections
  const searchableSections = [
    // Personal info
    `Personal: ${AI_CONTEXT.personal.name} - ${AI_CONTEXT.personal.title} in ${AI_CONTEXT.personal.location}. ${AI_CONTEXT.personal.bio}`,
    
    // Personal story (from about page)
    `Personal Story: ${AI_CONTEXT.personal.personalStory}`,
    
    // Beyond work interests (from about page)
    `Beyond Work: ${AI_CONTEXT.personal.beyondWork.join(', ')}`,
    
    // Education
    `Education: ${AI_CONTEXT.education.degree} from ${AI_CONTEXT.education.institution} (${AI_CONTEXT.education.year})`,
    
    // Experience
    ...AI_CONTEXT.experience.map(exp => 
      `Experience: ${exp.title} at ${exp.company} (${exp.period}) - ${exp.description}`
    ),
    
    // Projects
    ...AI_CONTEXT.projects.map(project => 
      `Project: ${project.title} - ${project.description}. Technologies: ${project.technologies.join(', ')}. Role: ${project.role}`
    ),
    
    // Skills
    `Skills - Core Languages: ${AI_CONTEXT.skills.coreLanguages.join(', ')}`,
    `Skills - Frameworks: ${AI_CONTEXT.skills.frameworks.join(', ')}`,
    `Skills - AI/ML: ${AI_CONTEXT.skills.aiMl.join(', ')}`,
    `Skills - Design & Engineering: ${AI_CONTEXT.skills.designEngineering.join(', ')}`,
    `Skills - Product: ${AI_CONTEXT.skills.product.join(', ')}`,
    `Skills - Technical: ${AI_CONTEXT.skills.technical.join(', ')}`,
    `Skills - Operations: ${AI_CONTEXT.skills.operations.join(', ')}`,
    `Skills - Soft Skills: ${AI_CONTEXT.skills.softSkills.join(', ')}`,
    
    // Writing/Substack posts
    ...AI_CONTEXT.writing.posts.map(post => 
      `Writing: ${post.title} - ${post.excerpt}. Published: ${post.publishedDate}. Themes: ${post.themes.join(', ')}. Content: ${post.content.substring(0, 500)}...`
    )
  ]
  
  // Score each section based on word overlap and relevance
  const scoredSections = searchableSections.map((section, index) => {
    const sectionLower = section.toLowerCase()
    let score = 0
    
    queryWords.forEach(queryWord => {
      // Exact word matches get higher scores
      if (sectionLower.includes(queryWord)) {
        score += 10
      }
      
      // Partial matches get lower scores
      if (sectionLower.includes(queryWord.substring(0, Math.max(3, queryWord.length - 1)))) {
        score += 5
      }
    })
    
    // Bonus for sections that contain more query words
    const wordMatches = queryWords.filter(word => sectionLower.includes(word)).length
    score += wordMatches * 5
    
    return { section, score, index }
  })
  
  // Sort by score and return top results
  const topSections = scoredSections
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
  
  if (topSections.length === 0) {
    return "I don't have specific information about that topic, but I can tell you about my background, projects, experience, and writing. What would you like to know?"
  }
  
  // Return the most relevant context
  return topSections.map(item => item.section).join('\n\n')
}

// Simple function to create a "vector store" (just returns the context)
export async function createVectorStore(): Promise<any> {
  // This is just a placeholder - we don't actually need a vector store anymore
  return { type: 'simple_context_search' }
} 