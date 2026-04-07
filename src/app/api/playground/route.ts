import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPTS: Record<string, string> = {
  explain:   'You are a tech educator. Explain the following concept clearly and concisely for a developer audience. Be practical.',
  code:      'You are a coding assistant. Write clean, well-commented code for the following request. Specify the language.',
  summarize: 'You are a tech journalist. Summarize the following in 3 bullet points, focusing on key insights.',
  chat:      'You are a helpful AI assistant focused on tech, coding, and AI topics.',
}

// Groq — free tier, OpenAI-compatible API
// Free models: llama-3.3-70b-versatile, llama-3.1-8b-instant, gemma2-9b-it
async function callGroq(prompt: string, systemPrompt: string): Promise<string> {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 1024,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
    }),
  })
  if (!res.ok) throw new Error(`Groq error: ${res.status}`)
  const data = await res.json()
  return data.choices?.[0]?.message?.content ?? ''
}

// Google Gemini — free tier via AI Studio
// Free models: gemini-2.0-flash-lite, gemini-1.5-flash
async function callGemini(prompt: string, systemPrompt: string): Promise<string> {
  const model = 'gemini-2.0-flash-lite'
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 1024 },
    }),
  })
  if (!res.ok) throw new Error(`Gemini error: ${res.status}`)
  const data = await res.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
}

// Anthropic Claude — paid but supported if key exists
async function callAnthropic(prompt: string, systemPrompt: string): Promise<string> {
  const Anthropic = (await import('@anthropic-ai/sdk')).default
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })
  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    system: systemPrompt,
    messages: [{ role: 'user', content: prompt }],
  })
  const block = message.content.find(b => b.type === 'text')
  return block?.type === 'text' ? block.text : ''
}

export async function POST(req: NextRequest) {
  try {
    const { prompt, mode } = await req.json()

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }
    if (prompt.length > 1000) {
      return NextResponse.json({ error: 'Prompt must be 1000 characters or less' }, { status: 400 })
    }

    const systemPrompt = SYSTEM_PROMPTS[mode as string] ?? SYSTEM_PROMPTS.chat

    // Auto-select provider based on available keys
    if (process.env.GROQ_API_KEY) {
      const result = await callGroq(prompt, systemPrompt)
      return NextResponse.json({ result, provider: 'Groq' })
    }

    if (process.env.GEMINI_API_KEY) {
      const result = await callGemini(prompt, systemPrompt)
      return NextResponse.json({ result, provider: 'Gemini' })
    }

    if (process.env.ANTHROPIC_API_KEY) {
      const result = await callAnthropic(prompt, systemPrompt)
      return NextResponse.json({ result, provider: 'Claude' })
    }

    return NextResponse.json({
      result: 'No AI provider configured. Add GROQ_API_KEY (free), GEMINI_API_KEY (free), or ANTHROPIC_API_KEY to your .env.local file.',
    })
  } catch (err) {
    console.error('Playground API error:', err)
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 })
  }
}
