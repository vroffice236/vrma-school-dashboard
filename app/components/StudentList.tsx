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
import prisma from '@/lib/prisma'

export default async function StudentList() {

    const children = await prisma.child.findMany();

    console.log(children);

    return (
        <Table>
            <TableCaption>List of all students</TableCaption>
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
                {children.map((children) => (
                    <TableRow key={children.id}>
                        <TableCell>{[children.firstName, children.middleName,children.lastName].filter(Boolean).join(' ')}</TableCell>
                        <TableCell>{new Date(children.dateOfBirth).toLocaleDateString('en-CA', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}</TableCell>
                        <TableCell>{children.gender}</TableCell>
                        <TableCell>{children.allergyInfo}</TableCell>
                        <TableCell>{children.address}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}