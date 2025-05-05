'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconButtons from '@repo/ui/icon-buttons';
import Input from '@repo/ui/input';
import SubmitButton from '@repo/ui/submit-button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Signin = () => {
  const router = useRouter();

  return (
    <section className="my-[50px] w-sm max-w-2/3 p-8 bg-light-800 dark:bg-dark-200 rounded-lg shadow-[0px_29.36px_58.72px_0px_rgba(0,_0,_0,_0.16)] dark:border-1 dark:border-dark-300">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.currentTarget.email.value;
          const password = e.currentTarget.password.value;
          const result = await signIn('credentials', {
            email,
            password,
            callbackUrl: '/user',
          });

          if (result?.error?.split('|')[0] === 'EMAIL_NOT_VERIFIED') {
            router.push(`/verify-email?email=${result?.error?.split('|')[1]}`);
          } else if (result?.ok) {
            router.push('/');
          } else {
            console.error('Login failed:', result?.error);
          }
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="h2-bold dark:text-light-900">Sign in</div>
            <div className="para-regular dark:text-light-400">
              to continue to BlogApp
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </div>
        </div>
        <Input
          icon={false}
          fullWidth={true}
          label={'Email address'}
          type={'email'}
        />
        <Input
          icon={false}
          fullWidth={true}
          label={'Password'}
          type={'password'}
        />
        <Link
          href={'/forgot-password'}
          className="-mb-1 -mt-4 text-accent-blue text-right body-regular w-fit self-end"
        >
          Forgot Password?
        </Link>
        <SubmitButton text={'Continue'} onClick={() => {}} />
        <div className="flex gap-2 -mt-2 -mb-2 justify-center">
          <div className=" dark:text-light-700 body-regular">No account?</div>
          <Link
            className="text-accent-one cursor-pointer body-regular"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
        <div className="flex items-center gap-4 w-full -mb-1">
          <div className="h-px flex-1 bg-light-400 dark:bg-dark-400" />
          <span className="text-sm text-light-500 dark:text-dark-500">or</span>
          <div className="h-px flex-1 bg-light-400 dark:bg-dark-400" />
        </div>
        <IconButtons
          icon={'google'}
          height="40px"
          text={'Login with Google'}
          onClick={() => {
            signIn('google', { callbackUrl: '/user' });
          }}
        />
      </form>
    </section>
  );
};

export default Signin;
