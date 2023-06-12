import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saballos Soapbox',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200  transition-all duration-700{inter.className}">
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
        <Footer />
        </body>
    </html>
  )
}
