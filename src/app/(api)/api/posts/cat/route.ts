import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  try {
    const { category } = params.category;

    const categoryData = await prisma.category.findMany({
      where: {
        title: category as string,
      },
    });

    if (!categoryData) {
      return new NextResponse(JSON.stringify({ error: "Category not found" }), {
        status: 404,
      });
    }

    const posts = await prisma.post.findMany({
      where: {
        categoryId: {},
      },
      include: {
        author: true,
        comments: true,
      },
    });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse(
      JSON.stringify({ error: "Something went wrong while fetching posts" }),
      { status: 500 }
    );
  }
};
