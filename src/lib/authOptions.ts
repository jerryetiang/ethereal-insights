import { PrismaAdapter } from "@auth/prisma-adapter";
import { User, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/db";
import { JWT } from "next-auth/jwt";

interface CallbackParams {
  token: JWT;
  user?: User;
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }: CallbackParams) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
