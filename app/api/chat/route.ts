import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

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

    // Create system message for context
    const systemMessage = {
      role: 'system' as const,
      content: `You are Aaryan Mahipal's AI assistant. Aaryan is a mechanical engineer and product lead who works at the intersection of health, education, and product innovation. He has built AI-powered tools, health tech startups, and renewable energy projects.

Key facts about Aaryan:
- Mechanical Engineer with expertise in product development
- Works in health tech, education, and renewable energy
- Has experience with AI tools and startup development
- Based in New York (Cooper Union graduate)
- Passionate about sustainable design and innovation

Your role is to:
- Help visitors navigate Aaryan's portfolio website
- Answer questions about his background, skills, and projects
- Provide information about his work experience and education
- Guide users to relevant sections of the website
- Be helpful, professional, and knowledgeable about Aaryan's work

Keep responses conversational, informative, and aligned with Aaryan's professional background.`
    }

    // Prepare messages for OpenAI (include system message)
    const openaiMessages = [systemMessage, ...messages]

    const completion = await groq.chat.completions.create({
      model: process.env.GROQ_MODEL || 'llama3-8b-8192',
      messages: openaiMessages,
      max_tokens: parseInt(process.env.GROQ_MAX_TOKENS || '1000'),
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content

    if (!response) {
      return NextResponse.json(
        { error: 'No response from OpenAI' },
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