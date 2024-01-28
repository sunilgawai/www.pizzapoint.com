"use client";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { category_columns } from "./category-columns";

interface ICategory {
    id: string,
    image: string,
    name: string,
    isActive: boolean
}
interface CategoryClientProps {
    data: ICategory[];
}

const CategoryTable: React.FC<CategoryClientProps> = ({ data }) => {
    const router = useRouter();

    return (
        <>
            <div className="flex items-start justify-between">
            </div>
            <Separator />
            <DataTable searchKey="name" columns={category_columns} data={data} />
        </>
    );
};

export default CategoryTable;