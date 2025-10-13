"use client";

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
            <div className='flex gap-8'>
                <div>Logo</div>
                <Link href='/'><div>Home</div></Link>
                <Link href='/students'><div>Students</div></Link>
                <Link href='/staff'><div>Staff</div></Link>
                <div>Electives</div>
            </div>
            <UserButton />
        </div>
    )
}

export default Navbar