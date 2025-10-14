"use client";

import React, { useState } from 'react'
import AddStudenForm from '../forms/AddStudenForm';
import Image from 'next/image';

const FormModal = () => {

    const Form = () => {
        return(
            <AddStudenForm />
        )
    }


    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}>
                Add {/* Svg or Img will be added */}
            </button>

            {open &&
                /* Background */
                <div className='w-screen h-screen absolute left-0 top-0 bg-black/25 z-50 flex items-center justify-center'> 
                    {/* Form Box */} 
                    <div className='w-1/2 h-2/3 relative rounded-md bg-white text-black p-5'>
                        <Form />
                        <div className='absolute top-6 right-4 cursor-pointer'> 
                            <Image onClick={() => setOpen(false)} src="/close.png" alt="close" width={30} height={30}/>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default FormModal