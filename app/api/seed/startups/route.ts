import { writeClient } from '@/sanity/lib/write-client'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

// Helper to fetch author IDs
async function getAuthorIds() {
  const authors = await writeClient.fetch(`*[_type == "author"]{_id}`)
  return authors.map(author => author._id)
}

export async function GET() {
  try {
    const authorIds = await getAuthorIds()

    if (!authorIds.length) {
      return NextResponse.json({ success: false, error: 'No authors found. Seed authors first.' })
    }

    const startups = Array.from({ length: 20 }).map((_, i) => {
      const authorId = authorIds[Math.floor(Math.random() * authorIds.length)]
      return {
        _type: 'startup',
        _id: `startup-${uuidv4()}`,
        title: `Startup ${i + 1}`,
        slug: {
          _type: 'slug',
          current: `startup-${i + 1}`,
        },
        author: {
          _type: 'reference',
          _ref: authorId,
        },
        description: `This is the description for startup ${i + 1}.`,
        views: Math.floor(Math.random() * 1000),
        Category: ['Technology', 'Gaming', 'E-commerce', 'Media'][i % 4],
        image: `https://source.unsplash.com/random/400x300?sig=${i + 1}`,
        pitch: {
          _type: 'markdown',
          children: [],
          value: `## Pitch\n\nThis is a **sample pitch** for Startup ${i + 1}.`,
        },
      }
    })

    const tx = writeClient.transaction()
    startups.forEach(startup => {
      tx.createIfNotExists(startup)
    })
    const result = await tx.commit()

    return NextResponse.json({ success: true, result })
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || err },
      { status: 500 }
    )
  }
}
