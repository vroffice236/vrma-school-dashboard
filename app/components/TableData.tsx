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
import Image from 'next/image'

const TableData = async () => {
    const children = await prisma.child.findMany();

    return (
        <>
            <Table>
                <TableCaption>List of all students</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Date of Birth</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Food Allergies</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {children.map((children) => (
                        <TableRow key={children.id}>
                            <TableCell>{[children.firstName, children.middleName, children.lastName].filter(Boolean).join(' ')}</TableCell>
                            <TableCell>{new Date(children.dateOfBirth).toLocaleDateString('en-CA', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}</TableCell>
                            <TableCell>{children.gender}</TableCell>
                            <TableCell>{children.allergyInfo}</TableCell>
                            <TableCell>{children.address}</TableCell>
                            <TableCell><Image alt='Edit' src="/edit.png" width={16} height={16}></Image></TableCell>
                            <TableCell><Image alt='Edit' src="/delete.png" width={16} height={16}></Image></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default TableData