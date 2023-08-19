import '@/app/styles/globals.css';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Api Art',
  description: 'Api Art Museum Online Catalogue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className} style={{padding:'16px'}}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
