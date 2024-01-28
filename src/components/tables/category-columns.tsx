"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./users-cell-action";
import { User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export const category_columns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ cell }) => {
            // @ts-ignore
            console.log("image", cell.getValue())
            return <Image src={"/" + cell.getValue() as string} alt="category image" width={60} height={40} />
        },
    },
    {
        accessorKey: "name",
        header: "NAME",
    },
    {
        accessorKey: "status",
        header: "STATUS",
        cell: ({ cell }) => (
            <div>{cell.getValue() ? "Active" : "Inactive"}</div>
        ),
    },
    {
        id: "actions",
        header: "Action",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];