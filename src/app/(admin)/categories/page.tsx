import BreadCrumb from '@/components/common/breadcrumb';
import CategoryTable from '@/components/tables/category-table';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { siteConfig } from '@/config/site';
import { Plus } from "lucide-react";
import React from 'react'

const breadcrumbItems = [{ title: "Categories", link: "/dashboard/categories" }];

const CategoriesPage = () => {
  return (
    <ScrollArea>
      <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
        <div className="flex items-center justify-between space-y-2">
          {/* Breadcrumb  */}
          <BreadCrumb items={breadcrumbItems} />
          <div className="hidden md:flex items-center space-x-2">
            <Button className='text-md'>
              <Plus className='mr-2' />
              New Category
            </Button>
          </div>
        </div>
        {/* Main Area  */}
        <CategoryTable data={siteConfig.categories_list} />
      </div>
    </ScrollArea>
  )
}

export default CategoriesPage;