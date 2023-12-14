// route.ts

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import ArticleModel from "@/models/articleModel";

// Export a named function for the GET method
export const GET = async () => {
  try {
    await connect();
    const articles = await ArticleModel.find();
    const articlesJSON = JSON.stringify(articles);

    return new NextResponse(articlesJSON, {
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

// Optionally, you can export other methods like POST, PUT, etc.
// export const post = async (request: NextApiRequest, response: NextApiResponse) => {
//   // ...
// };
