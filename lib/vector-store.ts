import { HuggingFaceTransformersEmbeddings } from '@langchain/community/embeddings/huggingface_transformers'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { Document } from 'langchain/document'
import { getPersonalInfo, getAllProjects, getExperienceInfo, getSkillsInfo, getTechnicalSkillsInfo } from './data'

// This function processes your portfolio data into searchable chunks
export async function createVectorStore() {
  console.log('Creating vector store...')
  
  // Get your portfolio data
  const personalInfo = await getPersonalInfo()
  const projects = getAllProjects() // This is synchronous
  const experience = await getExperienceInfo()
  const skills = await getSkillsInfo()
  const technicalSkills = await getTechnicalSkillsInfo()
  
  // Create documents from your data
  const documents: Document[] = []
  
  // Add personal information
  if (personalInfo) {
    // Add basic info
    documents.push(new Document({
      pageContent: `Personal Information: ${personalInfo.name} is a ${personalInfo.title} based in ${personalInfo.location}. ${personalInfo.bio}`,
      metadata: { type: 'personal', section: 'basic-info' }
    }))
    

    
    // Add experience
    if (experience) {
      experience.forEach((exp, index) => {
        documents.push(new Document({
          pageContent: `Experience ${index + 1}: ${exp.title} at ${exp.company} (${exp.duration}). ${exp.description}`,
          metadata: { type: 'personal', section: 'experience', company: exp.company }
        }))
      })
    }
    
    // Add skills
    if (skills && skills.items) {
      const skillNames = skills.items.map(skill => skill.name).join(', ')
      documents.push(new Document({
        pageContent: `Skills: ${skillNames}`,
        metadata: { type: 'personal', section: 'skills' }
      }))
    }
    
    // Add technical skills
    if (technicalSkills) {
      Object.entries(technicalSkills).forEach(([category, skills]) => {
        if (Array.isArray(skills)) {
          documents.push(new Document({
            pageContent: `Technical Skills - ${category}: ${skills.join(', ')}`,
            metadata: { type: 'personal', section: 'technical-skills', category: category }
          }))
        }
      })
    }
  }
  
  // Add project information
  projects.forEach((project, index) => {
    documents.push(new Document({
      pageContent: `Project ${index + 1}: ${project.title}. ${project.description}. Technologies: ${project.technologies.join(', ')}. ${project.role || ''}`,
      metadata: { 
        type: 'project', 
        section: 'projects', 
        title: project.title,
        technologies: project.technologies,
        category: project.category
      }
    }))
  })
  
  console.log(`Created ${documents.length} documents`)
  
  // Split documents into smaller chunks for better search
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000, // Each chunk is about 1000 characters
    chunkOverlap: 200, // Overlap helps maintain context between chunks
  })
  
  const splitDocs = await textSplitter.splitDocuments(documents)
  console.log(`Split into ${splitDocs.length} chunks`)
  
      // Create embeddings (vector representations) of your text
    // This allows us to find semantically similar content
    const embeddings = new HuggingFaceTransformersEmbeddings({
      modelName: 'sentence-transformers/all-MiniLM-L6-v2', // Free, lightweight embedding model
    })
  
  // Create the vector store
  const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings)
  
  return vectorStore
}

// This function searches the vector store for relevant information
export async function searchVectorStore(query: string, vectorStore: MemoryVectorStore) {
  try {
    // Search for the most relevant documents
    const results = await vectorStore.similaritySearch(query, 3) // Get top 3 most relevant results
    
    // Combine the relevant information
    const context = results.map(doc => doc.pageContent).join('\n\n')
    
    return context
  } catch (error) {
    console.error('Error searching vector store:', error)
    return ''
  }
} 