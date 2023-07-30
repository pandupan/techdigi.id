import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techdigi.id',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="overflow-x-hidden">
          <Header/>
            {children}
          <Footer/> 
        </div>
      </body>
    </html>
  )
}
