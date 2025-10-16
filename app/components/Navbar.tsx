"use client";

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const NavItem = (props :{name:string; link?:string;}) => {
    const href = props.link ? props.link : "/admin/"+props.name.toLowerCase();
    
    return (
        <Link href={href}>
        <div className='p-1 pl-2 hover:bg-brand-secondary/10 rounded-sm'>{props.name}</div>
        </Link>
    )
}

const Navbar = () => {
    return (
        <div className="w-70 h-screen bg-white text-brand-secondary flex flex-col px-4 rounded-e-2xl">
            {/* Nav Header */}
            <div className='flex items-center gap-4 py-4'>
                <div className='h-full flex'>
                    <UserButton />
                </div>
                <div className='flex flex-col gap-0'>
                    <h1 className='text-xl font-semibold'>Jill Patel</h1>
                    <div><span className='text-sm'>
                        Admin
                        </span>
                        </div>
                </div>
            </div>
            <div className='flex flex-col gap-1 py-2'>
                <NavItem name="Home" link='/admin'/>
                <NavItem name="Students"/>
                <NavItem name="Parents"/>
                <NavItem name="Staff"/>
                <NavItem name="Electives"/>
                <NavItem name="Events"/>
                <NavItem name="Announcements"/>
                <NavItem name="Kitchen"/>
            </div>
        </div>
    )
}

export default Navbar