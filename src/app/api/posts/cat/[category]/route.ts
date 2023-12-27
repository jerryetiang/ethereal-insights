import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: any, { params }: any) => {
  const categorySlug = params.category;

  try {
    // Check if category exists in db by querying the category model and comparing the slug with categorySlug
    // If true, return the posts[] array in this category

    // The category model

    // model Category {
    //     id       String @id @default(cuid()) @map("_id")
    //     slug     String
    //     title    String
    //     subTitle String
    //     posts    Post[]
    //   }

    // The post model

    // model Post {
    //     id         String    @id @default(cuid()) @map("_id")
    //     slug       String    @unique
    //     title      String
    //     body       String
    //     image      String?
    //     author     User      @relation(fields: [authorId], references: [id])
    //     authorId   String
    //     comments   Comment[]
    //     createdAt  DateTime  @default(now())
    //     Category   Category? @relation(fields: [categoryId], references: [id])
    //     categoryId String?
    //   }

    // Check if the category exists in the database by querying the Category model
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

    // If the category exists, fetch posts in that category
    const posts = await prisma.post.findMany({
      where: {
        categoryId: category.id,
      },
      include: {
        author: true,
        comments: true,
      },
    });

    // Include category title and subtitle in the response
    const responseData = {
      category: {
        title: category.title,
        subtitle: category.subTitle,
        slug: category.slug
      },
      posts,
    };

    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Return a 500 response for other errors
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
