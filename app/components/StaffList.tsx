import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const StaffList = () => {
    return (
        <Table>
            <TableCaption>List of all Staff</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Date of Birth</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Food Allergies</TableHead>
                    <TableHead>Address</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Jill Patel</TableCell>
                    <TableCell>Mar 5, 2018</TableCell>
                    <TableCell>Male</TableCell>
                    <TableCell>NA</TableCell>
                    <TableCell>5816 Sheppard Ave E, Scarborough, ON, M1B 4Z6</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default StaffList