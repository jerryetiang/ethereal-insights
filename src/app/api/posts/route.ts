import prisma from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany()
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 })
  }
}
