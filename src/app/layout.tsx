import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'Instagram',
  description: 'Connect with people, friends and family',
  icons:"https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png",
  openGraph:{
    images:"https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png",
  },
  assets:"https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png",


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
