import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techdigi.id',
  description: 'TechDigi adalah perusahaan teknologi inovatif yang fokus pada pengembangan solusi digital terdepan. Dengan tim berbakat dan berpengalaman, TechDigi menerjemahkan ide-ide canggih menjadi produk teknologi yang memberdayakan bisnis dan menciptakan pengalaman digital yang luar biasa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={montserrat.className}>
        <div className="overflow-x-hidden">
          <Header/>
            {children}
          <Footer/> 
        </div>
      </body>
    </html>
  )
}
