import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons:{
    icon :'logo.png',
  },
  title: 'ReservEats',
  description: 'Book, dine , repeat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className=" min-h-screen w-screen justify-between bg-gray-100">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
        <NavBar/>
        {/* navbar */}
        {children}
        </main>
        </main>
        </body>
    </html>
  )
}

 

 