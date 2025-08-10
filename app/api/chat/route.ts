import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'
import { searchVectorStore } from '@/lib/vector-store'

// Debug: Log environment variables
console.log('Environment variables check:')
console.log('GROQ_API_KEY:', process.env.GROQ_API_KEY ? 'SET' : 'NOT SET')
console.log('GROQ_MODEL:', process.env.GROQ_MODEL)
console.log('GROQ_MAX_TOKENS:', process.env.GROQ_MAX_TOKENS)

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    console.log('Chat API called')
    const { messages } = await request.json()
    const userMessage = messages[messages.length - 1]

    if (!userMessage?.content) {
      return NextResponse.json({ error: 'No message content provided' }, { status: 400 })
    }

    console.log('User message:', userMessage.content)

    // Get relevant context from our simplified vector store
    console.log('Calling searchVectorStore...')
    const relevantContext = searchVectorStore(userMessage.content)
    console.log('Context retrieved, length:', relevantContext.length)

    // Create the system prompt with context
    const systemPrompt = `You are Aaryan Mahipal's AI assistant. You have access to comprehensive information about Aaryan's background, experience, projects, and skills. Use this context to provide accurate, helpful responses.

Context about Aaryan:
${relevantContext}

Instructions:
- Always be helpful and professional
- Use the context above to answer questions about Aaryan
- If asked about something not in the context, say you don't have that information
- Keep responses concise but informative
- Be conversational and friendly`

    console.log('System prompt created, calling Groq...')

    // Prepare messages for Groq
    const groqMessages = [
      { role: 'system', content: systemPrompt },
      ...messages
    ]

    // Get response from Groq
    const completion = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || 'llama3-8b-8192',
      messages: groqMessages,
      max_tokens: parseInt(process.env.GROQ_MAX_TOKENS || '1000'),
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'
    console.log('Groq response received')

    return NextResponse.json({ response })

  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Failed to get response from Groq AI' },
      { status: 500 }
    )
  }
} 