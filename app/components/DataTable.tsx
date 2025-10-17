// import prisma from '@/lib/prisma'
import Image from 'next/image'
import { getJoinedData } from '@/lib/data';

import * as React from "react"

import { cn } from "@/lib/utils"
import Link from 'next/link';

function Table({ className, ...props }: React.ComponentProps<"table">) {
    return (
        <div
            data-slot="table-container"
            className="relative w-full overflow-x-auto"
        >
            <table
                data-slot="table"
                className={cn("w-full caption-bottom text-sm", className)}
                {...props}
            />
        </div>
    )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
    return (
        <thead
            data-slot="table-header"
            className={cn("[&_tr]:border-b", className)}
            {...props}
        />
    )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
    return (
        <tr
            data-slot="table-row"
            className={cn(
                "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
                className
            )}
            {...props}
        />
    )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
    return (
        <th
            data-slot="table-head"
            className={cn(
                "h-10 px-2 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
    return (
        <tbody
            data-slot="table-body"
            className={cn("[&_tr:last-child]:border-0", className)}
            {...props}
        />
    )
}

export function TableCaption({
    className,
    ...props
}: React.ComponentProps<"caption">) {
    return (
        <caption
            data-slot="table-caption"
            className={cn("text-muted-foreground mt-4 text-sm", className)}
            {...props}
        />
    )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
    return (
        <td
            data-slot="table-cell"
            className={cn(
                "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    )
}

export function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
    return (
        <tfoot
            data-slot="table-footer"
            className={cn(
                "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
                className
            )}
            {...props}
        />
    )
}

type Column = {
    key: string;
    title: string;
};

const DataTable = async (props: { columnHeaders: Array<Column> }) => {
    // const children = await prisma.child.findMany();
    const columnsHeader = props.columnHeaders;
    const data = getJoinedData();
    console.log(data);

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columnsHeader.map((columnHeader) => (
                            <TableHead key={columnHeader.key}>{columnHeader.title}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((data) => (
                        <TableRow key={data.childID}>
                            <Link href={`/admin/students/${data.childID}`}><TableCell>{data.fullName}
                                <div className='text-xs opacity-70'>{data.age}</div> </TableCell></Link>
                            <TableCell>{data.guardians.map(g => g?.firstName).join(', ')}</TableCell>
                            <TableCell>{data.healthRecord?.allergyInfo}</TableCell>
                            <TableCell>{data.healthRecord?.dietRestriction}</TableCell>
                            <TableCell>Yes</TableCell>
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

export default DataTable