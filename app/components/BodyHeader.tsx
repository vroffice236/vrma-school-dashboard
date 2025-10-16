"use client";

import React from 'react'
import Image from 'next/image';

const BodyHeader = () => {
    return (<>
            {/* Title */}
            <div className='w-max flex items-center p-5'>
                <div className='flex gap-3 items-center'>
                    <Image src="/logo.png" alt='Logo' width={40} height={30}></Image>
                    <h1 className='text-4xl font-semibold'>Welcome Jill!</h1>
                </div>
            </div>
            </>
    )
}

export default BodyHeader