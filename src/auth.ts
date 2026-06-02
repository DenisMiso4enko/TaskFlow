import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (
          email === process.env.DEMO_EMAIL &&
          password === process.env.DEMO_PASSWORD
        ) {
          return {
            id: "1",
            email: String(email),
            name: "Dev",
            role: process.env.DEMO_ROLE ?? "member",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      // пробрасываем из токена в сессию
      if (session.user) session.user.role = token.role as string | undefined;
      return session;
    },
  },
});
