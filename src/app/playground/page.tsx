export const dynamic = 'force-dynamic'

import AIPlayground from '@/components/ui/AIPlayground'

export const metadata = {
  title: 'AI Playground | DevilOfTech',
  description: 'Test AI capabilities live — explain concepts, generate code, and summarize text powered by Claude.',
}

export default function PlaygroundPage() {
  return (
    <section style={{ padding: '80px 0', minHeight: '70vh' }}>
      <div className="container">
        <AIPlayground />
      </div>
    </section>
  )
}
