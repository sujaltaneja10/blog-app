import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './providers';

const inter = localFont({
  src: './fonts/Inter.woff2',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'by suzie master',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
