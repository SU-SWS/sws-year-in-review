import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Masthead } from '@/components/Masthead/Masthead';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stanford Web Services | Year in Review',
  description: 'Stanford Web Services Year in Review website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Masthead />
        {children}
      </body>
    </html>
  );
}
