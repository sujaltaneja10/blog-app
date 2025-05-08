'use client';

import Header from '@repo/ui/header';

import IconButtons from '@repo/ui/icon-buttons';
import { signIn, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <div className="">
      {/* <button onClick={() => document.documentElement.classList.toggle('dark')}>
        Click me
      </button>
      <IconButtons icon="light" onClick={() => {}} height="24px" />
      <div className="text-accent-two dark:text-light-500">hi there</div>
      <Header /> */}
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
