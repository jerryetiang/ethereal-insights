import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { getAuthSession } from "../../../lib/authOptions";

// Function to query user schema and return userId based on authorEmail
const getUserIdFromEmail = async (authorEmail: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: authorEmail,
      },
      select: {
        id: true,
      },
    });

    return user?.id || null;
  } catch (error) {
    console.error('Error querying user:', error);
    return null;
  }
};

export const GET = async (req: NextRequest) => {
  // Your existing code remains the same
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    // Fetch comments with the author object included
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: { author: true },
    });

    // Return the response with the included author object
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    // Handle errors and provide details in the response
    console.error('Error fetching comments:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Something went wrong while fetching comments' }),
      { status: 500 }
    );
  }
};


export const POST = async (req: any) => {
  const session = await getAuthSession();
  console.log("session:", session?.user);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'Not Authenticated!' }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const authorEmail = session.user?.email;

    // Get userId based on authorEmail
    const userId = await getUserIdFromEmail(authorEmail || '');

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ error: 'User not found!' }),
        { status: 404 }
      );
    }

    const comment = await prisma.comment.create({
      data: { ...body, authorId: userId },
    });

    return new NextResponse(JSON.stringify({ comment }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Something went wrong!' }),
      { status: 500 }
    );
  }
};
