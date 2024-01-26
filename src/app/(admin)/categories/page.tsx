import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react'

const Categories = () => {
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
        {/* <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4"> */}
        <Table>
          <TableHeader>Categories</TableHeader>
          <TableBody>
            <TableHead>
              <TableHead>
                <TableCell>Category ID</TableCell>
              </TableHead>
              <TableHead>
                <TableCell>Category Name</TableCell>
              </TableHead>
              <TableHead>
                <TableCell>Category Status</TableCell>
              </TableHead>
              <TableHead>
                <TableCell>Action</TableCell>
              </TableHead>
            </TableHead>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Sweet</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button>...</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Sweet</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button>...</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Sweet</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button>...</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Sweet</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>
                <Button>...</Button>
              </TableCell>
            </TableRow>
          </TableBody>
          {/* <TableFooter>Categories footer</TableFooter> */}
        </Table>
        {/* </div> */}
      </div>
    </ScrollArea>
  )
}

export default Categories;