import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-screen h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
