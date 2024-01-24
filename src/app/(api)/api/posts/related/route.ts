import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  try {
    const relatedPosts = await prisma.post.findMany({
      where: { ...(categoryId && { categoryId }) },
    });

    return new NextResponse(JSON.stringify(relatedPosts), { status: 200 });
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Something went wrong while fetching related posts",
      }),
      { status: 500 }
    );
  }
};
