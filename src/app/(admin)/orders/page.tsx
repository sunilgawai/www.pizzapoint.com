import BreadCrumb from '@/components/common/breadcrumb';
import UsersTable from '@/components/tables/users-table';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { users } from '@/constants/data';
import { Plus } from 'lucide-react';
import React from 'react'

const breadcrumbItems = [{ title: "Orders", link: "/dashboard/orders" }];

const Orders = () => {
  return (
    <ScrollArea>
      <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
        <div className="flex items-center justify-between space-y-2">
          {/* Breadcrumb  */}
          <BreadCrumb items={breadcrumbItems} />
          <div className="hidden md:flex items-center space-x-2">
            <Button className='text-md'>
              <Plus className='mr-2' />
              New Orders
            </Button>
          </div>
        </div>
        {/* Main Area  */}
        <UsersTable data={users} />
      </div>
    </ScrollArea>
  )
}

export default Orders;