import UsersTable from '@/components/tables/users-table';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { users } from '@/constants/data';
import React from 'react'

const CategoriesPage = () => {
  return (
    <ScrollArea>
      <div className='flex-1 space-y-4 p-4 md:p-8 pt-6'>
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Categories
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <Button>New Category</Button>
          </div>
        </div>

        {/* Main Area  */}
        <UsersTable data={users} />
      </div>
    </ScrollArea>
  )
}

export default CategoriesPage;