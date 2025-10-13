import { type Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import '../globals.css'
import Navbar from '../components/Navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
          <Navbar></Navbar>
          {children}
    </>
  )
}