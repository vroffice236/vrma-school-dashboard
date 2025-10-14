import '../globals.css'
import Navbar from '../components/Navbar'
import { ToastContainer } from "react-toastify"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <ToastContainer position='bottom-right'/>
    </>
  )
}