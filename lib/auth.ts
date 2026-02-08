import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { connectToDatabase } from "./database";
import bcrypt from "bcryptjs";
import User from "@/model/user";
import { generateFromEmail } from "unique-username-generator";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password) {
          throw new Error("Please provide both username and password.");
        }

        if (credentials.password.length < 6) {
          throw new Error("Password must be at least 6 characters.");
        }

        await connectToDatabase();

        const user = await User.findOne({
          username: credentials.username.toLowerCase(),
        });
        if (!user) {
          throw new Error("No user found with the given username.");
        }

        if (user.authProvider === "google") {
          throw new Error(
            "This account was created with Google. Please sign in with Google instead."
          );
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Incorrect password.");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          username: user.username,
          isAccepting: user.isAccepting,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        return true;
      }

      try {
        await connectToDatabase();

        let dbUser = await User.findOne({ email: user.email });

        if (!dbUser) {
          const username = generateFromEmail(user.email!, 4);
          dbUser = await User.create({
            email: user.email,
            username,
            isAccepting: true,
            password: await bcrypt.hash(crypto.randomUUID(), 10),
            authProvider: "google",
          });
        }

        user.id = dbUser._id.toString();
        user.username = dbUser.username;
        user.isAccepting = dbUser.isAccepting;
      } catch (err) {
        console.error("OAuth Sign-In Error:", err);
        return false;
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.isAccepting = user.isAccepting;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.isAccepting = token.isAccepting as boolean;
      }
      return session;
    },

    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },

  pages: {
    signIn: "/signin",
    error: "/signin",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
