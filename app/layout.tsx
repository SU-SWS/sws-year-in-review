import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Masthead } from '@/components/Masthead/Masthead'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

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
  )
}
