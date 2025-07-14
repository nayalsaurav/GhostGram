import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      isAccepting: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    username: string;
    isAccepting: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    isAccepting: boolean;
  }
}
