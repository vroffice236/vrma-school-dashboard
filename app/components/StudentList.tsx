import React from 'react'
import prisma from '@/lib/prisma'
import TableData from './TableData';
import FormModal from '@/components/ui/FormModal';

export default async function StudentList() {

    // const columns = [
    //     {
    //         key: "name",
    //         title: "Name"
    //     },
    //     {
    //         key: "dob",
    //         title: "Date of Birth"
    //     },
    //     {
    //         key: "name",
    //         title: "Gender"
    //     },
    //     {
    //         key: "name",
    //         title: "Food Allergies"
    //     },
    //     {
    //         key: "name",
    //         title: "Name"
    //     },
    // ]


    return (
        <>
            <div className="bg-yellow-50 flex flex-col rounded-b-md p-4 m-2">
                {/* List Header */}
                <div className='flex justify-between'>
                    <h1 className='lg'> All Students </h1> {/* This will become a dropdown for classroom wise */}
                    <div>
                            <FormModal></FormModal>
                        </div>{/* Image for Add new */}
                </div>
                {/* Main List */}
                <TableData />
                {/* Pagination */}
            </div>
        </>
    )
}