'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconButtons from '@repo/ui/icon-buttons';
import Input from '@repo/ui/input';
import SubmitButton from '@repo/ui/submit-button';
import { signIn } from 'next-auth/react';

const Signup = () => {
  return (
    <section className="my-[50px] w-sm max-w-2/3 p-8 bg-light-800 dark:bg-dark-200 rounded-lg shadow-[0px_29.36px_58.72px_0px_rgba(0,_0,_0,_0.16)] dark:border-1 dark:border-dark-300">
      <form
        className="flex flex-col gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.currentTarget.email.value;
          const password = e.currentTarget.password.value;

          const res = await fetch('/api/auth/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              password,
            }),
          });

          const data = await res.json();

          if (res.ok) {
            // auto login
            signIn('credentials', {
              email,
              password,
              callbackUrl: '/user',
            });
          } else {
            // show error from data.error
            console.log(data);
          }
        }}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="h2-bold dark:text-light-900">Create an account</div>
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
        <SubmitButton text={'Continue'} onClick={() => {}} />
        <div className="flex gap-2 -my-2 justify-center">
          <div className=" dark:text-light-700 body-regular">
            Have an account?
          </div>
          <Link
            className="text-accent-one cursor-pointer body-regular"
            href="/sign-in"
          >
            Sign in
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

export default Signup;
