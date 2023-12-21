import {PrismaAdapter} from "@auth/prisma-adapter"
import NextAuth, { User, getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import prisma from "@/lib/db"
import { JWT } from "next-auth/jwt";

interface CallbackParams {
  token: JWT;
  user?: User;
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID|| '',
      clientSecret: process.env.GITHUB_SECRET|| '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({token, user}: CallbackParams) {
      // Include the user ID in the token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST};