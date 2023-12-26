import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';


export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  try {
    // Fetch relatedPosts with the author object included
    const relatedPosts = await prisma.post.findMany({
      where: { ...(categoryId && { categoryId }) },
    });

    // Return the response
    return new NextResponse(JSON.stringify(relatedPosts), { status: 200 });
  } catch (error) {
    // Handle errors and provide details in the response
    console.error('Error fetching related posts:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Something went wrong while fetching related posts' }),
      { status: 500 }
    );
  }
};

