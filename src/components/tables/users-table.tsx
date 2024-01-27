"use client";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { User } from "@/constants/data";
import { useRouter } from "next/navigation";
import { columns } from "./users-column";

interface ProductsClientProps {
  data: User[];
}

const UsersTable: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};

export default UsersTable;