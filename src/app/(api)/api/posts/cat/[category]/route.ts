import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  const categorySlug = params.category;

  try {
    const category = await prisma.category.findFirst({
      where: {
        slug: categorySlug,
      },
    });

    if (!category) {
      return new NextResponse(
        JSON.stringify({ message: "Category not found" }),
        { status: 404 }
      );
    }

    const posts = await prisma.post.findMany({
      where: {
        categoryId: category.id,
      },
      include: {
        author: true,
        comments: true,
      },
    });

    const responseData = {
      category: {
        title: category.title,
        subtitle: category.subTitle,
        slug: category.slug,
      },
      posts,
    };

    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
