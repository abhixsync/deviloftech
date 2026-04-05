import { NextRequest, NextResponse } from 'next/server'

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')
  if (!url) return NextResponse.json({ error: 'url param required' }, { status: 400 })

  const videoId = extractYouTubeId(url)
  if (!videoId) return NextResponse.json({ error: 'Could not extract YouTube video ID' }, { status: 400 })

  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    const res = await fetch(oembedUrl)
    if (!res.ok) return NextResponse.json({ error: 'YouTube video not found' }, { status: 404 })

    const data = await res.json()
    return NextResponse.json({
      youtubeId: videoId,
      title: data.title,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      channelName: data.author_name,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch YouTube metadata' }, { status: 500 })
  }
}
