import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  const slug = params;

  try {
    const post = await prisma.post.findUnique({
      where: slug,
      include: {
        author: true,
        comments: {
          include: {
            author: true,
          },
        },
      },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
