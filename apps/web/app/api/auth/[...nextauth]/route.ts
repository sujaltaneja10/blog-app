/* eslint-disable turbo/no-undeclared-env-vars */
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined
      ) {
        if (!credentials) return null;

        const { email, password } = credentials;

        console.log(email, password);

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) throw new Error('User not signed up');

        // match user
        if (!user.password)
          throw new Error(
            'User does not have a password set. Choose another login method.'
          );

        const hashedPassword = await bcrypt.compare(password, user.password);

        if (!hashedPassword) throw new Error('Password not matched');

        if (!user.emailVerified) {
          // await verify user email
          const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
            expiresIn: '10m',
          });

          throw new Error(`EMAIL_NOT_VERIFIED|${token}`);
        }

        // user verified
        return {
          id: user.id.toString(),
          email: user.email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        // User registered in database
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (!dbUser) {
          // new user - create and verify

          await prisma.user.create({
            data: {
              email: user.email as string,
              username: user.email?.split('@')[0] as string,
              name: user.name,
              image: user.image,
              emailVerified: new Date(),
            },
          });
        } else if (!dbUser.emailVerified) {
          // Existing user and unverified - mark as verified
          await prisma.user.update({
            where: { email: user.email as string },
            data: { emailVerified: new Date(), image: user.image },
          });
        } else {
          // User already exists and verified - login
        }

        return true;
      }

      if (account?.provider === 'credentials') return true;

      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
