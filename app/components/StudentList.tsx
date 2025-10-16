import React from 'react'
import TableData from './TableData';
import FormButton from '@/components/ui/FormButton';

export default async function StudentList() {

    // Emergency Contacts include :
        // Sr. No.
        // Name
            // Age (under Name)
        // Parent 1
            // Phone Number (under Parent 1)
        // Parent 2
            // Phone Number (under Parent 2)
        // Food Allergies
        // Medical Conditions
        // Media Release
    const columns = [
        {
            key: "name",
            title: "Full Name"
        },
        {
            key: "parent1",
            title: "Father"
        },
        {
            key: "parent2",
            title: "Mother"
        },
        {
            key: "foodAllergies",
            title: "Food Allergies"
        },
        {
            key: "medicalConditions",
            title: "Medical Conditions"
        },
        {
            key: "mediaRelease",
            title: "Media Release"
        },
        {
            key: "actions",
            title: "Actions"
        },
    ]


    return (
        <>
            <div className="bg-white flex flex-col w-full h-100% rounded-md p-4">
                {/* List Header */}
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-semibold'> All Students </h1> {/* This will become a dropdown for classroom wise */}
                    <div>
                        <FormButton type="create" />
                    </div>
                </div>
                {/* Main List */}
                <TableData columnHeaders={columns}/>
                {/* Pagination */}
            </div>
        </>
    )
}