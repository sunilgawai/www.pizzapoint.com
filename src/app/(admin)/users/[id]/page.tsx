"use client";
import BreadCrumb from '@/components/common/breadcrumb';
import CategoryForm from '@/components/forms/category-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react'

const CreateCategories = () => {
    const breadcrumbItems = [
        { title: "User", link: "/dashboard/user" },
        { title: "Create", link: "/dashboard/user/create" },
    ];
    
    return (
        <ScrollArea className='h-full'>
            <div className="flex-1 space-y-4 p-5">
                <BreadCrumb items={breadcrumbItems} />
                <CategoryForm initialData={null} />
            </div>
        </ScrollArea>
    )
}

export default CreateCategories;