import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'
import { createVectorStore, searchVectorStore } from '@/lib/vector-store'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // Get the user's latest message
    const userMessage = messages[messages.length - 1]
    
    // Create vector store for RAG
    const vectorStore = await createVectorStore()
    
    // Search for relevant context based on user's query
    const relevantContext = await searchVectorStore(userMessage.content, vectorStore)
    
    console.log('User query:', userMessage.content)
    console.log('Retrieved context:', relevantContext)
    
    // Create dynamic system message with retrieved context
    const systemMessage = {
      role: 'system' as const,
      content: `You are Aaryan Mahipal's AI assistant. Use the following context about Aaryan to answer questions accurately and helpfully:

${relevantContext}

Your role is to:
- Help visitors navigate Aaryan's portfolio website
- Answer questions about his background, skills, and projects using the context above
- Provide specific, accurate information about his work experience and education
- Guide users to relevant sections of the website
- Be helpful, professional, and knowledgeable about Aaryan's work

If the context doesn't contain information about what the user is asking, politely let them know and suggest they check the relevant section of the website. Keep responses conversational and informative.`
    }

    // Prepare messages for Groq (include system message)
    const groqMessages = [systemMessage, ...messages]

    const completion = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || 'llama3-8b-8192',
      messages: groqMessages,
      max_tokens: parseInt(process.env.GROQ_MAX_TOKENS || '1000'),
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content

    if (!response) {
      return NextResponse.json(
        { error: 'No response from Groq AI' },
        { status: 500 }
      )
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Groq API error:', error)
    return NextResponse.json(
              { error: 'Failed to get response from Groq AI' },
      { status: 500 }
    )
  }
} 