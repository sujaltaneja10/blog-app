import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="dark:bg-dark-100 flex min-h-screen w-full items-center justify-center">
      <section
        className="relative flex min-h-screen w-full lg:w-[80%] items-center justify-center bg-cover bg-center bg-no-repeat
  bg-[url('/auth-light.png')] dark:bg-[url('/auth-dark.png')]"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-white/60 dark:hidden" />
        <div className="relative z-10 w-full flex items-center justify-center">
          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;
