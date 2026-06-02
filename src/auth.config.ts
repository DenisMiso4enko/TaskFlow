import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const path = request.nextUrl.pathname; // текущий путь

      const isProtected =
        path.startsWith("/dashboard") || path.startsWith("/projects");

      if (isProtected && !isLoggedIn) {
        return false;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
