'use client';

import React from 'react';
import IconButtons from '@repo/ui/icon-buttons';
import SubmitButton from '@repo/ui/submit-button';
import Input from '@repo/ui/input';
import Link from 'next/link';

const ForgotPassword = () => {
  return (
    <form
      className="my-[50px] w-sm max-w-2/3 p-8 flex flex-col gap-6 bg-light-800 dark:bg-dark-200 rounded-lg shadow-[0px_29.36px_58.72px_0px_rgba(0,_0,_0,_0.16)] dark:border-1 dark:border-dark-300"
      onSubmit={() => {}}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="h2-bold dark:text-light-900">Forgot Password?</div>
          <div className="para-regular dark:text-light-400">
            No worries, we will send you reset instructions
          </div>
        </div>
      </div>
      <Input
        icon={false}
        fullWidth={true}
        label={'Email address'}
        type={'email'}
        placeholder={false}
      />
      <SubmitButton text={'Continue'} onClick={() => {}} />
      <Link href={'/sign-in'}>
        <IconButtons
          icon={'northWest'}
          text={'Back to signin'}
          height="16px"
          onClick={() => {}}
        />
      </Link>
    </form>
  );
};

export default ForgotPassword;
