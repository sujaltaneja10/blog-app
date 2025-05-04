'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconButtons from '@repo/ui/icon-buttons';
import Input from '@repo/ui/input';
import SubmitButton from '@repo/ui/submit-button';

const Signin = () => {
  return (
    <section className="max-w-2/3 p-8 flex flex-col gap-8 bg-light-800 dark:bg-dark-200 rounded-lg w-md shadow-[0px_29.36px_58.72px_0px_rgba(0,_0,_0,_0.16)] dark:border-1 dark:border-dark-300">
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
      <Link href={'/'} className="-mb-2 -mt-6 text-accent-blue text-right">
        Forgot Password?
      </Link>
      <SubmitButton text={'Continue'} onClick={() => {}} />
      <div className="flex gap-2 -my-3 justify-center">
        <div className=" dark:text-light-700 para-regular">No account?</div>
        <Link className="text-accent-one cursor-pointer para-regular" href="/">
          Sign up
        </Link>
      </div>
      <div className="flex items-center gap-4 w-full -mb-3">
        <div className="h-px flex-1 bg-light-400 dark:bg-dark-400" />
        <span className="text-sm text-light-500 dark:text-dark-500">or</span>
        <div className="h-px flex-1 bg-light-400 dark:bg-dark-400" />
      </div>
      <IconButtons
        icon={'google'}
        height="40px"
        text={'Login with Google'}
        onClick={() => {}}
      />
    </section>
  );
};

export default Signin;
