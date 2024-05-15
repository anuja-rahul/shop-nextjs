// import { mergeAnonymousCartIntoUserCart } from "@/app/lib/db/cart";
// import prisma from "@/app/lib/db/prisma";
// import { env } from "@/app/lib/env";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { Adapter } from "next-auth/adapters";
// import Google from "next-auth/providers/google";
// import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions as options } from "./options";
// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma) as Adapter,
//   providers: [
//     GoogleProvider({
//       clientId: env.GOOGLE_CLIENT_ID,
//       clientSecret: env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     session({ session, user }) {
//       session.user.id = user.id;
//       return session;
//     },
//   },
//   events: {
//     async signIn({ user }) {
//       await mergeAnonymousCartIntoUserCart(user.id);
//     },
//   },
// };

const handler = NextAuth(options);
export const authOptions = options;
export { handler as GET, handler as POST };
