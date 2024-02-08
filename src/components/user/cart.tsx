import React from 'react'
import { Separator } from '../ui/separator';
import CartItem from './cart-item';

const Cart = () => {
    return (
        <div className="flex-1 bg-gray-100">
            <div className="grid grid-cols-6 gap-4 py-2 px-4">
                <h2 className='font-medium font-sans text-gray-700 col-span-2'>Items</h2>
                <h2 className='font-medium font-sans text-gray-700'>Size</h2>
                <h2 className='font-medium font-sans text-gray-700'>Quantity</h2>
                <h2 className='font-medium font-sans text-gray-700'>Availability</h2>
                <h2 className='font-medium font-sans text-gray-700 text-right'>Order Value</h2>
            </div>
            <Separator />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}

export default Cart;