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
          username: credentials.username,
          provider: "credentials",
        });
        if (!user) {
          throw new Error("No user found with the given username.");
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
          username: user.username,
          isAccepting: user.isAccepting,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await connectToDatabase();

          let dbUser = await User.findOne({
            email: user.email,
          });

          const username = generateFromEmail(user.email!, 4);

          if (!dbUser) {
            dbUser = await User.create({
              email: user.email,
              username,
              isAccepting: true,
              password: crypto.randomUUID(),
            });
          }

          user.id = dbUser._id.toString();
          user.username = dbUser.username;
          user.isAccepting = dbUser.isAccepting;
        } catch (err) {
          console.error("Google Sign-In Error:", err);
          return false;
        }
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
