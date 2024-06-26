import { mergeAnonymousCartIntoUserCart } from "@/app/lib/db/cart";
import prisma from "@/app/lib/db/prisma";
import { env } from "@/app/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
// import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      await mergeAnonymousCartIntoUserCart(user.id);
    },
  },
};

// Use it in server contexts
// const session = await getServerSession(authOptions);
// export default session;

// export default authOptions;
