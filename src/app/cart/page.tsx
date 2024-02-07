import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React from 'react'
import { FcLeft } from 'react-icons/fc';

const CartPage = () => {
    return (
        <div className='container h-screen py-4'>
            <div className="flex items-center justify-between my-3">
                <span className="flex items-center">
                    <h1 className="font-semibold text-medium mr-2">
                        Shopping Bag
                    </h1>
                    <p className="text-base">
                        your bag contains {1} item and comes to a total of $700
                    </p>
                </span>
                <div className="flex items-center gap-4">
                    <Button variant="link" size="sm"><FcLeft className='mr-3' /> Shop More</Button>
                    <Button variant="secondary" className='bg-green-600 uppercase' size="sm">go to checkout</Button>
                </div>
            </div>
            <div className="flex-1 h-40 bg-gray-300"></div>
            <div className="flex items-center gap-4 justify-between my-3">
                <Button variant="link" size="sm"><FcLeft className='mr-3' /> Shop More</Button>
                <Button variant="secondary" className='bg-green-600 uppercase' size="sm">go to checkout</Button>
            </div>

            <Separator className='my-4' />

            <div>
                <h1 className="font-semibold">Your Saved For Later Items(1 Item)</h1>
                <div className="flex-1 h-40 bg-gray-300"></div>
            </div>

            <Separator className='my-4' />

            <div>
                <h1 className="font-semibold">Recently viewed items</h1>
                <div className="flex-1 h-40 bg-gray-300"></div>
            </div>

            <Separator className='my-4' />

            <div>
                <h1 className="font-semibold">Our social media</h1>
                <div className="flex-1 h-40 bg-gray-300"></div>
            </div>
        </div>
    )
}

export default CartPage;