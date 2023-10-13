import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eunyoung portfolio',
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
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/info">Info</Link></li>
          <li><Link href="/history">Job History</Link></li>
        </ul>
        {children}
      </body>
    </html>
  )
}
