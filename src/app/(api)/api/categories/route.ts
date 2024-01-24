import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma?.category.findMany();
    return new NextResponse(JSON.stringify({ categories }), { status: 200 });
  } catch (error) {
    console.error("ERROR: Failed to fetch categories: ", error);
    return new NextResponse(
      JSON.stringify({
        error: "Something went wrong while fetching categories",
      }),
      { status: 500 }
    );
  }
};
