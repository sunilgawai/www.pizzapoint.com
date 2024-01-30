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
            return <Image src={"/" + cell.getValue() as string} alt="category image" width={60} height={60} />
        },
    },
    {
        accessorKey: "name",
        header: "NAME",
        cell({ renderValue }) {
            return <div className="font-semibold text-sm ">{renderValue<string>()}</div>
        },
    },
    {
        accessorKey: "isActive",
        header: "STATUS",
        cell: ({ cell }) => {
            console.log("STATUS", cell.getValue())
            // return <div>{cell.getValue() ? "Active" : "Inactive"}</div>
            return cell.getValue() ? <div className="bg-green-500 text-white font-semibold py-1 px-4 rounded-md text-center w-fit">Active</div> : <div className="bg-red-500 text-white font-semibold py-1 px-2 rounded-md text-center w-fit">Disabled</div>
        },
    },
    {
        id: "actions",
        header: "Action",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];