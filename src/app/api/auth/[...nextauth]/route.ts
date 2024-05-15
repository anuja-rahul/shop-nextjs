// import { mergeAnonymousCartIntoUserCart } from "@/app/lib/db/cart";
// import prisma from "@/app/lib/db/prisma";
// import { env } from "@/app/lib/env";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { Adapter } from "next-auth/adapters";
// import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import authOptions from "./options";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
