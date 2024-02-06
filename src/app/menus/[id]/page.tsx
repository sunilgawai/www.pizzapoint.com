import Image from 'next/image';
import React from 'react'
import pizzaImg from "@/assets/pizza.png";
import { Separator } from '@/components/ui/separator';
const ProductDetailsPage = () => {
    return (
        <div className='container h-screen mt-8'>
            <div className="grid grid-cols-2 gap-4 place-content-center">
                <div className="w-full flex justify-center itemce-center">
                    <Image className='w-1/2' src={pizzaImg} alt='pizza' />
                </div>
                <div className='col-span-1 border border-1'>
                    <h1 className="text-2xl font-semibold font-serif">
                        Special Pizza
                    </h1>
                    <p className="font-normal text-base font-sans">
                        This is description of this product
                    </p>
                </div>
            </div>
            <Separator className='my-8' />
        </div>
    )
}

export default ProductDetailsPage;