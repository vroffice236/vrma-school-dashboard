"use client";

import React, { useState } from 'react'

const FormModal = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}>
                Add {/* Svg or Img will be added */}
            </button>

            {open &&
                <div className='w-screen h-screen absolute left-0 top-0 bg-black opacity-30 z-50 flex items-center justify-center'>
                    <div className='h-auto w-auto bg-white text-black p-5'>
                        Form Modal
                        <div>
                            <button onClick={() => setOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default FormModal