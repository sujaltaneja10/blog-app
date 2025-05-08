'use client';

import IconButtons from '@repo/ui/icon-buttons';
import SubmitButton from '@repo/ui/submit-button';
import Link from 'next/link';
import { redirect } from 'next/navigation';
// import React, { useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { generateToken } from '@/lib/token';
// import prisma from '@/lib/prisma';
// import { Resend } from 'resend';

const VerifyEmail = () => {
  return (
    <form
      className="my-[50px] w-sm max-w-2/3 p-8 flex flex-col gap-6 bg-light-800 dark:bg-dark-200 rounded-lg shadow-[0px_29.36px_58.72px_0px_rgba(0,_0,_0,_0.16)] dark:border-1 dark:border-dark-300"
      onSubmit={async (e) => {
        e.preventDefault();
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="h2-bold dark:text-light-900">Check your email</div>
          <div className="para-regular dark:text-light-400">
            We sent you an email verification link on your email
          </div>
        </div>
      </div>
      <SubmitButton text={'Resend'} onClick={() => {}} />
      <Link href={'/sign-in'}>
        <IconButtons
          icon={'northWest'}
          text={'Back to signin'}
          height="16px"
          onClick={() => {
            redirect('/sign-in');
          }}
        />
      </Link>
    </form>
  );
};

export default VerifyEmail;
