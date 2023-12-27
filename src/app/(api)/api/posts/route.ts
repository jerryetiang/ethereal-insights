import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    // Fetch posts with the author object included
    const posts = await prisma.post.findMany({include: {author: true}});

    // Return the response with the included author object
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    // Handle errors and provide details in the response
    console.error('Error fetching posts:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Something went wrong while fetching posts' }),
      { status: 500 }
    );
  }
};