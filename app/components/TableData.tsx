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

type Column = {
    key: string;
    title: string;
};

const TableData = async (props: { columnHeaders: Array<Column> }) => {
    const children = await prisma.child.findMany();
    const columnsHeader = props.columnHeaders;

    return (
        <>
            <Table>
                <TableCaption>List of all students</TableCaption>
                <TableHeader>
                    <TableRow>
                        {columnsHeader.map((column) => (
                            <TableHead key={column.key}>{column.title}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {children.map((children) => (
                        <TableRow key={children.id}>
                            <TableCell>{[children.firstName, children.middleName, children.lastName].filter(Boolean).join(' ')}</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>{children.allergyInfo}</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell className='flex gap-2'>
                                <Image alt='Edit' src="/edit.png" width={16} height={16}></Image>
                                <Image alt='Edit' src="/delete.png" width={16} height={16}></Image>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default TableData