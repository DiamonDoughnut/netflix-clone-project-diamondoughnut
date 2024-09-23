import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    pages: {
      signIn: "/auth",
    },
    debug: process.env.NODE_ENV === "development",
    adapter: PrismaAdapter(prismadb),
    session: { strategy: "jwt" },
    jwt: {
      secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
  };