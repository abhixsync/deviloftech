// Run: npm install @anthropic-ai/sdk
import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const SYSTEM_PROMPTS: Record<string, string> = {
  explain: 'You are a tech educator. Explain the following concept clearly and concisely for a developer audience. Be practical.',
  code: 'You are a coding assistant. Write clean, well-commented code for the following request. Specify the language.',
  summarize: 'You are a tech journalist. Summarize the following in 3 bullet points, focusing on key insights.',
  chat: 'You are a helpful AI assistant focused on tech, coding, and AI topics.',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { prompt, mode } = body

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    if (prompt.length > 1000) {
      return NextResponse.json({ error: 'Prompt must be 1000 characters or less' }, { status: 400 })
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({
        result: 'API key not configured. Add ANTHROPIC_API_KEY to your .env.local file.',
      })
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const systemPrompt = SYSTEM_PROMPTS[mode] ?? SYSTEM_PROMPTS.chat

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: prompt }],
    })

    const textBlock = message.content.find((b) => b.type === 'text')
    const result = textBlock && textBlock.type === 'text' ? textBlock.text : ''

    return NextResponse.json({ result })
  } catch (err) {
    console.error('Playground API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
