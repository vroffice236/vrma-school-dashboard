import '../globals.css'
import Navbar from '../components/Navbar'
import { ToastContainer } from "react-toastify"
import BodyHeader from '../components/BodyHeader'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className='flex flex-col w-full m-2'>
        <BodyHeader></BodyHeader>
        {children}
      </div>
      <ToastContainer position='bottom-right' />
    </>
  )
}