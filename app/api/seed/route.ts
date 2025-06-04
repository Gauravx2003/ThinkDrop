import { NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/write-client'
import { v4 as uuidv4 } from 'uuid'

export async function GET() {
  const authors = Array.from({ length: 10 }).map((_, i) => ({
    _type: 'author',
    _id: `author-${uuidv4()}`, // ✅ required by createIfNotExists
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    username: `user${i + 1}`,
    bio: `This is the bio for user ${i + 1}.`,
    image: `https://i.pravatar.cc/150?img=${i + 1}`,
  }))

  try {
    const transaction = writeClient.transaction()

    authors.forEach(author => {
      transaction.createIfNotExists(author)
    })

    const result = await transaction.commit()
    return NextResponse.json({ success: true, result })
  } catch (err: any) {
    console.error('Error seeding users:', err.message || err)
    return NextResponse.json({ success: false, error: err.message || err }, { status: 500 })
  }
}
