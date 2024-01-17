import type { Metadata } from 'next';
import { cnb } from 'cnbuilder';
import './globals.css';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import localFont from 'next/font/local';
import { FlexBox } from '@/components/FlexBox';
import { Masthead } from '@/components/Masthead/Masthead';
import { GlobalFooter } from '@/components/GlobalFooter';

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  style: ['italic','normal'],
  display: 'swap',
  variable: '--font-source-sans',
});

const source_serif = Source_Serif_4({
  subsets: ['latin'],
  style: ['italic','normal'],
  display: 'swap',
  variable: '--font-source-serif',
});

const stanford = localFont({
  src: '../public/fonts/stanford.woff2',
  weight: '300',
  variable: '--font-stanford',
});

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
    <html lang="en" className={cnb(source_sans.variable, source_serif.variable, stanford.variable)}>
      <body className='bg-black-true text-white'>
        <FlexBox justifyContent="between" direction="col" className="min-h-screen relative">
          <Masthead />
          {children}
          <footer>
            <GlobalFooter />
          </footer>
        </FlexBox>
      </body>
    </html>
  );
}
