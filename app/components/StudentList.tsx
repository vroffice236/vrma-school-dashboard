import React from 'react'
import FormButton from '@/components/ui/FormButton';
import DataTable from './DataTable';

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
            key: "info",
            title: "Info"
        },
        {
            key: "guardians",
            title: "Guardians"
        },
        {
            key: "foodAllergies",
            title: "Food Allergies"
        },
        {
            key: "dietRestrictions",
            title: "Diet Restrictions"
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
                <DataTable columnHeaders={columns}/>
                {/* Pagination */}
            </div>
        </>
    )
}