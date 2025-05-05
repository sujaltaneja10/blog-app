/* eslint-disable turbo/no-undeclared-env-vars */
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export default async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token') as string;

  const tokenVerified = jwt.verify(token, process.env.JWT_SECRET!);

  if (!token || !tokenVerified) {
    return NextResponse.json(
      { error: 'Invalid verification token' },
      { status: 400 }
    );
  }

  const dbToken = await prisma.verificationToken.findUnique({
    where: { token },
  });

  if (!dbToken || dbToken.expires < new Date()) {
    return NextResponse.json(
      { error: 'Token expired. Resend the verification email' },
      { status: 400 }
    );
  }

  await prisma.user.update({
    where: { email: dbToken.email },
    data: { emailVerified: new Date() },
  });

  await prisma.verificationToken.delete({
    where: { token },
  });

  return NextResponse.json({
    message: 'Email verified',
  });
}
