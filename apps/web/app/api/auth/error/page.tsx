'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get('error');

  useEffect(() => {
    if (!error) return;

    if (error.startsWith('EMAIL_NOT_VERIFIED|')) {
      const [, token] = error.split('|');
      router.replace(`/verify-email?token=${token}`);
    } else {
      // Handle other errors or show message
      console.error('Auth error:', error);
    }
  }, [error, router]);

  return <p>Redirecting...</p>;
}
