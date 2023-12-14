import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import connect from "@/utils/db";
import ArticleModel from "@/models/articleModel";

export const GET = async (request: NextApiRequest) => {
  try {
    await connect();
    const articles = await ArticleModel.find();
    const usersJSON = JSON.stringify(articles);

    return new NextResponse(usersJSON, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
